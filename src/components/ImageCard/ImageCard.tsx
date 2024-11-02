import css from './ImageCard.module.css';
import { MdOutlineEmojiPeople } from 'react-icons/md';
import { BiSolidLike } from 'react-icons/bi';
import { Image } from '../../types';

interface ImageCardProps {
  image: Image;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <>
      <div className={css.thumb}>
        <img
          className={css.image}
          src={image.urls.small}
          alt={image.alt_description}
        />
      </div>
      <ul className={css.list}>
        <li className={css.item}>
          <MdOutlineEmojiPeople className={css.icon} />
          <p>{image.user.name}</p>
        </li>
        <li className={css.item}>
          <BiSolidLike className={css.icon} />
          <p>{image.likes}</p>
        </li>
      </ul>
    </>
  );
};

export default ImageCard;
