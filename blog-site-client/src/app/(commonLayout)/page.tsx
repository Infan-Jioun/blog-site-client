import { authClient } from "@/lib/auth-client";
import HomePage from "./Home/Home";

export default async function Home() {
  const session = await authClient.getSession();
  console.log("Session in page.tsx:", session);
  return (
    <div>
      <HomePage />
    </div>
  );
}
