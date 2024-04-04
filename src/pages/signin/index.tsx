import { useLogin } from "@/hooks";
import { gauthUri } from "@/libs";

function SignInPage() {
  useLogin()
  return (
    <div>
      <button onClick={() => window.location.href = gauthUri}>GAuth Button</button>
    </div>
  );
}

export default SignInPage;
