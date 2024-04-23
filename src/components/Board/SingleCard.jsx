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
    <div className={clsx(classes.flipCard, {
      [classes.cardIsOpen]: isOpen,
    })}>
      <div className={clsx(classes.cardContent)}>
        <div className={clsx(classes.back, classes.visibility, {
            [classes.back__middle]: +level === 12,
            [classes.back__hard]: +level === 18,
          })}
          style={{backgroundImage: `url(${backImg})`, backgroundSize: "cover"}}
          onClick={clickOnCard}
        ></div>
        <div className={clsx(classes.card, classes.visibility, {
            [classes.card__middle]: +level === 12,
            [classes.card__hard]: +level === 18,
          })}
          style={{backgroundImage: `url(${card.src})`, backgroundSize: "66%", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}
        ></div>
      </div>
    </div>
  );
}

export default SingleCard;