import Hero from "@/components/ui/hero/Hero";
import LatestsPosts from "@/components/ui/latests-posts/LatestsPosts";
import TopPosts from "@/components/ui/top-posts/TopPosts";


function Home() {
  return (
    <>
      <Hero />
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 w-[95%] mx-auto max-w-[1450px] overflow-y-hidden h-fit mt-10">
        <LatestsPosts />
        <TopPosts />
      </div>
    </>
  );
}

export default Home;
