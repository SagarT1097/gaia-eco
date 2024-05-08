//SignInPage using Clerk's SignIn component to render the sign-in form.
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="flex justify-center">
      <SignIn />
    </div>
  );
};

export default SignInPage;
