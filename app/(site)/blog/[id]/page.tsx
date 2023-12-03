import { searchParamsTypes } from "@/interfaces/IShared";

const page = ({ searchParams }: { searchParams: searchParamsTypes }) => {
  const post = searchParams;
  return <div>{post.title}</div>;
};

export default page;
