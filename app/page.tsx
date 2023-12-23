import Hero from "@/components/ui/hero/Hero";
import LatestsPosts from "@/components/ui/latests-posts/LatestsPosts";
import TopPosts from "@/components/ui/top-posts/TopPosts";
import prisma from "@/lib/prismadb"

async function Home() {
  const posts = await prisma.blog.findMany({
    include: {
      user: true
    }
  })
  return (
    <>
      <Hero posts={posts}/>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 w-[95%] mx-auto max-w-[1450px] overflow-y-hidden h-fit mt-10">
        <LatestsPosts posts={posts}/>
        <TopPosts posts={posts}/>
      </div>
    </>
  );
}

export default Home;
