# 06. Useful string methods
* [원문 링크](https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps/Useful_string_methods)

* 목표: 문자열이 객체임을 이해하고, 해당 객체에서 사용할 수있는 몇 가지 기본 메서드를 사용하여 문자열을 조작하는 방법을 배웁니다.

## 학습 내용
### 문자열의 길이 찾기
            var browserType = 'mozilla';
            browserType.length; // 7
### 특정 문자열 찾기
* `browserType[0]; // m`
* `browserType[browserType.length-1]; // a`
    - `.length - 1`은 마지막 글자


### 문자열 내부의 하위 문자열 찾기 및 추출
#### `indexOf()`
* 찾으면 해당 인덱스, 못 찾으면 -1 리턴
* 예시
    - `browserType.indexOf('zilla'); // 2`
    - `browserType.indexOf('vanilla'); // -1`
#### `slice()`
* 문자열 내에서 부분 문자열이 어디에서 시작되고 어떤 문자로 끝나는지 알고 싶으면 slice()를 사용하여 문자열을 추출할 수 있습니다.
* 예시
    - `browserType.slice(0,3); // "moz"`
* parameter 
    - 첫 번째는 추출을 시작할 문자 위치이고 두 번째는 추출할 문자의 갯수입니다. 따라서 슬라이스는 첫 번째 위치에서부터 세 번째 위치까지 포함됩니다.
    - 또한 특정 문자 뒤에 문자열의 나머지 문자를 모두 추출하려는 경우 두 번째 매개 변수를 포함하지 않고 문자열에서 나머지 문자를 추출할 위치의 문자 위치만 포함하면 됩니다.
    - 예시) `browserType.slice(2); // zilla`

### 대/소문자 변경
* `toLowerCase()`, `toUpperCase`
* 예시
            var radData = 'My NaMe Is MuD';
            radData.toLowerCase(); // "my name is mud"
            radData.toUpperCase(); // "MY NAME IS MUD"
### 문자열의 일부를 변경하기
* `replace()`

            let test = "mozilla";
            test.replace('moz','van'); // "vanilla"
            test // "mozilla"
#### 참고
* 이상의 메소드들은 문자열의 원본 데이터엔 영향을 주지 않는다.

## 예제 1
* 인사말 중, 크리스마스 관련 인사말만 필터링하라.

### 예시
            var list = document.querySelector('.output ul');
            list.innerHTML = '';
            var greetings = ['Happy Birthday!',
                            'Merry Christmas my love',
                            'A happy Christmas to all the family',
                            'You\'re all I want for Christmas',
                            'Get well soon'];

            for (var i = 0; i < greetings.length; i++) {
                var input = greetings[i];
                
                // Your conditional test needs to go inside the parentheses
                // in the line below, replacing what's currently there
                
                if (greetings[i]) {
                    var result = input;
                    var listItem = document.createElement('li');
                    listItem.textContent = result;
                    list.appendChild(listItem);
                }
            }
#### 풀이
* if문 내에 `greetings[i]`를 `greetings[i].indexOf('Christmas')`로 변경하면 되는 쉬운 문제였다. 
 [작성 답안](./srcs/06_Useful_string_methods/msg.js)

## 예제 2
* 대소문자 맞게 수정하기
### 예시
            var list = document.querySelector('.output ul');
            list.innerHTML = '';
            var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
            for(var i = 0; i < cities.length; i++) {
                var input = cities[i];
                // write your code just below here

                var result = input;
                var listItem = document.createElement('li');
                listItem.textContent = result;
                list.appendChild(listItem);
            }
#### 풀이
* 각 도시명을 받은 데이터인 input에 대해 글자를 모두 소문자로 변경시킨다.
* 이 중 첫 글자만 대문자로 만들면 되므로, `upperCase()`를 이용해 첫 단어만 대문자로 만든 후, `slice`를 이용해 나머지 부분을 구한 값을 뒤에 붙인다.
* `result`에 반영한다.
##### [작성 답안](./srcs/06_Useful_string_methods/cities.js)
