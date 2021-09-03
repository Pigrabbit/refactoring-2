# Chapter 4

리팩터링을 제대로 하려면 불가피하게 저지르는 실수를 잡아주는 견고한 test suite가 뒷받침돼야 한다.
리팩터링을 하지 않더라도 좋은 테스트를 작성하는 일은 개발 효율을 높여준다.

## 자가 테스트의 가치

> Test suite는 강력한 버그 검출 도구로, 버그를 찾는 데 걸리는 시간을 대폭 줄여준다.

테스트가 프로그래밍 속도를 높여주는 경험을 직접해보지 않고서는 자가 테스트의 진가를 납득하기는 어렵다.

테스트를 작성하기 가장 좋은 시점은 프로그래밍을 시작하기 전이다. 
테스트를 작성하다 보면 원하는 기능을 추가하기 위해 무엇이 필요한지 고민하게 된다.
구현보다 인터페이스에 집중하게 된다는 장점도 있다.

**리팩터링에는 테스트가 필요하다. 그러니 리팩토링 하고 싶다면 테스트를 반드시 작성해야 한다.**

간혹 테스트가 갖춰지지 않은 코드를 리팩터링해야 할 때도 있다.
그럴 때는 곧바로 리팩터링하지 않고, 먼저 자가 테스트 코드부터 작성한다.