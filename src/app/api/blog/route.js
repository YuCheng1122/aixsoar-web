import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDb();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Failed to fetch posts!" }, { status: 500 });
  }
};
// import { Post } from "@/lib/models";
// import { connectToDb } from "@/lib/utils";
// import { NextResponse } from "next/server";

// export const GET = async (request) => {
//   try {
//     connectToDb();

//     const posts = await Post.find();
//     return NextResponse.json(posts);
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to fetch posts!");
//   }
// };
