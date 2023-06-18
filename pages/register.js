"use client";
import Layout from "@/layout/layout";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import styles from "@/styles/Form.module.css";

const Register = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [type1, setType1] = useState("password");
  const [type2, setType2] = useState("password");
  const handleShow1 = () => {
    setShow1(!show1);
    setType1(show1 ? "text" : "password");
  };
  const handleShow2 = () => {
    setShow2(!show2);
    setType2(show2 ? "text" : "password");
  };
  return (
    <Layout>
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
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className={styles.input_text}
            />
            <span className="icon flex items-center px-4">
              <HiOutlineUser size={25} />
            </span>
          </div>
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
              type={type1}
              name="password"
              id="password"
              placeholder="password"
              className={styles.input_text}
            />
            <span className="icon flex items-center px-4" onClick={handleShow1}>
              <HiFingerPrint size={25} />
            </span>
          </div>
          <div className={styles.input_groups}>
            <input
              type={type2}
              name="cpassword"
              id="cpassword"
              placeholder="Confirm password"
              className={styles.input_text}
            />
            <span className="icon flex items-center px-4" onClick={handleShow2}>
              <HiFingerPrint size={25} />
            </span>
          </div>
          {/* login buttons */}
          <div className="input-buttons">
            <button className={styles.button} type="submit">
              Login
            </button>
          </div>
        </form>
        <p className="text-center text-gray-400">
          Already have account?
          <Link className="text-blue-700 hover:text-blue-800" href="/login">
            Login
          </Link>
        </p>
      </section>
    </Layout>
  );
};

export default Register;
