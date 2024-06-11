const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

const topics = {}; // To store topic subscriptions: topicId -> Set of subscriberIds

// API to subscribe to a topic
app.post('/subscribe', (req, res) => {
  const { topicId, subscriberId } = req.body;

  if (!topics[topicId]) {
    topics[topicId] = new Set();
  }

  topics[topicId].add(subscriberId);
  res.send(`Subscriber ${subscriberId} subscribed to topic ${topicId}`);
});

// API to notify subscribers of a topic
app.post('/notify', (req, res) => {
  const { topicId } = req.body;
  const subscribers = topics[topicId];

  if (!subscribers) {
    res.send(`No subscribers for topic ${topicId}`);
    return;
  }

  // Notify all subscribers
  res.send(`Notifying subscribers of topic ${topicId}`);
  subscribers.forEach(subscriberId => {
    console.log(`Notifying subscriber ${subscriberId}`);
  });
});

// API to unsubscribe from a topic
app.post('/unsubscribe', (req, res) => {
  const { topicId, subscriberId } = req.body;
  
  const subscribers = topics[topicId];
  if (!subscribers) {
    res.send(`No subscribers for topic ${topicId}`);
    return;
  }

  subscribers.delete(subscriberId);

  if (subscribers.size === 0) {
    delete topics[topicId];
  }

  res.send(`Subscriber ${subscriberId} unsubscribed from topic ${topicId}`);
});

app.listen(port, () => {
  console.log(`Publisher-Subscriber app listening at http://localhost:${port}`);
});