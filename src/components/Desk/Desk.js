import React from 'react';
import PropTypes from 'prop-types';
import HistoryRow from './HistoryRow/HistoryRow';
import PlayButton from './PlayButton/PlayButton';
import PlayMessage from './PlayMessage/PlayMessage';
import ResultMessage from './ResultMessage/ResultMessage';
import HistoryHeader from './HistoryHeader/HistoryHeader';
import {handTypes, possibleResults} from '../../constants/game';

import './Desk.css';

const Desk = ({playFunc, isPlaying, history}) => (
    <div className="desk">
        <div className="desk-half">
            <PlayMessage shouldShow={isPlaying}/>
            <PlayButton playFunc={playFunc} shouldShow={!isPlaying}/>
            <ResultMessage message={!!history.length && history[0].result}
                           result={!!history.length && history[0].result}
                           shouldShow={!isPlaying && !!history.length}/>
            <HistoryHeader count={history.length}
                           classes={'history-header'}
                           shouldShow={!!history.length}/>
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
    })).isRequired,
    isPlaying: PropTypes.bool.isRequired
};

export default Desk;