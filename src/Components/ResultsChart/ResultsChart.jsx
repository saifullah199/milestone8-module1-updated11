import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultdata =[
  {
    "id": 1,
    "name": "Aarav Khan",
    "physics": 85,
    "chemistry": 78,
    "math": 92
  },
  {
    "id": 2,
    "name": "Sadia Rahman",
    "physics": 74,
    "chemistry": 81,
    "math": 68
  },
  {
    "id": 3,
    "name": "Hasan Ahmed",
    "physics": 90,
    "chemistry": 88,
    "math": 95
  },
  {
    "id": 4,
    "name": "Nusrat Jahan",
    "physics": 65,
    "chemistry": 72,
    "math": 70
  },
  {
    "id": 5,
    "name": "Rakib Hossain",
    "physics": 80,
    "chemistry": 75,
    "math": 83
  },
  {
    "id": 6,
    "name": "Tania Akter",
    "physics": 92,
    "chemistry": 89,
    "math": 94
  },
  {
    "id": 7,
    "name": "Mehedi Hasan",
    "physics": 70,
    "chemistry": 65,
    "math": 77
  },
  {
    "id": 8,
    "name": "Farzana Islam",
    "physics": 88,
    "chemistry": 91,
    "math": 86
  },
  {
    "id": 9,
    "name": "Rafiul Karim",
    "physics": 76,
    "chemistry": 82,
    "math": 79
  },
  {
    "id": 10,
    "name": "Sumaiya Haque",
    "physics": 94,
    "chemistry": 90,
    "math": 97
  }
]


const ResultsChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultdata}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey="chemistry" stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultsChart;