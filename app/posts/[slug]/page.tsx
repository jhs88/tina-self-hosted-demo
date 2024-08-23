import Component from "../../../components/Post";
import { client } from "../../../tina/__generated__/databaseClient";

export default async function Post({
  params,
}: Readonly<{ params: { slug: string } }>) {
  const res = await client.queries.post({ relativePath: `${params.slug}.md` });
  return (
    <Component
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    />
  );
}
