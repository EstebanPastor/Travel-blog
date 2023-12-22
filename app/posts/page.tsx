import Posts from "@/components/ui/posts/Posts";
import TopPosts from "@/components/ui/top-posts/TopPosts";
import prisma from "@/lib/prismadb"

const page = async () => {
  const posts = await prisma.blog.findMany({
    include: {
      user: true,
    },
  });
  return (
    <div>
      <div
        className="grid lg:grid-cols-3 lg:gap-10 grid-cols-1 w-[95%] mx-auto max-w-[1450px] overflow-y-hidden
    h-fit mt-10 max-lg:space-y-7"
      >
        <Posts posts={posts as any}/>
        <TopPosts posts={posts as any}/>
      </div>
    </div>
  );
};

export default page;
