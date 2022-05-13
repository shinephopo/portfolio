var mainheader =`
<header>    
<div class="logo">Shine</div>
<div id="gnb">
    <i class="fas fa-bars" ></i>
</div>
<div id="menu-cancel">
    <i class="fas fa-times"></i>
</div>
<nav class="sidebar" id="sidebar">
    <ul>
        <li><a href="#story" target="_self">story</a></li>
        <li><a href="#info" target="_self">info</a></li>
        <li>
            <input type="checkbox" id="works-check">
            <label for="works-check">works<i class="fas fa-caret-down"></i></label>
            <ul>
                <li><a href="#web" target="_self">web</a></li>
                <li><a href="#graphic" target="_self">graphic</a></li>
            </ul>
        </li>
        <li><a href="#pick">pick me</a></li>
    </ul>
</nav>
</header>
`;
document.write(mainheader);