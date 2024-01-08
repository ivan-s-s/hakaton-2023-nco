import React, { useState, useEffect, useContext } from 'react';
import classes from './Board.module.css';
import { IMAGES } from 'assets/images.js';
import SingleCard from './SingleCard';

import { VIEWS } from 'utils/constants.js';
import { AppContext } from 'utils/context';
import { GameTitle } from 'components';

export const Board = ({ moveChange, moveToFinish, ...props }) => {
  const { location } = useContext(AppContext);
  const [cards, setCards] = useState([]);

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
      setTimeout(() => reset(), 500);
    }
  }, [pickOne, pickTwo]);

  useEffect(() => {
    if (location === VIEWS.Game) {
      mixImages();
    }
  }, [location]);

  return (
    <div className={classes.board}>
      <div className={classes.flexBlock}>
        <div className={classes.boardGrid} id="boardGrid">
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
    </div>
  );
};
