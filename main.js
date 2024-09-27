import { todoLISTA } from "./adat.js";
import TodoView from "./TodoView.js";

$(function (){
    const szuloElem = $(".tarolo")
    new TodoView(todoLISTA, szuloElem)

    $(window).on("torles", (event) =>{
        
        const torlendo = event.detail
        todoLISTA.splice(torlendo, 1)
        console.log(torlendo)
    })
})