import { useEffect, useState } from 'react';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import searchImages from './services/api';
import { Toaster } from 'react-hot-toast';
import { Image } from './types';
import Container from './components/Container/Container';

const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [totalPage, setTotalPages] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

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

  const handleSetQuery = (topic: string) => {
    setQuery(topic);
    setImages([]);
    setPage(1);
  };

  const handleChangePage = () => {
    setPage(prev => prev + 1);
  };

  const handleIsModalOpen = (image: Image) => {
    setSelectedImage(image);
  };

  const handleOnModalClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Container>
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
      </Container>
    </>
  );
};

export default App;
