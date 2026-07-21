import { connectDB } from "@/lib/config/db";
import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import BlogModel from "@/lib/models/BlogModel";

const LoadDB = async () => {
  await connectDB();
};

LoadDB();

export async function GET(request) {
  console.log("Blog Get Hit");
  return NextResponse.json({
    msg: "API working",
  });
}

export async function POST(request) {
  console.log(request);

  const formData = await request.formData();
  const timestamp = Date.now();

  const image = formData.get("image");
  /*
  const image = formData.get("image"); means
  formData.append("image", file); so the 'image' is a Javascript File object, like:  File {
    name: "cat.png",
    size: 24098,
    type: "image/png"
}

  
  */

  // convert image to bytes (An image is really just binary data.)
  const imageByteData = await image.arrayBuffer();

  //Think of Buffer as Node.js's binary data type.
  const buffer = Buffer.from(imageByteData);

  //public/1753478912345_cat.png
  const path = `./public/${timestamp}_${image.name}`;

  //This writes the image onto disk.
  await writeFile(path, buffer);
  /*
Why the public folder?

Next.js automatically serves files from public.
public/cat.png becomes accessible at http://localhost:3000/cat.png so after saving public/1753478912345_cat.png you can visit http://localhost:3000/1753478912345_cat.png
*/

  // "/1753478912345_cat.png" Notice this is not the filesystem path (./public/...). It's the URL path that the browser can use to access the image because Next.js serves everything inside public from the root (/).
  const imageUrl = `/${timestamp}_${image.name}`;
  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: `${imageUrl}`,
    authorImage: `${formData.get("authorImg")}`,
  };

  await BlogModel.create(blogData);
  return NextResponse.json({ success: true, msg: "Blog added" });
  /*
  {
    "imageUrl": "/1753478912345_cat.png"
}
Then the frontend could display it like this: <img src={imageUrl} />

    */
}
