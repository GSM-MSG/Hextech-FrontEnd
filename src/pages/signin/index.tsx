import { useLogin } from "@/hooks";
import { gauthUri } from "@/libs";
import * as S from "./style.css";
import { SignInTitle } from "@/assets";

function SignInPage() {
  useLogin();
  return (
    <div className={S.SignInPageWrapper}>
      <div className={S.BackgroundCover}>
        <div className={S.SignInBox}>
          <SignInTitle />
          <button
            className={S.GAuthButton}
            onClick={() => (window.location.href = gauthUri)}
          >
            GAuth로 로그인
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
