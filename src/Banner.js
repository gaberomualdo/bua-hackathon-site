export function Banner(props) {
  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center flex-wrap">
          <p className="ml-3 font-medium text-white truncate">
            <span className="md:hidden">We announced a new product!</span>
            <span className="hidden text-lg md:inline">
              Registration ends on March 20, 2022. Sign up now!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
