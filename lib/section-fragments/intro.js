import { gql } from 'graphql-request';

export const INTRO_LAYOUT_FRAGMENT = gql`
  fragment IntroLayout on PageBuilderSectionsSectionsIntroLayout {
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
`;
