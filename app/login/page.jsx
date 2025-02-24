import CustomInput from "@/components/CustomInput";

export default function Login() {
  return (
    <section className="overflow-hidden h-[100vh]">
      <div className="flex flex-wrap -m-8">
        <div className="w-full md:w-1/2 p-8">
          <div className="px-4 pt-10 md:pb-40 max-w-lg mx-auto">
            <a className="inline-block mb-36" href="#"></a>
            <div className="text-center mx-auto">
              <h3 className="mb-4 text-5xl text-white tracking-5xl">Welcome Back</h3>
              <p className="mb-10 text-gray-300">Login to your account</p>

              {/* Email Input */}
              <div className="mb-6 border border-gray-900 w-full focus-within:border-white overflow-hidden rounded-3xl">
                <CustomInput type={"email"} placeholder={"Enter your email"} />
              </div>

              {/* Password Input */}
              <div className="mb-6 border border-gray-900 w-full focus-within:border-white overflow-hidden rounded-3xl">
                <CustomInput type={"password"} placeholder={"Enter your password"} />
              </div>

              {/* Login Button */}
              <button className="block w-full mb-6 px-14 py-4 text-center font-medium tracking-2xl border-2 border-green-400 bg-green-400 hover:bg-green-500 text-black focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300">
                Login
              </button>

              {/* Sign Up Link */}
              <p className="text-gray-300">
                <span>Don't have an account? </span>
                <a className="underline" href="register">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}