import React, { useEffect, useState } from 'react'

export default function FetchData() {
    const [data, setData] = useState('')
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if (!response.ok) throw new Error
                return response.json()
            })
            .then(apiData => setData(apiData))
            .catch((error) => {
                console.log('Fetching Error', error)
            })
    }, [])

    return (
        <div>
            {!data ? <div>loading</div> : data.filter((v) => v.id > 5).map((v) => {
                return (
                    <div key={v.id}>
                        <div>ID:{v.id}</div>
                        <div>Name:{v.name}</div>
                        <div>UserName:{v.username}</div>
                    </div>
                )
            })}
        </div>
    )
}
