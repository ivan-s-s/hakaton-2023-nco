import bottleImg from "./images/bottle.svg";
import catImg from './images/cat.svg';
import familyImg from "./images/family.svg";
import flowerImg from './images/flower.svg';
import footImg from "./images/foot.svg";
import giftImg from "./images/gift.svg";
import handImg from './images/hand.svg';
import heartImg from './images/heart.svg';
import homeImg from './images/home.svg';
import houseHeartImg from  "./images/house-heart.svg";
import hugImg from './images/hug.svg';
import moonImg from "./images/moon.svg";
import pawImg from "./images/paw.svg";
import peopleImg from './images/people.svg';
import starCardImg from "./images/starCard.svg";
import treeImg from './images/tree.svg';
import treeOneImg from "./images/treeOne.svg";
import tulipImg from "./images/tulip.svg";

import backImg from 'assets/images/question.svg';
import star from 'assets/images/star.svg';

const IMAGES_EASY = [
  {
    src: catImg,
    alt: 'cat',
  },
  {
    src: flowerImg,
    alt: 'flower',
  },
  {
    src: handImg,
    alt: 'hand',
  },
  {
    src: homeImg,
    alt: 'home',
  },
  {
    src: hugImg,
    alt: 'hug',
  },
  {
    src: peopleImg,
    alt: 'people',
  },
  {
    src: treeImg,
    alt: 'spruce',
  },
  {
    src: heartImg,
    alt: 'heart',
  },
];

const IMAGES_MIDDLE = [...IMAGES_EASY, 
  {
    src: bottleImg,
    alt: 'bottle',
  },
  {
    src: familyImg,
    alt: 'family',
  },
  {
    src: footImg,
    alt: 'foot',
  },
  {
    src: giftImg,
    alt: 'gift',
  },
];

const IMAGES_HARD = [...IMAGES_EASY, ...IMAGES_MIDDLE,
  {
    src: houseHeartImg,
    alt: 'house',
  },
  {
    src: moonImg,
    alt: 'moon',
  },
  {
    src: pawImg,
    alt: 'paw',
  },
  {
    src: starCardImg,
    alt: 'star',
  },
  {
    src: treeOneImg,
    alt: 'tree',
  },
  {
    src: tulipImg,
    alt: 'tulip',
  },
];

export { IMAGES_EASY, IMAGES_MIDDLE, IMAGES_HARD, backImg, star };
