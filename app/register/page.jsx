import CustomInput from "@/components/CustomInput";

export default function () {
  return (
    <section className="overflow-hidden h-[100vh]">
      <div className="flex flex-wrap -m-8">
        <div className="w-full md:w-1/2 p-8">
          <div className="px-4 pt-10 md:pb-40 max-w-lg mx-auto"><a className="inline-block mb-36" href="#">                </a>
            <div className="text-center mx-auto">
              <h3 className="mb-4 text-5xl text-white tracking-5xl">Let`s Get Started</h3>
              <p className="mb-10 text-gray-300">Now create your account!</p>

              <div className="mb-6 border border-gray-900 w-full focus-within:border-white overflow-hidden rounded-3xl">
                <CustomInput type={"text"} placeholder={"Enter your name"} />
              </div>

              <div className="mb-6 border border-gray-900 w-full focus-within:border-white overflow-hidden rounded-3xl">
                <CustomInput type={"text"} placeholder={"Enter your email"} />
              </div>

              <div className="mb-6 border border-gray-900 w-full focus-within:border-white overflow-hidden rounded-3xl">
                <CustomInput type={"text"} placeholder={"Enter your nickName"} />
              </div>

              <div className="mb-6 border border-gray-900 w-full focus-within:border-white overflow-hidden rounded-3xl">
                <CustomInput type={"password"} placeholder={"Enter your password"} />
              </div>

              <div className="mb-6 border border-gray-900 w-full focus-within:border-white overflow-hidden rounded-3xl">
                <CustomInput type={"password"} placeholder={"Confirm your password"} />
              </div>

              <button className="block w-full mb-6 px-14 py-4 text-center font-medium tracking-2xl border-2 border-green-400 bg-green-400 hover:bg-green-500 text-black focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300" href="#">Sign up</button>
              
              <p className="text-gray-300">
                <span>Alreade have account?</span>
                <a className="underline" href="login.html">Sign in</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}