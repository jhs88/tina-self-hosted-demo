import Content from "../../components/PostList";
import { client } from "../../tina/__generated__/databaseClient";

export default async function PostList() {
  const res = await client.queries.postConnection();
  return (
    <Content
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    />
  );
}
