import { gql } from 'graphql-request';

export const TAB_WITH_TESTIMONIAL_FRAGMENT = gql`
  fragment TabWithTestimonialLayout on PageBuilderSectionsSectionsTabWithTestimonialsLayout {
    fieldGroupName
    tab_columns {
      counters {
        count1
        count1Description
        count1Sup
        count2
        count2Description
        count2Sup
      }
      authorDesc
      authorName
      link
      linkText
      testimonialQuote
      tabItemName
      authorImage {
        node {
          altText
          filePath
        }
      }
    }
    paddingClasses 
  }
`;  