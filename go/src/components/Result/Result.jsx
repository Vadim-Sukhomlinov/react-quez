import style from './Result.module.css';

function Result({ correct }) {
  return (
    <div className={style.main}>
      <h2>
        Вы ответили правильно на {correct}{' '}
        {correct === 0 ? 'вопросов' : correct === 1 ? 'вопрос' : 'вопроса'} из 4{' '}
      </h2>
      <div className={style.salute}>
        <img
          src="https://phonoteka.org/uploads/posts/2021-04/1617312008_37-p-krasivii-salyut-fon-pozdravlenie-37.jpg"
          alt="salute"
        />
      </div>
      <a href="/">
        <button>ПОПРОБОВАТЬ СНОВА</button>
      </a>
    </div>
  );
}

export default Result;
