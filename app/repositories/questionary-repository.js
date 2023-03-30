import { Client } from 'pg'
import config from '../config.json'

export class QuestionaryRepository {
  async addUser(questionary) {
    const client = new Client(config.dbConfig)
    try {
      await client.connect()
    } catch (error) {
      console.log(error)
    }

    try {
      await client.query(
        `INSERT INTO public.questionary ("name", student_id, "time", form) 
        VALUES($1, $2, $3, $4);`,
        [
          questionary?.name,
          questionary?.student_id,
          questionary?.time,
          questionary?.form,
        ]
      )
    } catch (e) {
      console.log(e)
    } finally {
      await client.end()
    }
  }
}
