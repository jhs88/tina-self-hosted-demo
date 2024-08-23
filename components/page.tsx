"use client";

import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { PageQuery } from "../tina/__generated__/types";

export default function Page(
  props: Readonly<{
    data: PageQuery;
    variables: object;
    query: string;
  }>
) {
  const { data } = useTina(props);
  const content = data?.page.body;
  return (
    <div data-tina-field={tinaField(data.page, "body")}>
      <TinaMarkdown {...{ content }} />
    </div>
  );
}
