export default class MegjelenitSor{
    #adat = {}

    constructor(adat, szuloElem){
        this.#adat = adat
        this.tablaElem = szuloElem

        this.#sor();

        this.sorElem = this.tablaElem.children("tr:last-child")
        this.torlesElem = this.tablaElem.children(".torles")
        this.keszElem = this.tablaElem.children(".kesz")
       
    }

    #sor(){
        let txt = ""
        txt += "<tr>"

        for (const kulcs in this.#adat) {
            txt += `<td>${this.#adat[kulcs]}</td>`
        }

        txt += `<td><span class = "kesz">✔️</span> <span class="torol">🗑️</span></td>`;
        txt += "</tr>";
        this.tablaElem.append(txt);
    
    }

}