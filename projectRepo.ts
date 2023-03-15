import { project } from "./types/project";
import { fromOrdinal, toOrdinal } from "./types/lang";

interface mysqlI {
  createConnection: Function,
  createPool:  Function,
  createPoolCluster:  Function,
  createQuery:  Function,
  escape:  Function,
  escapeId:  Function,
  format:  Function,
  raw:  Function
}

require("dotenv").config();

export class projectRepo {
    private con: any

    public constructor() {
	let mysql: mysqlI = require("mysql2")

	this.con = mysql.createConnection({
	    host: "localhost",
	    user: process.env.DB_USER,
	    password: process.env.DB_PWD,
	    database: "showableProjects",
	});
    }

    public async readAllProjects(): Promise<project[]> {
	let query: string = "SELECT title, date, link, language FROM projects";
	const results: [project[], any] = await this.con.promise().query(query);
	return results[0].map((e: any) => new project(e.title, e.date, e.link, fromOrdinal(e.language)));
    }

    public async readProjectsByLang(lang: string): Promise<project[]> {
	let query: string = `SELECT title, date, link, language FROM projects WHERE language = ${toOrdinal(lang)}`
	const results: [project[], any] = await this.con.promise().query(query);
	return results[0].map((e: any) => new project(e.title, e.date, e.link, fromOrdinal(e.language)));
    }
}

