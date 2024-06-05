import PropTypes from "prop-types";
import scss from "./features.module.scss";
import { capitalizeFirstLetter } from "../../../utils/helpers/capitalizeFirstLetter";
import FeaturesList from "../../../utils/helpers/FeaturesList";
import {
  detailedProperties,
  featuresProperties,
} from "../../../utils/helpers/properties";
import ContactForm from "../Form/Form";

const Features = ({ item }) => {
  const detailsList = Object.entries(item)
    .filter(([key]) => detailedProperties.includes(key))
    .map(([key, value], i) => (
      <li key={i}>
        <span>{capitalizeFirstLetter(key)}</span>
        <span>{capitalizeFirstLetter(value)}</span>
      </li>
    ));

  return (
    <div className={scss.tabWrapper}>
      <div className={scss.vehicleDetails}>
        <ul className={scss.features}>
          <FeaturesList item={item} properties={featuresProperties} />
        </ul>
        <p>Vehicle details</p>
        <ul className={scss.detailsList}>{detailsList}</ul>
      </div>
      <div className={scss.formWrapper}>
        <ContactForm />
      </div>
    </div>
  );
};

Features.propTypes = {
  item: PropTypes.shape(),
};
export default Features;
