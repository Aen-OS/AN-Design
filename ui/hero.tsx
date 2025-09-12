export default function Hero() {
  return (
    <div className="text-primary-content flex-1 grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-4">
      <div className="col-span-4 sm:col-span-8 lg:col-span-8 lg:col-start-2 flex flex-col items-center justify-center lg:min-h-[50dvh] p-4">
        <h1 className="text-l lg:text-8xl">
          Get your website developed & designed.
        </h1>
      </div>
      <div className="col-start-1 col-span-4 md:col-span-5 lg:col-span-8 lg:col-start-6 flex flex-col items-center justify-center p-4 mb-5">
        <h2 className="text-4xl lg:text-6xl">
          by Anas Nedjai
          <span className="text-xs">
            <i>inspired by Swiss Design*</i>
          </span>
          <br></br>Freelance Web Developer
        </h2>
      </div>
      <div className="col-start-1 col-span-4 sm:col-span-8 lg:col-span-12 flex flex-col items-center justify-center mt-20">
        <p className="text-sm md:text-base">Scroll down for more</p>
        <div className="animate-bounce mt-2">
          <svg
            className="w-6 h-6 text-base=content"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
