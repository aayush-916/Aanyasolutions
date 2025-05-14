// /src/pages/BlogPage.jsx
import { blogs } from "../data/blogs";
import BlogCard from "../components/BlogCard";
import '../App.css';
import Nav from "../components/Nav";
import Whatsapp from "../components/Whatsapp";
import Footer from "../components/Footer";

const BlogPage = () => {
  // Reverse the blogs array to show latest blog first
  const sortedBlogs = [...blogs].reverse();

  return (
    <>
    <Nav/>
    
    <div className="blog-list">
      <h1>Our Blogs</h1>
      <div className="grid">
        {sortedBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
    <Whatsapp/>
    <Footer/>
    </>
  );
};

export default BlogPage;
