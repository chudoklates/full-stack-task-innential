export const types = `
  type ContentSource {
    _id: ID
    name: String
    baseUrls: [String]
    slug: String
    enabled: Boolean
    affiliate: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    certText: String
    tags: [String!]
  }
`;

export const typeResolvers = {
  //
};
