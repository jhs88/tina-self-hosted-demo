import PostList from "../../components/PostList";
import { client } from "../../tina/__generated__/databaseClient";

export default async function Page() {
  const res = await client.queries.postConnection();
  return (
    <PostList
      data={JSON.parse(JSON.stringify(res.data))}
      query={res.query}
      variables={res.variables}
    />
  );
}
