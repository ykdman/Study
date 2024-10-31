import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { BadRequestException, NotFoundException } from '@nestjs/common';

describe('AuthService Test', () => {
  let service: AuthService;
  let fakeUsersService: Partial<UsersService>;

  beforeEach(async () => {
    fakeUsersService = {
      find: () => Promise.resolve([]),
      create: (email: string, password: string) =>
        Promise.resolve({ id: 1, email, password } as User),
    };

    const module = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: fakeUsersService,
        },
      ],
    }).compile();

    service = module.get(AuthService);
  });

  it('can create an instance of auth service', async () => {
    expect(service).toBeDefined();
  });

  it('create a new user with a salted and hashed password', async () => {
    const user = await service.signup('asdf@asdf.com', 'asdf');

    expect(user.password).not.toEqual('asdf');

    const [salt, hash] = user.password.split('.');

    expect(salt).toBeDefined();
    expect(hash).toBeDefined();
  });

  it('thrwos an error if user signs up with email that is in user', async () => {
    fakeUsersService.find = () =>
      Promise.resolve([{ id: 1, email: 'test', password: 'test' } as User]);
    await expect(service.signup('asdf@asdf.com', 'asdf')).rejects.toThrow(
      BadRequestException,
    );
  });

  it('throws if signin is called with an unused email', async () => {
    await expect(service.signin('asdg@asd.com', 'passwasd')).rejects.toThrow(
      NotFoundException,
    );
  });

  it('throws if an invalid password is provided', async () => {
    fakeUsersService.find = () =>
      Promise.resolve([
        { email: 'asdasd@nasdqwe.com', password: 'asdqwd' } as User,
      ]);
    await expect(
      service.signin('asdasd@nasdqwe.com', 'password'),
    ).rejects.toThrow(BadRequestException);
  });

  it('returs a user if correct password is provided', async () => {
    fakeUsersService.find = () =>
      Promise.resolve([
        { email: 'asdasd@nasdqwe.com', password: 'asdqwd' } as User,
      ]);

    await expect(service.signin('asdasd@nasdqwe.com', 'asdqwd')).resolves
      .toBeTruthy;
  });
});
