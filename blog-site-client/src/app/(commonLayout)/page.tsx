import { userService } from "@/services/user.service";
import HomePage from "./Home/Home";

export default async function Home() {
  const result = await userService.getSesstion();
  console.log(result?.data);
  return (
    <div>
      <HomePage />
    </div>
  );
}
