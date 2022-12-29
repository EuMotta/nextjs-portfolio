import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { TypingText } from '../components';

const Fdbs = (props) => {
  const { rating } = props;
  const filledStars = Math.floor(rating);
  const emptyStars = 5 - filledStars;

  return (
    <div className="flex">
      {Array.from({ length: filledStars }).map((_, index) => (
        <AiFillStar key={`filled-${index}`} />
      ))}
      {rating % 1 !== 0 && <AiOutlineStar key="half" />}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <AiOutlineStar key={`empty-${index}`} />
      ))}
    </div>
  );
};
const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/api/feedbackPush');
      const data = await result.json();
      setFeedbacks(data);
    };
    fetchData();
  }, []);

  return (
    <section id="feedback" className={`${styles.paddings} relative z-10 `}>
      <ul className="grid lg:grid-cols-4 w-full h-full md:grid-cols-2 sm:grid-cols-1 sm:gap-y-5 md:gap-y-5 gap-x-5 ">
        {feedbacks.map((feedback) => (
          <ul key={feedback._id} className="text-white p-5 glassmorphism-2 rounded-xl shadow-lg shadow-slate-900">
            <li>
              <div className="flex justify-center">
                <div className="grid gap-y-3">
                  <div className="text-md">
                    <h2>{feedback.name}</h2>
                  </div>
                </div>
              </div>
              <div className="text-center border px-1 text-sm border-slate-700 rounded-md overflow-scroll h-24">
                <p className="font-mono">{feedback.comment}</p>
              </div>
              <div className="flex items-center pt-2">
                <Fdbs rating={feedback.rating} /> <span className="text-[#ffffff80]  font-mono">{feedback.rating}</span>
              </div>
            </li>
          </ul>
        ))}
      </ul>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="max-w-screen-xl mx-auto"
      >
        <TypingText
          title="Feedbacks"
          textStyles="text-center text-white font-bold p-10 mb-5 text-3xl"
        />
        <div className="grid lg:grid-cols-4 w-full h-full md:grid-cols-2 sm:grid-cols-1 sm:gap-y-5 md:gap-y-5 gap-x-5 ">
          {/* {data.feedbacks.map((feedback, index) => (
            <motion.ul
              variants={fadeIn(`${feedback.fadeIn}`, 'tween', 0, 1.5)}
              key={index}
              className="text-white p-5 glassmorphism-2 rounded-xl shadow-lg shadow-slate-900"
            >
              <li>
                <div className="flex justify-center">
                  <div className="grid gap-y-3">
                    <div className="flex justify-center">
                    </div>
                    <div className="text-md">
                      <h2>{feedback.name}</h2>
                    </div>
                  </div>
                </div>
                <div className="text-center border px-1 text-sm border-slate-700 rounded-md overflow-scroll h-24">
                  <p className="font-mono">{feedback.comment}</p>
                </div>
              </li>
            </motion.ul>
          ))} */}
        </div>
      </motion.div>
    </section>
  );
};

export default FeedbackList;
