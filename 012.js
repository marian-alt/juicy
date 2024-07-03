let list = document.querySelector('.form-id');
let detailsList = document.querySelector('.details-lists')
let btn= document.querySelector('.btn')
btn.addEventListener("click", function(){
    
        const listName = list.Value;
        let listitem = document.createElement('li')
        listitem.className = 'list-items'
        listitem.style.display= 'block'
        listitem.textContent =listitem;
        detailsList.appendChild(listitem);
    })
 