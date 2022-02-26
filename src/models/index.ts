import { connect } from 'mongoose'
import WorkModel from './works'

const main = async (): Promise<void> => {
  await connect('mongodb://localhost:27017/testDB', { user: 'apollo', pass: 'password' })
}

main()
  .then(() => console.log('数据库连接成功。'))
  .catch((error) => console.log(error))

export { WorkModel }
