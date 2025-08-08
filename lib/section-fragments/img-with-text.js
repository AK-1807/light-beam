import { gql } from 'graphql-request';

export const IMG_WITH_TEXT_FRAGMENT = gql`
  fragment ImageWithTextLayout on PageBuilderSectionsSectionsImageWithTextLayout {
    eyebrow
    fieldGroupName
    backgroundColor
    title
    subtitle
    paddingClasses
    image {
      node {
        altText
        filePath
      }
    }
    innerSubtitle
    buttons {
      buttonStyle
      isExternal
      linkUrl
      text
    }
  }
`;
