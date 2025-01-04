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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-black text-white">
      <div className="bg-gray-900 text-white rounded-lg shadow-lg p-8 w-96">
        <h1 className="text-2xl font-bold mb-4">Hello, Visitor!</h1>
        <p className="mb-4 text-gray-400">You are not signed in.</p>
        <button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          onClick={() => signIn()}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
