import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <div><h2>All Blogs</h2> <BlogList blogs={blogs}/></div> }
      { blogs && <div><h2>My Blogs</h2> <BlogList blogs={blogs.filter((blog)=>blog.author==='yoshi')} /></div> }
    </div>
  );
}
 
export default Home;
