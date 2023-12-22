"use client";

import Form from "../form/Form";
import Input from "../input/Input";
import Button from "../button/Button";

import { useEdgeStore } from "@/lib/edgestore";

import { useEffect, useState } from "react";
import { SingleImageDropzone } from "../single-image-dragzone/SingleImageDragzone";

const CreateForm = ({ user }) => {
  const [file, setFile] = useState<File>();
  const [imagePath, setImagePath] = useState("");
  const { edgestore } = useEdgeStore();

  const uploadImageHandler = async () => {
    if (file) {
      const res = await edgestore.publicFiles.upload({
        file,
      });
      setImagePath(res.url);
    }
  };

  useEffect(() => {
    if (file) {
      uploadImageHandler();
    }
  }, [file]);

  return (
    <div className="mt-8 mx-auto w-full max-w-3xl px-4">
      <div className="bg-white py-8 shadow rounded-lg px-10">
        <h1 className="text-center text-2xl font-extrabold mb-10">
          Create a Post
        </h1>
        {
          !user ? (<h2 className="text-center text-xl font-extrabold uppercase">Please sign up or log in to create a post!</h2>) : (
            <>
            <SingleImageDropzone />
            </>
          )
        }
      </div>
    </div>
  );
};

export default CreateForm;
