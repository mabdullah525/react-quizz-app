import React, { useState } from 'react'
import { Data } from './data'


const Quizapp = () => {
    const [data, setData] = useState(Data);
    console.log(data);
    return (
        <div className='container'>
            <div className='quiz-container'>
                <div>
                    <h1>{data.q}</h1>
                </div>

            </div>

        </div>
    )
}

export default Quizapp