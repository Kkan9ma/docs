# 05. Handling text — Strings in JavaScript
* [원문 링크](https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps/Strings)

---
## 학습 내용
### 따옴표 vs 쌍따옴표
* 자바스크립트에서는 따옴표와 쌍따옴표가 모두 허용됩니다. 다음의 코드는 문제 없이 작동할 것입니다.
            var sgl = 'Single quotes.';
            var dbl = "Double quotes";
            sgl;
            dbl;

* 따옴표와 쌍따옴표는 차이점이 거의 없어, 편한대로 사용할 수 있습니다. 하지만 당신은 문자열을 감싸는데 한 종류의 따옴표만 사용해야 되며 그렇지 않으면 에러가 발생합니다. 아래의 코드를 실행해 보세요.
    - `var badQuotes = 'What on earth?";`
* 브라우저는 다른종류의 따옴표가 감싸고 있어 문자열이 아직 끝나지 않았다고 생각합니다.  예를 들어, 아래 두 가지 모두 괜찮습니다.
    - `var sglDbl = 'Would you eat a "fish supper"?';`
    - `var dblSgl = "I'm feeling blue.";`
    - `sglDbl;`
    - `dblSgl;`
* 하지만, 당신은 같은 종류의 따옴표를 문자열에 포함시킬 수 없습니다. 브라우저는 어느 따옴표가 문자열이 끝났다는 것을 알리는지 혼돈하게 됩니다. 따라서 다음의 코드는 에러가 발생합니다.
    - `var bigmouth = 'I've got no right to take my place...';`
### 문자열 이스케이프 문자
* 직전의 문제의 코드를 해결하기 위해, 우리는 따옴표를 이스케이프 문자로 만들어야 합니다. 
* 이스케이프 문자란 어떤 한 문자를 코드가 아닌 문자열로 만들어주는 문자입니다.
* 자바스크립트에서는 역슬래시 ( \ )를 문자 바로 앞에 작성함으로써 코드가 아닌 문자열로 인식하게 합니다.
    - `var bigmouth = 'I\'ve got no right to take my place...';` 
### 숫자 vs 문자열
* 그러면 문자열과 숫자를 추가 (또는 연결) 하면 어떻게 될까요? 콘솔에서 사용해 보겠습니다.
* `'Front ' + 242;` // `Front242`
* 이 경우 오류가 발생할 것으로 예상할 수 있지만 잘 작동합니다. 
    - 숫자로 문자열을 나타내려는 것은 말이 안되지만 숫자를 문자열로 표현하는 것은 의미가 있습니다. 
    - 그래서 브라우저는 숫자를 문자열로 변환하고 두 문자열을 서로 연결시킵니다.
