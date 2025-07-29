import { gql } from 'graphql-request';

export const GET_POSTS = gql`query NewQuery {
    pageBy(pageId: 11) {
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
  }`