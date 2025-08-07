import { gql } from 'graphql-request';

export const COL_THREE_CARDS_FRAGMENT = gql`
  fragment ColThreeCardsLayout on PageBuilderSectionsSectionsColThreeCardsLayout {
    fieldGroupName
     backgroundColor
     paddingClasses
     columns {
         blurb
         title
         image {
             node {
                 altText
                 filePath
             }
         }
     }
  }
`;
