export default `
  input ContentSourceInput {
    name: String!
    baseUrls: [String]!
    affiliate: Boolean
    certText: String
    tags: [String!]
  }
`;
