const addbtn = document.querySelector("#addbtn")
const main = document.querySelector("#main")

addbtn.addEventListener(
    "click",
    function(){
       addnote();
        }
     )
  

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    if(data.length === 0){
        localStorage.removeItem("notes")
    }
    else{
    localStorage.setItem("notes", JSON.stringify(data))
    }
} 
 
// (
//     function(){
//       const notes = localStorage.getItem("notes");
//       console.log(notes)
//  }

// )()
/* <div class="note">
<div class="tool">
   <i class="fa-solid fa-trash"></i>
  <i class="fa-regular fa-cloud"></i>
</div>
<textarea></textarea>
</div>
 */

const addnote = (text = "") =>{
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
 <div class="tool">
   <i class="trash fa-solid fa-trash"></i>
  <i class="save fa-regular fa-cloud"></i>
</div>
<textarea>${text}</textarea>
     `;
note.querySelector(".trash").addEventListener(
    "click",
     function(){
        note.remove()
     }
) 
note.querySelector(".save").addEventListener(
    "click",
     function(){
        saveNotes()
     }
)  

main.appendChild(note);
saveNotes()
}

(
    function(){
      const lsnotes = JSON.parse(localStorage.getItem("notes"));
      if(lsnotes === null){
          addnote()
      }else{
        lsnotes.forEach(
            (lsnotes) => {
                addnote(lsnotes)
            }
          )
    
      }
   }

)()
