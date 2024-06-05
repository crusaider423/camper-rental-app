
import PropTypes from "prop-types";
import scss from "../../Features/features.module.scss";
// import { capitalizeFirstLetter } from "../../../../utils/helpers/capitalizeFirstLetter";
// import FeaturesList from "../../../../utils/helpers/FeaturesList";
// import {
//   detailedProperties,
// //   featuresProperties,
// } from "../../../../utils/helpers/properties";
import ContactForm from "../../Form/Form";
import { SvgIcon } from "../../../../utils/helpers/SvgIcon";

const Reviews = ({ item }) => {
 //   const detailsList = Object.entries(item)
//     .filter(([key]) => detailedProperties.includes(key))
//     .map(([key, value], i) => (
//       <li key={i}>
//         <span>{capitalizeFirstLetter(key)}</span>
//         <span>{capitalizeFirstLetter(value)}</span>
//       </li>
//     ));
  const comments = item.reviews.map(
    ({ reviewer_name, comment, reviewer_rating }, i) => (
      <li key={i} className={scss.list}>
        <div className={scss.commentWrrapper}>
          <span className={scss.letter}>{reviewer_name[0]}</span>
          <div className={scss.nameWrraper}>
            <p className={scss.name}>{reviewer_name}</p>
            <p className={scss.rating}>
              {[...Array(5)].map((_, index) => (
                <SvgIcon
                  key={index}
                  iconName="icon-star"
                  width="16px"
                  height="16px"
                />
              ))}
            </p>
          </div>
        </div>
        <p className={scss.text}>{comment}</p>
      </li>
    )
  );

  return (
    <div className={scss.tabWrapper}>
      <div className={scss.vehicleDetails}>
        <ul className={scss.comentsList}>{comments}</ul>
      </div>
      <div className={scss.formWrapper}>
        <ContactForm />
      </div>
    </div>
  );
};

Reviews.propTypes = {
  item: PropTypes.shape(),
};
export default Reviews;


