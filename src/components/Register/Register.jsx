import RegisterForm from "../Register/RegisterForm/RegisterForm";
import AuthImg from "../AuthContainer/AuthImg";
import AuthContainer from "../AuthContainer/AuthContainer";

export default function Register() {
  return (
    <AuthContainer>
      <AuthImg />
      <RegisterForm />
    </AuthContainer>
  );
}
