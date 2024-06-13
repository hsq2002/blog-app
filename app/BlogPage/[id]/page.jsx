import React from 'react'
import InfoForm from "@/app/(components)/InfoForm";

const getPostById = async (id) => {

    const response = await fetch(`http://localhost:3000/api/Posts/${id}`, {
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error("Failed to post")
    }

    return response.json();

  }
const BlogPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true
  let updatePostData = {};

  if (EDITMODE) {
    updatePostData = await getPostById(params.id);
    console.log(updatePostData)
    updatePostData = updatePostData.foundPost;
  } else {
    updatePostData = {
      _id: "new"
    }
  }
  return <InfoForm post={updatePostData} />;
}

export default BlogPage
