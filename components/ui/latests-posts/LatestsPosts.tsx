"use client";

import React, { useState } from "react";
import BlogCard from "../blog-card/BlogCard";
import Button from "../button/Button";
import { PostTypes } from "@/types/postTypes";

const LatestsPosts: React.FC<{posts: PostTypes[]}> = ({posts}) => {
const latestPosts = posts.sort(
  (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
)

  const [visibleBlogs, setVisibleBlogs] = useState(5);

  const showMoreBlogs = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 3);
  };

  return (
    <section className="col-span-2" aria-labelledby="latest-posts">
      <div className="w-full text-center">
        <h2
          id="latest-posts"
          className="text-center text-2xl font-extrabold uppercase text-tertiary inline-block px-2 mb-10"
        >
          Latest Posts
        </h2>
      </div>
      <div className="flex flex-col gap-10 h-full">
        {latestPosts.slice(0, visibleBlogs).map((post, id) => (
          <BlogCard post={post} key={id} />
        ))}
        {visibleBlogs < latestPosts.length && (
          <div className="flex justify-center">
            <Button
              onClick={showMoreBlogs}
              text="Show more"
              aria="Show more blog posts"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestsPosts;
