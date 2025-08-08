import { gql } from 'graphql-request';

export const ICON_WITH_CONTENT_CARD_FRAGMENT = gql`
  fragment IconWithContentCardLayout on PageBuilderSectionsSectionsIconWithContentCardLayout {
    fieldGroupName
    paddingClasses
    cards {
      title
      subtitle
      linkText
      link
      icon {
        node {
          altText
          filePath
        }
      }
    }
    }
`;
