function print() {
    const ul = document.querySelector("ul");
    const li = Array.from(ul.querySelectorAll("li"));
    let arr = [];
    let answers = [];
    li.forEach(function(query) {
        arr.push(query.innerText);
    })
    answers = arr.filter(answer => answer.includes('e'));
    console.log(answers);
    /*
    answers = arr.filter(function(answer) {
        if(answer.includes('e'))
            return answer});
    */
}

print();