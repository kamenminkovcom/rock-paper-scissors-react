import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withCondition from '../../../HOC/WithCondition';
import {classNames, possibleResults} from '../../../constants/game';

import './ResultMessage.css';

const ResultMessage = ({message, result}) => (
    <div className={classnames(classNames[result],
        'result-message',
        `${classNames[result]}-border`,
        'uppercase')}>
        {message}
    </div>
);

//may we will change the messages, so we are receiving message and result props
//for now they are equal
ResultMessage.propTypes = {
    message: PropTypes.string.isRequired,
    result: PropTypes.oneOf(Object.values(possibleResults))
};

export default withCondition(ResultMessage);