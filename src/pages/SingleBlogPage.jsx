// /src/pages/SingleBlogPage.jsx
import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import '../App.css'
import Whatsapp from "../components/Whatsapp";
import Footer from "../components/Footer";
import Nav from "../components/Nav"
const SingleBlogPage = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <h2>Blog not found</h2>;

  return (
    <>
    <Nav/>
    <div className="single-blog">
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} />
      <p dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
    <Whatsapp/>
    <Footer/>
    </>
  );
};

export default SingleBlogPage;
