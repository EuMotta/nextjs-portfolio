import Feedback from '../../../models/Feedback';
import db from '../../../utils/db';

import data from '../../../utils/data';

const handler = async (req, res) => {
  await db.connect();
  await Feedback.deleteMany();
  await Feedback.insertMany(data.feedbacks);
  await db.disconnect();

  res.send({ message: 'A SEED AGORA TA FUNFANDO!!' });
};

export default handler;
