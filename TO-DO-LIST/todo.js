const item = document.querySelector("#item")
const todobox= document.querySelector("#to-do-box")

item.addEventListener(
    "keyup",
    function(event){
        if(event.key == "Enter")
      {
        const inputvalue = this.value.trim();//it is used to remove space 
        if(inputvalue !== "" && /^[a-zA-Z0-9\s]*$/.test(inputvalue) && !/^\s/.test(this.value) && !/\s$/.test(this.value)) {
            addtodo(inputvalue);
            // addtodo(this.value)
         this.value = "";
        }
      } 
    }
)

const addtodo = (item) => {
    const listitem = document.createElement("li");
    listitem.innerHTML = `                
    ${item}
     <i class="fas fa-times"></i>
`;
listitem.addEventListener(
    "click",
    function(){
        this.classList.toggle("done");
    }
)
listitem.querySelector("i").addEventListener(
    "click",
    function(){
        listitem.remove();
    }
)
todobox.appendChild(listitem)
}