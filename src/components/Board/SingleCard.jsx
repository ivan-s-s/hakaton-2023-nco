import React, { useEffect } from 'react';

import classes from './Board.module.css';
import { backImg } from 'assets/images';
import clsx from 'clsx';

function SingleCard({ card, chooseCard, isOpen, level }) {
  useEffect(() => {}, [isOpen]);

  const clickOnCard = () => {
    chooseCard(card);
  };

  return (
    <div className='card'>
      <div className={clsx(classes.card, {
        [classes.card__middle]: +level === 12,
        [classes.card__hard]: +level === 18,
        [classes.open]: isOpen,
        [classes.none]: !isOpen,
      })}>
      <img
        className={clsx(classes.imgCard)}
        src={card.src}
        alt={card.alt}
      />
      </div>
      <img
        className={clsx({
          [classes.none]: isOpen,
          [classes.back]: !isOpen,
          [classes.back__middle]: +level === 12,
          [classes.back__hard]: +level === 18,
        })}
        src={backImg}
        onClick={clickOnCard}
        alt="cards back"
      />
    </div>
  );
}

export default SingleCard;
