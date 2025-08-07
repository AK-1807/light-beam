import { gql } from 'graphql-request';

// export const GET_POSTS = gql`query NewQuery {
//     pageBy(pageId: 11) {
//       title
//       status
//       pageId
//       pageBuilderSections {
//         sections {
//           ... on PageBuilderSectionsSectionsHeroBannerLayout {
//             fieldGroupName
//           }
//           ... on PageBuilderSectionsSectionsIntroLayout {
//             fieldGroupName
//           }
//           ... on PageBuilderSectionsSectionsColThreeCardsLayout {
//             fieldGroupName
//           }
//         }
//       }
//     }
//   }`

import { HERO_BANNER_FRAGMENT } from './section-fragments/hero-banner';
import { INTRO_LAYOUT_FRAGMENT } from './section-fragments/intro';
import { COL_THREE_CARDS_FRAGMENT } from './section-fragments/col-three-cards';

export const GET_HOME_PAGE = gql`
  ${HERO_BANNER_FRAGMENT}
  ${INTRO_LAYOUT_FRAGMENT}
  ${COL_THREE_CARDS_FRAGMENT}

  query GetHomePage {
    pageBy(pageId: 11) {
      title
      pageBuilderSections {
        sections {
          ...HeroBannerLayout
          ...IntroLayout
          ...ColThreeCardsLayout
        }
      }
    }
  }
`;


export const GET_POSTS = gql`query NewQuery {
    pageBy(pageId: 11) {
      title
      status
      pageId
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
          ... on PageBuilderSectionsSectionsColThreeCardsLayout {
              fieldGroupName
              backgroundColor
              paddingClasses
              columns {
                  blurb
                  title
                  image {
                      node {
                          altText
                          filePath
                      }
                  }
              }
          }
          ... on PageBuilderSectionsSectionsImageWithTextLayout {
            eyebrow
            fieldGroupName
            backgroundColor
            paddingClasses
            subtitle
            title
            image {
              node {
                altText
                filePath
              }
            }
            buttons {
              text
              linkUrl
              isExternal
              buttonStyle
            }
          }
        }
      }
    }
  }`  