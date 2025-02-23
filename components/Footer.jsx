export default function () {
  return (
    <footer className="bg-gray-50 overflow-hidden">
      <div className="py-24">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-left -m-8 mb-28">
            <div className="w-full md:w-1/2 lg:w-4/12 p-8">
              <div className="md:max-w-xs"><img className="mb-7" src="https://placehold.co/60x60" alt="" />
                <p className="text-gray-400 font-medium">IgClone Description here</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between -m-2">
            <div className="w-auto p-2">
              <p className="inline-block text-sm font-medium text-black text-opacity-60">© 2025 IgClone</p>
            </div>
            <div className="w-auto p-2">
              <div className="flex flex-wrap items-center -m-2 sm:-m-7">
                <div className="w-auto p-2 sm:p-7"><a className="inline-block text-sm text-black text-opacity-60 hover:text-opacity-100 font-medium transition duration-300" href="#">Terms of Use</a></div>
                <div className="w-auto p-2 sm:p-7"><a className="inline-block text-sm text-black text-opacity-60 hover:text-opacity-100 font-medium transition duration-300" href="#">Privacy Policy</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}