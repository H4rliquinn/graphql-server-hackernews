const { GraphQLServer } = require("graphql-yoga");

const typeDefs = `
type Query{
    info:String!
    users:[User!]!
    user(id:ID!):User
    feed:[Link!]!
}

type Mutation{
    createUser(name:String!):User!
}

type User {
    id: ID!
    name: String!
  }

type Link{
    id:ID!
    description: String!
    url: String!
}
`;
let links = [
  {
    id: "link-0",
    url: "www.hottographql.com",
    description: "Fullstack tutorial for GraphQL"
  }
];

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links
  },
  Link: {
    id: parent => parent.id,
    description: parent => parent.description,
    url: parent => parent.url
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});
server.start(() => console.log("Server is running on http://localhost:4000"));
