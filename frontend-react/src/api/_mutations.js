import { gql } from "@apollo/client";

import {
  Comment,
} from './_fragments';

// REMOTE
export const LOGIN_MUTATION = gql`
  mutation login($userCredentials: userCredentials!) {
    login(input: $userCredentials)
  }
`;

export const COMMENT_MUTATION = gql`
  mutation createComment {
    createComment {
      ...CommentData
    }
  }
  ${Comment.fragments.CommentData}
`;
