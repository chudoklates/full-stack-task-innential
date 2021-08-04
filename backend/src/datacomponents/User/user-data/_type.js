import { permissions } from "../../../directives";

export const types = `
  type Comment {
    id: ID!
    timestamp: String!
    text: String!
  }
  type User {
    id: ID!
    name: String
    username: String
    email: String @${permissions.can.read.user_profile}
    comments: [Comment!]
  }
  `;

export const typeResolvers = {
  //
};
