import React from 'react'

const Person = (props) => {
    const { name, age, skill } = props.persons

    return (
        <div>
            <div>I am {name}. I am {age} years Old ans I know {skill}</div>
        </div>
    )
}

export default Person
