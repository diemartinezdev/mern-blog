const express = require("express");
const app = express();
const { MongoClient } = require("mongodb")
const PORT = process.env.PORT || 8000;

const articlesInfo = {
  "learn-react": {
    comments: [],
  },
  "learn-node": {
    comments: [],
  },
  "my-thoughts-on-learning-react": {
    comments: [],
  },
};

// Initialize middleware
app.use(express.json({ extended: false }));

app.get('/api/article/:name', async (req, res) => {
  try {
    const articleName = req.params.name;
    const client = await MongoClient.connect('mongodb://localhost:27017');
    const db = client.db("mernblog");
    const articleInfo = await db.collection('articles').findOne({ name: articleName });
    res.status(200).json(articleInfo);
    client.close();
  } catch (error) {
    res.status(500).json({ message: "error connecting to database", error });
  }
});

app.post("/api/articles/:name/add-comments", (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;
  articlesInfo[articleName].comments.push({ username, text });
  res.status(200).send(articlesInfo[articleName]);
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
