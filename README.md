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





