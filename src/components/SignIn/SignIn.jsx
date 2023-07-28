import SigninForm from "../SignIn/SigninForm/SigninForm";
import AuthImg from "../AuthContainer/AuthImg";
import AuthContainer from "../AuthContainer/AuthContainer";

export default function Signin() {
  return (
    <AuthContainer>
      <AuthImg />
      <SigninForm />
    </AuthContainer>
  );
}
