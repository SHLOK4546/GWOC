let addbutt=document.getElementById("addbutton");
addbutt.addEventListener("click",adding);
let parentList=document.getElementById("parentList");

function adding(e){
    if(parentList.children[0].className==="empty"){
        parentList.children[0].remove();
    }
    let currbutton= e.currentTarget;
    let currinput=currbutton.previousElementSibling;
    let currvalue=currinput.value;

    let newli=document.createElement("li");
    newli.className="list-group-item d-flex justify-content-between";
    newli.innerHTML=`<h3 class="heading">${currvalue}</h3>
    <button type="button" class="btn btn-warning ">edit</button>
    <button type="button" class="btn btn-danger" onclick="removechap(this)">remove</button>`;

    parentList.appendChild(newli);
}

function removechap(currElement){
    currElement.parentElement.remove();
    let parentList=document.getElementById("parentList");
    if(parentList.children.length<=0){
        let newtext=document.createElement("h3");
        newtext.className="empty";
        newtext.textContent="No chapters Added";
        parentList.appendChild(newtext);    
    }
}

function editchap(currElement){
    if(currElement.textContent=="done"){
        currElement.textContent="edit"; 
        let currChapter=currElement.previousElementSibling.value;
        let currHeading=document.createElement("h3");
        currHeading.className="heading"; 
        currHeading.textContent=currChapter;

        currElement.parentElement.replaceChild(currHeading,currElement.previousElementSibling);
    }
    else{
    
    currElement.textContent="done";
    let currChapter=currElement.previousElementSibling.textContent;
    let currInput=document.createElement("input");
    currInput.type="text";
    currInput.placeholder="ADD CHAPTER";
    currInput.className="form-control"; 
    currInput.value=currChapter;
    
    currElement.parentElement.replaceChild(currInput,currElement.previousElementSibling);
    }
}    