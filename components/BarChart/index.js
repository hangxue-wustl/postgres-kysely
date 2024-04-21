import styles from "./BarChart.module.css"
import {useState, useEffect} from "react"
import {Bar} from 'react-chartjs-2';
import{
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)
export default function BarChart(){
    const [chartData, setChartData] = useState({datasets:[]})
    const [chartOptions, setChartOptions] = useState({})
    useEffect(() => {
        setChartData({
            labels: ["sun", "mon", "tues", "weds"],
            datasets: [{
                label: 'Sales $',
                data: [152342, 162423, 172423,182423 ],
                
            }]
        })
        setChartOptions({
            plugins:{
                legend:{
                    position: 'top'
                },
                title : {
                    display: true,
                    text : "Daily sales"
    
                }
            },
        })
    }, [])
    return (
        <>
            <div className = {styles.container}>
                <Bar data = {chartData} options = {chartOptions} />
            </div>
            
        </>
    )
}