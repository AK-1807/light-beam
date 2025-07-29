import React from 'react'
import { GraphQLClient } from 'graphql-request';
import { GET_POSTS } from '../lib/queries';

export default async  function Home() {
    const data =  await GraphQLClient.request(GET_POSTS);
 
  return (
    <div>
      
    </div>
  )
}
