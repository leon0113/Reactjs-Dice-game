import styled from "styled-components";
import NumberSelector from "./components/NumberSelector"
import TotalScore from "./components/TotalScore"
import RoleDice from "./components/RoleDice";
import { useState } from "react";
import { Button, OutlineButton } from "../../styled/Button";
import Rules from "./components/Rules";

function GamePlay() {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false);

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };


    const roleDice = () => {
        if (!selectedNumber) {
            setError("You have not selected any number");
            return;
        }
        const randomNumber = generateRandomNumber(1, 7);
        // eslint-disable-next-line no-unused-vars
        setCurrentDice(randomNumber);


        if (selectedNumber === randomNumber) {
            setScore((prev) => prev + randomNumber);
        } else {
            setScore((prev) => prev - 2);
        }

        setSelectedNumber(undefined);
    };

    const resetScore = () => {
        setScore(0);
        setSelectedNumber(undefined);
    }
    const showRulesDiv = () => {
        setShowRules(!showRules);
    }


    //winning and losing logic
    if (score >= 10) {
        alert('You win');
    }
    if (score <= -10) {
        alert('you loose');
    }



    return (
        <MainContainer>
            <div className="top-section">
                <TotalScore score={score} />
                <NumberSelector
                    selectedNumber={selectedNumber}
                    setSelectedNumber={setSelectedNumber}
                    error={error}
                    setError={setError}
                />
            </div>
            <RoleDice
                currentDice={currentDice}
                roleDice={roleDice}
            />
            <div className="btns">
                <OutlineButton onClick={resetScore}>Reset Game</OutlineButton>
                <Button onClick={showRulesDiv}>Show Rules</Button>
            </div>
            {showRules ? <Rules /> : ''}
        </MainContainer>
    )
}

export default GamePlay;

const MainContainer = styled.div`
padding-top: 70px;
    .top-section{
        display: flex;
        justify-content: space-between;
        align-items: end;
        margin: 0 150px;
    }
    .btns{
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: center;
        align-items: center;
    }
`
