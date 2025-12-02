import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const apiData = useLoaderData()
    // const [apiData, setApiData] = useState('')
    // useEffect(() => {
    //     fetch('https://api.github.com/users/ch-ihtasham')
    //         .then((response) => {
    //             if (!response.ok) throw new Error
    //             return response.json()
    //         })
    //         .then(data => setApiData(data))
    //         .catch((Error) => {
    //             console.log('Fetch Error', Error)
    //         })
    // }, [])
    return (
        <div>
            {
                !apiData ? <div>Loading....</div> :
                    <div>
                        <div>Name:{apiData.name}</div>
                        <div>Follwers:{apiData.followers}</div>
                        <img src={apiData.avatar_url} alt="github pic" />
                    </div>
            }
            {/* {apiData && <div>
                <div>Name:{apiData.name}</div>
                <div>Follwers:{apiData.followers}</div>
                <img src={apiData.avatar_url} alt="github pic" />
            </div>} */}
        </div>
    )
}
