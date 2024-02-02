import Banner from "@/components/Banner";
import CategoryComponent from "@/components/CategoryComponent";
import Landing from "@/components/Landing";
import NewsLetter from "@/components/NewsLetter";
import Slider from "@/components/Slider";


export default function Home() {
  return (
    <main className="">
      <Landing />
      <Slider />
      <Banner />
      <Slider />
      <NewsLetter />
    </main>
  );
}
