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
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/api/feedback');
      const data = await result.json();
      setFeedbacks(data);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/feedback/${e}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, rating, comment }),
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <section id="feedback" className={`${styles.paddings} relative z-10 `}>
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
        <ul className="grid overflow-scroll shadow-md shadow-slate-600 p-5 h-72 rounded-xl lg:grid-cols-4 w-full md:grid-cols-2 sm:grid-cols-1 sm:gap-y-5 md:gap-y-5 gap-x-5 ">
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
        <div className="grid mt-5 grid-cols-2">
          <form className="glassmorphism-2 p-5 rounded-lg" onSubmit={handleSubmit}>
            <TypingText
              title="Envie seu feedback"
              textStyles="text-center text-white font-bold p-5 mb-5 text-xl"
            />
            <div className="mb-5 grid grid-cols-2 gap-x-10">
              <div>
                <label htmlFor="name" className="block text-gray-400 text-sm font-bold mb-2">Nome:</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="rating" className="block text-gray-400 text-sm font-bold mb-2">Classificação:</label>
                <select
                  className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="rating"
                  name="rating"
                  required
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="comment" className="block text-gray-400 text-sm font-bold mb-2">Comentário:</label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="comment"
                name="comment"
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                maxLength="500"
              />
              <div className="text-gray-400 text-xs">
                {500 - comment.length} caracteres restantes
              </div>
            </div>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Enviar
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default FeedbackList;
