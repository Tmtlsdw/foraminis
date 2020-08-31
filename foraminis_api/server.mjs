import express from "express";
import cors from "cors";
// import bcrypt from "bcryptjs";

const port = 3000;
const database = {
	users: []
};
let id = 0;

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// noinspection JSCheckFunctionSignatures
app.use(cors());

app.get("/", (req, res) => res.json(database.users));

app.post("/register", (req, res) => {

	const {name, email, password, wave, erased} = req.body;

	database.users.push({
		name: name,
		email: email,
		password: password,
		erased: erased,
		wave: wave,
		id: ++id
	});
	res.json(database.users[database.users.length - 1]);
});

app.listen(port);
