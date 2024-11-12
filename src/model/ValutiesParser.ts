import { Valute } from "./Valute";
import axios from "axios";
import { ValCurs } from "./ValCurs";

export class ValutiesParser {
    
    constructor() {}

    public async Parse(): Promise<ValCurs | null>  {  
        const response = await axios.get(
            'http://localhost:8010/proxy/scripts/XML_daily.asp',
            {
              headers: {
                'Content-Type': 'application/xml'
              }
            }
          )   
        if (response.status != 200) {            
            return null
        }        
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response.data, "application/xml");

        const valCursElement = xmlDoc.getElementsByTagName("ValCurs")[0];
        const date = valCursElement.getAttribute("Date");
        const name = valCursElement.getAttribute("name");

        const valutes: Valute[] = [];
        const valuteNodes = valCursElement.getElementsByTagName("Valute"); 
        
        for (let i = 0; i < valuteNodes.length; i++) {
        const valuteNode = valuteNodes[i];
        const ID = valuteNode.getAttribute("ID") || "";
        const NumCode = valuteNode.getElementsByTagName("NumCode")[0]?.textContent || "";
        const CharCode = valuteNode.getElementsByTagName("CharCode")[0]?.textContent || "";
        const Nominal = parseFloat(valuteNode.getElementsByTagName("Nominal")[0]?.textContent?.replace(',', '.') || "0");
        const Name = valuteNode.getElementsByTagName("Name")[0]?.textContent || "";
        const Value = parseFloat(valuteNode.getElementsByTagName("Value")[0]?.textContent?.replace(',', '.') || "0");
        const VunitRate = parseFloat(valuteNode.getElementsByTagName("VunitRate")[0]?.textContent?.replace(',', '.') || "");
        const valute = new Valute(ID, NumCode, CharCode, Nominal, Name, Value, VunitRate);
        valutes.push(valute);
    }
        var result = new ValCurs(date || "", name || "", valutes);        
       
        return result
    }
}