//SignUpPage using Clerk's SignUp component to render the sign-up form.
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <>
      <div className="flex justify-center">
        <SignUp />
      </div>
    </>
  );
};
export default SignUpPage;
