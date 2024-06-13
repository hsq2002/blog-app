import DeleteBlock from "./DeleteBlock";
import LikeDislike from "./LikeDislike";
import Link from "next/link"

const BlogCard = ({post}) => {

  const formatTimeStamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }

    const date = new Date(timestamp)
    const formattedDate = date.toLocaleTimeString("en-US", options);

    return formattedDate
  };

  return (
    <div className="flex flex-col bg-gray-300 hover:bg-gray-400 rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <DeleteBlock id={post._id} />
      </div>
      <Link href={`/BlogPage/${post._id}`} style={{display: "contents"}}>
      <h4>{post.first_name} {post.last_name}</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">
        Email: {post.email}
        <br />
        Phone: {post.phone}
        <br />
        About me: {post.about_me}
      </p>
      <LikeDislike />
      <div>
      <p className="text-xs my-1">{formatTimeStamp(post.createdAt)}</p>
        <button
          type="button"
          class="text-white bg-gradient-to-br
         from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
          focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          comment
        </button>

      </div>
      </Link>
    </div>
  );
};

export default BlogCard;
