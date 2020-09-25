# 자리 바꿔주세요!:books:

> 2020년 프로젝트 실무 과목 평가 프로젝트 [ 자리 바꿔주세요! ]

> [ 자리 바꿔주세요! ]는 학급에서 자리를 바꿀 때 마다 손수 번호를 작성하고 모든 인원이 번거롭게 뽑기를 하는 등
> 불편한 과정을 최소화 시키기 위해 제작된 웹사이트 입니다.

> <b>자리 바꾸기</b>,<b>제비 뽑기</b>,<b>모둠 정하기</b> 기능이 있습니다.

---

#### :pushpin:React Mobx JS (PCC) Programming Rules

by: https://github.com/SoonGwan/React-Mobx-TS-PCC-

## Store 사용 규칙 (비즈니스 로직)

- 폴더 구조

```
├── store
│   ├── name (주 기능을 폴더 이름으로 정한다.)
│   │   ├── nameRespository.ts
│   │   ├── nameStore.ts
│   │   ├── index.ts (store를 default로 내보낸다.)
│   ├── index.ts (한번에 묶는 역할을 해준다.)
```

- Repository.ts 에는 `class`형을 사용한다.
- `Repository.ts`에 있는 함수 이름은 `Store.ts` 같은 기능을 하는 함수명과 동일하게 적용시킨다.

## Container 사용 규칙 (비즈니스 로직)

- 폴더 구조

```
├── containers
│   │ nameContainer.tsx
```

- Container.tsx 에는 `함수`형을 사용한다.
- store에서 함수를 불러와 사용하는 함수를 만들 경우 handle이라는 이름을 붙여 handleName 으로 함수 이름을 적용시킨다.
- 뷰 로직에 보여줄 로직을 여기에서 대부분 처리하여 준다. (`map`, `filter`, `find`, `sort`, `for`, `reduce`, `...` );

## Component 사용 규칙 (뷰 로직)

- 폴더 구조

```
├── components
│   │ name (폴더)
│   ├── name.tsx
│   ├── index.ts
```

- `components`에 있는 모든 컴포넌트 들은 `함수`형을 사용한다.
- 컴포넌트에는 어떠한 로직을 처리하는 코드가 있어서는 안되며 오직 뷰 로직만 처리한다. (`map`, `filter`, `find`, `sort`, `for`, `reduce`, `...` );
