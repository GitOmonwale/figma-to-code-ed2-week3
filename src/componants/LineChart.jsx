import  { useContext } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { CoinOverviewContext } from '../contexts/CoinOverviewContext';
import Loader from './Loader';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const { historicalData } = useContext(CoinOverviewContext);

  // Assure-toi que les données historiques sont disponibles avant de les utiliser
  if (!historicalData) {
    return <div><Loader></Loader></div>;
  }

  // Préparer les labels de l'axe des X (mois)
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

  // Préparer les données pour Chart.js
  const data = {
    labels: labels, // Utilise les mois comme labels
    datasets: [
      {
        label: 'Price',
        data: historicalData.prices.map(price => price[1]), // Aligne les données avec les labels
        borderColor: '#00C234',
        backgroundColor: 'rgba(0, 194, 52, 0.2)',
        borderWidth: 1,
        fill: true,
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          // Si tu veux forcer les labels à être affichés
          autoSkip: false,
          maxRotation: 0, // Pour éviter la rotation des labels
          minRotation: 0
        }
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          fontSize: 16,
          padding:20,
        _align: 'start'
        }
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.dataset.label}: $${tooltipItem.raw.toFixed(2)}`;
          }
        }
      }
    }
  };

  return (
    <div style={{ position: 'relative', height: '400px', width: '100%' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
