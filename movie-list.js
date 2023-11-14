document.addEventListener('DOMContentLoaded',function(){

    const list = document.querySelector("#movie-list ul"); 
    const forms = document.forms;

    
    list.addEventListener('click',(e) => {
        if(e.target.className =='delete'){
            const li = e.target.parentElement;
            li.parentNode.removeChild(li); 
        }
    });  //e  = metadata present in object    

    // add movie

const addForm = forms['add-movie'];
addForm.addEventListener('submit',function(e){
e.preventDefault();

// create elements

const value = addForm.querySelector('input[type="text"]').value;

const li = document.createElement('li');
const movieName = document.createElement('span');
const deleteBtn = document.createElement('span');

movieName.textContent = value;
deleteBtn.textContent = 'delete';

movieName.classList.add('name');
deleteBtn.classList.add('delete');

li.appendChild(movieName);
li.appendChild(deleteBtn);
list.appendChild(li); 
});
})