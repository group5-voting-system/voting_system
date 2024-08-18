const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex')(require('./knexfile').development);
const cors = require('cors');
const debatesRouter = require('./routes/router');
const nodemailer = require('nodemailer');
require('dotenv').config();



const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(bodyParser.json());

// app.use("/api/candidate-requests", candidateRequestRoutes);
// app.use("/api/local-lists", localListRoutes);

// app.use('/voting', votingRoutes);


// const transporter = nodemailer.createTransport({
//   host: 'smtp.mailtrap.io',
//   port: 587,
//   secure: false, // Use TLS
//   auth: {
//     user: 'mohamahasoun60@gmail.com',
//     pass: 'Mes%3alnasel6ayba'
//   }
// });








app.post('/api/submit-advertisement', async (req, res) => {
  try {
    const {
      nationalId,
      listId,
      circleId,
      title,
      description,
      url,
      startDate,
      endDate,
      paymentId
    } = req.body;

    const [id] = await knex('election_advertisements')
      .insert({
        NATIONAL_ID: nationalId,
        LIST_ID: listId,
        CIRCLE_ID: circleId,
        TITLE: title,
        DESCRIPTION: description,
        URL: url,
        START_DATE: startDate,
        END_DATE: endDate,
        PAYMENT_ID: paymentId
      })
      .returning('ID');

    res.status(201).json({ message: 'Advertisement created successfully', id });
  } catch (error) {
    console.error('Error submitting advertisement:', error);
    res.status(500).json({ error: 'An error occurred while submitting the advertisement', details: error.message });
  }
});


app.get('/api/overview-stats', async (req, res) => {
  try {
    const [totalVoters, totalLocalLists, totalPartyLists] = await Promise.all([
      knex('USERS').count('* as count').first(),
      knex('LOCAL_LISTS').count('* as count').first(),
      knex('PARTY_LISTS').count('* as count').first(),
    ]);

    const [sumLocalVotes, sumPartyVotes] = await Promise.all([
      knex('LOCAL_LISTS').sum('COUNT_OF_VOTES as total').first(),
      knex('PARTY_LISTS').sum('COUNT_OF_VOTES as total').first(),
    ]);

    res.json({
      totalVoters: parseInt(totalVoters.count),
      totalLocalLists: parseInt(totalLocalLists.count),
      totalPartyLists: parseInt(totalPartyLists.count),
      totalLocalVotes: parseInt(sumLocalVotes.total) || 0,
      totalPartyVotes: parseInt(sumPartyVotes.total) || 0,
    });
  } catch (error) {
    console.error('Error fetching overview stats:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.use('api', debatesRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));