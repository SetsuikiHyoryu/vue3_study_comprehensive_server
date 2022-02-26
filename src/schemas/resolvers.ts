import type {
  AddWorkParameter,
  QueryWorksParameters,
  WorkInterface,
} from '../models/works'

import { WorkModel } from '../models/index'

const resolvers = {
  Query: {
    works: async (
      parent: any,
      { title, author }: QueryWorksParameters
    ): Promise<WorkInterface[]> => {
      const titleRegex = new RegExp(title ?? 'null')
      const authorRegex = new RegExp(author ?? 'null')

      if (!title && !author) {
        return WorkModel.find({})
      }

      if (title && author) {
        return WorkModel.find({
          author: { $regex: authorRegex },
          title: { $regex: titleRegex },
        })
      }

      if (title && !author) {
        return WorkModel.find({ author: { $regex: authorRegex } })
      }

      if (author && !title) {
        return WorkModel.find({ title: { $regex: titleRegex } })
      }

      return []
    },
  },

  Mutation: {
    addWork: async (
      parent: any,
      { title, author }: AddWorkParameter
    ): Promise<boolean> => {
      const oldList = await WorkModel.find({})

      const existed = oldList.some((item: WorkInterface): boolean => {
        return item.title === title && item.author === author
      })

      if (existed) {
        return false
      }

      const newList = await WorkModel.insertMany([{ author, title }])

      return newList > oldList
    },
  },
}

export default resolvers
