# 02. What went wrong?

* [원문 링크](https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps/What_went_wrongh)

* 본 챕터에선 여러 가지 에러 종류에 대해 간단히 알 수 있었다.

## 에러의 종류
> 일반적으로, 코드가 잘못된 이유에는 2가지 종류가 있으니 살펴보자.

* 구문 에러(Syntax errors)
    - 코드 상의 구문 에러로 대개 철자가 잘못되어 작동이 안되거나 중간에 프로그램이 중지된다.
    - 물론 여기서 에러 메시지가 출력되므로 확인할 수 있다. 
    - 코드 편집기 툴을 사용하고 에러 메시지의 의미만 파악할 수 있다면, 충분히 고칠 수 있다.
* 논리 에러(Logic errors)
    - 구문은 올바르지만, 코드의 의미자체가 잘못된 경우이다. 즉 프로그램은 정상적으로 돌아가지만, 원하는 결과를 얻지 못하는 경우이다.
    - 에러 메시지가 직접적으로 표시되지 않기 때문에, 일반적으로 구문에러보다 에러 수정이 힘들다.
## 다른 일반적인 에러
* `SyntaxError: missing ; before statement`: 보통 문장 끝에 `;`이 빠졌을 때 발생.
* `어떤 값을 입력해도, 항상 성공표시가 뜬다.`: 대입연산자를 비교연산자와 혼동했을 때.
    - 예시)
    - `if (userGuess === randomNumber) {` 를 `if (userGuess = randomNumber) {`로 혼동.
* `SyntaxError: missing : after property id`: 객체가 잘못되었을 때 발생.
* `SyntaxError: expected expression, got 'string' or SyntaxError: unterminated string literal`: 보통 문자열을 열거나 닫는 따옴표가 생략된 경우 발생.