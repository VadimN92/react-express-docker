const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
	res.send("<h1>Hello from Express Server</h1>");
});

// An api endpoint that returns a short list of users
app.get("/api/users", (req, res) => {
	const list = ["user1", "user2", "user3"];
	res.json(list);
});

app.listen(PORT, () => {
	console.log("App is listening on port " + PORT);
});
