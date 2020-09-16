# 08. Map & WeakMap
## 1. Map & WeakMap 추가정보를 담은 객체저장하기
* JavaScript엔 Array와 Object 자료구조가 있다.
* Array를 조금 개선한 자료구조가 set, Object가 특정 용도로 발전된 자료구조가 map이다.

            Array -> set, weakset
            Object -> map, weakmap


### Map
* map은 key-value 형태.
    - key 값에 객체가 저장된다고 보면 된다.

### weakmap

#### 예시
* 함수가 얼마나 실행됐는지를 알려고 할 때 참조로 들어간 count를 세보기.

            let wm = new WeakMap();
            let myfun = function (){};

            wm.set(myfun, 0);

            console.log(wm);

            for (let i = 0; i < 10; i++) {
                count = wm.get(myfun); // .get(): 값을 뽑음
                count++;
                wm.set(myfun, count);
            }

            console.log(wm); // console.log(wm.get(myfun)); === 10

            myfun = null;
            console.log(wm.get(myfun)); // undefined
            console.log(wm.has(myfun)); // false

* WeakMap `wm`과 함수 `myfun`을 선언한다.
* `.set` 메소드를 이용해 Weakmap `wm`에 키/값 쌍을 설정해줄 수 있다.
    - wm에 myfun을 key로, value를 0으로 set한다.
* `.get(key)` 메소드는 weakmap에서 `key`와 관련된 값이 있다면 관련된 값을, 관련된 값이 없을 땐 `undefined`를 반환한다.
    - for문은 다음과 같은 순서로 동작한다.
        - 처음엔 `myfun`의 value가 0이므로, `wm.get`한 결과는 0이다.
        - 이에 `count`는 0이 된다.
        - `count`를 `++`함으로, `count`는 `1`로 증가된다.
        - 추가한 1을 `myfun`에 `se`t한다.
        - 돌아와서 `wm.get` 한 값은 `1`, `count`는 `1`이 된다.
        - 증가한다.
        - ...
    - 따라서 0번째 entry에 담긴 `myfun`의 value는 10이다.
* WeakMap엔 `.get` 이외로도 값이 있는지 확인하는 `.has` 메소드도 있다.
    - 그러나 `null`로 초기화하면, `weakMap`으로 존재하지 않게 되는 것이므로, `false`를 리턴한다.

## 2. WeakMap 클래스 인스턴스 변수 보호하기
* ES6는 클래스라는 키워드가 존재.
* 본 예제에선 prototype 기반으로 만들어 봄.

### 예제
* 원래는 아래와 같은 방식을 이용.

            function Area(height, width) {
                this.height = height;
                this.width = width;
            }

            Area.prototype.getArea = function() {
                return this.height * this.width;
            }

            let myarea = new Area(10, 20);
            console.log(myarea.getArea()); // 200

* 함수 Area는 객체를 만들어준다.
* Area라는 객체에 프로토타입으로 메소드 `.getArea`를 정의한다.
    - (참고) 객체는 call by reference로, 선언 이후 prototype을 추가해도 반영된다.
* 새로운 인스턴스인 변수 `myarea`를 선언한다.
* Area로 만들어진 myarea는, getArea 메소드도 지닌 상태로 만들어진다.

### 접근을 막기
* weakmap으로 인스턴스 관리를 할 수 있다.
    - 필요가 없어지면 garbage 처리

* 클래스 밖 전역 공간에 보관.

            const wm = new WeakMap();

            function Area(height, width) {
                wm.set(this, {height, width}); 
            }

            Area.prototype.getArea = function() {
                const {height, width} = wm.get(this);
                return height * width;
                //return this.height * this.width;
            }

            let myarea = new Area(10, 20);
            console.log(myarea.getArea());
            //console.log(myarea.height); // undefined
            //console.log(myarea.width); // undefined

* `function Area(height, width)`
    - `wm.set(this, {height, width});`
        - 현재 객체에 height, width 두 가지 값을 숨겨두기. (`this`)
        - 외부에서 접근할 수 없음. (private)
    - `WeakMap`인 `wm`에 효율적으로 정보를 담아두는 역할.
    - Area는 height, width에 대한 인스턴스 변수를 갖고 있지 않음.
        - 클래스 밖 전역 공간(wm)에 저장한다는 단점은 있음.
* `Area.prototype.getArea`
    - `wm.get(this)`: `get`으로부터 height, width 정보를 담아옴.
* console.log로 height, width에 접근하려 해보지만, undefined, 내부에서 정보를 담아두었기 때문에 접근 불가.
    - myarea라는 객체로는 직접 값을 뽑을 순 없다.

### 전역 공간에 저장한 장점 살리기

           const wm = new WeakMap();

            function Area(height, width) {
                wm.set(this, {height, width}); 
            }

            Area.prototype.getArea = function() {
                const {height, width} = wm.get(this);
                return height * width;
            }

            let myarea = new Area(10, 20);
            console.log(myarea.getArea());

            console.log(wm.has(myarea)); // true
            console.log(wm.get(myarea)); // 값 추출 가능

            myarea = null;

            console.log(wm.has(myarea)); // false
* weakMap이 전역 공간에 있을 때 효율적으로 이용.

            // const wm = new WeakMap();
            const obj = {};

            function Area(height, width) {
                obj.height = height;
                obj.width = width;
            }

            Area.prototype.getArea = function() {
                const {height, width} = obj(this);
                return height * width; // return obj.height * obj.width
            }

            let myarea = new Area(10, 20);
            console.log(myarea.getArea()); // 200

            console.log(obj); // 정상 출력
            myarea = null;

            console.log(obj); // 정상 출력 (동일) 