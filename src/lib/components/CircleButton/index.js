import React from 'react';
import PropTypes from 'prop-types';

import './styles/circleButton.css';

export const CircleButton = ({
  onClick,
  isClicked,
  innerCircleClassName,
  innerCircleClickedClassName,
  outerCicleClassName,
  circlesContainerClassName
}) => {
  const innerCircleClasses = isClicked ? innerCircleClickedClassName : '';
  return (
    <div className={circlesContainerClassName}>
      <div
        className={outerCicleClassName}
        onClick = {
          (e) => {
            if (!isClicked) {
              onClick();
            }
          }
        }
      >
        <div className={`${innerCircleClassName} ${innerCircleClasses}`}>
        </div>
      </div>
    </div>
  );
};

CircleButton.propTypes = {
  innerCircleClassName: PropTypes.string.isRequired,
  innerCircleClickedClassName: PropTypes.string.isRequired,
  outerCicleClassName: PropTypes.string.isRequired,
  circlesContainerClassName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isClicked: PropTypes.bool.isRequired
};

export default CircleButton;
