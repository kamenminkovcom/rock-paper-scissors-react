import React from 'react';
import PropTypes from 'prop-types';

import './HistoryRow.css';

const HistoryRow = ({result}) => (
    <div className="default-row-container history-row">
        <div/>
            <span>{result}</span>
        <div/>
    </div>
);

HistoryRow.propTypes = {
    result: PropTypes.string.isRequired
};

export default HistoryRow;

