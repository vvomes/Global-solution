import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import styled from 'styled-components';
import Header from '../components/Index/Header';
import Footer from '../components/Index/Footer';

import mapaMundial from '../components/img/mapa-mundo.jpg';
import mapaBrasil from '../components/img/mapa-do-brasil-hi.png';

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
  background-image: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const Button = styled.button`
  margin: 0 5px;
`;

const TextContainer = styled.div`
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

const Grafico = () => {
  const chart1Ref = useRef(null);
  const chart2Ref = useRef(null);
  const [data, setData] = useState(null);
  const [chartInstance, setChartInstance] = useState(null);
  const [currentChart, setCurrentChart] = useState(1);
  const [currentText, setCurrentText] = useState('fomeMundial');

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
            backgroundColor: 'rgba(0, 128, 0, 0.5)',
            borderColor: '#0000FF',
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
              font: {
                weight: 'bold',
              },
              color: '#000000',
            },
            ticks: {
              callback: function (value) {
                return value.toLocaleString();
              },
              font: {
                weight: 'bold',
              },
              color: '#000000',
            },
          },
          y: {
            ticks: {
              font: {
                weight: 'bold',
              },
              color: '#000000',
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
    setCurrentText(chartNumber === 1 ? 'fomeMundial' : 'fomeNacional');
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
        <ButtonContainer>
          <Button onClick={() => handleChartChange(1)}>Mundial</Button>
          <Button onClick={() => handleChartChange(2)}>Nacional</Button>
        </ButtonContainer>
        <TextContainer>
          {currentText === 'fomeMundial' && (
            <Text>
              A fome mundial e o desperdício de alimentos são questões interligadas que demandam atenção urgente. Enquanto
              milhões de pessoas enfrentam diariamente a falta de alimentos suficientes para suprir suas necessidades
              básicas, uma quantidade alarmante de alimentos é desperdiçada ao redor do mundo. O desperdício ocorre em
              todas as etapas da cadeia alimentar, desde a produção e colheita até o consumo final.
            </Text>
          )}
          {currentText === 'fomeNacional' && (
            <Text>
              No âmbito nacional, também enfrentamos desafios significativos em relação à fome e ao desperdício de
              alimentos. É fundamental destacar as peculiaridades e características específicas do nosso país para
              desenvolver soluções adequadas. Através de políticas públicas, conscientização e ações coletivas, podemos
              combater a fome e reduzir o desperdício de alimentos em todas as regiões do Brasil.
            </Text>
          )}
        </TextContainer>
        <ChartContainer backgroundImage={currentChart === 1 ? mapaMundial : mapaBrasil}>
          <Canvas ref={currentChart === 1 ? chart1Ref : chart2Ref}></Canvas>
        </ChartContainer>
        <ButtonContainer>
          <select onChange={handleYearChange}>
            {data &&
              data.years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
          </select>
        </ButtonContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Grafico;
