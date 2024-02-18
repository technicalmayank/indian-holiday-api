// Import required modules
const mongoose = require('mongoose');
const Holiday = require('./models/Holiday');

// Connect to MongoDB Atlas cluster with increased timeout
mongoose.connect('mongodb+srv://gurjeet:eupL6VitHuzsaItm@cluster0.vrfntvb.mongodb.net/grid21', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  socketTimeoutMS: 60000, // Set socket timeout to 60 seconds
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas cluster');
  
  // Insert holiday data
  insertHolidayData();
});

// Function to insert holiday data
async function insertHolidayData() {
  try {
    // Sample holiday data
    const holidays = [
         // 2022
    { name: 'New Year', date: new Date('2022-01-01') },
    { name: 'Republic Day', date: new Date('2022-01-26') },
    { name: 'Independence Day', date: new Date('2022-08-15') },
    { name: 'Gandhi Jayanti', date: new Date('2022-10-02') },
    { name: 'Diwali', date: new Date('2022-10-24') },
    
    // 2023
    { name: 'New Year', date: new Date('2023-01-01') },
    { name: 'Republic Day', date: new Date('2023-01-26') },
    { name: 'Independence Day', date: new Date('2023-08-15') },
    { name: 'Gandhi Jayanti', date: new Date('2023-10-02') },
    { name: 'Diwali', date: new Date('2023-11-12') },
    
    // 2024
    { name: 'New Year', date: new Date('2024-01-01') },
    { name: 'Republic Day', date: new Date('2024-01-26') },
    { name: 'Independence Day', date: new Date('2024-08-15') },
    { name: 'Gandhi Jayanti', date: new Date('2024-10-02') },
    { name: 'Diwali', date: new Date('2024-10-13') },
    
    // 2025
    { name: 'New Year', date: new Date('2025-01-01') },
    { name: 'Republic Day', date: new Date('2025-01-26') },
    { name: 'Independence Day', date: new Date('2025-08-15') },
    { name: 'Gandhi Jayanti', date: new Date('2025-10-02') },
    { name: 'Diwali', date: new Date('2025-10-31') },
    
    // 2026
    { name: 'New Year', date: new Date('2026-01-01') },
    { name: 'Republic Day', date: new Date('2026-01-26') },
    { name: 'Independence Day', date: new Date('2026-08-15') },
    { name: 'Gandhi Jayanti', date: new Date('2026-10-02') },
    { name: 'Diwali', date: new Date('2026-11-20') },
    
    // 2027
    { name: 'New Year', date: new Date('2027-01-01') },
    { name: 'Republic Day', date: new Date('2027-01-26') },
    { name: 'Independence Day', date: new Date('2027-08-15') },
    { name: 'Gandhi Jayanti', date: new Date('2027-10-02') },
    { name: 'Diwali', date: new Date('2027-11-09') },
    
    // 2028
    { name: 'New Year', date: new Date('2028-01-01') },
    { name: 'Republic Day', date: new Date('2028-01-26') },
    { name: 'Independence Day', date: new Date('2028-08-15') },
    { name: 'Gandhi Jayanti', date: new Date('2028-10-02') },
    { name: 'Diwali', date: new Date('2028-10-28') },
    
    // 2029
    { name: 'New Year', date: new Date('2029-01-01') },
    { name: 'Republic Day', date: new Date('2029-01-26') },
    { name: 'Independence Day', date: new Date('2029-08-15') },
    { name: 'Gandhi Jayanti', date: new Date('2029-10-02') },
    { name: 'Diwali', date: new Date('2029-11-16') },
    
    // 2030
    { name: 'New Year', date: new Date('2030-01-01') },
    { name: 'Republic Day', date: new Date('2030-01-26') },
    { name: 'Independence Day', date: new Date('2030-08-15') },
    { name: 'Gandhi Jayanti', date: new Date('2030-10-02') },
    { name: 'Diwali', date: new Date('2030-11-05') },
    
    // 2031
    { name: 'New Year', date: new Date('2031-01-01') },
    { name: 'Republic Day', date: new Date('2031-01-26') },
    { name: 'Independence Day', date: new Date('2031-08-15') },
    { name: 'Gandhi Jayanti', date: new Date('2031-10-02') },
    { name: 'Diwali', date: new Date('2031-10-25') }
    ];

    // Insert holiday data into the database
    const insertedHolidays = await Holiday.insertMany(holidays);
    console.log('Holiday data inserted successfully:', insertedHolidays);
  } catch (error) {
    console.error('Error inserting holiday data:', error);
  } finally {
    // Close the database connection after insertion
    mongoose.connection.close();
  }
}
