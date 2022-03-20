
## 프로젝트 소개

yts의 open API로 만든 영화 목록을 출력하는 사이트

## 🌐프로젝트 링크

https://caramellang.github.io/Melflix/

## ⚙️개발 언어

<div align='center'>
    <img src="https://img.shields.io/badge/javascript-blue?logo=javascript"/>
</div>

## ****💻****개발 스택

- 프론트 
<p align='center'>
    <img src="https://img.shields.io/badge/React-v17.0.2-blue?logo=React"/>
    <img src="https://img.shields.io/badge/styled components-v5.3.1-pink?logo=react">
    <img src="https://img.shields.io/badge/axios-v0.21.1-blue?logo=axios">
</p>

## 배포

Front

- Github

## ****⏱****개발기간

2021.08.11 ~ 2021.08.26 (약 15일)

## 프로젝트 기능

- 최신순 페이지, 평점순 페이지 제공
- 장르페이지에서 해당하는 장르별로 영화목록 제공
- 페이지네이션으로 여러개의 영화정보를  확인가능
- 반응형 사이트

## 문제와 해결

1. 카테고리 문제

    -  div태그에 카테고리의 name을 주고 버튼으로 e.target.name으로 가져오려 했으나 비정상으로 

        작동하였음(대개 null값)

    - 스택오버플로우를 본 결과 본래 property 속성이 존재하지 않으면 getAttribute()로 가져와야

      한다는것을 깨달음.

1. 반응형 적용

    - 대부분 width , padding 의 값을 지정할 떄 %를 사용하였습니다. 당시에는 boxsizing속성을 몰라

      목록에서 아이템들의 배치가 부적합하게 되어 여백이 생기는 일이 있었습니다😂

      하나하나 %를 조절해가며 배치해서 해결했습니다.

1. width 문제

    - 장르페이지의 카테고리가 고정 포지션으로 width 100%로 설정되어있어 제공된 영화목록

       일부분이 클릭이 안되는 오류가 있었음

    - 처음엔 깨닫지못하고 뒤늦게 깨달아 속성을 지움으로 해결

## 추후 보완사항

- detail 페이지에 잘못 적용된 반응형 개선

## 프로젝트 아키텍쳐

![image](https://user-images.githubusercontent.com/51808985/159149294-56049e2d-d4d1-4f7e-a57b-34593dc3705c.png)


## 사이트 화면

### [신규순 화면]
![image](https://user-images.githubusercontent.com/51808985/159149337-2d87658a-30f8-401e-9f84-8f5837e07980.png)

### [평점순 화면]
![image](https://user-images.githubusercontent.com/51808985/159149357-5ed23559-6237-4591-a197-0068f2ecde7d.png)

### [장르별 목록 화면]
![image](https://user-images.githubusercontent.com/51808985/159149393-3528a7da-c44c-450d-b1e4-b73abd86c7d1.png)

### [반응형 화면]
![image](https://user-images.githubusercontent.com/51808985/159149309-b18825f4-0617-49b5-b236-cf65fc6ea1a9.png)

