const express = require('express');
const connectDB = require('./config/mongodb');
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/',(req,res)=>{
  res.send("api connected");
});
const PORT = process.env.PORT || 5000;
connectDB();

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
