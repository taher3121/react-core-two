import { useState } from "react"

export default function Counter() {

    const [count,setCount]=useState(0);
    

    function updateRun(){

        setCount(count +1);
    }

    function removeRun(){
        setCount(count - 1);
    }
    
    const playerStyle = {
        border: '2px solid yellow',
        padding: '50px',
        textColor: 'white'

    }


    return (
        <>  <p>Total Run: {count}</p>
            <div style={playerStyle}>
                <p>Players Name: Taher</p>
                <button onClick={updateRun}>Update Run</button>
                <br />
                <br />
                <button onClick={removeRun}>Remove Run</button>
            </div>
        </>
    )
}