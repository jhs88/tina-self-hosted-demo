"use client";

import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import { PostConnectionQuery } from "../tina/__generated__/types";

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
      <>
        <h1>Posts</h1>
        <div>
          {postsList.map((post) => (
            <div key={post?.node?.id}>
              <Link href={`/posts/${post?.node?._sys.filename}`}>
                {post?.node?._sys.filename}
              </Link>
            </div>
          ))}
        </div>
      </>
    )) ?? <div>No posts found</div>
  );
}
