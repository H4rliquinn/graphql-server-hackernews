function feed(parent, args, context, info) {
  return context.prisma.links();
}

function votes(parent, args, context, info) {
  return context.prisma.votes();
}

module.exports = {
  feed,
  votes
};
