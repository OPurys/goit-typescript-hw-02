import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={css.list}>
      {images.map(image => (
        <li
          key={image.id}
          className={css.item}
          onClick={() => onImageClick(image)}
        >
          <ImageCard
            alt={image.alt_description}
            likes={image.likes}
            src={image.urls.small}
            author={image.user.name}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
