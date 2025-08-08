import { gql } from 'graphql-request';

export const ICON_WITH_LINK_CARD_FRAGMENT = gql`
  fragment IconWithLinkCardsLayout on PageBuilderSectionsSectionsIconWithLinkCardsLayout {
    fieldGroupName
    paddingClasses
    backgroundColor
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
