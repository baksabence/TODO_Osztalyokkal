import MegjelenitSor from "./MegjelenitSor.js";

export default class TodoView{
        #adatLista = []
    
        constructor(adatLista, szuloElem){
            this.#adatLista = adatLista;
            szuloElem.append('<table class="table table bordered table striped"></table>')
            this.tablaElem = szuloElem.children("table")
            this.tablaFeltolt()
        }

        tablaFeltolt() {
            for (let index = 0; index < this.#adatLista.length; index++) {
                const elem = this.#adatLista[index];
                
                new MegjelenitSor(elem, this.tablaElem)
            }
        }
    }