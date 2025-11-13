import { use } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";


const MarksData = ({ marksPromise }) => {

    const studentsMarksRes = use(marksPromise)
    const studentsMarks = studentsMarksRes.data
    // console.log(studentsMarks)

    // data processing for the chart
    const studentChartData = studentsMarks.map(studentData => {
        const  student ={
            id: studentData.student_id,
            name: studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            math: studentData.marks.math


        }
        const avg = (student.physics + student.chemistry + student.math)/3;
        student.avg = avg;
        console.log(student)
        return student;
    })
    // console.log(studentChartData)

    return (
        <div>
            <BarChart width={800} height={300} data={studentChartData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="avg" fill="green"></Bar>
                <Bar dataKey="chemistry" fill="red"></Bar>
            </BarChart>
        </div>
    );
};

export default MarksData;