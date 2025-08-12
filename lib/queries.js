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
import { IMG_WITH_TEXT_FRAGMENT } from './section-fragments/img-with-text';
import { ICON_WITH_CONTENT_CARD_FRAGMENT } from './section-fragments/icon-with-content-card';
import { ICON_WITH_LINK_CARD_FRAGMENT } from './section-fragments/icon-with-link-cards';
import { CARD_GRID_FRAGMENT } from './section-fragments/card-grid';
import { FOOTER_CTA_FRAGMENT } from './section-fragments/footer-cta';
import { TAB_WITH_TESTIMONIAL_FRAGMENT } from './section-fragments/tab-with-testimonial';
//...TabWithTestimonialLayout ${TAB_WITH_TESTIMONIAL_FRAGMENT}

export const GET_HOME_PAGE = gql`
  ${HERO_BANNER_FRAGMENT}
  ${INTRO_LAYOUT_FRAGMENT}
  ${COL_THREE_CARDS_FRAGMENT}
  ${IMG_WITH_TEXT_FRAGMENT}
  ${ICON_WITH_CONTENT_CARD_FRAGMENT}
  ${ICON_WITH_LINK_CARD_FRAGMENT}
  ${CARD_GRID_FRAGMENT}
  ${FOOTER_CTA_FRAGMENT}
  ${TAB_WITH_TESTIMONIAL_FRAGMENT}
  

  query GetHomePage {
    pageBy(pageId: 11) {
      title
      pageBuilderSections {
        sections {
          ...HeroBannerLayout
          ...IntroLayout
          ...ColThreeCardsLayout
          ...ImageWithTextLayout
          ...IconWithContentCardLayout
          ...IconWithLinkCardsLayout
          ...CardGridLayout
          ...FooterCtaLayout
          ...TabWithTestimonialLayout
          
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