import { Schema, model } from 'mongoose'
import type { Model, Document } from 'mongoose'

export interface WorkInterface extends Document {
  title: string
  author: string
}

export interface QueryWorksParameters {
  title?: string
  author?: string
}

export type AddWorkParameter = WorkInterface

const WorkSchema: Schema = new Schema<WorkInterface>({
  title: { type: String, required: true },
  author: { type: String, required: true },
})

const WorkModel: Model<WorkInterface> = model<WorkInterface>('Works', WorkSchema)

export default WorkModel
