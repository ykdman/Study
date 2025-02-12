import { title } from "@/components/primitives";
import TodosTable from "@/components/todos-table";

async function fetchTodosApiCall() {
  const response = await fetch(`${process.env.BASE_URL}/todos/`, {
    cache: "no-store",
  });
  return await response.json();
}

export default async function TodosPage() {
  const response = await fetchTodosApiCall();
  return (
    <div className="flex flex-col space-y-8">
      <h1 className={title()}>Todos</h1>
      <TodosTable todos={response.data ?? []} />
    </div>
  );
}
