import { useEffect, useState } from 'react';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import searchImages from './services/api.js';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [totalPage, setTotalPages] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await searchImages(query, page);
        setImages(prev => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [query, page]);

  const handleSetQuery = topic => {
    setQuery(topic);
    setImages([]);
    setPage(1);
  };

  const handleChangePage = () => {
    setPage(prev => prev + 1);
  };

  const handleIsModalOpen = image => {
    setSelectedImage(image);
  };

  const handleOnModalClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleSetQuery} />
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleIsModalOpen} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={handleOnModalClose}
          image={selectedImage}
        />
      )}
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {totalPage > page && <LoadMoreBtn onClick={handleChangePage} />}
      <Toaster />
    </>
  );
};

export default App;
