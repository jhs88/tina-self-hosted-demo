"use client";

import Link from "next/link";
import { useTina } from "tinacms/dist/react";

import { PostConnectionQuery } from "@/tina/__generated__/types";

export default function PostList(
  props: Readonly<{
    data: PostConnectionQuery;
    variables: object;
    query: string;
  }>
) {
  const postsList = props.data.postConnection.edges;
  return (
    (postsList && (
      <section className="px-12 py-6">
        <h1 className="scroll-m-20 text-4xl font-extrabold text-center tracking-tight lg:text-5xl">
          Posts
        </h1>
        <div className="py-10">
          {postsList.map((post) => (
            <div key={post?.node?.id}>
              <Link href={`/posts/${post?.node?._sys.filename}`}>
                {post?.node?._sys.filename}
              </Link>
            </div>
          ))}
        </div>
      </section>
    )) ?? (
      <h1 className="scroll-m-20 text-4xl font-extrabold text-center tracking-tight lg:text-5xl">
        No posts found
      </h1>
    )
  );
}
