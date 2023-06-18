import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <div className="container mx-auto my-auto top-28 absolute">
        {session ? user({ session }) : guest()}
      </div>
    </>
  );
}

// guest

const guest = () => {
  return (
    <>
      <main className="container mx-auto my-auto text-center">
        <h3 className="font-bold  text-4xl">Guest Homepage</h3>

        <div className="flex justify-center">
          <Link
            href={"/login"}
            className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50"
          >
            Sign In
          </Link>
        </div>
      </main>
    </>
  );
};

// Authorized user

const user = ({ session }) => {
  console.log(session);
  return (
    <>
      <main className="container mx-auto my-auto text-center">
        <h3 className="font-bold  text-4xl">Authorized User Homepage</h3>

        <div className="details">
          <h5>{session.user.name}</h5>
          <h5>{session.user.email}</h5>
          <div className="flex justify-center">
            <button className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">
              Sign Out
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            href={"/profile"}
            className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50"
          >
            Profile
          </Link>
        </div>
      </main>
    </>
  );
};
