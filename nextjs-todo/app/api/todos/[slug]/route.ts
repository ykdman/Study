import { fetchTodoById, deleteTodo, editTodo } from "@/data/fireEntity";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const searchParams = request.nextUrl.searchParams;

  const search = searchParams.get("search");

  const todo = await fetchTodoById(params.slug);
  console.log("todo", todo);
  if (todo === null) {
    return new Response(null, { status: 204 });
  }

  const response = {
    message: "단일 todo 가져오기",
    data: todo,
  };

  return NextResponse.json(response, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const deletedTodo = await deleteTodo(params.slug);

  if (deletedTodo === null) {
    return new Response(null, { status: 204 });
  }

  const response = {
    message: "todo 삭제에 성공 했습니다.",
    data: deletedTodo,
  };

  return NextResponse.json(response, { status: 200 });
}

export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { title, is_done } = await request.json();

  const editedTodo = await editTodo(params.slug, { title, is_done });

  if (editedTodo === null) {
    return new Response(null, { status: 204 });
  }

  const response = {
    message: "단일 todo 업데이트 성공",
    data: editedTodo,
  };

  return NextResponse.json(response, { status: 200 });
}
