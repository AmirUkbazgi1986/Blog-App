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
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-175 mx-auto">
            {data.title}
          </h1>
          <div>
            <Image
              src={data.author_img}
              alt="photo"
              width={60}
              height={60}
              className="mx-auto mt-6 border border-white rounded-full"
            />
            <p className="mt-1 pb-2 text-lg max-w-185 mx-auto">{data.author}</p>
          </div>
        </div>
      </div>
      <div className="mx-5 max-w-200 md:mx-auto -mt-25 mb-10">
        <Image
          className="border-4 border-white"
          src={data.image}
          width={1280}
          height={720}
          alt=""
        />
        <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
        <p>{data.description}</p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 1: Self-Reflection and Goal
        </h3>
        <p className="my-3">
          Before you can manage your lifestyle, you must have a clear, Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Eaque porro
          explicabo sed quam quidem libero.
        </p>
        <p className="my-3">
          Before you can manage your lifestyle, you must have a clear, Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Eaque porro
          explicabo sed quam quidem libero.
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 2: Self-Reflection and Goal
        </h3>
        <p className="my-3">
          Before you can manage your lifestyle, you must have a clear, Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Eaque porro
          explicabo sed quam quidem libero.
        </p>
        <p className="my-3">
          Before you can manage your lifestyle, you must have a clear, Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Eaque porro
          explicabo sed quam quidem libero.
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 3: Self-Reflection and Goal
        </h3>
        <p className="my-3">
          Before you can manage your lifestyle, you must have a clear, Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Eaque porro
          explicabo sed quam quidem libero.
        </p>
        <p className="my-3">
          Before you can manage your lifestyle, you must have a clear, Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Eaque porro
          explicabo sed quam quidem libero.
        </p>
        <h3 className="my-5 text-[18px] font-semibold">Conclusion:</h3>
        <p className="my-3">
          Managing your lifestyle is a journey that requires commitment, Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Eaque porro
          explicabo sed quam quidem libero.
        </p>
      </div>
    </>
  ) : (
    <></>
  );
}
