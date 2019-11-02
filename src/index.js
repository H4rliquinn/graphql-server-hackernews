const { GraphQLServer } = require("graphql-yoga");

let links = [
  {
    id: "link-0",
    url: "www.hottographql.com",
    description: "Fullstack tutorial for GraphQL"
  },
  {
    id: "link-1",
    url: "www.sandbox.com",
    description: "Sandbox for GraphQL"
  }
];
let idCount = links.length;

const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
    link: (parent, args) => {
      console.log("Sending Back ID: " + args.id);
      let retVal = "";
      links.forEach(x => {
        if (x.id === args.id) {
          console.log(x + ":" + x.id + "/" + args.id);
          retVal = x;
        }
      });
      return retVal;
    }
  },
  //Trivial - Automatic
  // ,
  // Link: {
  //   id: parent => parent.id,
  //   description: parent => parent.description,
  //   url: parent => parent.url
  // }
  Mutation: {
    post: (parent, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url
      };
      links.push(link);
      return link;
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});
server.start(() => console.log("Server is running on http://localhost:4000"));
