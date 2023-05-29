import React from "react";

const Hello = () => {
    // return (
    //     <div className="dummy">
    //         <h1>Hello Krishna</h1>
    //     </div>
    // )
    return React.createElement('div', { id: 'hello', className: 'dummy' }, React.createElement('h1', null, "Radha Shyam Sundar"));
};

export default Hello;