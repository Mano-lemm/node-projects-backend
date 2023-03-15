export class project {
    public title: string
    public date: Date
    public link: string
    public lang: string

    constructor(title: string, date: Date, link: string, lang: string){
	this.title = title;
	this.date = date;
	this.link = link;
	this.lang = lang;
    }
}
