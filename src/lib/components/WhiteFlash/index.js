import React from 'react';
import PropTypes from 'prop-types';
import './styles/whiteFlash.css';

export const WhiteFlash = ({ isShowWhiteFlash, whiteFlashClassName, whiteFlashTransitionClassName }) => {
  const flashDoTransition = isShowWhiteFlash ? whiteFlashTransitionClassName : '';
  const flashClasses = `${whiteFlashClassName} ${flashDoTransition}`;

  return (
    <div className={flashClasses}>
    </div>
  );
};

WhiteFlash.propTypes = {
  whiteFlashClassName: PropTypes.string.isRequired,
  whiteFlashTransitionClassName: PropTypes.string.isRequired,
  isShowWhiteFlash: PropTypes.bool.isRequired
};

export default WhiteFlash;
