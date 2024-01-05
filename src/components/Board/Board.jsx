import React, { useState, useEffect, useContext } from 'react';
import classes from './Board.module.css';
import { IMAGES } from 'assets/images.js';
import SingleCard from './SingleCard';

import { VIEWS } from 'utils/constants.js';
import { AppContext } from 'utils/context';

export const Board = (props) => {
  const { location, setLocation, setGameScore } = useContext(AppContext);
  const [cards, setCards] = useState([]);
  const [move, setMove] = useState(0);
  const [moveToFinish, setMoveToFinish] = useState(0);

  const [pickOne, setPickOne] = useState(null);
  const [pickTwo, setPickTwo] = useState(null);

  const mixImages = () => {
    const images = [...IMAGES, ...IMAGES]
      .sort(() => Math.random() - 0.5)
      .map((img, index) => ({ ...img, id: index, status: false }));

    setCards(images);
  };

  const chooseCard = (card) => {
      !pickOne ? setPickOne(card) : setPickTwo(card);
  };

  const reset = () => {
    setPickOne(null);
    setPickTwo(null);
    setMove((move) => move + 1);
  };

  useEffect(() => {
    const bothCardsOpened = pickOne && pickTwo;

    if (!bothCardsOpened) {
      return;
    }
    if (pickOne.src === pickTwo.src) {
      setCards((cards) => {
        return cards.map((item) => {
          if (item.src === pickOne.src) {
            return { ...item, status: true };
          } else {
            return item;
          }
        });
      });
      reset();
      setMoveToFinish((move) => move + 1);
    } else {
      setTimeout(() => reset(), 500);
    }
  }, [pickOne, pickTwo]);

  useEffect(() => {
    if (moveToFinish === 8) {
      console.log('Finish');
      setGameScore({ moves: move });
      setLocation(VIEWS.Results);
    }
  }, [moveToFinish, setLocation, move, setGameScore]);

  useEffect(() => {
    if (location === VIEWS.Game) {
      mixImages();
    }
  }, [location]);

  return (
    <div className={classes.flexBlock}>
      <div className={classes.stats}>
        <div className={classes.moveCounter}>Ход: {move}</div>
        <div className={classes.move}>Счёт: {moveToFinish} / 8</div>
      </div>
      <div className={classes.boardGrid}>
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            chooseCard={chooseCard}
            isOpen={card === pickOne || card === pickTwo || card.status}
          />
        ))}
      </div>
    </div>
  );
};
