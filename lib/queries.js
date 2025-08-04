import { gql } from 'graphql-request';

export const GET_POSTS = gql`query NewQuery {
    pageBy(pageId: 11) {
      title
      status
      pageId
      pageBuilderSections {
        sections {
          ... on PageBuilderSectionsSectionsHeroBannerLayout {
            fieldGroupName
          }
          ... on PageBuilderSectionsSectionsIntroLayout {
            fieldGroupName
          }
          ... on PageBuilderSectionsSectionsColThreeCardsLayout {
            fieldGroupName
          }
        }
      }
    }
  }`