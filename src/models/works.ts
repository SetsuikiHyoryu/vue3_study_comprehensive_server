import { Schema, model } from 'mongoose'
import type { Model, Document } from 'mongoose'

// 数据模型接口
export interface WorkInterface extends Document {
  title: string
  author: string
}

// 数据查询参数
export interface QueryWorksParameters {
  title?: string
  author?: string
}

// 数据添加参数
export type AddWorkParameter = WorkInterface

// 数据类型
const WorkSchema: Schema = new Schema<WorkInterface>({
  title: { type: String, required: true },
  author: { type: String, required: true },
})

// 数据模型
const WorkModel: Model<WorkInterface> = model<WorkInterface>('Works', WorkSchema)

export default WorkModel
