import React from 'react';
import PropTypes from 'prop-types';
import clssnames from 'classnames';

import './HistoryRow.css';

const HistoryRow = ({result, cpuChoice, playerChoice}) => (
    <div className="default-row-container history-row">
        <div className={clssnames(cpuChoice,
            'choice-icon',
            'background-no-repeat',
            'background-contain-size')}/>
            <span>{result}</span>
        <div className={clssnames(playerChoice,
            'choice-icon',
            'background-no-repeat',
            'background-contain-size')}/>
    </div>
);

HistoryRow.propTypes = {
    result: PropTypes.string.isRequired,
    cpuChoice: PropTypes.string.isRequired,
    playerChoice: PropTypes.string.isRequired
};

export default HistoryRow;

