/* eslint-disable react/prop-types */
import styled from "styled-components";



function RoleDice({ currentDice, roleDice }) {

    return (
        <DiceContainer>
            <div className="dice" onClick={roleDice}>
                <img src={`/dice_${currentDice}.png`} alt="dice" />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    )
}

export default RoleDice;

const DiceContainer = styled.div`
margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .dice{
        cursor: pointer;
    }
    p{
     font-size: 24px;
    }
`