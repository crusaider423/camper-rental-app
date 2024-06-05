import PropTypes from "prop-types";
import { useState } from "react";
import { SvgIcon } from "../../../utils/helpers/SvgIcon";
import scss from "./camper.module.scss";
import Features from "../Features/Features";
import Reviews from "./Reviews/Reviews";

const Camper = ({ item }) => {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(null); 
    } else {
      setActiveTab(tab); 
    }
  };

  const campers = item.gallery.map((camperItem, i) => {
    return <li key={i}>{<img src={camperItem} alt="camper" />}</li>;
  });

  return (
    <>
      <div className={scss.camperWrapper}>
        <div className={scss.wrapper}>
          <h2>{item.name}</h2>
          <div className={scss.details}>
            <p>
              <SvgIcon iconName="icon-star" width="16px" height="16px" />
              {`${item.rating}(${item.reviews.length} Reviews)`}
            </p>
            <p>
              <SvgIcon iconName="icon-location" width="16px" height="16px" />
              {item.location}
            </p>
          </div>
          <p>{`€${item.price.toFixed(2)}`}</p>
        </div>
        <ul>{campers}</ul>
        <div className={scss.descrWrapper}>
          <p>{item.description}</p>
        </div>
      </div>
      <div className={scss.tabWrapper}>
        <button
          type="button"
          onClick={() => toggleTab("features")}
          className={activeTab === "features" ? scss.activeTab : ""}
        >
          Features
        </button>
        <button
          type="button"
          onClick={() => toggleTab("reviews")}
          className={activeTab === "reviews" ? scss.activeTab : ""}
        >
          Reviews
        </button>
      </div>
      {activeTab === "features" && <Features item={item} />}
      {activeTab === "reviews" && <Reviews item={item} />}
    </>
  );
};

Camper.propTypes = {
  item: PropTypes.shape(),
};

export default Camper;
