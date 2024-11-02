import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <div className={css.wrapper}>
      <p>Not Found</p>
    </div>
  );
};

export default ErrorMessage;
