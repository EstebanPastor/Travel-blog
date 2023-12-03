import { blogData } from "@/constants/blogData";
import Tag from "../tag/Tag";
import Overlay from "../overlay/Overlay";
import Link from "next/link";

const Hero = () => {
  const featuredPost = blogData.filter((blog) => blog.featured === true);

  const topFeatured = featuredPost.slice(0, 1);

  const bottomFeatured = featuredPost.slice(1, 4);

  return (
    <section className="relative">
      <div className="w-[95%] mx-auto max-w-[1450px] z-1">
        {topFeatured.map((post, id) => (
          <article
            key={id}
            className="flex flex-col gap-5 mb-5 text-center relative"
          >
            <Tag text={post.tags} />
            <h2 className="text-6xl font-extrabold uppercase text-tertiary">
              {post.title}
            </h2>
            <div className="flex items-center gap-3 font-light text-tertiary justify-center">
              <div className="w-10 h-10 rounded-full bg-black"></div>
              <span>{post.authorName}</span>
              <span className="italic">{post.publishDate}</span>
            </div>
            <div className="relative max-h-[650px] overflow-hidden shadow-xl">
              <img
                src={post.image_path}
                alt="Image Path"
                className="object-cover w-full h-full"
              />
              <Overlay />
            </div>
          </article>
        ))}
        <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-1">
          {bottomFeatured.map((post, id) => (
            <article className="flex flex-col gap-3 items-center text-center relative">
              <div className="relative overflow-hidden h-72 shadow-xl w-full">
                <img
                  src={post.image_path}
                  alt="Image Path"
                  className="object-cover w-full h-full"
                />
                <Overlay />
              </div>
              <Tag text={post.tags} />
              <h3 className="text-sm font-extrabold uppercase text-tertiary px-5">
                {post.title}
              </h3>
              <span className="font-light italic">
                {post.publishDate}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
