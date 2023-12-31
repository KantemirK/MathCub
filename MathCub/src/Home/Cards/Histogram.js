import Card from "../../common/components/Card"
import { Bar } from "react-chartjs-2"
import { useSelector } from "react-redux"
import filterInputs from "../formulas/filterInputs"
import inputRepeats from "../formulas/inputRepeats"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from "chart.js"

const HistogramCard = () => {
    const { inputs } = useSelector((state) => state.randomInputSlice)
    const filteredInputs = filterInputs(inputs);
    const histogramMap = inputRepeats(filteredInputs);
    const labels = Object.keys(histogramMap);
    const data = Object.values(histogramMap);

    ChartJS.register(
        BarElement,
        CategoryScale,
        LinearScale
    )

    return (
        <Card title={"Гистограмма"}>
            <Bar
                data={{
                    labels,
                    datasets: [
                        {
                            borderColor: "#2a2c3c",
                            borderRadius: 7,
                            backgroundColor: "rgb(78, 68, 165)",
                            lineTension: 0,
                            fill: "false",
                            borderJoinStyle: "round",
                            data,
                            borderWidth: 1,
                            barPercentage: 1,
                            categoryPercentage: 1,
                            hoverBackgroundColor: "rgba(78, 68, 165, 0.8)",
                            barThickness: "flex",
                        }
                    ]
                }}
                options={{
                    scales: {
                        x: {
                            grid: {
                                color: '#2a2c3c'
                            },
                            ticks: {
                                color: 'aliceblue'
                            }
                        },
                        y: {
                            grid: {
                                color: '#2a2c3c'
                            },
                            ticks: {
                                color: 'aliceblue'
                            }
                        }
                    }
                }}
            />
        </Card>
    )
}

export default HistogramCard