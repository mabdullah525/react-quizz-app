import React, { useState } from 'react'
import { Data } from './data'



const Quizapp = () => {
    const [data, setData] = useState(Data);
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    console.log(data);
    const next = () => {
        if (index >= data.length - 1) {
            setIndex(index + 1);
        }else {
            document.querySelector(".score").innerHTML = `<h1 class="score">Your Score is : ${score}</h1>`;
        }
        const checked = document.querySelectorAll(".checkedValue");
        checked.forEach((curVal) => {
            curVal.checked = false;
        });
    }


    const handleInput = (e) => {
        let chooseValue = e.target.value;
        console.log(chooseValue);
        if (chooseValue === data[index].ans) {
            setScore(score + 1);


        }


    }
    return (
        <div className="quiz-bg">
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

                <div className="score"></div>

                <div className="quiz-button">
                    <button onClick={next}>Next</button>
                </div>
            </div>
        </div>



    )
}

export default Quizapp