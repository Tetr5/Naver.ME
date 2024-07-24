import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Made By deepl');
});

app.get('/shorten', async (req, res) => {
  var url = req.query.url;
  
  try {
    const resp = await fetch(
      `https://me2do.naver.com/common/requestJsonpV2.nhn?svcCode=0&url=https://link.naver.com/bridge?url=${url}`,
      { method: 'POST', headers: { Referer: 'link.naver.com' } }
    );
    
    const data = await resp.text();
    const json = JSON.parse(data.trim().slice(1, -1));
    const result = { result: { data: json.result.httpsUrl } };
    res.json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while processing your request' });
  }
});

export default app;
