import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCatalog } from "../../redux/selectors/catalog-selector";
import { fetchCatalog } from "../../redux/operations/operations-catalog";
import CatalogList from "./CatalogList/CatalogList";
import Modal from "../Modal/Modal";
import Camper from "./Camper/Camper";
import scss from "./catalog.module.scss";

const Catalog = () => {
  const dispatch = useDispatch();
  const { error, items } = useSelector(selectCatalog);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [bodyOverflow, setBodyOverflow] = useState("auto");

  useEffect(() => {
    if (isModalOpen) {
      setBodyOverflow("hidden");
    } else {
      setBodyOverflow("auto");
    }
  }, [isModalOpen]);

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const handleOutsideClick = (event) => {
    event.preventDefault();
    if (!event.target.closest(".modal")) {
      closeModal();
    }
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {error && <p>{error}</p>}
      {items.length > 0 && (
        <div className={scss.catalogWrraper}>
          <CatalogList items={items} openModal={openModal} />
          <button
            className={scss.load}
            onClick={() => dispatch(fetchCatalog())}
          >
            Load more
          </button>
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            onClickOutside={handleOutsideClick}
          >
            {<Camper item={selectedItem} />}
          </Modal>
          <style>
            {`
          body {
            overflow: ${bodyOverflow}; 
          }
        `}
          </style>
        </div>
      )}
    </>
  );
};

export default Catalog;
