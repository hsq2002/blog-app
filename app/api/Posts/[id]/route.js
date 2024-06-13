import Post from "@/app/(models)/Post";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
      const { id } = params;

      const foundPost = await Post.findOne({ _id: id });

      return NextResponse.json({ foundPost }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
  }

export async function DELETE(req, { params }) {
    try {
        const { id } = params;
        await Post.findByIdAndDelete(id);

        return NextResponse.json({ message: "Post Deleted" }, { status: 200});
    } catch (error) {
        return NextResponse.json({ message: "Error", error}, {status: 500});
    }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const postData = body.formData;
    const updatePostData = await Post.findByIdAndUpdate(id, {
      ...postData
    });

    console.log("Put RAN", postData)
    return NextResponse.json({message: "Updated" }, {status: 200})
  } catch(error) {
    return NextResponse.json({ message: "Error", error}, {status: 500});
  }
}
