"use client"
import React from "react";
import Link from "next/link";
import CustomInput from "@/components/CustomInput";

export default function Register() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");

 const handleSubmit = event => {
    event.preventDefault();
    alert(`${name}, ${nickname}`)
 };

  return (
    <section className="overflow-y-auto">
      {/* Removed negative margin (-m-8) to fix horizontal scroll */}
      <div className="flex flex-wrap p-8"> 
        <div className="w-full md:w-1/2">
          {/* Added overflow-x-hidden to prevent horizontal overflow */}
          <div className="px-4 pt-10 md:pb-40 max-w-lg mx-auto overflow-x-hidden">
            <a className="inline-block mb-36" href="#"></a>
            <form 
                onSubmit={ event => handleSubmit(event)}
                className="text-center mx-auto">
              <h3 className="mb-4 text-5xl text-white tracking-5xl">Let's Get Started</h3>
              <p className="mb-10 text-gray-300">Create a new account now!</p>

              {/* Inputs */}
              <div> 
                <CustomInput type="text" placeholder="Enter your name" value={name} callback={ setName }  required={true}/>
                <CustomInput type="email" placeholder="Enter your email" value={email} callback={ setEmail } required={true}/>
                <CustomInput type="text" placeholder="Enter your nickname" value={nickname} callback={ setNickname } required={true} />
                <CustomInput type="password" placeholder="Enter your password" value={password} callback={ setPassword } required={true}/>
                <CustomInput type="password" placeholder="Confirm your password" value={password2} callback={ setPassword2 } required={true}/>
              </div>

              {/* Sign Up Button */}
              <button
                className={`block w-full mb-6 px-14 py-4 text-center font-medium tracking-2xl border-2 border-green-400 
                          bg-green-400 hover:bg-green-500 text-black focus:ring-4 focus:ring-green-500 
                          focus:ring-opacity-40 rounded-full transition duration-300`}>
                Sign up
              </button>

              {/* Sign In Link */}
              <p className="text-gray-300 pb-8">
                <span>Do you already have an account? </span>
                <Link className="underline" href="/auth/login">Sign in</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
