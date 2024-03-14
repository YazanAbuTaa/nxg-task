'use client';
import { signIn, signOut, useSession } from "next-auth/react";

const SignInButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex flex-col text-left text-white">
        <p>{session.user.name}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => signIn()} className="text-white">Sign In</button>
    </div>
  );
};

export default SignInButton;
