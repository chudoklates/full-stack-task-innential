import { permissions } from "../../../directives";

export const types = `
  type User {
    id: ID!
    name: String
    username: String
    comments: [Comment]
    email: String @${permissions.can.read.user_profile}
  }

  type Comment {
    id: String!
    timestamp: String!
    text: String!
  }
  `;

export const typeResolvers = {
  //
};
