import { Link } from "react-router-dom";
import placeholderImage from '../assets/404.jpg';
import { MdDeleteForever } from "react-icons/md";


const BlogCard = ({blog, deletable, handleDelete}) => {
    const { cover_image, title, description, published_at, id} = blog;
   
    return (
        <>
            <div className="flex relative">
                <Link to={`/blog/${id}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:dark:bg-gray-900">
                    <img role="presentation" className="object-cover w-full rounded h-44 dark:dark:bg-gray-500" src={cover_image || placeholderImage } />
                    <div className="p-6 space-y-2">
                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline"> {title} </h3>
                        <span className="text-xs dark:dark:text-gray-400"> {new Date(published_at).toLocaleDateString() } </span>
                        <p>{ description } </p>
                    </div>
                </Link>
                {deletable && <div onClick={()=> handleDelete(id)} className="absolute bg-primary p-3 rounded-full -right-4 -top-4 cursor-pointer"><MdDeleteForever /></div>}
            </div>
        </>
    );
};

export default BlogCard;