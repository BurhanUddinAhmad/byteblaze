import Markdown from "react-markdown";
import { useLoaderData } from "react-router-dom";
import rehypeRaw from "rehype-raw";

const Content = () => {
    const blog = useLoaderData();
    const { cover_image, title, description, published_at, tags, body_html } = blog;

    return (
        <>
            <div className="mx-auto group hover:no-underline focus:no-underline dark:dark:bg-gray-900">
                <img role="presentation" className="object-cover w-full rounded h-44 dark:dark:bg-gray-500" src={cover_image || placeholderImage} />
                <div>
                    <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
                        {tags.map(tag => (
                            <a key={tag}
                                rel="noopener noreferrer"
                                href="#"
                                className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">
                                #{tag}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline"> {title} </h3>
                    <div>
                        <Markdown rehypePlugins={rehypeRaw}>
                        {body_html}
                        </Markdown>
                    </div>
                    <span className="text-xs dark:dark:text-gray-400"> {new Date(published_at).toLocaleDateString()} </span>
                    <p>{description} </p>
                </div>
            </div>
        </>
    );
};

export default Content;