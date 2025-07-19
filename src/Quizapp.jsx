import React, { useState } from 'react'
import { Data } from './data'


const Quizapp = () => {
    const [data, setData] = useState(Data);
    console.log(data);
    return (
        <div className='container'>
            <div className='quiz-container'>
                <div>
                    <h1>{data[0].q}</h1>
                </div>
                <div className='options'>
                    <input type="radio" />
                    <p>{data[0].a}</p>

                </div>
                <div className='options'>
                    <input type="radio" />
                    <p>{data[0].b}</p>

                </div>
                <div className='options'>
                    <input type="radio" />
                    <p>{data[0].c}</p>
                </div>
                <div className='options'>
                    <input type="radio" />
                    <p>{data[0].d}</p>

                </div>

            </div>
            <div className='btns'>
                <button className='btn'>Next</button>
            </div>

        </div>
    )
}

export default Quizapp