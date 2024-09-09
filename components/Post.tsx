"use client";

import { useTina } from "tinacms/dist/react";

import { PostQuery } from "@/tina/__generated__/types";

export default function Post(
  props: Readonly<{
    data: PostQuery;
    variables: object;
    query: string;
  }>
) {
  const { data } = useTina(props);
  return (
    <div className="mx-20 px-20 py-12">
      <code>
        <pre
          style={{
            backgroundColor: "darkgray",
          }}
        >
          {JSON.stringify(data.post, null, 2)}
        </pre>
      </code>
    </div>
  );
}
