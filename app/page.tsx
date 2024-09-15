
import Hero from "./components/Hero";
import ChapterZero from "./components/ChapterZero";
import ChapterOne from "./components/ChapterOne";
import ChapterTwo from "./components/ChapterTwo";
import ChapterThree from "./components/ChapterThree";
import ChapterFour from "./components/ChapterFour";
import ChapterContinue from "./components/ChapterContinue";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-black text-white">
      <Hero />
      <ChapterZero />
      <ChapterOne />
      <ChapterTwo />
      <ChapterThree />
      <ChapterFour />
      <ChapterContinue />
    </div>
  );
}
