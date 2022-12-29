import Feedback from '../../models/Feedback';
import db from '../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  const feedbacks = await Feedback.find();
  await db.disconnect();

  res.send(feedbacks);
};

export default handler;
