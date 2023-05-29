import React from "react";

// function Greet(){
//    return <h1>Hare Krishna</h1>
// }

export const Greet = (props) => {
    return (
        <div>
            <h1>Hare {props.name} {props.heroname}</h1>
            {props.children}
        </div>
    )
}

// export default Greet;