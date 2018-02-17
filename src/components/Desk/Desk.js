import React from 'react';
import PropTypes from 'prop-types';
import HistoryRow from './HistoryRow/HistoryRow';
import {handTypes, possibleResults} from '../../constants/game';

import './Desk.css';

const Desk = ({playFunc, isPlaying, history}) => {

    return (
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
                    history.map(h => <HistoryRow result={h.result}
                                                 cpuChoice={h.cpuChoice}
                                                 playerChoice={h .playerChoice}/>)
                }
            </div>
        </div>
    );
}

Desk.propTypes = {
    handleClick: PropTypes.func.isRequred,
    history: PropTypes.arrayOf(PropTypes.shape({
        cpuChoice: PropTypes.oneOf(Object.values(handTypes)),
        result: PropTypes.oneOf(Object.values(possibleResults)),
        playerChoice: PropTypes.oneOf(Object.values(handTypes))
    })).isRequired
};

export default Desk;