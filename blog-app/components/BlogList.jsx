"use client";
import { blog_data } from "@/Assets/assets";
import BlogItem from "./BlogItem";
import { useState } from "react";

function BlogList() {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setCategory("All")}
          className={
            category === "All" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
        >
          All
        </button>
        <button
          onClick={() => setCategory("Technology")}
          className={
            category === "Technology"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Technology
        </button>
        <button
          onClick={() => setCategory("Startup")}
          className={
            category === "Startup"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Startup
        </button>
        <button
          onClick={() => setCategory("Lifestyle")}
          className={
            category === "Lifestyle"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Lifestyle
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blog_data.map((item) => {
          if (category === "All" || category === item.category) {
            return (
              <BlogItem
                key={item.id}
                title={item.title}
                description={item.description}
                category={item.category}
                image={item.image}
                id={item.id}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default BlogList;
