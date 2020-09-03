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

1.반응형 웹을 구성할 예정이며, css초기화는 Eric Meyer의 recet.css를 사용

2.css선택자는 부모-자식의 엘리먼트-클래스명까지 작성.

<br>

작업후 html파일은 https://prettydiff.com/?m=beautify&html css파일은 http://www.lonniebest.com/FormatCSS/을 활용하여 포맷

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

<br>

배치에 position을 사용한 이유는 3가지의 컨텐츠가 접근성상 로고 > gnb > utill로 마크업될 예정이나

<br>

화면상으로는 gnb보다 util이 먼저 보이기 때문이다. tab키를 사용하면 gnb로 먼저 포커스가 갈예정이며

<br>

gnb에는 hover이벤트로 색상을 변경해 사용자에게 구분점을 줄 예정이다.

<br>

```html
...
<body>
    <header>
        <div>
            <h1><a href="#">DECODELAB</a></h1>
            <ul>
                <li><a href="#">DEPARTMENT</a></li>
                <li><a href="#">GALLERY</a></li>
                <li><a href="#">YOUTUBE</a></li>
                <li><a href="#">COMMUNITY</a></li>
                <li><a href="#">LOCATION</a></li>
            </ul>
    
            <ul>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Join</a></li>
                <li><a href="#">Sitemap</a></li>
            </ul>
        </div>
    </header>
</body>
...
```

hedaer의 마크업을 완료하였다. header 태그안에 3개의 컨텐츠가 존재하며 레이아웃을 잡기위한 div를

하나 생성하였다.

<br>

```css
...
header div.inner{
    width:1180px;
    height:120px;
    margin: 0px auto;
    position: relative;
}

div.inner h1.logo{
    position: absolute;
    bottom:15px;
    left:0px;
}

h1.logo a{
    font:bold 24px/1 "arial";
    color: #444;
}

div.inner ul.gnb{
    position: absolute;
    bottom:0px;
    right:0px;
}

ul.gnb li{
    float:left;
}

ul.gnb li a{
    display: block;
    font: bold 15px/1 "arial";
    color: #555;
    padding: 20px 40px;
    transition: 0.5s;
}

ul.gnb li a:hover{
    background: #555;
    color:#fff;
}



div.inner ul.util{
    position: absolute;
    top:20px;
    right:0px;
}

ul.util li{
    float:left;
}

ul.util li a{
    display: block;
    font: 12px/1 "arial";
    color: #999;
    border-right:1px solid #aaa;
    padding:0px 10px;
}

ul.util li:last-child a{
    border-right:none;
}
...
```

css로 디자인을 입혔다 최대한 class로 작성하였으며 디자인을 위한 html 요소에 선택자를 사용하지 않았다. 좋은지는 모르겠다.

<br>

```html
<header class="header">
```

에 대하여 고찰해보았다, header태그에 class를 준다면 어떠한 이름으로 주어야하며

다양하게 커질 수 있는 프로젝트라고 가정한다면 header라고 클래스명을 짓는게 맞을까?

기업형 사이트이기때문에 class라고 줘도 괜찮다고 보지만, 상품으로 친다면 다양한 환경을 고려해서

클래스명을 지어야할 것 같다.

<br>

header 완성 이미지

<img width="1276" alt="header finish" src="https://user-images.githubusercontent.com/48181483/96825594-782a6580-146c-11eb-9bd4-c169bf097ab9.png">

두번째, visual 영역 분석



visual 영역은 전체 크기를 차지하면서 배경동영상을 세팅하고, 그안에 inner영역을 width고정값을 줘서 자식들을 배치하고

전체 100%를 차지한다고 판단, 안에 컨텐츠들은 패딩으로 레이아웃을 배치하고

컨텐츠들사이에 공백은 margin을 사용하고, 버튼에 사용되는 속성은

text-align 및 hover, text-align을 사용해야하니까, 컨텐츠의 부모는 블록속성이여야겠다. 혁신이라는 소제목은 h2로 가야할까? 소제목과 버튼을 제외한 컨텐츠는 p태그로 판단된다.

<br>

```html
...
    <section class="visual">
        <video src="./img/visual.mp4" autoplay muted loop></video>
        <div class="container">
            <h1>INNOVATION</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br>
                Id praesentium molestias similique quaerat magni facere in a? Adipisci, possimus reprehenderit!</p>
            <a href="#">view detail</a>
        </div>
    </section>
...
```

video 태그와 레이아웃용 div를 활용해 마크업을 사용하였다 video태그들의 속성을 활용하였다

```css
...
section.visual{
	width:100%;
	position: relative;
	background:#000;
	overflow:hidden;
	height:calc(100vh - 120px);
	padding-top:250px;
}

section video{
	width:2000px;
	height:1125px;
	position: absolute;
	opacity:0.3;
	/* 가운데정렬 */
	top:50%;
	left:50%;
	margin-top:calc(-1125px / 2);
	margin-left:-1000px;
}

section.visual div.container{
	width:1180px;
	margin:0px auto;
	position: relative;
	/* 여기에 relative가 없으면 인식을못하나?? */
}

div.container h1{
	font: normal 120px/1 "arial";
	color: #fff;
	margin-bottom: 20px;
}

div.container p{
	font: 16px/1.4 "arial";
	color: #888;
	margin-bottom: 60px;
}

div.container a{
	display: block;
	border: 1px solid #bbb;
	font: bold 11px/30px "arial";
	color: #fff;
	text-align: center;
	width:400px;
	height:30px;
	transition:all 0.5s;
	letter-spacing: auto;
}

div.container a:hover{
	background: #555;
	color:#fff;
}
...
```

css작업을 하며 고정값이 필요한부분이 있어서 작성하였고, 문제점도 발생하였다. 이유를 찾아가는중

<br>

![visual](https://user-images.githubusercontent.com/48181483/96946920-a23b6080-151c-11eb-84e9-5c7f5c8a636e.png)

visual 까지 작성하고보니 markup에 수정해야된다고 생각하는게 몇군데가 있었다

```html
...
    <section class="visual">
        <video src="./img/visual.mp4" autoplay muted loop></video>
        <div class="container">
            <h1>INNOVATION</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br>
                Id praesentium molestias similique quaerat magni facere in a? Adipisci, possimus reprehenderit!</p>
            <a href="#">view detail</a>
        </div>
    </section>
...
```

첫째 클래스 visual을 가지고 있는 태그는 section으로 해야하는가?

둘째 제목용 INNOVATION이 h1태그가 맞을까?

셋째, 레이아웃용 중앙 가운데 정렬을 위해 container라는 클래스를 사용하였는데 재사용이 가능하겠다.

<br>

검색을 활용하며 적합한 태그를 찾아나갔고, section 태그보다는 figure태그가 적합한게 아닌가 의문을 가졌다

(figure는 이미지 라는 느낌이 강하게 느껴졌다 변경하지 않겠다.)

(이유: 사이트 흐름과 독립된 컨텐츠이며 순서가 중요하지 않음)

그리고 video 태그에 자동재생에 대해 필수속성이 몇가지 있다는것을 알게되었다

<br>

autoplay,muted, playsinline속성이다. 크롬정책상 autoplay속성에 muted가 존재하여야 하며, 아이폰10버전 이후는 playsinline속성이 필요하다고 한다. playsinline속성 추가.

<br>

section안에 h1이 있는것이 적합한가? 라는것에 대한 의문이 생겼다. section안에 h1~h6태그들을 필수로 사용하라고 하지만

주관적인 생각으로 html문서에서 h1태그는 로고급으로 한개만 있어야되는 '가장중요한'것이 아닐까 생각해보았다

그래서 h2태그로 변경하였다.

<br>

header section에 inner라는 부분을 container로 변경하기로 하였다. 이 프로젝트내에서 레이아웃 배치용은 container라고 이름지을것이며 공통으로 사용할 것 이다. 다만 header부분의 container는 다른부분과는 조금 달라서 직접적인 코드의 줄임은 발생하지 않았다.

<br>

```html
...
<!-- 변경된 코드  -->
 <header>
        <div class="container">
		...
 </header>
 <section class="visual">
     <video src="./img/visual.mp4" autoplay muted loop playsinline></video>
     <div class="container">
         <h2>INNOVATION</h2>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br>
             Id praesentium molestias similique quaerat magni facere in a?                      Adipisci,possimusreprehenderit</p>
         <a href="#">view detail</a>
     </div>
     </section>
...
```

<br>

세번째 뉴스영역 분석

뉴스는 크게 new section 자식요소로 container, 다시 자식으로 h2태그와 ul태그를 갖고 ul에는 같은 형식으로 h3,p,div(img)를 4개

갖고있다 초기 마크업작업은



```html
...
<section class="news">
    <div class="container">
        <h2>RECENT NEWS</h2>
        <ul>
            <li>
                <h3>Lorem ipsum dolor sit.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, incidunt.</p>
                <div></div>
            </li>
            <li>
                <h3>Lorem ipsum dolor sit.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, incidunt.</p>
                <div></div>
            </li>
            <li>
                <h3>Lorem ipsum dolor sit.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, incidunt.</p>
                <div></div>
            </li>
            <li>
                <h3>Lorem ipsum dolor sit.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, incidunt.</p>
                <div></div>
            </li>
        </ul>
    </div>
</section>
...
```

구성하였다 css스타일링을 하되 구조에 변화를 주지않도록 노력해야겠다