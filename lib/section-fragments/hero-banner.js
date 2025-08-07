import { gql } from 'graphql-request';

export const HERO_BANNER_FRAGMENT = gql`
  fragment HeroBannerLayout on PageBuilderSectionsSectionsHeroBannerLayout {
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
`;
