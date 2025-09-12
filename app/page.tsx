import Navbar from "../ui/navbar";
import Hero from "../ui/hero";
import Banner from "../ui/banner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Banner />
      <Navbar />
      <Hero />
      <div className="text-primary-content flex-1 grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-4 mt-20">
        <div className="col-span-12 col-start-1">
          <h1 className="lg:text-8xl">New page hooray!</h1>
        </div>
        <div className="col-span-12 col-start-3 mt-20">
          <h1 className="lg:text-5xl">Check out this animation stuff:</h1>
          <pre style={{ fontSize: 64, color: "#61afef" }}>0</pre>
        </div>
      </div>
    </div>
  );
}
