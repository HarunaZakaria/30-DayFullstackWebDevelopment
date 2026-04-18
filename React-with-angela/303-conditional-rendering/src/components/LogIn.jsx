import Button from "./Button";
import Input from "./Input";

export default function LogIn() {
  return (
    <div>
      <Input type="text" placeholder="Your Name" />
      <Input type="password" placeholder="Password" />
      <Button text="Login"/>
    </div>
  );
}
