import React, { useState, useEffect, useContext } from 'react';
import classes from './Board.module.css';
import { IMAGES_EASY, IMAGES_MIDDLE, IMAGES_HARD } from 'assets/images.js';
import SingleCard from './SingleCard';
import clsx from 'clsx';

import { VIEWS } from 'utils/constants.js';
import { AppContext } from 'utils/context';

export const Board = ({ moveChange, moveToFinish, level }) => {
  const { location } = useContext(AppContext);
  const [cards, setCards] = useState([]);

  const [pickOne, setPickOne] = useState(null);
  const [pickTwo, setPickTwo] = useState(null);

  const mixImages = (amoutOfCards) => {
    let images;
    if (+amoutOfCards === 8) {
      images = [...IMAGES_EASY, ...IMAGES_EASY]
      .sort(() => Math.random() - 0.5)
      .map((img, index) => ({ ...img, id: index, status: false }));
    }
    if (+amoutOfCards === 12) {
      images = [...IMAGES_MIDDLE, ...IMAGES_MIDDLE]
      .sort(() => Math.random() - 0.5)
      .map((img, index) => ({ ...img, id: index, status: false }));
    }
    if (+amoutOfCards === 18) {
      images = [...IMAGES_HARD, ...IMAGES_HARD]
      .sort(() => Math.random() - 0.5)
      .map((img, index) => ({ ...img, id: index, status: false }));
    }
    setCards(images);
  };

  const chooseCard = (card) => {
      !pickOne ? setPickOne(card) : setPickTwo(card);
  };

  const reset = () => {
    setPickOne(null);
    setPickTwo(null);
    moveChange();
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
      reset(); // useCallback ???
      moveToFinish();
    } else {
      setTimeout(() => reset(), 1000);
    }
  }, [pickOne, pickTwo]);

  useEffect(() => {
    if (location === VIEWS.Game) {
      mixImages(level);
    }

  }, [location, level]);

  return (
    <div className={classes.board}>
      <div className={classes.flexBlock}>
        <div className={clsx(classes.boardGrid, {
          [classes.boardGrid__middle]: +level === 12,
          [classes.boardGrid__hard]: +level === 18,
        })} id="boardGrid">
          {cards.map((card) => (
            <SingleCard
              key={card.id}
              card={card}
              chooseCard={chooseCard}
              isOpen={card === pickOne || card === pickTwo || card.status}
              level={level}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
