import { gql } from "@apollo/client";

export const Comment = {
  fragments: {
    CommentData: gql`
      fragment CommentData on Comment {
        id
        timestamp
        text
      }
    `
  }
};

export const User = {
  fragments: {
    UserBasicData: gql`
      fragment UserBasicData on User {
        id
        name
        email
        comments {
          ...CommentData
        }
      }
      ${Comment.fragments.CommentData}
    `
  },
};

