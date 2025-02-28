import CustomInput from "@/components/CustomInput";

export default function Register() {
  return (
    <section className="overflow-y-auto">
      {/* Removed negative margin (-m-8) to fix horizontal scroll */}
      <div className="flex flex-wrap p-8"> 
        <div className="w-full md:w-1/2">
          {/* Added overflow-x-hidden to prevent horizontal overflow */}
          <div className="px-4 pt-10 md:pb-40 max-w-lg mx-auto overflow-x-hidden">
            <a className="inline-block mb-36" href="#"></a>
            <div className="text-center mx-auto">
              <h3 className="mb-4 text-5xl text-white tracking-5xl">Let's Get Started</h3>
              <p className="mb-10 text-gray-300">Create a new account now!</p>

              {/* Inputs */}
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className="mb-6 border border-gray-900 w-full focus-within:border-white rounded-3xl"
                >
                  <CustomInput
                    type={i > 2 ? "password" : "text"}
                    placeholder={
                      i === 0 ? "Enter your name" :
                      i === 1 ? "Enter your email" :
                      i === 2 ? "Enter your nickName" :
                      i === 3 ? "Enter your password" : 
                      "Confirm your password"
                    }
                  />
                </div>
              ))}

              {/* Sign Up Button */}
              <button className="block w-full mb-6 px-14 py-4 text-center font-medium tracking-2xl border-2 border-green-400 bg-green-400 hover:bg-green-500 text-black focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300">
                Sign up
              </button>

              {/* Sign In Link */}
              <p className="text-gray-300 pb-8">
                <span>Do you already have an account? </span>
                <a className="underline" href="login.html">Sign in</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}