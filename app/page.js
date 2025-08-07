
export const dynamic = 'force-dynamic'; 

import { GraphQLClient } from 'graphql-request';
import { GET_HOME_PAGE } from '../lib/queries';
import PageBuilder from "../components/PageBuilder"

const graphQLClient = new GraphQLClient('https://dev-light-beam.pantheonsite.io/graphql');

export default async function Home() {
  const data = await graphQLClient.request(GET_HOME_PAGE);
  // const res = await fetch('https://dev-light-beam.pantheonsite.io/wp-json/wp/v2/pages/11');
  // if (!res.ok) {
  //     throw new Error(`HTTP error! status: ${res.status}`);
  // }
  // const data = await res.json();
  // console.log(data);
  // const sections = data?.acf;
  const sections = data?.pageBy?.pageBuilderSections?.sections

  return (
    <>
      <PageBuilder blades={sections} />
    </>
  );
}

