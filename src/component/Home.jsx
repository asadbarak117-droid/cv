import About from "./About";
import Hero from "./Hero";

function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />

      <About />
    </div>
  );
}

export default Home;
