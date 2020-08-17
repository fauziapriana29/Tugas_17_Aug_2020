alert('Do you ready to Write your list ?')


let addtodobutton = document.getElementById("addtodo");
let todocontainer = document.getElementById("todocontainer");
let inputfield = document.getElementById("inputfield");

addtodobutton.addEventListener('click', function(){
        document.getElementById("addtodo").click()
        var paragraph = document.createElement("p");
        paragraph.innerText = inputfield.value;
        todocontainer.appendChild(paragraph);
        inputfield.value = ''

        paragraph.addEventListener('click', function(){
            paragraph.style.textDecoration = "line-through"
        })
  
})