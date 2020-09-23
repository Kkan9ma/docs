var list = document.querySelector('.output ul');
list.innerHTML = '';
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for(var i = 0; i < cities.length; i++) {
  var input = cities[i];
  input = input.toLowerCase();
  var temp = input[0].toUpperCase() + input.slice(1);
  var result = temp;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);

}