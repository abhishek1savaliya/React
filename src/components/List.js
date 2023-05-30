import React from 'react'
import Person from './Person'

function List() {
    const names = ['Krishna', 'Arjuna', 'Hanuman'];
    const persons = [
        {
            id: 1,
            name: "Krishna",
            age: 45,
            skill: "All Technology"
        },
        {
            id: 2,
            name: "Arjun",
            age: 39,
            skill: "Arrow"
        },
        {
            id: 3,
            name: "Hanuman",
            age: 5000,
            skill: "Gada"
        }
    ]
    const NamesList = names.map((name,index) => <h2 key={index}>{index} {name}</h2> )
    return (<div>{NamesList}</div>)
}

export default List
