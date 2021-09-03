# Chapter 3

리팩터링을 언제 시작하고 언제 그만할지를 판단하는 일은 리팩터링의 작동 원리를 아는 것 못지않게 중요하다.
리팩터링을 언제 멈춰야 하는지 판단하는 기준은 숙련을 통해 직관을 길러 만들어야 한다.

<table>
  <thead>
    <tr>
      <th>이름</th>
      <th>설명</th>
      <th>관련 리팩터링 기법</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mystrious Name</td>
      <td>함수, 모듈, 변수, 클래스 등은 이름만 보고도 각각 무슨일을 하고 어떻게 사용하는지 명확히 알 수 있도록 신경써서 이름을 지어야 한다</td>
      <td>
        - <a href="https://refactoring.com/catalog/changeFunctionDeclaration.html">Change Function Delcaration</a><br>
        - <a href="https://refactoring.com/catalog/renameVariable.html">Rename Variable</a><br>
        - <a href="https://refactoring.com/catalog/renameField.html">Rename Field</a>
      </td>
    </tr>
    <tr>
      <td>Duplicated Code</td>
      <td>똑같은 코드 구조가 여러 곳에서 반복된다면 하나로 통합한다</td>
      <td>
        - <a href="https://refactoring.com/catalog/extractFunction.html">Extract Function</a><br>
        - <a href="https://refactoring.com/catalog/slideStatements.html">Slide Statements</a><br>
        - <a href="https://refactoring.com/catalog/pullUpMethod.html">Pull Up Method</a>
      </td>
    </tr>
    <tr>
      <td>Long Function</td>
      <td>코드를 이해하고, 공유하고, 선택하기 쉬워진다는 장점은 함수를 짧게 구성할 때 나오는 것이다.</td>
      <td>
        - <a href="https://refactoring.com/catalog/extractFunction.html">Extract Function</a><br>
        - <a href="https://refactoring.com/catalog/replaceDerivedVariableWithQuery.html">Replace Derived Variable With Query</a><br>
        - <a href="https://refactoring.com/catalog/introduceParameterObject.html">Introduce Parameter Object</a><br>
        - <a href="https://refactoring.com/catalog/replaceFunctionWithCommand.html">Replace function with command</a><br>
        - <a href="https://refactoring.com/catalog/decomposeConditional.html">Decompose Conditional</a><br>
        - <a href="https://refactoring.com/catalog/replaceConditionalWithPolymorphism.html">Replace Conditional With Polymorphism</a><br>
        - <a href="https://refactoring.com/catalog/splitLoop.html">Split Loop</a><br>
      </td>
    </tr>
    <tr>
      <td>Long Parameter List</td>
      <td>parameter가 많아지면 그 자체로 이해하기 어려울 때가 많다</td>
      <td>
        - <a href="https://refactoring.com/catalog/introduceParameterObject.html">Introduce Parameter Object</a><br>
        - <a href="https://refactoring.com/catalog/replaceDerivedVariableWithQuery.html">Replace Derived Variable With Query</a><br>
        - <a href="https://refactoring.com/catalog/preserveWholeObject.html">Preserve Whole Object</a><br>
        - <a href="https://refactoring.com/catalog/removeFlagArgument.html">Remove Flag Argument</a><br>
        - <a href="https://refactoring.com/catalog/combineFunctionsIntoClass.html">Combine Functions Into Class</a><br>
      </td>
    </tr>
    <tr>
      <td>Global data</td>
      <td>전역 데이터는 코드베이스 어디에서든 건드릴 수 있고 값을 누가 바꿨는지 찾아낼 메커니즘이 없다는 게 문제다. 전역 데이터의 대표적인 형태는 전역 변수지만 클래스 변수와 싱글톤에서도 같은 문제가 발생한다.</td>
      <td>
        - <a href="https://refactoring.com/catalog/encapsulateVariable.html">Encapsulate variable</a><br>
      </td>
    </tr>
    <tr>
      <td>Mutable data</td>
      <td>데이터를 변경했더니 예상치 못한 결과나 골치 아픈 버그로 이어지는 경우가 종종 있다. 코드의 다른 곳에서는 다른 값을 기대한다는 사실을 인식하지 못한 채 수정해버리면 프로그램이 오작동한다.</td>
      <td>
        - <a href="https://refactoring.com/catalog/encapsulateVariable.html">Encapsulate variable</a><br>
        - <a href="https://refactoring.com/catalog/splitVariable.html">Split Variable</a><br>
        - <a href="https://refactoring.com/catalog/slideStatements.html">Slide Statements</a><br>
        - <a href="https://refactoring.com/catalog/extractFunction.html">Extract Function</a><br>
        - <a href="https://refactoring.com/catalog/separateQueryFromModifier.html">Separate Query From Modifier</a><br>
        - <a href="https://refactoring.com/catalog/removeSettingMethod.html">Removing Setting Method</a><br>
        - <a href="https://refactoring.com/catalog/replaceDerivedVariableWithQuery.html">Replace Derived Variable With Query</a><br>
        - <a href="https://refactoring.com/catalog/combineFunctionsIntoClass.html">Combine Functions Into Class</a><br>
        - <a href="https://refactoring.com/catalog/combineFunctionsIntoTransform.html">Combine Functions Into Transform</a><br>
        - <a href="https://refactoring.com/catalog/changeReferenceToValue.html">Change Reference To Value</a><br>
      </td>
    </tr>
    <tr>
      <td>Divergent Change</td>
      <td>Single Response Principle이 제대로 지켜지지 않을 때 나타난다. 즉 하나의 모듈이 서로 다른 이유들로 인해 여러 가지 방식으로 변경되는 일이 많을 때 발생한다.</td>
      <td>
        - <a href="https://refactoring.com/catalog/splitPhase.html">Split Phase</a><br>
        - <a href="https://refactoring.com/catalog/moveFunction.html">Move Function</a><br>
        - <a href="https://refactoring.com/catalog/extractFunction.html">Extract Function</a><br>
        - <a href="https://refactoring.com/catalog/extractClass.html">Extract Class</a><br>
      </td>
    </tr>
    <tr>
      <td>Shotgun Surgery</td>
      <td>코드를 변경할 때마다 자잘하게 수정해야 하는 클래스가 많을 때 풍긴다. 변경할 부분이 코드 전반에 퍼져 있다면 찾기도 어렵고 꼭 수정해야 할 곳을 지나치기 쉽다.</td>
      <td>
        - <a href="https://refactoring.com/catalog/moveFunction.html">Move Function</a><br>
        - <a href="https://refactoring.com/catalog/moveField.html">Move Field</a><br>
        - <a href="https://refactoring.com/catalog/combineFunctionsIntoClass.html">Combine Functions Into Class</a><br>
        - <a href="https://refactoring.com/catalog/combineFunctionsIntoTransform.html">Combine Functions Into Transform</a><br>
        - <a href="https://refactoring.com/catalog/inlineFunction.html">Inline Function</a><br>
        - <a href="https://refactoring.com/catalog/inlineClass.html">Inline Class</a><br>
      </td>
    </tr>
    <tr>
      <td>Feature Envy</td>
      <td>프로그램을 모듈화할 때는 코드를 여러 영역으로 나눈 뒤 영역 안에서 이뤄지는 상호작용은 최대한 늘리고 영역 사이에서 이뤄지는 상호작용은 최소로 줄이는 데 주력한다(low coupling high cohesion). Feature Envy는 어떤 함수가 자기가 속한 모듈의 함수나 데이터보다 다른 모듈의 함수나 데이터와 상호작용할 일이 더 많을 때 풍기는 냄새다.</td>
      <td>
        - <a href="https://refactoring.com/catalog/moveFunction.html">Move Function</a><br>
        - <a href="https://refactoring.com/catalog/extractFunction.html">Extract Function</a><br>
        - <a href=""></a><br>
      </td>
    </tr>
    <tr>
      <td>Data clumps</td>
      <td>데이터는 서로 어울려 노는 걸 좋아한다. 몰려다니는 데이터 뭉치는 보금자리를 따로 마련해줘야 마땅하다.</td>
      <td>
        - <a href="https://refactoring.com/catalog/extractClass.html">Extract Class</a><br>
        - <a href="https://refactoring.com/catalog/introduceParameterObject.html">Introduce Parameter Object</a><br>
        - <a href="https://refactoring.com/catalog/preserveWholeObject.html">Preserve Whole Object</a><br>
      </td>
    </tr>
    <tr>
      <td>Primitive Obsession</td>
      <td>프로그래머 중에는 자신에게 주어진 문제에 딱 맞는 기초 타입(화폐, 좌표, 구간 등)을 직접 정의하기를 몹시 꺼리는 사람이 많다.</td>
      <td>
        - <a href="https://refactoring.com/catalog/replacePrimitiveWithObject.html">Replace Primitive With Object</a><br>
        - <a href="https://refactoring.com/catalog/replaceTypeCodeWithSubclasses.html">Replace Type Code With Subclasses</a><br>
        - <a href="https://refactoring.com/catalog/replaceConditionalWithPolymorphism.html">Replace Conditional With Polymorphism</a><br>
        - <a href="https://refactoring.com/catalog/extractClass.html">Extract Class</a><br>
        - <a href="https://refactoring.com/catalog/introduceParameterObject.html">Introduce Parameter Object</a><br>
      </td>
    </tr>
    <tr>
      <td>Repeated Switch</td>
      <td>중복된 switch-case가 문제가 되는 이유는 조건절을 하나 추가할 때마다 다른 switch문들도 모두 찾아서 함께 수정해야 하기 때문이다. </td>
      <td>
        - <a href="https://refactoring.com/catalog/replaceConditionalWithPolymorphism.html">Replace Conditional With Polymorphism</a><br>
      </td>
    </tr>
    <tr>
      <td>Loops</td>
      <td>filter, map 같은 pipeline 연산을 사용하면 코드에서 각 원소들이 어떻게 처리되는지 쉽게 파악할 수 있다.</td>
      <td>
        - <a href="https://refactoring.com/catalog/replaceLoopWithPipeline.html">Replace Loop With Pipeline</a><br>
      </td>
    </tr>
    <tr>
      <td>Lazy Element</td>
      <td>코드의 구조를 잡을 때 프로그램 요소를 이용하는 걸 좋아한다. 그러나 요소가 본문 코드를 그대로 쓰는 것과 진배없는 함수도 있고, 실질적으로 메서드가 하나뿐인 클래스도 있다. 이런 요소들은 고이 보내주는 편이 좋다.</td>
      <td>
        - <a href="https://refactoring.com/catalog/inlineFunction.html">Inline Function</a><br>
        - <a href="https://refactoring.com/catalog/inlineClass.html">Inline Class</a><br>
        - <a href="https://refactoring.com/catalog/collapseHierarchy.html">Collapse Hierarchy</a><br>
      </td>
    </tr>
    <tr>
      <td>Speculative Generality</td>
      <td>'나중에 필요할 거야'라는 생각으로 당장은 필요 없는 모든 종류의 hooking point와 특이 케이스 처리 로직을 작성해둔 코드에서 풍긴다. 그 결과 물론 이해하거나 관리하기 어려워진 코드다. 당장 걸리적거리는 코드는 눈앞에서 치워버리자.</td>
      <td>
        - <a href="https://refactoring.com/catalog/collapseHierarchy.html">Collapse Hierarchy</a><br>
        - <a href="https://refactoring.com/catalog/inlineFunction.html">Inline Function</a><br>
        - <a href="https://refactoring.com/catalog/inlineClass.html">Inline Class</a><br>
        - <a href="https://refactoring.com/catalog/removeDeadCode.html">Remove Dead Code</a><br>
        - <a href="https://refactoring.com/catalog/removeMiddleMan.html">Remove Middle Man</a><br>
      </td>
    </tr>
    <tr>
      <td>Insider Trading</td>
      <td>모듈 사이의 데이터 거래를 줄이고 그것을 투명하게 만든다.</td>
      <td>
        - <a href="https://refactoring.com/catalog/moveFunction.html">Move Function</a><br>
        - <a href="https://refactoring.com/catalog/moveField.html">Move Field</a><br>
        - <a href="https://refactoring.com/catalog/hideDelegate.html">Hide Delegate</a><br>
        - <a href="https://refactoring.com/catalog/replaceSubclassWithDelegate.html">Replace Subclass with Delegate</a><br>
        - <a href="https://refactoring.com/catalog/replaceSuperclassWithDelegate.html">Replace superclass with Delegate</a><br>
      </td>
    </tr>
    <tr>
      <td>Large Class</td>
      <td>한 클래스가 너무 많은 일을 하려다 보면 필드 수가 상당히 늘어난다. 그리고 클래스에 필드가 너무 많으면 중복 코드가 생기기 쉽다.</td>
      <td>
        - <a href="https://refactoring.com/catalog/extractClass.html">Extract Class</a><br>
        - <a href="https://refactoring.com/catalog/extractSuperclass.html">Extract Superclass</a><br>
        - <a href="https://refactoring.com/catalog/replaceTypeCodeWithSubclasses.html">Replace Type Code With Subclasses</a><br>
        - <a href=""></a><br>
      </td>
    </tr>
    <tr>
      <td>Alternative Classes with Different Interface</td>
      <td>클래스를 사용할 때의 큰 장점은 필요에 따라 언제든 다른 클래스로 교체할 수 있다는 것이다. 단, 교체하려면 인터페이스가 같아야 한다.</td>
      <td>
        - <a href="https://refactoring.com/catalog/changeFunctionDeclaration.html">Change Function Delcaration</a><br>
        - <a href="https://refactoring.com/catalog/moveFunction.html">Move Function</a><br>
        - <a href="https://refactoring.com/catalog/extractSuperclass.html">Extract Superclass</a><br>
      </td>
    </tr>
    <tr>
      <td>Data Class</td>
      <td>데이터 클래스를 데이터 저장 용도로만 쓰다 보니 다른 클래스가 너무 깊이까지 함부로 다룰 때가 많다.</td>
      <td>
        - <a href="https://refactoring.com/catalog/encapsulateRecord.html">Encapsulate Record</a><br>
        - <a href="https://refactoring.com/catalog/removeSettingMethod.html">Removing Setting Method</a><br>
        - <a href="https://refactoring.com/catalog/moveFunction.html">Move Function</a><br>
        - <a href="https://refactoring.com/catalog/extractFunction.html">Extract Function</a><br>
        - <a href="https://refactoring.com/catalog/splitPhase.html">Split Phase</a><br>
      </td>
    </tr>
    <tr>
      <td>Refused Bequest</td>
      <td>상속 포기 냄새는 서브클래스가 부모의 동작은 필요로 하지만 인터페이스는 따르고 싶지 않을 때 심하게 난다.</td>
      <td>
        - <a href="https://refactoring.com/catalog/pushDownField.html">Push Down Field</a><br>
        - <a href="https://refactoring.com/catalog/pushDownMethod.html">Push Down Method</a><br>
        - <a href="https://refactoring.com/catalog/replaceSubclassWithDelegate.html">Replace Subclass with Delegate</a><br>
        - <a href="https://refactoring.com/catalog/replaceSuperclassWithDelegate.html">Replace superclass with Delegate</a><br>
      </td>
    </tr>
    <tr>
      <td>Comments</td>
      <td>주석이 장황하게 달린 원인이 코드를 잘못 작성했기 떄문인 경우가 의외로 많다.</td>
      <td>
        - <a href="https://refactoring.com/catalog/extractFunction.html">Extract Function</a><br>
        - <a href="https://refactoring.com/catalog/changeFunctionDeclaration.html">Change Function Delcaration</a><br>
        - <a href="https://refactoring.com/catalog/introduceAssertion.html">Introduce Assertion</a><br>
      </td>
    </tr>
  </tbody>
</table>

