const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Enter The Task Before Adding!! , You Dumb :(");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)      
    }
    inputBox.value=""; 
    saveData();

}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        if(confirm("Delete The Task Are Your Sure?")){
            e.target.parentElement.remove();
            saveData();
        }

        else{
           
        }
        
      
    }
}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);

}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");

}
showTask();