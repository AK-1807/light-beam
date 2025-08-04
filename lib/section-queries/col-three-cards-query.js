import { gql } from 'graphql-request';

export const GET_POSTS = gql`
  query NewQuery($pageId: Int!) {
    pageBy(pageId: $pageId) {
      title
      status
      pageBuilderSections {
        sections {
            ... on PageBuilderSectionsSectionsColThreeCardsLayout {
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
        }
      }
    }
  }
`;
