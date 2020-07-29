# 02. Array

## 1. for of - 순회하기(iterate)

### for in
            var data = [1, 2, undefined, NaN, null, ""];

            1) for (var i = 0; i < data; i++) {
                console.log(i); // 1, 2, 3, 4, 5
            }

            2) data.forEach(function(value) {
                console.log("valueis", value); // "valueis" 1 "valueis" 2 "valueis" undefined ...
            });

* 사진 ![]()

            for (let idx in data) {
                console.log(data[idx])l // 1 2 undefined NaN null ""
            }

* `for in`의 문제점
    - `for in`은 object를 순회할 때 사용하려고 사용.
    - 배열도 object의 일종이기에 순회는 함.
    - __그러나 자기 자신이 갖고 있지 않은 상위의 어떤 추가된 값까지 포함할 수도 있음.__

* 결과 사진 ![]()

### for of

            var data = [1, 2, undefined, NaN, null, ""];

            Array.prototype.getIndex = function(){};

            for (let value of data) {
                console.log(value); // 1 2 undefined NaN null ""
            }
* for문을 돌 때, `for in`을 썼을 때의 실수를 줄이기 위해 `for of`가 새로 나오게 되었다.

            var str = "hello world!!!!";
            for (let value of str) {
                console.log(value); // "h" "e" "l" ....... "w" "o" "r" "l" "d" "!" "!" ...
            }

## 2. spread operator - 배열의 복사
* 펼침 연산자

            let pre = ["apple", "orange", 100];
            let newData = [...pre]; // 펼침 연산자

            console.log(pre, newData); // ["apple", "orange", 100];, ["apple", "orange", 100]; 
            console.log(pre == newData) // False

* 같은 참조를 유지하지 않음.
* 새로운 걸 복사해서 반환하는 것.
* `...data`은 `...` 뒤에 있는 `data`를 펼쳐서 `가질 뿐이다.

## 3. spread operator - 몇 가지 활용

* 배열 사이에 넣을 때 쉽게 처리 가능.

            let pre = [100, 200, "hello", null];
            let newData = [0, 1, 2, 3, ...pre, 4];

            console.log(newData); // [0, 1, 2, 3, 100, 200, "hello", null, 4]

* 개별 parameter로 값을 전달하기 쉽다.
- 기존 방식
            function sum(a, b, c) {
                return a + b + c;
            }

            let pre = [100, 200, 300];

            console.log(sum.apply(null, pre)); // 펼쳐지면서 값이 들어간다. //600

- spread
    - `console.log(sum(...pre));` /// 위와 동일한 결과
 
## 4. from 메서드로 진짜 배열 만들기

### argument
function addMark() {
    let newData = [];

    for (let i = 0; i < arguments.length; i++) {
        newData,push(arguments[i] + "!");
    }
    console.log(newData);
}

addMark(1, 2, 3, 4, 5); // ["1!", "2!", "3!", "4!", "5!"]

* `argument` 객체를 이용하여 배열과 비슷한 형태로 인자값을 받아올 수 있다.

### map
#### arguments 에러
function addMark() {
    let newData = arguments.map(function(value) {
        return value + "!";
    });

    console.log(newData);
}

addMark(1, 2, 3, 4, 5); // Error

* Error: arguments는 배열과 비슷하게 생겼지만 배열이 아니기 때문.
#### map 활용
function addMark() {
    let newArray = Array.from(arguments);
    let newData = newArray.map(function(value) {
        return value + "!";
    });

    console.log(newData);
}

addMark(1, 2, 3, 4, 5); // ["1!", "2!", "3!", "4!", "5!"]

* `from`: 배열이 아닌 것을 배열형태로 만든다.
    - 예시) `queryselector`등으로 받아온 데이터에 대해서 위와 같이 사용할 수 있음.


