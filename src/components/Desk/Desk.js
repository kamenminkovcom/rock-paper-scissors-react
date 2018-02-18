import React from 'react';
import PropTypes from 'prop-types';
import HistoryRow from './HistoryRow/HistoryRow';
import PlayButton from './PlayButton/PlayButton';
import PlayMessage from './PlayMessage/PlayMessage';
import ResultMessage from './ResultMessage/ResultMessage';
import {handTypes, possibleResults} from '../../constants/game';

import './Desk.css';

//todo make this component cleaner
const Desk = ({playFunc, isPlaying, history}) => (
    <div className="desk">
        <div className="desk-half">
            {
                isPlaying ?
                    <PlayMessage/> :
                    <div>
                        <PlayButton playFunc={playFunc}/>
                        {history.length !== 0 &&
                        <ResultMessage message={history[0].result}
                                       result={history[0].result}/>}
                    </div>
            }
        </div>
        <div className="desk-half">
            {
                history.map(h => <HistoryRow result={h.result}
                                             cpuChoice={h.cpuChoice}
                                             playerChoice={h.playerChoice}
                                             key={h.id}/>)
            }
        </div>
    </div>
);

Desk.propTypes = {
    playFunc: PropTypes.func.isRequired,
    history: PropTypes.arrayOf(PropTypes.shape({
        cpuChoice: PropTypes.oneOf(Object.values(handTypes)),
        result: PropTypes.oneOf(Object.values(possibleResults)),
        playerChoice: PropTypes.oneOf(Object.values(handTypes)),
        id: PropTypes.string.isRequired
    })).isRequired
};

export default Desk;