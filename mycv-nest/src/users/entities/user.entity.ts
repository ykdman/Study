import {
  AfterInsert,
  AfterRemove,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterUpdate,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted User With ID', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Update User with Id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Remove User with ID ', this.id);
  }
}
