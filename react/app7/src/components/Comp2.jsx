import React, { useContext } from 'react'
import { componentContext } from '../context/ComponentContext'

export default function Comp2() {
    const { fun } = useContext(componentContext)
    return (
        <div>
            this is our second component {fun()}
        </div>
    )
}
