import Posts from "@/components/ui/posts/Posts";
import TopPosts from "@/components/ui/top-posts/TopPosts";

const page = () => {
  return (
    <div>
      <div
        className="grid lg:grid-cols-3 lg:gap-10 grid-cols-1 w-[95%] mx-auto max-w-[1450px] overflow-y-hidden
    h-fit mt-10 max-lg:space-y-7"
      >
        <Posts />
        <TopPosts />
      </div>
    </div>
  );
};

export default page;
