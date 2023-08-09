import { useState } from 'react';
import Game from './components/Game/Game';
import Result from './components/Result/Result';
import style from './main.css';

const dataQuestions = [
  {
    title: 'С какого ты города',
    variants: ['Красный Луч', 'Луганск', 'Москва'],
    current: 0,
  },
  { title: 'Сколько тебе лет', variants: [28, 29, 30], current: 1 },
  {
    title: 'Кто построил Лондонский Тауэр',
    variants: ['Beckham', ' Вильгельму I', 'queen Elizaveta 2'],
    current: 1,
  },
  {
    title: 'В каком году крестили Русь',
    variants: [1211, 988, 935],
    current: 1,
  },
];

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const question = dataQuestions[step];

  function onClickVariant(index) {
    setStep(step + 1);
    console.log(step, index);

    if (index === question.current) {
      setCorrect(correct + 1);
      console.log('HELLO');
    }
  }

  return (
    <div className="style">
      {step !== dataQuestions.length ? (
        <Game
          step={step}
          question={question}
          onClickVariant={onClickVariant}
          dataQuestions={dataQuestions}
        />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
