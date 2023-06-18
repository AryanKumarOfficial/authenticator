import React, { useState } from "react";
import Layout from "@/layout/layout";
import Link from "next/link";
import styles from "@/styles/Form.module.css";
import Image from "next/image";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import Head from "next/head";
import { signIn } from "next-auth/react";

const Login = () => {
  const [show, setShow] = useState(false);
  const [type, setType] = useState("password");
  const handleShow = () => {
    setShow(!show);
    setType(show ? "text" : "password");
  };
  // google handler
  const handleGoogleSignIn = async () => {
    await signIn("google", { callbackUrl: "http://localhost:3000" });
  };
  return (
    <Layout>
      <Head>
        <title>Login | Authenticator</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Lorem ipsum dolor sit amet. amet Lorem ipsum dolor sit amet.
          </p>
        </div>
        {/* form */}
        <form className="flex flex-col gap-5">
          <div className={styles.input_groups}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className={styles.input_text}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          <div className={styles.input_groups}>
            <input
              type={type}
              name="password"
              id="password"
              placeholder="password"
              className={styles.input_text}
            />
            <span className="icon flex items-center px-4" onClick={handleShow}>
              <HiFingerPrint size={25} />
            </span>
          </div>
          {/* login buttons */}
          <div className="input-buttons">
            <button className={styles.button} type="submit">
              Login
            </button>
          </div>
          <div className="input-buttons">
            <button
              onClick={handleGoogleSignIn}
              className={styles.button_custom}
              type="button"
            >
              Sign In with Google
              <Image
                src={"/images/google.svg"}
                width={20}
                height={20}
                alt="google"
              ></Image>
            </button>
          </div>
          <div className="input-buttons">
            <button className={styles.button_custom} type="button">
              Sign In with GitHub
              <Image
                src={"/images/github.svg"}
                width={20}
                height={20}
                alt="github"
              ></Image>
            </button>
          </div>
          <div className="input-buttons">
            <button className={`pl-6 ${styles.button_custom}`} type="button">
              Sign In with Facebook
              <Image
                src={"/images/facbook.svg"}
                width={25}
                height={25}
                alt="facebook"
              ></Image>
            </button>
          </div>
        </form>
        <p className="text-center text-gray-400">
          Don&#39;t have an account yet?
          <Link className="text-blue-700 hover:text-blue-800" href="/register">
            Register
          </Link>
        </p>
      </section>
    </Layout>
  );
};

export default Login;
