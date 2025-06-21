import express from 'express'
import cors from 'cors'

const app = express();
const port= 3000;

app.use(cors());

app.post('/api/pairup', async (req, res) => {
    res("Success");
});

app.get('/api/analytics', async (req, res) => {
    try {
        const response = await fetch('https://api.thingspeak.com/channels/2993783/fields/1.json?results=2');
        const data = await response.json();
        res.status(200).json(data);
        console.log(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch analytics data' });
    }
});

app.listen(port,(res,req)=>{
    console.log(`App listenng at port: http://localhost:${port}`);
})