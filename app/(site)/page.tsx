import Hero from "@/components/ui/hero/Hero";
import LatestsPosts from "@/components/ui/latests-posts/LatestsPosts";
import TagPosts from "@/components/ui/tag-posts/TagPosts";

function Home() {
  return (
    <>
      <Hero />
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 w-[95%] mx-auto max-w-[1450px] overflow-y-hidden h-fit mt-10">
        <LatestsPosts />
        <TagPosts />
      </div>
    </>
  );
}

export default Home;
