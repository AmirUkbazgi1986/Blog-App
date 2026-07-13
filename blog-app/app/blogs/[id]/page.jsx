"use client";
import { assets, blog_data } from "@/Assets/assets";
import { useEffect, useState } from "react";
import Image from "next/image";
import * as React from "react";

export default function Page({ params }) {
  const [data, setData] = useState(null);
  const { id } = React.use(params);

  const fetchBlogData = React.useCallback(() => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(id) === blog_data[i].id) {
        setData(blog_data[i]);
        console.log(blog_data[i]);
        break;
      }
    }
  }, [id]);

  useEffect(() => {
    fetchBlogData();
  }, [fetchBlogData]);

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex items-center justify-between ">
          <Image
            src={assets.logo}
            alt="logo photo"
            className="w-32.5 sm:w-auto"
          />
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000] cursor-pointer">
            Get Started
            <Image src={assets.arrow} alt="arrow" />
          </button>
        </div>
        <div className="text-center my-24">
          <h1>{data.title}</h1>
          <div>
            <Image src={data.author_img} alt="photo" width={50} height={50} />
            <p>{data.author}</p>
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}
