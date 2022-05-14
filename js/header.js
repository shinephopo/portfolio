var mainheader =`
<header>    
<div class="logo"><a href="index.html">Shine</a></div>
<div id="gnb">
    <i class="fas fa-bars" ></i>
</div>
<div id="menu-cancel">
    <i class="fas fa-times"></i>
</div>
<nav class="sidebar2" id="sidebar">
    <ul>
        <li><a href="index.html#story" target="_self">story</a></li>
        
        <li>
            <input type="checkbox" id="works-check">
            <label for="works-check">web-project<i class="fas fa-caret-down"></i></label>
            <ul class="list_bg">
                <li><a href="web_bibi.html" target="_self">비비팬사이트</a></li>
                <li><a href="web_duguendoguen.html" target="_self">두근도근</a></li>
                <li><a href="web_threecountry.html" target="_self">삼국유사 화본마을</a></li>
            </ul>
        </li>
        
        <li><a href="index.html#pick">pick me</a></li>
    </ul>
</nav>
</header>
`;
document.write(mainheader);