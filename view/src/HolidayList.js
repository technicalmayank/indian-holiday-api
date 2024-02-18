import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HolidayList = () => {
  const [holidaysByYear, setHolidaysByYear] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://cors-anywhere.herokuapp.com/https://indian-holiday-api.onrender.com/api/holidays', {
          headers: {
            'x-api-key': 'baf0b635ed05bdbf28929f41a909859df15c8342549e4d8a1a091a10714870e0'
          }
        });
        const data = response.data;
        const holidaysGroupedByYear = groupHolidaysByYear(data);
        setHolidaysByYear(holidaysGroupedByYear);
      } catch (error) {
        console.error('Error fetching holidays:', error);
      }
    };

    fetchData();
  }, []);

  const groupHolidaysByYear = (holidays) => {
    const groupedHolidays = {};
    holidays.forEach((holiday) => {
      const year = new Date(holiday.date).getFullYear();
      if (!groupedHolidays[year]) {
        groupedHolidays[year] = [];
      }
      groupedHolidays[year].push(holiday);
    });
    return groupedHolidays;
  };

  return (
    <div>
      {Object.keys(holidaysByYear).map((year) => (
        <div key={year}>
          <h2>{year}</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {holidaysByYear[year].map((holiday, index) => (
                <tr key={index}>
                  <td>{holiday.name}</td>
                  <td>{new Date(holiday.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default HolidayList;
