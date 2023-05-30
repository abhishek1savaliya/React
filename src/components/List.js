import React from 'react'
import Person from './Person'

function List() {
    const persons = [
        {
            id:1,
            name:"Krishna",
            age : 45,
            skill : "All Technology"
        },
        {
            id:2,
            name:"Arjun",
            age : 39,
            skill : "Arrow"
        },
        {
            id:3,
            name:"Hanuman",
            age : 5000,
            skill : "Gada"
        }
    ]
    const  PersonList = persons.map(persons => <Person key={persons.id} persons={persons}/>)
    return (<div>{PersonList}</div>)
}

export default List
