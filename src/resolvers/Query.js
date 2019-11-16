async function feed(parent, args, context, info) {
  const where = args.filter
    ? {
        OR: [
          { description_contains: args.filter },
          { url_contains: args.filter }
        ]
      }
    : {};

  const links = await context.prisma.links({
    where
  });
  return links;
}

function votes(parent, args, context, info) {
  return context.prisma.votes();
}

module.exports = {
  feed,
  votes
};
