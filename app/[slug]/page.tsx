import ClientPage from "@/components/page";
import { client } from "@/tina/__generated__/databaseClient";

export default async function Page({
  params,
}: Readonly<{ params: { slug: string } }>) {
  const res = await client.queries.page({ relativePath: `${params.slug}.mdx` });
  return (
    <ClientPage
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    />
  );
}
