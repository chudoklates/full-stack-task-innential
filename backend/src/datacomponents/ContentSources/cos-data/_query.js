import fs from "fs";

export const queryTypes = `
  type Query {
    fetchSourceEditForm: ContentSource
  }
`;

export const queryResolvers = {
  Query: {
    fetchSourceEditForm: async () => {
      const data = fs.readFileSync("udemy.json", { encoding: "utf-8" });
      return JSON.parse(data);
    }
  }
};
