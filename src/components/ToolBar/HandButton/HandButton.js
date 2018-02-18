import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './HandButton.css';

const HandButton = ({handleClick, handType}) => (
    <button onClick={handleClick}
            className={classnames(handType,
                'background-no-repeat',
                'background-contain-size',
                'hand-button')}/>
);

HandButton.propTypes = {
    handleClick: PropTypes.func.isRequired,
    handType: PropTypes.string.isRequired
};

export default HandButton;