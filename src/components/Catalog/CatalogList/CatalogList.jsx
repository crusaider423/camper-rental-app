import PropTypes from "prop-types";
import { SvgIcon } from "../../../utils/helpers/SvgIcon";
import scss from "./catalogList.module.scss";
import { featuresPropertiesShort } from "../../../utils/helpers/properties";
import FeaturesList from "../../../utils/helpers/FeaturesList";

const CatalogList = ({ items, openModal }) => {
  const list = items.map((item,i) => (
    <li key={i} className={scss.wroper}>
      <div className={scss.image}>
        <img src={item.gallery[0]} alt={item.name} />
      </div>
      <div className={scss.cover}>
        <div className={scss.header}>
          <h2>{item.name}</h2>
          <p>
            {`€${item.price.toFixed(2)}`}
            <SvgIcon
              iconName="icon-favorit-1Default"
              width="24px"
              height="24px"
            />
          </p>
        </div>
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
        <div>
          <p className={scss.descr}>{item.description}</p>
        </div>
        <ul className={scss.detailsList}>
          <FeaturesList item={item} properties={featuresPropertiesShort} />
        </ul>
        <button type="button" onClick={() => openModal(item)}>
          Show more
        </button>
      </div>
    </li>
  ));
  return (
    <>
      <div>
        <h1 className="visually-hidden">Каталог Камперів</h1>
        <ul className={scss.list}>{list}</ul>
      </div>
      
    </>
  );
};

CatalogList.propTypes = {
  items: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default CatalogList;
