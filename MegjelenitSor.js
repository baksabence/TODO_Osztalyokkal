export default class MegjelenitSor{
    #adat = {}
    #index
    constructor(adat, szuloElem, index){
        this.#adat = adat
        this.tablaElem = szuloElem
        this.#index = index

        this.#sor();

        this.sorElem = this.tablaElem.children("tr:last-child")
        this.torlesElem = this.sorElem.children("td").children(".torol")
        this.keszElem = this.sorElem.children("td").children(".kesz")
        this.megseElem = this.sorElem.children("td").children(".megse")
       
        this.torlesElem.on("click", () =>{
            this.sorElem.remove()
            this.#esemenyTrigger("torles")
        })

        this.keszElem.on("click", () =>{
            this.#allapotValtozas()
        })

        this.#allapotFrissit()
        
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

    #esemenyTrigger(esemenyNev){
        const torlesEsemeny = new CustomEvent(esemenyNev, {detail: this.#index})
        window.dispatchEvent(torlesEsemeny)
    }

    #allapotValtozas() {
        this.keszElem.toggleClass("kesz megse")
        this.keszElem.text(this.keszElem.hasClass("kesz") ? "✔️" : "❌")
    }

    #allapotFrissit() {
        if (this.#adat.kész) {
            this.keszElem.removeClass("kesz").addClass("megse").text("❌")
        } else {
            this.keszElem.removeClass("megse").addClass("kesz").text("✔️")
        }
    }


}