# 기업형 레이아웃 제작

사용기술 : html5, css3, javascript

<br>

목적: 다양한 기업형 레이아웃의 퍼블리싱을 통한 프론트엔드 기본 능력 함양

<br>

신경쓸점

html : 시멘틱마크업, SEO, 웹 표준(접근성 포함)

css: 레이아웃 배치 및 속성에 대한 이해

javascript : 이 단계에서는 보조하는 기능을 주로 담당하며 dom 제어에 대한 이해

<br>

나아가 반응형 웹을 구성할 예정이며, css초기화는 Eric Meyer의 recet.css를 사용

<br>

<br>

basic site

<img width="1276" alt="header,visual" src="https://user-images.githubusercontent.com/48181483/96807789-663bc900-1452-11eb-8eae-c636f727dcbf.png">


<img width="1276" alt="news" src="https://user-images.githubusercontent.com/48181483/96807794-689e2300-1452-11eb-8b7b-b1fac4b4bc5a.png">


<img width="1276" alt="brand" src="https://user-images.githubusercontent.com/48181483/96807799-6b991380-1452-11eb-87c1-142592a60ca2.png">


<img width="1276" alt="banner" src="https://user-images.githubusercontent.com/48181483/96807800-6cca4080-1452-11eb-9812-c0cdd2f05d97.png">

<img width="1276" alt="commentsfooter" src="https://user-images.githubusercontent.com/48181483/96807803-6dfb6d80-1452-11eb-8aef-bc1d52714a06.png">

 <br>

그림과 같이 header, visual, news, brand, banner, comments, footer 7개영역 섹션 존재하며,

영역을 구분하여 학습.

<br>

---

첫번째로 header 분석.

<br>

<img width="1276" alt="header,visual" src="https://user-images.githubusercontent.com/48181483/96807789-663bc900-1452-11eb-8eae-c636f727dcbf.png">

사진에서 검정색 배경을 갖지 않는 컨텐츠들이 header이며, 로고와 네비게이션로 구성되어있다.

<br>

배치는 position을 사용할 것이며, 네비게이션안의 컨텐츠들은 float로 배치할 것이다.

배치에 position을 사용한 이유는 3가지의 컨텐츠가 접근성상 로고 > gnb > utill로 마크업될 예정이나

화면상으로는 gnb보다 util이 먼저 보이기 때문이다. tab키를 사용하면 gnb로 먼저 포커스가 갈예정이며

gnb에는 hover이벤트로 색상을 변경해 사용자에게 구분점을 줄 예정이다.





