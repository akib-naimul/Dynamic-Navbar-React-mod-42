import React from 'react';
import {LineChart } from 'recharts';
import {Line} from 'recharts';

const resultData = [
  { "studentId": 1, "name": "Ariana", "physics": 85, "chemistry": 78, "math": 92 },
  { "studentId": 2, "name": "Rafi", "physics": 74, "chemistry": 81, "math": 69 },
  { "studentId": 3, "name": "Nisha", "physics": 90, "chemistry": 88, "math": 95 },
  { "studentId": 4, "name": "Tanvir", "physics": 67, "chemistry": 72, "math": 70 },
  { "studentId": 5, "name": "Priya", "physics": 88, "chemistry": 91, "math": 85 },
  { "studentId": 6, "name": "Samiul", "physics": 76, "chemistry": 68, "math": 74 },
  { "studentId": 7, "name": "Moumita", "physics": 95, "chemistry": 89, "math": 93 },
  { "studentId": 8, "name": "Hasan", "physics": 82, "chemistry": 80, "math": 78 },
  { "studentId": 9, "name": "Tania", "physics": 70, "chemistry": 75, "math": 72 },
  { "studentId": 10, "name": "Rakib", "physics": 92, "chemistry": 94, "math": 90 }
]


const ResultChart = () => {
    return (
        <div>
            <LineChart width={500} height={600} data={resultData}></LineChart>
            {/* <Line dataKey={'math'}></Line> */}
            
            <Line type={"monotone"} dataKey={"math"} stroke='#8884d8'/>
            
            
            
            {/* <Line type="monotone" dataKey="math" stroke="#8884d8" /> */}
        </div>
    );
};

export default ResultChart;