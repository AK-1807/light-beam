// export const dynamic = 'force-dynamic'; 
import { GraphQLClient } from 'graphql-request';
import { GET_POSTS } from '../../lib/section-queries/intro-query';
import Intro from './Intro';

const graphQLClient = new GraphQLClient('https://dev-light-beam.pantheonsite.io/graphql');

export default async function Section({pageId}) {
  const data = await graphQLClient.request(GET_POSTS,{ pageId: parseInt(pageId) });
  const section = data?.pageBy?.pageBuilderSections?.sections?.[1];
//   const section = data?.pageBy?.pageBuilderSections?.sections.filter((obj)=>Object.keys(obj).length > 0);
  return (
    <>
      <Intro intro={section} />
    </>
  );
}
