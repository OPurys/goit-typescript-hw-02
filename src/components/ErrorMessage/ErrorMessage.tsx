import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <div className={css.wrapper}>
      <img
        className={css.image}
        src="https://landingi.com/wp-content/uploads/2022/03/en_4041.png"
        alt="NotFound404"
      />
    </div>
  );
};

export default ErrorMessage;
