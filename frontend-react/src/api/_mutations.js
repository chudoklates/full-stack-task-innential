import { gql } from "@apollo/client";
import { Comment } from './_fragments';
// REMOTE
export const LOGIN_MUTATION = gql`
  mutation login($userCredentials: userCredentials!) {
    login(input: $userCredentials)
  }
`;

export const COMMENT_MUTATION = gql`
  mutation createComment($comment: CommentData) {
    createComment(comment: $comment) {
      CommentData
    }
  }
  ${Comment.fragments.CommentData}
`;
