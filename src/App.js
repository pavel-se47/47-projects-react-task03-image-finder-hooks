import React, { useState, useEffect } from 'react';
import SearchBar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import imgApi from '../src/components/Api/api';
import LoadMoreButton from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { ThreeDots } from 'react-loader-spinner';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [img, setImg] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [bigImgUrl, setBigImgUrl] = useState('');
  const [bigImgAlt, setBigImgAlt] = useState('');

  useEffect(() => {
    if (searchQuery !== '') {
      fetchImage();
    }
    // eslint-disable-next-line
  }, [searchQuery]);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const inputValue = query => {
    setSearchQuery(query);
    setCurrentPage(1);
    setImg([]);
  };

  const fetchImage = () => {
    const options = { searchQuery, currentPage };

    setIsLoading(true);

    imgApi(options)
      .then(hits => {
        setImg(prevState => [...prevState, ...hits]);
        setCurrentPage(prevState => prevState + 1);
      })
      .catch(error => console.warn(error))
      .finally(() => setIsLoading(false));
  };

  const urlBigImg = e => {
    setBigImgUrl(e.target.dataset.sourse);
    setBigImgAlt(e.target.alt);
  };

  return (
    <>
      {showModal && (
        <Modal addToggleModal={toggleModal}>
          <img src={bigImgUrl} alt={bigImgAlt} />
        </Modal>
      )}
      <SearchBar onSubmit={inputValue} />
      <ImageGallery
        images={img}
        addToggleModal={toggleModal}
        addUrlBigImg={urlBigImg}
      />
      {isLoading && (
        <div className="isLoading">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="skyblue"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      )}
      {img.length > 0 && <LoadMoreButton onClick={fetchImage} />}
    </>
  );
}
