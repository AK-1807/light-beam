import { gql } from 'graphql-request';

export const CARD_GRID_FRAGMENT = gql`
  fragment CardGridLayout on PageBuilderSectionsSectionsCardGridLayout {
    fieldGroupName
    paddingClasses
    bigCardDetails {
      cardSubtitle
      cardTitle
      date
      eyebrow
      fieldGroupName
      link
      linkText
      location
      cardImage {
        node {
          altText
          filePath
        }
      }
    }
    smallCardColumns {
      smallCardTitle
      smallCardSubtitle
      smallCardLinkText
      smallCardLink
      smallCardEyebrow
      fieldGroupName
    }
    
  }
`;