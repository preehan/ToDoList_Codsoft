let addtoDoButton=document.getElementById('addtoDo');
let todoContainer=document.getElementById('todoContainer');
let inputBx=document.getElementById('inputField');

addtoDoButton.addEventListener('click',function(){
    var paragraph=document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText=inputField.value;
    todoContainer.appendChild(paragraph);
    inputField.value="";
    // to cut the done task
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration="line-through";
    })
    // to remove the unwanted tasks
    paragraph.addEventListener('dblclick',function(){
        todoContainer.removeChild(paragraph);
      
    })
})