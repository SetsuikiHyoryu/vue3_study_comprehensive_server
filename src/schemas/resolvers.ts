// dummy data
const works = [
  {
    title: '商君书',
    author: '商鞅',
  },
]

const resolvers = {
  Query: {
    works: () => works,
  },
}

export default resolvers
