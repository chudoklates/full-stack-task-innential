import fs from "fs";

export const mutationTypes = `
  type Mutation {
    editContentSource(inputData: ContentSourceInput!): ContentSource
  }
`;

export const mutationResolvers = {
  Mutation: {
    editContentSource: async (_, { inputData }) => {
      const existingData = JSON.parse(
        fs.readFileSync("udemy.json", { encoding: "utf-8" })
      );

      const newData = {
        ...existingData,
        ...inputData,
        updatedAt: new Date()
      };

      try {
        fs.writeFileSync("udemy.json", JSON.stringify(newData));
      } catch (err) {
        console.error(err);
      }
      return newData;
    }
  }
};
