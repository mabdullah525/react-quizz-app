import React, { useState } from 'react'
import { Data } from './data'



const Quizapp = () => {
    const [data, setData] = useState(Data);
    console.log(data);
    return (
        <div className="quiz-bg">
            <div className="quiz-card">
                <div className="quiz-question">
                    <h1>Q: {data[0].q}</h1>
                </div>

                <div className="quiz-options">
                    <label className="quiz-option">
                        <input type="radio" name="option" />
                        <span>A: {data[0].a}</span>
                    </label>

                    <label className="quiz-option">
                        <input type="radio" name="option" />
                        <span>B: {data[0].b}</span>
                    </label>

                    <label className="quiz-option">
                        <input type="radio" name="option" />
                        <span>C: {data[0].c}</span>
                    </label>

                    <label className="quiz-option">
                        <input type="radio" name="option" />
                        <span>D: {data[0].d}</span>
                    </label>
                </div>

                <div className="quiz-button">
                    <button>Next</button>
                </div>
            </div>
        </div>



    )
}

export default Quizapp