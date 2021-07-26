export const mutationTypes = `
  type Mutation {
    createComment: String
  }
`;

export const mutationResolvers = {
  Mutation: {
    createComment: () => {
      return "Comment";

      // UNCOMMENT ONCE THIS MUTATION HAS THE PROPER TYPE

      // return {
      //   id: Math.random()
      //     .toString(36)
      //     .substr(2, 8),
      //   text: Math.random()
      //     .toString(36)
      //     .substr(2, 8),
      //   timestamp: new Date().toString()
      // };
    }
  }
};
