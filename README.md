# Multi Step Form

> React, Redux, TypeScript를 사용해 Multi Step Form을 구현했습니다.

![view](./readme_images/view.gif)

## 사용 기술

- React, Redux, TypeScript

## 요구 사항

### input.json
```json
{
  "formId": 1,
  "title": "사무실 대청소 요청서 폼",
  "items": [{
    "itemId": 1,
    "title": "원하는 청소 스타일은 무엇인가요?",
    "formType": 1,
    "options": [{
      "id": 1,
      "text": "스팀청소"
    }, {
      "id": 2,
      "text": "진공청소기로 청소"
    }, {
      "id": 3,
      "text": "쓰레기 비우기"
    }]
  }, ......] 
```
이러한 input 값을 받아 formtype에 따라 각각의 form을 보여줍니다.

### formType

| Item Type | Form Name |
| --------- | --------- |
| 1         | Checkbox  |
| 2         | Radio     |
| 3         | Text Input |
| 4         | Selectbox |

폼을 보여주고 제출 시 아래와 같은 output 값을 json 형태로 반환 합니다.

### output.json

```json
{
  "id": 1,
  "items": [{
    "id": 1,
    "answer": "예시 답변입니다"
  }, {
    "id": 2,
    "answer": "답변,여러개,예시답변,입니다"
  }]
}
```

## 설명

- CRA(Create React App)를 통해 프로젝트를 초기화 했습니다.
- 리덕스를 사용해 아래와 같은 구조로 상태를 관리합니다.
    - ```typescript
      interface store {
        result: {  
          id: number; // output의 formId
          items: [];  // output의 items들
        },
        step: number; // multi step form의 단계
      }
      ```
- 뒤로 돌아가도 입력했던 상태를 유지합니다.
- 입력 값이 없으면 `값을 입력해주세요!`라는 alert가 보여집니다.
