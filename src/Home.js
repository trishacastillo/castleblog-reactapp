import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs]= useState([
        { title:'My new blog', body:'Lorem ipsum....', author:'mario', id:1 },
        { title:'Welcome to Party!', body:'Lorem ipsum....', author:'mario', id:2 },
        { title:'My new blog 2', body:'Lorem ipsum....', author:'merlin', id:3 }
    ]);
    const handleDelete=(id)=>{
        const newBlogs=blogs.filter(blog=>blog.id!==id);
        setBlogs(newBlogs);
    }
    return ( 
        <div className="home">
          <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete}/>
          {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title='Mario Blogs'/> */}
        </div>
     );
}
 
export default Home;