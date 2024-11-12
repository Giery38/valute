import { Valute } from "./Valute"

export class ValCurs {
    public Date: Date
    public name: string
    public Valute: Valute[]
    constructor(date: string, name: string, Valute: Valute[]) {
        this.Date = new Date(date)
        this.name = name
        this.Valute = Valute
    }
}