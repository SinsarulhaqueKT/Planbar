window.addEventListener('load',()=>{
    const form=document.querySelector("#new_task_form")
    const input=document.querySelector("#new_task_input")
    const list_el=document.querySelector("#planning")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const task=input.value
    if(!task){
      alert("fill the box") 
      return ; 
    }
   


    const task_content_el=document.createElement("div")
    task_content_el.classList.add("secondbar")



    const task_input_el=document.createElement("input")
    task_input_el.classList.add("texting")
    task_input_el.type="text"
    task_input_el.value=task
    task_input_el.setAttribute("readonly","readonly")


    task_content_el.appendChild(task_input_el)

   const task_edit_el=document.createElement("button")
   task_edit_el.classList.add("edit")
   task_edit_el.innerText='edit'



   const task_delete_el=document.createElement("button")
   task_delete_el.classList.add("edit")
   task_delete_el.innerText='delete'



task_content_el.appendChild(task_edit_el)
task_content_el.appendChild(task_delete_el)
    
list_el.appendChild(task_content_el)

input.value=''

task_edit_el.addEventListener('click',(e)=>{
    if(task_edit_el.innerText.toLowerCase()=="edit"){
        task_edit_el.innerText="save"
        task_input_el.removeAttribute("readonly")
        task_input_el.focus()
    }
    else{
     task_edit_el.innerText="edit"
     task_input_el.setAttribute("readonly","readonly")
    }

})


task_delete_el.addEventListener('click',(e)=>{
    list_el.removeChild(task_content_el)
})


    
    
})

})