

export class Valute {
    ID: string;
    NumCode: string;
    CharCode: string;
    Nominal: number;
    Name: string;
    Value: number;
    VunitRate: number;
    constructor(
        ID: string,
        NumCode: string,
        CharCode: string,
        Nominal: number,
        Name: string,
        Value: number,
        VunitRate: number
    ) {
        this.ID = ID
        this.NumCode = NumCode
        this.CharCode = CharCode
        this.Nominal = Nominal
        this.Name = Name
        this.Value = Value
        this.VunitRate = VunitRate
    } 

}