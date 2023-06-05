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
  margin: 0 auto; /* Centralizar horizontalmente */
  padding: 50px 0; /* Espaçamento superior e inferior para o header e o footer */
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
  const chartRef = useRef(null);
  const [data, setData] = useState(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulando uma requisição assíncrona para obter os dados do gráfico
        const chartData = await fetchChartData();
        setData(chartData);
        createChart(chartData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const fetchChartData = () => {
    // Simulando os dados do gráfico
    return Promise.resolve({
      years: [2018, 2019, 2020, 2021, 2022],
      countries: ['Noruega', 'Canadá', 'Dinamarca', 'Austrália', 'Estados Unidos'],
      indices: {
        2018: [2000, 1500, 2000, 2500, 4000],
        2019: [1200, 1700, 2200, 2700, 3200],
        2020: [1400, 1900, 2400, 2900, 3400],
        2021: [1600, 2100, 2600, 3100, 3600],
        2022: [1800, 2300, 2800, 3300, 8800],
      },
    });
  };

  const createChart = (data) => {
    const chartConfig = {
      type: 'bar',
      data: {
        labels: data.countries,
        datasets: [
          {
            label: 'Índice de Países (Toneladas)',
            data: data.indices[data.years[0]],
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
                return value.toLocaleString(); // Formatação das toneladas com separador de milhar
              },
            },
          },
        },
      },
    };

    const chartInstance = new Chart(chartRef.current, chartConfig);
    setChartInstance(chartInstance);
  };

  const handleYearChange = (event) => {
    const selectedYear = parseInt(event.target.value);
    if (data) {
      // Atualizar o gráfico com os dados do ano selecionado
      const updatedData = {
        ...data,
        indices: {
          ...data.indices,
        },
      };
      setData(updatedData);
      updateChart(updatedData, selectedYear);
    }
  };

  const updateChart = (data, year) => {
    if (chartInstance) {
      const dataset = chartInstance.data.datasets[0];
      dataset.data = data.indices[year];
      chartInstance.update();
    }
  };

  return (
    <>
    <Header/>
    <Container>
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
        <Canvas ref={chartRef}></Canvas>
      </ChartContainer>
    </Container>
    <Footer/>
    </>
  );
};

export default Grafico;
