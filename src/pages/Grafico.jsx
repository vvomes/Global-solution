import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import styled from 'styled-components';
import Header from '../components/Index/Header';
import Footer from '../components/Index/Footer';

import graficoImage from '../components/img/grafico.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 50px 0;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: 500px; 
  margin-bottom: 20px;
  overflow: hidden; 
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const ChartContainer = styled.div`
  width: 50%;
`;

const Canvas = styled.canvas`
  width: 100%;
  height: auto;
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
  margin-bottom: 10px;
`;

const Text = styled.p`
  text-align: center;
`;

const Grafico = () => {
  const chart1Ref = useRef(null);
  const chart2Ref = useRef(null);
  const [data, setData] = useState(null);
  const [chartInstance, setChartInstance] = useState(null);
  const [currentChart, setCurrentChart] = useState(1);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const chartData = await fetchChartData();
        setData(chartData);
        createChart(chartData, currentChart);
        setDisplayText(
          'O gráfico acima representa o índice de desperdício de alimentos em países ao redor do mundo, no período de 2018 a 2022. Ele destaca a preocupante realidade do desperdício alimentar global e a necessidade de ações para combatê-lo.'
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const fetchChartData = () => {
    return Promise.resolve({
      years: [2018, 2019, 2020, 2021, 2022],
      countries: ['Noruega', 'Canadá', 'Dinamarca', 'Austrália', 'Estados Unidos'],
      states: ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Bahia', 'Santa Catarina'],
      indices1: {
        2018: [23000, 30000, 20000, 5000, 32000],
        2019: [25000, 28000, 22000, 6000, 33000],
        2020: [26000, 32000, 24000, 7000, 35000],
        2021: [26000, 33000, 26000, 8000, 32000],
        2022: [27000, 31500, 28000, 10000, 35000],
      },
      indices2: {
        2018: [3000, 1500, 1200, 1900, 1000],
        2019: [3200, 1700, 1200, 1700, 2200],
        2020: [3400, 1900, 1400, 2900, 1400],
        2021: [3600, 2100, 1600, 1100, 1600],
        2022: [3200, 1300, 800, 1300, 1800],
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
        responsive: true,
        maintainAspectRatio: false,
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
    setDisplayText(
      chartNumber === 1
        ? 'O desperdício de alimentos no mundo é um problema grave e urgente que precisa ser enfrentado. Estima-se que um terço de toda a comida produzida para consumo humano seja desperdiçada, o que contribui para a fome global e representa um impacto ambiental significativo. Precisamos agir de forma coordenada, investindo em práticas sustentáveis, conscientização e educação sobre o aproveitamento integral dos alimentos, além de criar políticas e parcerias que incentivem a redução do desperdício. Juntos, podemos combater essa questão e garantir um futuro mais justo e sustentável para todos..'
        : 'O desperdício de alimentos no Brasil é um problema sério e urgente, com cerca de 26 milhões de toneladas de comida sendo perdidas anualmente. Isso tem impactos sociais, econômicos e ambientais significativos. É necessário investir em tecnologias, conscientização e políticas públicas para reduzir o desperdício. Ações como doações de alimentos, consumo responsável e parcerias colaborativas são fundamentais para combater essa questão e garantir um futuro mais sustentável para o país..'
    );
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
    const updatedData = {
      ...data,
      indices1: {
        ...data.indices1,
      },
      indices2: {
        ...data.indices2,
      },
    };
    setDisplayText(
      chartNumber === 1
        ? 'O desperdício de alimentos no mundo é um problema grave e urgente que precisa ser enfrentado. Estima-se que um terço de toda a comida produzida para consumo humano seja desperdiçada, o que contribui para a fome global e representa um impacto ambiental significativo. Precisamos agir de forma coordenada, investindo em práticas sustentáveis, conscientização e educação sobre o aproveitamento integral dos alimentos, além de criar políticas e parcerias que incentivem a redução do desperdício. Juntos, podemos combater essa questão e garantir um futuro mais justo e sustentável para todos..'
        : 'O desperdício de alimentos no Brasil é um problema sério e urgente, com cerca de 26 milhões de toneladas de comida sendo perdidas anualmente. Isso tem impactos sociais, econômicos e ambientais significativos. É necessário investir em tecnologias, conscientização e políticas públicas para reduzir o desperdício. Ações como doações de alimentos, consumo responsável e parcerias colaborativas são fundamentais para combater essa questão e garantir um futuro mais sustentável para o país..'
    );
    updateChart(updatedData, data.years[0]);
  };

  const updateChart = (data, year) => {
    if (chartInstance) {
      chartInstance.data.labels = currentChart === 1 ? data.countries : data.states;
      chartInstance.data.datasets[0].data = data[`indices${currentChart}`][year];
      chartInstance.update();
    }
  };

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
  }, [currentChart]); // Update the chart whenever the currentChart value changes

  return (
    <>
      <Header />
      <Container>
        <ImageContainer>
          <Image src={graficoImage} alt="Gráfico" />
        </ImageContainer>
        <TextContainer>
          <Text>{displayText}</Text>
        </TextContainer>
        <ButtonContainer>
          <Button onClick={() => handleChartChange(1)}>Gráfico de Países</Button>
          <Button onClick={() => handleChartChange(2)}>Gráfico de Estados</Button>
        </ButtonContainer>
        <TextContainer>
          <Text>Selecione o ano:</Text>
        </TextContainer>
        <select onChange={handleYearChange}>
          {data &&
            data.years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
        </select>
        <ChartContainer>
          <Canvas ref={currentChart === 1 ? chart1Ref : chart2Ref}></Canvas>
        </ChartContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Grafico;
