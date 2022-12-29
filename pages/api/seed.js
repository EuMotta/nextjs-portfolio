import Feedback from '../../models/Feedback';
import db from '../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  const feedback = new Feedback({
    name: req.body.name,
    rating: req.body.rating,
    comment: req.body.comment,
  });
  const savedFeedback = await feedback.save();
  await db.disconnect();

  res.send(savedFeedback);
};

export default handler;
