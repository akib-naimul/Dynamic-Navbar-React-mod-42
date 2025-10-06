import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
    const marksDataResponse = use(marksPromise);
    const marksData = marksDataResponse.data;

    // Data processin for the chart
    const marksChartData = marksData.map(studentData =>{
        const student ={
            id: studentData.studentId,
            name: studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            math: studentData.marks.math
        }
        const avg = (student.physics + student.chemistry + student.math)/3;
        return student;
    } )
    // console.log(marksData)
    return (
        <div>
            <BarChart width={500} height={300} data={marksChartData}></BarChart>
            <XAxis dataKey={"name"}></XAxis>
            <YAxis></YAxis>
            
        </div>
    );
};

export default MarksChart;