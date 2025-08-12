import { gql } from 'graphql-request';

export const FOOTER_CTA_FRAGMENT = gql`
  fragment FooterCtaLayout on PageBuilderSectionsSectionsFooterCtaLayout {
    fieldGroupName
    sectionClasses
    paddingClasses
    sectionId
    backgroundColor
    subtitle
    title
    sideImage {
      node {
        altText
        filePath
      }
    }
    backgroundImage {
      node {
        altText
        filePath
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