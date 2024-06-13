import { removeRequestMeta } from "next/dist/server/request-meta";
import Post from "@/app/(models)/Post";
import { NextResponse } from "next/server";

export async function POST(request) {
    console.log("POST RAN");
    try {
        const body = await request.json()
        console.log("Received data", body)
        const postData = body.formData
        await Post.create(postData)

        return NextResponse.json({ message: "Post Created"}, {status: 201});

    } catch (error) {
        return NextResponse.json({message: "Error", error}, {status: 500});
    }
}

export async function GET() {
    try {
        const posts = await Post.find();

        return NextResponse.json({ posts }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error}, { status: 500 });
    }
}
