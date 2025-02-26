// src/server.js
const express = require('express');
const cors = require('cors');
const openaiRoutes = require('./routes/openaiRoutes');
const supabaseRoutes = require('./routes/supabaseRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const googleAuthRoutes = require('./routes/googleAuthRoutes');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/google-auth', googleAuthRoutes);
app.use('/api/openai', openaiRoutes);
app.use('/api/supabase', supabaseRoutes);
app.use('/api/payments', paymentRoutes);
app.get('/', (req, res) => {
    res.send('Server is up and running! 😸');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
