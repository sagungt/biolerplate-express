require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { helper: responseHelper } = require('express-response-helper');
const authRoutes = require('./src/routes/auth.routes');
const userRoutes = require('./src/routes/user.routes');
const customerRoutes = require('./src/routes/customer.routes');
const productRoutes = require('./src/routes/product.routes');
const orderRoutes = require('./src/routes/order.routes');

const app = express();
const port = process.env.APP_PORT || 3000;

const corsOptions = {
  origin: 'http://localhost:8000',
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors(corsOptions));

app.use(responseHelper());

app.get('/', (req, res) => res.respond({ message: 'Hello world!' }, 200));

authRoutes(app);
userRoutes(app);
customerRoutes(app);
productRoutes(app);
orderRoutes(app);

app.get('/*', (req, res) => res.failNotFound(`Route ${req.url} not found`));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`🚀 server run at port ${port}`));
