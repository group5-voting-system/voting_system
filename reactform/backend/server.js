const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex')(require('./knexfile').development);
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

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
    const [totalVoters, totalLists, totalPartyLists] = await Promise.all([
      knex('lists').sum('COUNT_OF_VOTES as total').first(),
      knex('lists').count('* as total').first(),
      knex('lists').where('LIST_TYPE', 'PARTY').count('* as total').first()
    ]);

    res.json({
      totalVoters: totalVoters.total || '0',
      totalLists: totalLists.total || '0',
      totalPartyLists: totalPartyLists.total || '0'
    });
  } catch (error) {
    console.error('Error fetching overview stats:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));