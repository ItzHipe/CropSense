"use client";
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface FarmData {
  temperature: number;
  humidity: number;
  soilMoisture: number;
  rainfall: number;
}

const FarmAnalyticsDashboard: React.FC = () => {
  const [farmData, setFarmData] = useState<FarmData>({
    temperature: 28,
    humidity: 65,
    soilMoisture: 45,
    rainfall: 12,
  });
  const [selectedData, setSelectedData] = useState<string | null>(null);

  useEffect(() => {
    // Fetch real-time farm data from your data source here
    // For this example, we're using a simulated data update every 5 seconds
    const intervalId = setInterval(() => {
      setFarmData({
        temperature: Math.floor(Math.random() * 10) + 20, // Simulate temperature fluctuations
        humidity: Math.floor(Math.random() * 30) + 40, // Simulate humidity fluctuations
        soilMoisture: Math.floor(Math.random() * 30) + 30, // Simulate soil moisture fluctuations
        rainfall: Math.floor(Math.random() * 10), // Simulate rainfall
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleCardClick = (dataName: string) => {
    setSelectedData(dataName);
  };

  const handleCloseDialog = () => {
    setSelectedData(null);
  };

  const renderGraph = () => {
    if (!selectedData) {
      return null;
    }

    const data = Array.from({ length: 20 }, (_, i) => ({
      time: i,
      value: Math.floor(Math.random() * 50), // Generate random data for graph
    }));

    return (
      <div style={{ margin: '20px auto', maxWidth: '730px' }}> 
        <h2>{selectedData} Trend</h2> 
        <LineChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
    );
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      flexDirection: 'column', 
    }}> 
      <h1>Farm Analytics Dashboard</h1> 

      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center',
        marginBottom: '20px' 
      }}> 
        <div style={{ 
          border: '1px solid #ccc',
          padding: '10px',
          margin: '10px',
          borderRadius: '5px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '180px' 
        }}> 
          <h3>Temperature</h3>
          <p>{farmData.temperature}°C</p>
          <button 
            style={{ 
              backgroundColor: 'transparent', 
              color: '#4CAF50', 
              padding: '8px 12px', 
              borderRadius: '3px', 
              border: '1px solid #4CAF50', 
              cursor: 'pointer',
            }} 
            onClick={() => handleCardClick('Temperature')}
          >
            View Trend
          </button> 
        </div>
        <div style={{ 
          border: '1px solid #ccc',
          padding: '10px',
          margin: '10px',
          borderRadius: '5px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '180px' 
        }}> 
          <h3>Humidity</h3>
          <p>{farmData.humidity}%</p>
          <button 
            style={{ 
              backgroundColor: 'transparent', 
              color: '#4CAF50', 
              padding: '8px 12px', 
              borderRadius: '3px', 
              border: '1px solid #4CAF50', 
              cursor: 'pointer',
            }} 
            onClick={() => handleCardClick('Humidity')}
          >
            View Trend
          </button> 
        </div>
        <div style={{ 
          border: '1px solid #ccc',
          padding: '10px',
          margin: '10px',
          borderRadius: '5px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '180px' 
        }}> 
          <h3>Soil Moisture</h3>
          <p>{farmData.soilMoisture}%</p>
          <button 
            style={{ 
              backgroundColor: 'transparent', 
              color: '#4CAF50', 
              padding: '8px 12px', 
              borderRadius: '3px', 
              border: '1px solid #4CAF50', 
              cursor: 'pointer',
            }} 
            onClick={() => handleCardClick('Soil Moisture')}
          >
            View Trend
          </button> 
        </div>
        <div style={{ 
          border: '1px solid #ccc',
          padding: '10px',
          margin: '10px',
          borderRadius: '5px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '180px' 
        }}> 
          <h3>Rainfall</h3>
          <p>{farmData.rainfall}mm</p>
          <button 
            style={{ 
              backgroundColor: 'transparent', 
              color: '#4CAF50', 
              padding: '8px 12px', 
              borderRadius: '3px', 
              border: '1px solid #4CAF50', 
              cursor: 'pointer',
            }} 
            onClick={() => handleCardClick('Rainfall')}
          >
            View Trend
          </button> 
        </div>
      </div>
      {renderGraph()}
    </div>
  );
};

export default FarmAnalyticsDashboard;