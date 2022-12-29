import Feedback from '../../../models/Feedback';
import db from '../../../utils/db';

// Criando um novo comentário
const postHandler = async (req, res) => {
  await db.connect();
  const newFeedback = new Feedback({
    name: 'Anônimo',
    rating: 5,
    comment: 'Escreva seu comentário',
  });
  const feedbacks = await newFeedback.save();
  await db.disconnect();
  res.send({ message: 'Comentário adicionado com sucesso!', feedbacks });
};

const getHandler = async (req, res) => {
  await db.connect();
  const feedbacks = await Feedback.find({});
  await db.disconnect();
  res.send(feedbacks);
};

const handler = async (req, res) => {
  if (req.method === 'GET') {
    return getHandler(req, res);
  } if (req.method === 'POST') {
    return postHandler(req, res);
  }
  return res.status(400).send({ message: 'Deu merda!' });
};

export default handler;
