import { useEffect, useState } from "react";
import BlogCard from "../Components/BlogCard";
import { getBlogs } from "../utils";
import { deleteBlog } from "../utils";


const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=> {
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    },[]);
    const handleDelete = id => {
        deleteBlog(id);
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    }
    return (
        <>
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 py-12 px-20">
                {blogs.map(blog => <BlogCard
                    handleDelete={handleDelete}
                    deletable={true}
                    key={blog.id}
                    blog={blog}
                > </BlogCard>)}
            </div>
        </>
    );
};

export default Bookmarks;