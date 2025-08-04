// export const dynamic = 'force-dynamic'; 

import { GraphQLClient } from 'graphql-request';
import { GET_POSTS } from '../../lib/section-queries/hero-banner-query';
import HeroBanner from './HeroBanner';

const graphQLClient = new GraphQLClient('https://dev-light-beam.pantheonsite.io/graphql');

export default async function Section({pageId}) {
  const data = await graphQLClient.request(GET_POSTS,{ pageId: parseInt(pageId) });
  const sections = data?.pageBy?.pageBuilderSections.sections?.[0];

  return (
    <>
      <HeroBanner banner={sections} />
    </>
  );
}
