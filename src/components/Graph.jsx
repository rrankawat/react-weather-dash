import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
)

const Graph = ({ hours, tempUnit }) => {
  const labels = hours.map(h => h.time.split(' ')[1])
  const temps = hours.map(h => (tempUnit === 0 ? h.temp_c : h.temp_f))

  const data = {
    labels,
    datasets: [
      {
        label: tempUnit === 0 ? 'Temperature (°C)' : 'Temperature (°F)',
        data: temps,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.3,
        pointBackgroundColor: 'rgb(75, 192, 192)',
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
    },
    scales: {
      y: { beginAtZero: false },
    },
  }

  return <Line data={data} options={options} />
}

export default Graph
