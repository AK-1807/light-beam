
export const dynamic = 'force-dynamic'; 

import { GraphQLClient } from 'graphql-request';
import { GET_POSTS } from '../lib/queries';
import PageBuilder from "../components/PageBuilder"

const graphQLClient = new GraphQLClient('https://dev-light-beam.pantheonsite.io/graphql');

export default async function Home() {
  const data = await graphQLClient.request(GET_POSTS);
  const sections = data?.pageBy?.pageBuilderSections?.sections;

  return (
    <>
      <PageBuilder blades={sections} />
    </>
  );
}

