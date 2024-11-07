import { NextRequest, NextResponse } from "next/server";
import { addTodo, fetchTodos } from "@/data/fireEntity.js";

/// 모든 할 일 가져오기
export async function GET(request: NextRequest) {
  const todos = await fetchTodos();
  const response = {
    message: "할 일 목록 조회 성공",
    data: todos,
  };

  return NextResponse.json(response, { status: 200 });
}

/// 할 일 추가
export async function POST(request: NextRequest) {
  const { title } = await request.json();

  if (title === undefined) {
    const errorMessage = {
      message: "제목이 없습니다. 제목을 작성해 주세요.",
    };

    return NextResponse.json(errorMessage, { status: 422 });
  }

  const newTodo = await addTodo({ title });

  const response = {
    message: "할 일 추가 성공",
    data: newTodo,
  };
  return NextResponse.json(response, { status: 201 });
}
