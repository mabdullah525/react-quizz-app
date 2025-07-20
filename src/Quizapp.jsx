import React, { useState } from 'react'
import { Data } from './data'



const Quizapp = () => {
    const [data, setData] = useState(Data);
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    console.log(data);
    const next = () => {
        if (index < data.length - 1) {
            setIndex(index + 1);
        } else {
            setShowResult(true);
        }

        const checked = document.querySelectorAll(".checkedValue");
        checked.forEach((curVal) => {
            curVal.checked = false;
        });
    };



    const handleInput = (e) => {
        let chooseValue = e.target.value;
        console.log(chooseValue);
        if (chooseValue === data[index].ans) {
            setScore(score + 1);


        }


    }
    return (
        <div className="quiz-bg">
            {showResult ? (
                <div className="score text-center mt-10">
                    <h1 className="text-3xl font-bold text-white">Your Final Score is {score}/10</h1>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-6 px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                    >
                        Play Again
                    </button>
                </div>
            ) : (
                <div className="quiz-card">
                    <div className="quiz-question">
                        <h1>Q : {data[index].q}</h1>
                    </div>

                    <div className="quiz-options">
                        <label className="quiz-option">
                            <input type="radio" name="option" onChange={handleInput} className='checkedValue' value={data[index].a} />
                            <span>A : {data[index].a}</span>
                        </label>

                        <label className="quiz-option">
                            <input type="radio" name="option" onChange={handleInput} className='checkedValue' value={data[index].b} />
                            <span>B : {data[index].b}</span>
                        </label>

                        <label className="quiz-option">
                            <input type="radio" name="option" onChange={handleInput} className='checkedValue' value={data[index].c} />
                            <span>C : {data[index].c}</span>
                        </label>

                        <label className="quiz-option">
                            <input type="radio" name="option" onChange={handleInput} className='checkedValue' value={data[index].d} />
                            <span>D : {data[index].d}</span>
                        </label>
                    </div>

                    <div className="quiz-button">
                        <button onClick={next}>Next</button>
                    </div>
                </div>
            )}
        </div>
    );
}


export default Quizapp