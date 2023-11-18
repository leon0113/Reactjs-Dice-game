/* eslint-disable react/prop-types */
import styled from "styled-components"


function NumberSelector({ selectedNumber, setSelectedNumber, error, setError }) {
    const numbers = [1, 2, 3, 4, 5, 6];

    const numberSelectorHandler = (number) => {
        setSelectedNumber(number);
        setError("")
    }

    return (
        <NumberSelectorContainer>
            <p className="error">{error}</p>
            <div className="flex">
                {
                    numbers.map((number, i) => <Box
                        isselected={number === selectedNumber}
                        onClick={() => numberSelectorHandler(number)}
                        key={i}>
                        {number}
                    </Box>)
                }
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: end;
   .flex{
    display: flex;
    gap: 24px;
   }
   p{
    font-size: 24px;
    font-weight: 700px;
    margin-top: 20px;
   }
   .error{
    color: red;
   }
`

const Box = styled.div`
    width: 72px;
    height: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    background-color: ${(props) => props.isselected ? "black" : 'white'};
    color: ${(props) => props.isselected ? "white" : 'black'};
`