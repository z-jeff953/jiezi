import {
  QuestionaryRepository,
  IQuestionary,
} from '../../repositories/questionary-repository'

export default (req, res) => {
  try {
    switch (req.method.toUpperCase()) {
      case 'POST':
        _post(req, res)
        break
      default:
        res.status(404).send('')
        break
    }
  } catch (e) {
    console.debug('error')
    console.debug(e)
  }
}

async function _post(req, res) {
  try {
    let questionaryRepository = new QuestionaryRepository()
    let questionary: IQuestionary = JSON.parse(req.body) as IQuestionary
    await questionaryRepository.addUser(questionary)

    res
      .writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'X-Requested-With',
        'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
        'X-Powered-By': ' 3.2.1',
        'Content-Type': 'application/json;charset=utf-8',
      })
      .send({ status: 'ok' })
    return
  } catch (error) {
    console.debug('error')
    console.debug(error)
  }
}
