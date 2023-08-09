import style from './Game.module.css';

function Game({ step, question, onClickVariant, dataQuestions }) {
  const proc = (step / dataQuestions.length) * 100;
  console.log(proc);

  return (
    <div className={style.main}>
      <div className={style.header}>
        <div
          style={{ width: `${proc}%`, backgroundColor: 'red', height: '12px' }}
        ></div>
      </div>
      <div>
        <h2>{question.title}</h2>
        <ul className={style.list}>
          {question.variants.map((variant, index) => (
            <li onClick={() => onClickVariant(index)} key={variant}>
              {variant}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Game;
