import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const DashboardContainer = styled.div`
  width: 450px; /* Genişliği daha da azaltıldı */
  height: 600px; /* Yüksekliği artırıldı */
  background: white;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin-top: 300px;
  position: absolute;
  top: -45%;
  left: 65%;
  transform: translateX(-50%);
  z-index: 1; /* Daha düşük z-index */
  user-select: none; /* Yazılar seçilemez */
  pointer-events: none; /* Tıklanamaz */
`;

const ChartContainer = styled.div`
  margin-top: 20px;
`;

const DashboardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const HeaderTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
`;

const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StatCard = styled.div`
  width: calc(50% - 10px);
  background: #f6f9fc;
  border-radius: 10px;
  padding: 20px;
  margin: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const StatTitle = styled.h4`
  font-size: 14px;
  font-weight: bold;
`;

const StatValue = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #4caf50;
`;

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Net Volume',
      data: [3000, 4000, 3200, 5000, 4200, 5300],
      fill: false,
      backgroundColor: '#4caf50',
      borderColor: '#4caf50',
    },
    {
      label: 'Sales',
      data: [2000, 3000, 2800, 4000, 3700, 4600],
      fill: false,
      backgroundColor: '#6772e5',
      borderColor: '#6772e5',
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const DashboardScreen = () => {
  return (
    <DashboardContainer>
      <DashboardHeader>
        <HeaderTitle>Today</HeaderTitle>
        <HeaderTitle>Yesterday</HeaderTitle>
      </DashboardHeader>
      <Stats>
        <StatCard>
          <StatTitle>Net Volume</StatTitle>
          <StatValue>$3,528,198.72</StatValue>
        </StatCard>
        <StatCard>
          <StatTitle>Net Volume from Sales</StatTitle>
          <StatValue>$39,274.29</StatValue>
        </StatCard>
        <StatCard>
          <StatTitle>New Customers</StatTitle>
          <StatValue>37</StatValue>
        </StatCard>
      </Stats>
      <ChartContainer>
        <Line data={data} options={options} />
      </ChartContainer>
    </DashboardContainer>
  );
};

export default DashboardScreen;
