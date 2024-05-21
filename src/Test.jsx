import axios from 'axios'
import React, { useState } from 'react'

const Test = () => {
    const [change, setChange] = useState('')

    const LetsAxios = () => {
        axios.get('https://httpbin.org/get')
            .then((res) => {
                console.log(res.status)
                setChange(res.status)
            })
            .catch((err) => {
                console.log(err)
                setChange('오류가 발생하였습니다.')
            })
    }

    return (
        <div className='button'>
            <h2>{change}</h2>
            <button onClick={() => { LetsAxios() }}>AXIOS</button>
        </div>
    )
}

export default Test