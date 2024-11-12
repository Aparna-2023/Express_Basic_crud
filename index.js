const express = require('express');
const { sequelize } = require('./models'); // Import sequelize instance
const userRoutes = require('./Routes/userRoutes'); // Import the user routes
const app = express();
const port = 3000;

app.use(express.json());
app.use('/users', userRoutes); // Use the user routes with '/users' as the base route

// Start the server
app.listen(port, async () => {
  try {
    await sequelize.sync(); // Sync models with the database
    console.log(`Server is running on http://localhost:${port}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
