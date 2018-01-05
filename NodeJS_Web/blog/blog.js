function onTab(evt, tabcontentid) {

    // 1、将所有content隐藏
    var tabcontents = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = "none";
    }
    // 2、显示点击选中的content
    var tabcontect = document.getElementById(tabcontentid);
    tabcontect.style.display = "block";

    // 3、将所有tab设置为未选中
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    // 4、将点击的tab设置为选中
    evt.currentTarget.className += " active";
}

// 触发 id="profile_div" click 事件
document.getElementById("profile_div").click();