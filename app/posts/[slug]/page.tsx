import Post from "../../../components/Post";
import { client } from "../../../tina/__generated__/databaseClient";

export default async function Page({
  params,
}: Readonly<{ params: { slug: string } }>) {
  const res = await client.queries.post({ relativePath: `${params.slug}.md` });
  return (
    <Post
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    />
  );
}
