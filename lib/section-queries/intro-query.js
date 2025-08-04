import { gql } from 'graphql-request';

export const GET_POSTS = gql`
  query NewQuery($pageId: Int!) {
    pageBy(pageId: $pageId) {
      title
      status
      pageBuilderSections {
        sections {
        ... on PageBuilderSectionsSectionsIntroLayout {
                fieldGroupName
                blurb
                eyebrow
                titile
                paddingClasses
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
