const express = require('express');
const mongoose = require('mongoose');
const createAdmin = require('./utils/createAdmin');

const app = express();

// Подключение к MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  createAdmin(); // Запуск создания администратора по умолчанию
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Другие настройки и маршруты

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
