import React, { useState } from 'react'
import { Data } from './data'



const Quizapp = () => {
    const [data, setData] = useState(Data);
    const [index, setIndex] = useState();
    console.log(data);
    const next = () => {

    }
    return (
        <div className="quiz-bg">
            <div className="quiz-card">
                <div className="quiz-question">
                    <h1>Q: {data[index].q}</h1>
                </div>

                <div className="quiz-options">
                    <label className="quiz-option">
                        <input type="radio" name="option" />
                        <span>A : {data[index].a}</span>
                    </label>

                    <label className="quiz-option">
                        <input type="radio" name="option" />
                        <span>B : {data[index].b}</span>
                    </label>

                    <label className="quiz-option">
                        <input type="radio" name="option" />
                        <span>C : {data[index].c}</span>
                    </label>

                    <label className="quiz-option">
                        <input type="radio" name="option" />
                        <span>D : {data[index].d}</span>
                    </label>
                </div>

                <div className="quiz-button">
                    <button onClick={next}>Next</button>
                </div>
            </div>
        </div>



    )
}

export default Quizapp