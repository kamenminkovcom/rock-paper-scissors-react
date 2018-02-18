import React from 'react';
import uid from 'uid';
import Hand from '../../components/Hand/Hand';
import Desk from '../../components/Desk/Desk';
import ScoreBar from '../../components/ScoreBar/ScoreBar';
import ToolBar from '../../components/ToolBar/ToolBar';
import {bindTo, randomizeHandTypes, getResult, resizeCollection} from '../../utils/utils';
import {handTypes, gameRules, gameHistoryCount, defaultChoice} from '../../constants/game';

import './Game.css';

class Game extends React.Component {
    constructor(props) {
        super(props);
        bindTo('startGame', 'choseHandType')(this);
        this.state = {
            isPlaying: false,
            cpuScore: 0,
            playerScore: 0,
            history: []
        };
    }

    startGame() {
        this.setState(prevState => ({
            isPlaying: !prevState.isPlaying,
            cpuChoice: defaultChoice,
            playerChoice: defaultChoice
        }));
    }

    choseHandType(playerChoice) {
        const handTypesCollection = Object.values(handTypes);
        const handTypesRandomIndex = randomizeHandTypes(handTypesCollection.length);
        const cpuChoice = handTypesCollection[handTypesRandomIndex];
        //Results from the current game
        const cpuPoints = gameRules[cpuChoice][playerChoice];
        const playerPoints = gameRules[playerChoice][cpuChoice];
        const gameResult = {
            cpuChoice,
            playerChoice,
            result: getResult(cpuPoints, playerPoints),
            id: uid() //unique id for every array element, we are going to use it as key
        };
        this.setState(prevState => ({
            cpuChoice,
            playerChoice,
            isPlaying: !prevState.isPlaying,
            cpuScore: prevState.cpuScore += cpuPoints,
            playerScore: prevState.playerScore += playerPoints,
            history: resizeCollection([gameResult, ...prevState.history], gameHistoryCount)
        }))
    }

    render() {
        const {
            isPlaying,
            cpuChoice,
            playerChoice,
            cpuScore,
            playerScore,
            history
        } = this.state;

        return (
            <div>
                <ScoreBar cpuScores={cpuScore} playerScores={playerScore}/>
                <div className="game-container">
                    <Hand isCpu={!!cpuChoice} handType={cpuChoice ? cpuChoice : 'rules'}/>
                    <Desk playFunc={this.startGame}
                          isPlaying={isPlaying}
                          history={history}/>
                    <Hand handType={playerChoice ? playerChoice : 'rules'}/>
                </div>
                {isPlaying && <ToolBar choseHandType={this.choseHandType}
                                       handTypes={handTypes}/>}
            </div>
        )
    }
}

export default Game;