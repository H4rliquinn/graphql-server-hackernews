const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const Subscription = require("./resolvers/Subscription");
const User = require("./resolvers/User");
const Link = require("./resolvers/Link");
const Vote = require("./resolvers/Vote");
// let links = [
//   {
//     id: "link-0",
//     url: "www.hottographql.com",
//     description: "Fullstack tutorial for GraphQL"
//   },
//   {
//     id: "link-1",
//     url: "www.sandbox.com",
//     description: "Sandbox for GraphQL"
//   }
// ];
// let idCount = links.length;

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Link,
  Vote

  // Query: {
  //   info: () => `This is the API of a Hackernews Clone`,
  // feed: () => links,
  // feed: (root, args, context, info) => {
  //   return context.prisma.links();
  // },
  // link: (parent, args) => {
  //   console.log("Sending Back ID: " + args.id);
  //   let retVal = "";
  //   links.forEach(x => {
  //     if (x.id === args.id) {
  //       console.log(x + ":" + x.id + "/" + args.id);
  //       retVal = x;
  //     }
  //   });
  //   return retVal;
  // }
  // updateLink: (parent, args) => {

  // }
  // },
  //Trivial - Automatic
  // ,
  // Link: {
  //   id: parent => parent.id,
  //   description: parent => parent.description,
  //   url: parent => parent.url
  // }
  // Mutation: {
  // post: (parent, args) => {
  //   const link = {
  //     id: `link-${idCount++}`,
  //     description: args.description,
  //     url: args.url
  //   };
  //   links.push(link);
  //   return link;
  // },
  // updateLink: (id, args) => {
  //   let retVal = "";
  //   links.forEach(x => {
  //     if (x.id === args.id) {
  //       if (args.url != null) {
  //         x.url = args.url;
  //       }
  //       if (args.description != null) {
  //         x.description = args.description;
  //       }
  //       retVal = x;
  //     }
  //   });
  //   return retVal;
  // },
  // deleteLink: (parent, args) => {
  //   let rem = "";
  //   let ret = "";
  //   for (let x = 0; x < links.length; x++) {
  //     if (links[x].id === args.id) {
  //       rem = x;
  //       ret = links[x];
  //     }
  //   }
  //   links.splice(rem, 1);
  //   return ret;
  // }
  // post: (root, args, context) => {
  //   return context.prisma.createLink({
  //     url: args.url,
  //     description: args.description
  //   });
  // }
  // }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    };
  }
});
server.start(() => console.log("Server is running on http://localhost:4000"));
