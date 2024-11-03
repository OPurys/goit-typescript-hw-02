import css from './Container.module.css';

type Props = {
  children: React.ReactElement;
};

const Container = ({ children }: Props) => {
  return <div className={css.container}>{children}</div>;
};

export default Container;
