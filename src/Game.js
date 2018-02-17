import React from 'react';
import Hand from './components/Hand/Hand';
import Desk from './components/Desk/Desk';
import ScoreBar from './components/ScoreBar/ScoreBar';
import ToolBar from './components/ToolBar/ToolBar';
import {bindTo, randomizeHandTypes, getResult} from './utils/utils';
import {handTypes, gameRules} from './constants/game';

class Game extends React.Component {
    constructor(props) {
        super(props);
        bindTo('startGame', 'choseHandType')(this);
        this.initialState = {
            cpuChoice: null,
            playerChoice: null
        };
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
            cpuChoice: this.initialState.cpuChoice,
            playerChoice: this.initialState.cpuChoice
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
            result: getResult(cpuPoints, playerPoints)
        };
        this.setState(prevState => ({
            cpuChoice,
            playerChoice,
            isPlaying: !prevState.isPlaying,
            cpuScore: prevState.cpuScore += cpuPoints,
            playerScore: prevState.playerScore += playerPoints,
            history: [...prevState.history, gameResult]
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
                          history={history.reverse()}  />
                    <Hand handType={playerChoice ? playerChoice : 'rules'}/>
                </div>
                {isPlaying && <ToolBar choseHandType={this.choseHandType}
                                       handTypes={handTypes}/>}
            </div>
        )
    }
}

export default Game;