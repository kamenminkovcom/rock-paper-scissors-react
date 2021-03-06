import React from 'react';
import PropTypes from 'prop-types';
import withCondition from '../../../HOC/WithCondition';

import './PlayButton.css';

const PlayButton = ({playFunc}) => (
    <div className="play-button-container">
        <button className="play-button" onClick={playFunc}>Play!</button>
    </div>
);

PlayButton.propTypes = {
    playFunc: PropTypes.func.isRequired
};

export default withCondition(PlayButton);
