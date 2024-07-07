import { sleep } from "@/lib/utils/sleep";
import { TodoContainer } from "./_source/components";

export default async function Home() {
  await sleep(1000);

  return (
    <main>
      <TodoContainer />
    </main>
  );
}
