'use client'
import { useSession, signIn, signOut } from "next-auth/react";
import TodoList from "./TodoList";


export default function HomePage() {
  const { data: session } = useSession();

  if (session) {
    return (
   
     <>
     <TodoList/>
     </>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
    <div className="bg-gray-800 rounded-lg shadow-xl p-6 w-80 sm:w-96">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-white">
        Welcome, Visitor!
      </h1>
      <p className="mb-6 text-center text-gray-400">
        You are not signed in. Sign in to access your account.
      </p>
   
      <button
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200"
        onClick={() => signIn()}
      >
        Sign In
      </button>
      <div className="mt-4 text-center text-sm text-gray-500">
        Don’t have an account?{" "}
        <span
          className="text-blue-400 hover:text-blue-500 cursor-pointer underline"
          onClick={() => signIn()}
        >
          Create one now.
        </span>
      </div>
    </div>
  </div>
  
  );
}
