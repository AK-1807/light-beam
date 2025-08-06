// export const dynamic = 'force-dynamic'; 
import React from 'react';
import { GraphQLClient } from 'graphql-request';
import { GET_POSTS } from '../../lib/section-queries/intro-query';
import Intro from './Intro';

const graphQLClient = new GraphQLClient('https://dev-light-beam.pantheonsite.io/graphql');

export default async function Section({pageId, indx}) {
    console.log(indx)
  const data = await graphQLClient.request(GET_POSTS,{ pageId: parseInt(pageId) });
  
  const nonEmptyObjects = data?.pageBy?.pageBuilderSections?.sections.filter(obj => Object.keys(obj).length > 0);
console.log(nonEmptyObjects);
  let lastIdex = (data?.pageBy?.pageBuilderSections?.sections).length -1
//   console.log(lastIdex)
  const section = data?.pageBy?.pageBuilderSections?.sections?.[lastIdex];
  return (
    <>
        {nonEmptyObjects.map((obj, i)=>(
            <React.Fragment key={i}>
            <Intro intro={obj} />
            </React.Fragment>
        ))}
      
    </>
  );
}
