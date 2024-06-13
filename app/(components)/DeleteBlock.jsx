"use client"
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const DeleteBlock = ({ id }) => {
  const router = useRouter();
  const deletePost = async () => {

    const res = await fetch(`http://localhost:3000/api/Posts/${id}`, {
      method: "DELETE"
    });
    if (res.ok) {
      router.refresh()
    } else {
      console.error("Failed to delete post")
    }
  };
  return (
    <FontAwesomeIcon
      icon={faX}
      onClick={deletePost}
      style={{ fontSize: '16px', width: '16px', height: '16px' }}
      className="text-red-400 hover:cursor-pointer hover:text-red-200"
    />
  );
};

export default DeleteBlock;
