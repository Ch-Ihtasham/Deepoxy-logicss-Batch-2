import React, { useContext } from 'react'
import Comp2 from './Comp2'
import { componentContext } from '../context/ComponentContext'

export default function Comp1() {
    const {number}=useContext(componentContext)
    return (
        <div>
            this is components no {number}
            <Comp2 />
        </div>
    )
}
