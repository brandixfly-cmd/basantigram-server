const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Simple test route
app.get("/", (req, res) => {
  res.send("Basantigram Backend Running ✅");
});

// Sample posts route
app.get("/posts", (req, res) => {
  res.json([
    { id: 1, user: "Basant", caption: "Hello Basantigram!", image: "https://placekitten.com/400/300" },
    { id: 2, user: "Demo", caption: "This looks like Instagram 😍", image: "https://placekitten.com/500/400" }
  ]);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));