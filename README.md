# 자리 바꿔주세요!:books:

> 2020년도 프로젝트 실무 과목 산출물 [ 자리 바꿔주세요! ]

![Main](https://user-images.githubusercontent.com/55439512/101554272-a30b5180-39f9-11eb-972a-c81bcf66fac4.jpg)

### 🛠사용한 기술
+ Typescript
+ React
+ Mobx
+ SCSS
+ Presentational Component Container
+ Adobe XD
+ Adobe Illustrator

### 🙌소개
[자리 바꿔주세요!] 는 학급에서 자리를 재배치할 때 매번 손수 자리를 배치하고, 제비뽑기를 만드는 등 담임선생님들의 수고를 덜어드리기위해 제작된 프로젝트입니다.
기존 어렵고 불편한 UX를 가진 프로그램들의 단점을 보완해 직접 디자인 작업과 개발을 하였습니다.

### 📝기능
+ 자리 랜덤 배치
+ 제비뽑기 
+ 모둠 정하기

![CardSelect_number](https://user-images.githubusercontent.com/55439512/101554288-aa325f80-39f9-11eb-941f-91b92dc1834c.jpg)
![RandomSeat](https://user-images.githubusercontent.com/55439512/101554291-ab638c80-39f9-11eb-81a5-836021b2b7ad.jpg)
![TeamBuilding](https://user-images.githubusercontent.com/55439512/101554293-ab638c80-39f9-11eb-9cc0-7ff54297aa98.jpg)

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
