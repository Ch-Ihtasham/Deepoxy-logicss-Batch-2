import React, { useEffect, useState } from 'react'

export default function Fetching() {
    const [apiData, setApiData] = useState(null)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if (!response.ok) throw new Error
                return response.json()
            })
            .then(data => {
                // console.log(data)
                setApiData(data)
            })
            .catch((error) => {
                console.log('Error in Fetching Api', error)
            })

    }, [])
    return (
        <div>
            {apiData ? apiData[1].id : <div>Loading</div>}
        </div>
    )
}
