import { Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js';
import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';

// Registre os componentes necessários
ChartJS.register(
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const MeuGrafico = () => {
  const chartRef = useRef(null);

  // Defina os dados do gráfico
  const dados = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [
      {
        label: 'Visitas ao Site',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

  // Defina as opções do gráfico
  const opcoes = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          }
        }
      }
    },
    scales: {
      x: {
        type: 'linear',
        position: 'bottom'
      },
      y: {
        beginAtZero: true
      }
    }
  };

  // Use useEffect para limpar o gráfico quando o componente for desmontado
  useEffect(() => {
    const chartInstance = chartRef.current;

    return () => {
      if (chartInstance && chartInstance.destroy) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="p-6 bg-[#fff]  shadow-md rounded-lg ">
      <h2 className="text-lg font-semibold mb-4">Visitas ao Site</h2>
      <div className="relative h-72">
        <Line ref={chartRef} data={dados} options={opcoes} />
      </div>
    </div>
  );
};

export default MeuGrafico;
