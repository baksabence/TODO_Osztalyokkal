import { todoLISTA } from "./adat.js";
import TodoView from "./TodoView.js";

$(function (){
    const szuloElem = $(".tarolo")
    new TodoView(todoLISTA, szuloElem)
})