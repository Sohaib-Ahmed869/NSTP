import React, { useState, useEffect } from "react";
import { getBlogs } from "../Services/BlogServices";
import { BiNews } from "react-icons/bi";
import { BiSort } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Newsroom = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await getBlogs();
      setBlogs(blogs);
    };
    fetchBlogs();
  }, []);

  const sortAccordingToDate = (a, b) => {
    return new Date(b.date_published) - new Date(a.date_published);
  };

  const onCLickSortByDate = () => {
    const sortedBlogs = [...blogs].sort(sortAccordingToDate);
    setBlogs(sortedBlogs);
  };

  const handleClick = (id) => {
    navigate(`/newsroom/${id}`);
  };

  return (
    <div className=" p-20 mt-10">
      <BiNews className="absolute w-96 h-96 text-primary opacity-30 bottom-3 right-3" />

      <div className="flex w-full justify-between">
        <div className="text-left text-primary text-3xl font-bold uppercase flex items-center gap-4">
          <BiNews className="inline-block" />
          <h1>Newsroom</h1>
        </div>
        <button
          onClick={onCLickSortByDate}
          className="bg-primary text-white p-2 rounded-lg flex items-center gap-2"
        >
          <BiSort className="inline-block" />
          Sort by Date
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-10">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-transparent hover:border hover:border-primary"
            onClick={() => handleClick(blog._id)}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
              style={{ objectPosition: "top", aspectRatio: "3/2" }}
            />
            <h1 className="text-left font-semibold">{blog.title}</h1>
            <div className="flex items-center justify-between">
              <p className="text-left text-sm text-gray-500">
                {new Date(blog.date_published).toLocaleDateString()}
              </p>
              <p className="text-left text-sm text-gray-500">
                {new Date(blog.date_published).toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newsroom;
