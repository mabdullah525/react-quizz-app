import React, { useState } from 'react'
import { Data } from './data'


const Quizapp = () => {
    const [data, setData] = useState(Data);
    console.log(data);
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-4">
            <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-8">
                <div className="mb-6">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Q: {data[0].q}</h1>
                </div>

                <div className="space-y-4">
                    <label className="flex items-center p-4 bg-gray-100 rounded-xl cursor-pointer hover:bg-indigo-100 transition">
                        <input type="radio" name="option" className="form-radio text-indigo-600 mr-4" />
                        <span className="text-gray-700 font-medium">A: {data[0].a}</span>
                    </label>

                    <label className="flex items-center p-4 bg-gray-100 rounded-xl cursor-pointer hover:bg-indigo-100 transition">
                        <input type="radio" name="option" className="form-radio text-indigo-600 mr-4" />
                        <span className="text-gray-700 font-medium">B: {data[0].b}</span>
                    </label>

                    <label className="flex items-center p-4 bg-gray-100 rounded-xl cursor-pointer hover:bg-indigo-100 transition">
                        <input type="radio" name="option" className="form-radio text-indigo-600 mr-4" />
                        <span className="text-gray-700 font-medium">C: {data[0].c}</span>
                    </label>

                    <label className="flex items-center p-4 bg-gray-100 rounded-xl cursor-pointer hover:bg-indigo-100 transition">
                        <input type="radio" name="option" className="form-radio text-indigo-600 mr-4" />
                        <span className="text-gray-700 font-medium">D: {data[0].d}</span>
                    </label>
                </div>

                <div className="mt-8 text-center">
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition">
                        Next
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Quizapp