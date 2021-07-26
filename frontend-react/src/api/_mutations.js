import { gql } from "@apollo/client";

// REMOTE
export const LOGIN_MUTATION = gql`
  mutation login($userCredentials: userCredentials!) {
    login(input: $userCredentials)
  }
`;

export const COMMENT_MUTATION = gql`
  mutation createComment {
    createComment
  }
`;
