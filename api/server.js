const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { json } = require('body-parser');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(json());

const { parsed: config } = dotenv.config();

const BASE_URL = `https:/localhost:7001`;

const auth = {
	username: config.API_KEY,
	password: config.API_SECRET,
};

app.get('/photos', async (req, res) => {
	const response = await axios.get(BASE_URL + '/resources/image', {
		auth,
		params: {
			next_cursor: req.query.next_cursor,
		},
	});
	console.log('sadd')
	return res.send(response.data);
});

app.get('/search', async (req, res) => {
	const response = {
		params: {
			expression: req.query.expression,
		}
	}

	console.log('weewwqeqweqeS')
	return res.send(response.data);
});


const PORT = 7001;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
