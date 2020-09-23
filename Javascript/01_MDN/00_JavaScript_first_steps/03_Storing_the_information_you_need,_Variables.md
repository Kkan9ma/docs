# 03. Storing the information you need — Variables

* [원문 링크](https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps/Variables)

* 본 챕터에선 변수의 개념에 대해 간단히 알 수 있었다.

---
## 학습 내용
### 변수 이름에 대한 규칙
* 변수를 원하는 대로 이름을 부여 할 수 있지만 제한이 있습니다. 일반적으로 라틴 문자(0-9, a-z, A-Z)와 밑줄 문자를 사용해야 합니다.
* 오류가 발생하거나 전 세계 타인이 이해하기 어려울 수 있으므로 다른 문자를 사용하면 안됩니다.
* 변수 이름의 시작부분에 밑줄(_)을 사용하지 마세요. JavaScript 구문에서 밑줄로 시작하는 것은 특별한 의미를 가지고 있으므로 혼란을 가져올수 있습니다.
* 변수 이름의 시작부분에 숫자를 사용하지 마세요. 허용되지 않으며 오류가 발생합니다.
* 안전한 명명법은 소위 "lower camel case"(소문자 낙타 문법) 입니다. 여러 단어를 하나로 묶고 첫 단어의 시작은 소문자를 사용하며 그다음 단어의 시작은 대문자로 사용합니다. 우리는 지금까지 이 문서에서 변수 이름에 이 방법을 사용해 왔습니다.
* 포함된 데이터를 쉽게 이해 할 수 있게 변수 이름을 직관적으로 부여 합니다. 단일 문자 / 숫자 또는 긴 구절을 사용하지 마세요.변수 이름을 직관적으로 만들어, 포함된 데이터를 표현 할 수 있습니다. 
* 변수는 대소문자를 구분 합니다. - myage 와 myAge  는 다른 변수 입니다.
* 마지막으로 JavaScript 예약어를 변수 이름으로 사용하면 안됩니다. (예약어란 JavaScript의 실제 구문을 구성하는 단어를 의미 합니다.) 따라서 변수 이름으로  var, function, let, for 와 같은 단어를 사용 할 수 없습니다. 브라우저는 이러한 단어를 다른 코드 아이템(예약어)로 인식하므로 오류가 발생 합니다.

#### 변수 사용 예시
##### 바람직한 변수 이름의 예:

            age
            myAge
            init
            initialColor
            finalOutputValue
            audio1
            audio2

##### 바람직하지 않은 변수 이름의 예:

            1
            a
            _12
            myage
            MYAGE
            var
            Document
            skjfndskjfnbdskjfb
            thisisareallylongstupidvariablenameman