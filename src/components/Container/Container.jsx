import scss from "./container.module.scss";
import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className={scss.container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
