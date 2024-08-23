import { Page } from "../../components/page";
import { client } from "../../tina/__generated__/databaseClient";

export default async function Post({
  params,
}: Readonly<{ params: { slug: string } }>) {
  const res = await client.queries.page({ relativePath: `${params.slug}.md` });
  return (
    <Page
      // https://github.com/vercel/next.js/issues/47447
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    />
  );
}