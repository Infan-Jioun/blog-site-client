import HomePage from "./Home/Home";
import { cookies } from "next/headers";

export default async function Home() {

  return (
    <div>
      <HomePage />
    </div>
  );
}
