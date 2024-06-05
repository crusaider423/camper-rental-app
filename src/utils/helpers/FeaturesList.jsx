import { capitalizeFirstLetter } from "./capitalizeFirstLetter.js";
import { camelCaseToWords } from "./camalCase.js";
import { SvgIcon } from "./SvgIcon.jsx";
import { exeptionProperties } from "./properties.js";

const FeaturesList = ({ item, properties }) => {
  return properties.map((value, i) => {
    let displayValue = item.details[value]
      ? item.details[value]
      : capitalizeFirstLetter(item[value]);
    if (value === "kitchen" && typeof item.details[value] === "number") {
      displayValue = "Kitchen";
    } else if (exeptionProperties.includes(value)) {
      displayValue += " " + camelCaseToWords(value);
    }
    if (value === "AC") {
      displayValue = "AC";
    }
    return (
      <li key={i}>
        <SvgIcon iconName={`icon-${value}`} />
        {displayValue}
      </li>
    );
  });
};
export default FeaturesList;
