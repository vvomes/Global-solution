import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import styled from 'styled-components';
import Header from '../components/Index/Header';
import Footer from '../components/Index/Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 50px 0;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
`;

const Grafico = () => {
  const chart1Ref = useRef(null);
  const chart2Ref = useRef(null);
  const [data, setData] = useState(null);
  const [chartInstance, setChartInstance] = useState(null);
  const [currentChart, setCurrentChart] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const chartData = await fetchChartData();
        setData(chartData);
        createChart(chartData, currentChart);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentChart]);

  const fetchChartData = () => {
    return Promise.resolve({
      years: [2018, 2019, 2020, 2021, 2022],
      countries: ['Noruega', 'Canadá', 'Dinamarca', 'Austrália', 'Estados Unidos'],
      states: ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Bahia', 'Santa Catarina'],
      indices1: {
        2018: [2000, 1500, 2000, 2500, 4000],
        2019: [1200, 1700, 2200, 2700, 3200],
        2020: [1400, 1900, 2400, 2900, 3400],
        2021: [1600, 2100, 2600, 3100, 3600],
        2022: [1800, 2300, 2800, 3300, 8800],
      },
      indices2: {
        2018: [3000, 2500, 3000, 3500, 5000],
        2019: [2200, 2700, 3200, 3700, 4200],
        2020: [2400, 2900, 3400, 3900, 4400],
        2021: [2600, 3100, 3600, 4100, 4600],
        2022: [2800, 3300, 3800, 4300, 8800],
      },
    });
  };

  const createChart = (data, chartNumber) => {
    const chartRef = chartNumber === 1 ? chart1Ref : chart2Ref;

    if (chartInstance) {
      chartInstance.destroy();
    }

    const chartConfig = {
      type: 'bar',
      data: {
        labels: chartNumber === 1 ? data.countries : data.states,
        datasets: [
          {
            label: 'Índice de Países (Toneladas)',
            data: data[`indices${chartNumber}`][data.years[0]],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        scales: {
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Toneladas',
            },
            ticks: {
              callback: function (value) {
                return value.toLocaleString();
              },
            },
          },
        },
      },
    };

    const newChartInstance = new Chart(chartRef.current, chartConfig);
    setChartInstance(newChartInstance);
  };

  const handleYearChange = (event) => {
    const selectedYear = parseInt(event.target.value);
    if (data) {
      const updatedData = {
        ...data,
        indices1: {
          ...data.indices1,
        },
        indices2: {
          ...data.indices2,
        },
      };
      setData(updatedData);
      updateChart(updatedData, selectedYear);
    }
  };

  const handleChartChange = (chartNumber) => {
    setCurrentChart(chartNumber);
  };

  const updateChart = (data, year) => {
    if (chartInstance) {
      const dataset = chartInstance.data.datasets[0];
      const chartNumber = currentChart;
      dataset.data = data[`indices${chartNumber}`][year];
      chartInstance.update();
    }
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <button onClick={() => handleChartChange(1)}>Gráfico 1</button>
          <button onClick={() => handleChartChange(2)}>Gráfico 2</button>
        </div>
        {data && (
          <select onChange={handleYearChange}>
            <option value="">Selecione o ano</option>
            {data.years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        )}
        <ChartContainer>
          {currentChart === 1 ? (
            <Canvas ref={chart1Ref}></Canvas>
          ) : (
            <Canvas ref={chart2Ref}></Canvas>
          )}
        </ChartContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Grafico;
