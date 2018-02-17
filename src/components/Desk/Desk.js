import React from 'react';
import PropTypes from 'prop-types';
import HistoryRow from './HistoryRow/HistoryRow';

import './Desk.css';

const Desk = ({playFunc, isPlaying, history}) => (
    <div className="desk">
        <div className="desk-half">
            {
                isPlaying ?
                    <span>Please, make your choice.</span> :
                    <button onClick={playFunc}>Play!</button>
            }
        </div>
        <div className="desk-half">
            {
                history.map(h => <HistoryRow result={h.result}/>)
            }
        </div>
    </div>
);

Desk.propTypes = {
    handleClick: PropTypes.func.isRequred,
};

export default Desk;