import cors from "cors";
import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import { projectRepo } from "./projectRepo";

const app: Application = express();
require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({ origin: "http://localhost:4200" }));


const PORT = process.env.DEV_PORT || 8000;
const projRepo = new projectRepo();

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});

app.get("/project/all", (req: Request, res: Response) => {
    projRepo.readAllProjects()
	.then(e => res.status(200).send(e))
	.catch(e => {
	    console.log(`Error in readAllProjects: ${e}`);
	    res.status(500).send();
	});
});

app.get("/project/lang/:name", (req: Request, res: Response) => {
    const name = req.params["name"];
    projRepo.readProjectsByLang(name)
	.catch(e => {
	    console.log(`Error in readProjectsByLang: ${e}`);
	    res.status(500).send();
	})
	.then(e => res.status(200).send(e));
});
