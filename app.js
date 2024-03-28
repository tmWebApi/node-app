// app.js
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 8520;
const RENDER_API_KEY = 'rnd_zmMN4HWslHTwXx82Gx2EOkJWCu13'; // Replace with your Render API Key

app.get('/services', async (req, res) => {
    try {
        console.log("get work!!");
        const renderServices = await axios.get('https://api.render.com/v1/services', {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${RENDER_API_KEY}`
            }
        });

        // Extract the list of services from the Render API response
        const services = renderServices.data;
        console.log(services);
        // Respond with the list of services as JSON
        res.json(services);
    } catch (error) {
        // Handle errors
        console.error('Error fetching services from Render API:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
