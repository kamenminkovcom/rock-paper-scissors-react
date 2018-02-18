import React from 'react';
import PropTypes from 'prop-types';
import clssnames from 'classnames';
import {classNames, possibleResults, handTypes} from '../../../constants/game';

import './HistoryRow.css';

const HistoryRow = ({result, cpuChoice, playerChoice}) => (
    <div className="default-row-container history-row">
        <div className={clssnames(cpuChoice,
            'choice-icon',
            'background-no-repeat',
            'background-contain-size',
            'rotate')}/>
            <span className={clssnames('capitalize', classNames[result])}>{result}</span>
        <div className={clssnames(playerChoice,
            'choice-icon',
            'background-no-repeat',
            'background-contain-size')}/>
    </div>
);

HistoryRow.propTypes = {
    result: PropTypes.oneOf(Object.values(possibleResults)).isRequired,
    cpuChoice: PropTypes.oneOf(Object.values(handTypes)).isRequired,
    playerChoice: PropTypes.oneOf(Object.values(handTypes)).isRequired
};

export default HistoryRow;

