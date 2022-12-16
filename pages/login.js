import { GithubSignIn } from "../components/GithubSignIn";

const LoginPage = () => {
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col shadow-2xl hero-content lg:flex-row bg-base-300">
        <img src="Bug Juice.png" alt="" className="max-w-lg rounded-lg " />
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold">Task tracking built simple </h1>
          <p className="py-6">Made by developers, for developers.</p>
          <GithubSignIn />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
