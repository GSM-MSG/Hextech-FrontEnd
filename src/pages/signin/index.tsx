import { useNavigate } from "react-router-dom";
import {gauthUri} from "@/libs";
import { useLogin } from "@/hooks";

function SignInPage() {
  useLogin()
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(gauthUri)}>GAuth Button</button>
    </div>
  );
}

export default SignInPage;
