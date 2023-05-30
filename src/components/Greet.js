import React from "react";

// function Greet(){
//    return <h1>Hare Krishna</h1>
// }

export const Greet = (props) => {
    const {name,heroname} = props;
    return (
        <div>
            <h1>Hare {name} {heroname}</h1>
        </div>
    )
}

// export default Greet;