
let myLibrary = [{title: "dune",author:"guy01", pages:"200",read:"Yes"},{title: "HarryP",author:"guy02", pages:"500",read:"No"},{title: "Atom",author:"guy03", pages:"800",read:"Yes"}];


const emptyCheck=(title,author,pages)=>{
    let valid = true;
    if(title === ''){
      return  valid = false
    }
    if(author ===''){
      return  valid = false
    }
    if(pages===''){
      return  valid = false
    }
 return valid;
}

function addBookToLibrary() {
    const formElement = document.getElementById('formEli');
    var Btitle = formElement.elements['title'].value;
    var BAuthor = formElement.elements['auhtor'].value;
    var Bpages = formElement.elements['pages'].value;
    var B_read = document.getElementById("bRead");
    
    if(!emptyCheck(Btitle,BAuthor,Bpages)){
        return;
    }
    const book = {title: Btitle,author:BAuthor, pages:Bpages,read:readStatusCheck(B_read.checked)};
    myLibrary.push(book);
    console.table(myLibrary);
  }

 function readStatusCheck(value){
    let readCheck = 'No';
    if(value == true){
      readCheck = 'Yes';
  }
  return readCheck;
 }

const bookTable = document.getElementById("bookTable");
function showLibrary(){
    while(bookTable.hasChildNodes()){
        bookTable.removeChild(bookTable.firstChild);
    }
    for(let i = 0; i< myLibrary.length;i++){
        var row = bookTable.insertRow(i);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            cell1.innerHTML = ""+ myLibrary[i].title;
            cell2.innerHTML = ""+ myLibrary[i].author;
            cell3.innerHTML = ""+ myLibrary[i].pages;
            cell4.innerHTML = ""+ myLibrary[i].read;
    }
}


const divContainer = document.getElementById('bookDisplay');
function tileCreate(){
  
  while(divContainer.hasChildNodes()){
    divContainer.removeChild(divContainer.firstChild);
  }
    
  for(let i = 0; i<myLibrary.length;i++){
    const tile = document.createElement('div');
    tile.classList.add("tile");
    divContainer.appendChild(tile);
    const author = document.createElement('div');
    author.innerHTML = myLibrary[i].author;
    const pages = document.createElement('div');
    pages.innerHTML = myLibrary[i].pages;
    const readstatus = document.createElement('div');
    readstatus.innerHTML = myLibrary[i].read;
    const title = document.createElement('div');
    title.innerHTML = myLibrary[i].title;
    title.classList.add('title')
    const readBtn = document.createElement('button');
    readBtn.onclick = changeReadStatus;
    readBtn.innerHTML = 'Change read';
    readBtn.value = ''+ i;
    tile.appendChild(title);
    tile.appendChild(author);
    tile.appendChild(pages);
    tile.appendChild(readstatus);
    tile.appendChild(readBtn);
  }
  
}

function changeReadStatus(e){
  var text = e.target.previousSibling.textContent;
  var value = e.target.value;
  if(text === 'Yes'){
    text = "No"
  }else if(text ==='No'){
    text = "Yes"
  }
  e.target.previousSibling.innerHTML = text;
  myLibrary[value].read = text;
  console.table(myLibrary);
}

function removeTable(){
 bookTable.removeChild(bookTable.firstChild);
}
