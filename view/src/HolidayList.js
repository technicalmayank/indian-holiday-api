import React, { useState, useEffect } from 'react';

const HolidayList = () => {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    const fetchHolidays = async () => {
      try {
        const response = await fetch('http://localhost:8080/https://indian-holiday-api.onrender.com/api/holidays');
        const data = await response.json();
        setHolidays(data);
      } catch (error) {
        console.error('Error fetching holidays:', error);
      }
    };

    fetchHolidays();
  }, []);

  return (
    <div>
      <h1>Holiday List</h1>
      <ul>
        {holidays.map((holiday, index) => (
          <li key={index}>{holiday.name} - {new Date(holiday.date).toLocaleDateString()}</li>
        ))}
      </ul>
    </div>
  );
};

export default HolidayList;
