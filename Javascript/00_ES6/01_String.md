# 01. String
* ES2015 String: 새로운 메소드들

## 예시

            let str = "hello world ! ^^ ~~";
            let matchstr = "hello"; // 2)

            console.log(str.startsWith(matchstr)); // true
            console.log(str.endsWith(matchstr)); // false

            console.log("include test " , str.includes("^")); // true
* hello로 시작하는지 어떻게 확인하는가?
    - 1) 정규표현식
    - 2) 변수 이용, 잘라서 비교하는 `substr`등 이용하기.
    - 3) `startsWith`, `endsWith`
* 이외
    - `includes`

* 기존엔 여러 라이브러리들에서 제공됐던 것이나, ES2015로 표준 자바스크립트에서도 사용할 수 있게 되었다.