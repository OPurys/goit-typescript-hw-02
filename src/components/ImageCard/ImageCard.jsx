import css from './ImageCard.module.css';
import { MdOutlineEmojiPeople } from 'react-icons/md';
import { BiSolidLike } from 'react-icons/bi';

const ImageCard = ({ alt, likes, src, author }) => {
  return (
    <>
      <div className={css.thumb}>
        <img src={src} alt={alt} />
      </div>
      <ul className={css.list}>
        <li className={css.item}>
          <MdOutlineEmojiPeople className={css.icon} />
          <p>{author}</p>
        </li>
        <li className={css.item}>
          <BiSolidLike className={css.icon} />
          <p>{likes}</p>
        </li>
      </ul>
    </>
  );
};

export default ImageCard;
