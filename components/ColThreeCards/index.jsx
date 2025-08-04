
// export const dynamic = 'force-dynamic'; 
import { GraphQLClient } from 'graphql-request';
import { GET_POSTS } from '../../lib/section-queries/col-three-cards-query';
import ColThreeCards from './ColThreeCards';

const graphQLClient = new GraphQLClient('https://dev-light-beam.pantheonsite.io/graphql');

export default async function Section({pageId}) {
    console.log(pageId)
  const data = await graphQLClient.request(GET_POSTS,{ pageId: parseInt(pageId) });
  const section = data?.pageBy?.pageBuilderSections?.sections.filter((obj)=>Object.keys(obj).length > 0);

//   console.log(section)
  return (
    <>
      <ColThreeCards colThreeCards={section[0]} />
    </>
  );
}
