import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Hand.css';

const Hand = ({isCpu, handType}) => (
    <div className={classNames('hand',
        'background-no-repeat',
        'background-contain-size',
        {rotate: isCpu},
        handType)}/>
);

Hand.propTypes = {
    isCpu: PropTypes.bool,
    handType: PropTypes.string.isRequired
};

export default Hand;
