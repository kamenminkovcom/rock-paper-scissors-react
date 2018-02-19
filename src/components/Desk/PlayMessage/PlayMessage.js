import React from 'react';
import withCondition from '../../../HOC/WithCondition';

import './PlayMessage.css';

const PlayMessage = () => (
    <div className="play-message">Please, make your choice.</div>
);

export default withCondition(PlayMessage);