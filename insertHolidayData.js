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
      { name: 'New Year', date: new Date('2024-01-01') },
      { name: 'Independence Day', date: new Date('2024-08-15') },
      { name: 'Diwali', date: new Date('2024-10-27') },
      // Add more holiday data as needed
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
