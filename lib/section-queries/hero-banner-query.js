import { gql } from 'graphql-request';

export const GET_POSTS = gql`
  query NewQuery($pageId: Int!) {
    pageBy(pageId: $pageId) {
      title
      status
      pageBuilderSections {
        sections {
          ... on PageBuilderSectionsSectionsHeroBannerLayout {
            fieldGroupName
            subtitle
            title
            bgImage {
              node {
                filePath
                altText
              }
            }
            buttons {
              buttonStyle
              isExternal
              linkUrl
              text
            }
          }
        }
      }
    }
  }
`;
