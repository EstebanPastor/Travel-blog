import Tag from "@/components/ui/tag/Tag";
import { searchParamsTypes } from "@/interfaces/IShared";
import Image from "next/image";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";

const page = ({ searchParams }: { searchParams: searchParamsTypes }) => {
  const post = searchParams;
  return (
    <div className="w-[95%] mx-auto max-w-[1450px]">
      <div className="w-full h-[400px] relative mb-5">
        <Image
          src={post.image_path}
          alt="image for blog post"
          fill
          className="object-cover"
        />
      </div>
      <Tag text={post.tags} />
      <h2 className="text-4xl font-extrabold uppercase text-tertiary my-3">
        {post.title}
      </h2>
      <div className="flex md:gap-20 gap-5 relative mt-10 md:flex-row flex-col">
        <aside className="md:sticky md:top-3/4 md:h-screen ">
          <span className="uppercase text-2xl font-extrabold text-tertiary">
            Share:
          </span>
          <div className="flex text-3xl gap-5 text-gray-400 mt-2 [&>*]:border">
            <AiOutlineTwitter />
            <AiOutlineInstagram />
            <AiOutlineFacebook />
          </div>
        </aside>
        <article>
          <p className="text-xl">{post.paragraph}</p>
          <div className="mt-5 flex gap-5 items-center">
            <Image
              src={post.authorImage}
              width={500}
              height={500}
              alt="author image"
              className="rounded-full w-20 h-20 object-cover"
            />
            <div className="flex gap-1 flex-col">
              <span>{post.authorName}</span>
              <span>{post.publishDate}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default page;
