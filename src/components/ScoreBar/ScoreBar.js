import React from 'react';
import PropTypes from 'prop-types';

import './ScoreBar.css';

const ScoreBar = ({cpuScores, playerScores}) => (
    <div className="score-bar-container default-row-container">
        <span className="bold">
            CPU: <span>{cpuScores}</span>
        </span>
        <span>Scores</span>
        <span className="bold">
            You: <span>{playerScores}</span>
        </span>
    </div>
);

PropTypes.ScoreBar = {
    cpuScores: PropTypes.number.isRequired,
    playerScores: PropTypes.number.isRequired,
};

export default ScoreBar;