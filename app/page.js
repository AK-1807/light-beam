
export const dynamic = 'force-dynamic'; 

import { GraphQLClient } from 'graphql-request';
import { GET_POSTS } from '../lib/queries';
import PageBuilder from "../components/PageBuilder"

// const graphQLClient = new GraphQLClient('https://dev-light-beam.pantheonsite.io/graphql');

export default async function Home() {
  // const data = await graphQLClient.request(GET_POSTS);
  const res = await fetch('https://dev-light-beam.pantheonsite.io/wp-json/wp/v2/pages/11');
  if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data = await res.json();
  // console.log(data);
  const sections = data?.acf;

  return (
    <>
      <PageBuilder blades={sections} />
    </>
  );
}

