// const express = require('express')
// const dbConnect = require('./dbConnect')
// const app = express()
// app.use(express.json())
// const path = require('path')
// const userRoute = require('./routes/usersRoute')
// const transactionsRoute = require('./routes/transactionsRoute')
// app.use('/api/users/' , userRoute)
// app.use('/api/transactions/' , transactionsRoute)

// const port =process.env.PORT || 5000



// app.listen(port, () => console.log(`Node JS Server started at port ${port}!`))


const express = require('express');
const dbConnect = require('./dbConnect');
const app = express();
const path = require('path');

app.use(express.json());

// Routes
const userRoute = require('./routes/usersRoute');
const transactionsRoute = require('./routes/transactionsRoute');

app.use('/api/users', userRoute);
app.use('/api/transactions', transactionsRoute);

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
