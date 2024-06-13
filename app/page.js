
import BlogCard from "./(components)/BlogCard";

const getPosts = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/Posts", {
      cache: "no-store"
    });
    return response.json()
  } catch (error) {
    console.log("Failed to get Post", error)
  }
}

const Home = async () => {
  const { posts } = await getPosts();

const uniqueCategories = [
  ... new Set(posts?.map(({category}) => category)),
];

  return (
    <div className="p-5">
      <div>
        {posts && uniqueCategories?.map((uniqueCategory, categoryIndex) =>
        <div key={categoryIndex} className="mb-4">
          <h2>{uniqueCategory}</h2>
          <div className="lg:grid grid-cols-2 xl:grid-cols-4">
            {posts.filter((post) => post.category === uniqueCategory).map((filteredPost, _index) => (
              <BlogCard id={_index}
              key={_index}
              post={filteredPost} />
            ))}
             </div>
        </div>)}
      </div>
    </div>
  );
}
export default Home;
