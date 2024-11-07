"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Spinner,
} from "@nextui-org/react";

import { Todo } from "@/types";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TodosTable({ todos }: { todos: Todo[] }) {
  const [newTodoInput, setNewTodoInput] = useState<string>("");
  const [todoAddEnable, setTodoAddEnable] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const TodoRow = ({ todo }: { todo: Todo }) => (
    <TableRow key={todo.id}>
      <TableCell>{todo.id.slice(0, 4).toUpperCase()}</TableCell>
      <TableCell>{todo.title}</TableCell>
      <TableCell>{todo.is_done ? "✅" : "❌"}</TableCell>
      <TableCell>{`${todo.created_at}`}</TableCell>
    </TableRow>
  );

  const DisabledTodoAddButton = () => {
    return (
      <Popover placement="top" showArrow={true}>
        <PopoverTrigger>
          <Button
            size="md"
            color={newTodoInput !== "" ? "warning" : "default"}
            className="h-14"
          >
            추가
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2">
            <div className="text-small font-bold">☢️</div>
            <div className="text-tiny">할 일을 입력해주세요</div>
          </div>
        </PopoverContent>
      </Popover>
    );
  };

  const addTodoHandler = async (title: string) => {
    if (todoAddEnable === false) {
      return;
    }
    setIsLoading(true);
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/todos`, {
      method: "POST",
      body: JSON.stringify({ title }),
      cache: "no-store",
    });
    setNewTodoInput("");
    setIsLoading(false);
    router.refresh();
  };

  return (
    <>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 ">
        <Input
          type="text"
          label="새로운 할 일"
          className="flex-1"
          value={newTodoInput}
          onChange={(e) => {
            setNewTodoInput(e.target.value);
            setTodoAddEnable(e.target.value !== "");
          }}
        />

        <input
          type="text"
          value={newTodoInput}
          onChange={(e) => {
            setNewTodoInput(e.target.value);
            setTodoAddEnable(e.target.value !== "");
          }}
        />

        {todoAddEnable ? (
          <Button
            size="md"
            color={newTodoInput !== "" ? "warning" : "default"}
            className="h-14"
            onPress={async () => await addTodoHandler(newTodoInput)}
          >
            추가
          </Button>
        ) : (
          DisabledTodoAddButton()
        )}
      </div>
      {isLoading && <Spinner color="warning" size="sm" />}

      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>아이디</TableColumn>
          <TableColumn>할 일</TableColumn>
          <TableColumn>완료 여부</TableColumn>
          <TableColumn>생성일</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"데이터가 없습니다."}>
          {todos && todos.map((todo: Todo) => TodoRow({ todo }))}
        </TableBody>
      </Table>
    </>
  );
}
