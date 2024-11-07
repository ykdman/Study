import { Counter } from "@/components/counter";
import { title } from "@/components/primitives";

export default function CounterPage() {
  return (
    <div className="flex flex-col space-y-16">
      <h1 className={title()}>Counter</h1>
      <Counter initialCount={10}>
        <h1>서버 컴포넌트임</h1>
      </Counter>
    </div>
  );
}
