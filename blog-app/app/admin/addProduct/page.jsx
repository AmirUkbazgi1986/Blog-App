"use client";
import { useState } from "react";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";

function Page() {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Alex Bennet",
    authorImage: "/profile_icon.png",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // lets create a formdata object
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImage", data.authorImage);
    formData.append("image", image);

    const response = await axios.post("/api/blog", formData);
    if (response.data.success === true) {
      toast.success(response.data.msg);
    } else {
      toast.error("Error");
    }
  };
  return (
    <>
      <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
        <p className="text-xl">Upload thumbnail</p>
        <label htmlFor="image">
          <Image
            className="mt-4"
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            width={140}
            height={70}
            alt="upload image"
          />
        </label>
        <input
          onClick={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />
        <p className="text-xl mt-4">Blog title</p>
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          type="text"
          placeholder="Type here"
          className="w-full sm:w-125 mt-4 py-3 px-4 border  "
          required
        />
        <p className="text-xl mt-4">Blog Description</p>
        <textarea
          name="description"
          onChange={onChangeHandler}
          value={data.description}
          className="w-full sm:w-125 mt-4 py-3 px-4 border  "
          placeholder="write content here"
          rows={6}
          required
        ></textarea>
        <p className="text-xl mt-4">Blog Category</p>
        <select
          className="w-40 mt-4 px-4 py-3 border text-gray-500"
          name="category"
          onChange={onChangeHandler}
          value={data.category}
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="LifeStyle">LifeStyle</option>
        </select>
        <br />
        <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
          ADD
        </button>
      </form>
    </>
  );
}

export default Page;
