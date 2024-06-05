import icons from "../../assets/icons/icons.svg";
import PropTypes from "prop-types";

export const SvgIcon = ({ iconName, width, height, className }) => {
  return (
    <svg width={width} height={height} className={className}>
      <use href={`${icons}#${iconName}`} />
    </svg>
  );
};

SvgIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
};
