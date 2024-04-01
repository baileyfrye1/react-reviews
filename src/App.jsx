import { useState } from 'react';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import reviews from './data';

const App = () => {
  const [index, setIndex] = useState(0);
  const { image, job, name, text } = reviews[index];

  const prevReview = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(reviews.length - 1);
    }
  };

  const nextReview = () => {
    if (index === reviews.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const surpriseReview = () => {
    const randomNum = Math.floor(Math.random() * reviews.length);
    setIndex(randomNum);
  };

  return (
    <main>
      <section className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <FaChevronLeft className='prev-btn' onClick={prevReview} />
          <FaChevronRight className='next-btn' onClick={nextReview} />
        </div>
        <button
          type='button'
          className='btn btn-hipster'
          onClick={surpriseReview}
        >
          Surprise Me
        </button>
      </section>
    </main>
  );
};
export default App;
