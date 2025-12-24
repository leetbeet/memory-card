import Card from './Card.jsx';
import { useState } from 'react';
import '../styles/app.css';

import CherryBomb from '../imgs/plants/Cherry_Bomb1.webp';
import Chomper from '../imgs/plants/Chomper1.webp';
import Peashooter from '../imgs/plants/Peashooter1.webp';
import PotatoMine from '../imgs/plants/Potato_Mine1.webp';
import Repeater from '../imgs/plants/Repeater1.webp';
import SnowPea from '../imgs/plants/Snow_Pea1.webp';
import Sunflower from '../imgs/plants/Sunflower1.webp';
import WallNut from '../imgs/plants/Wall-nut1.webp';
import BucketheadZombie from '../imgs/zombies/Buckethead_Zombie1.webp';
import ConeheadZombie from '../imgs/zombies/Conehead_Zombie1.webp';
import PoleVaultingZombie from '../imgs/zombies/Pole_Vaulting_Zombie1.webp';
import Zombie from '../imgs/zombies/Zombie1.webp';

const images = [
  { name: 'Cherry Bomb', file: CherryBomb },
  { name: 'Chomper', file: Chomper },
  { name: 'Peashooter', file: Peashooter },
  { name: 'Potato Mine', file: PotatoMine },
  { name: 'Repeater', file: Repeater },
  { name: 'Snow Pea', file: SnowPea },
  { name: 'Sunflower', file: Sunflower },
  { name: 'Wall-nut', file: WallNut },

  { name: 'Buckethead Zombie', file: BucketheadZombie },
  { name: 'Conehead Zombie', file: ConeheadZombie },
  { name: 'Pole Vaulting Zombie', file: PoleVaultingZombie },
  { name: 'Zombie', file: Zombie },
];

const shuffle = (arr) =>
  Array.isArray(arr) ? [...arr].sort(() => Math.random() - 0.5) : [];

export default function App() {
  const [shuffledImages, setShuffledImages] = useState(images);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [guessArr, setGuessArr] = useState([]);
  const [showDialog, setShowDialog] = useState(false);

  const handleClick = (image) => {
    if (guessArr.includes(image)) {
      setBestScore(Math.max(bestScore, score));
      setScore(0);
      setGuessArr([]);
    } else {
      const newScore = score + 1;
      setGuessArr([...guessArr, image]);
      setScore(newScore);

      if (newScore === 12) {
        setShowDialog(true);
      }
    }
    setShuffledImages(shuffle(images));
  };

  const handlePlayAgain = () => {
    setScore(0);
    setBestScore(0);
    setGuessArr([]);
    setShuffledImages(shuffle(images));
    setShowDialog(false);
  };

  return (
    <>
      <div className="scores">
        <h2>Score: {score}</h2>
        <h2>Best Score: {bestScore}</h2>
      </div>

      <main>
        {shuffledImages.map((image) => (
          <Card
            key={image.name}
            img={image.file}
            name={image.name}
            onClick={() => handleClick(image.name)}
          />
        ))}
      </main>

      {showDialog && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <p>You win!</p>
            <button onClick={handlePlayAgain}>Play again</button>
          </div>
        </div>
      )}
    </>
  );
}
