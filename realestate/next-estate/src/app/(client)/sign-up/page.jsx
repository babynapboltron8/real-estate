import Link from "next/link";
import SignUpForm from "./components/sign-up-form";

export default function Page() {
  return (
    <div className="max-w-md py-16 px-6 mx-auto">
      <h1 className="text-xl text-center font-semibold mb-4">Sign Up</h1>
      <SignUpForm />
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link href="/login">
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  );
}
