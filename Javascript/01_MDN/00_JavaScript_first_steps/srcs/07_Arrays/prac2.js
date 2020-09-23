var list = document.querySelector('.output ul');
var searchInput = document.querySelector('.output input');
var searchBtn = document.querySelector('.output button');

list.innerHTML = '';

var myHistory= [];

searchBtn.onclick = function() {
    if (searchInput.value !== '') {
        myHistory.unshift(searchInput.value);
    list.innerHTML = '';
    for (let i = 0; i < myHistory.length; i++) {
        itemText = myHistory[i];
        let listItem = document.createElement('li');
        listItem.textContent = itemText;
        list.appendChild(listItem);
    }
    if(myHistory.length >= 5) {
        myHistory.pop();
    }
    searchInput.value = '';
    searchInput.focus();
    }
}