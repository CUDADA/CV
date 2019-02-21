<?php
// hearder('content-Type:application/json;charset=UTF-8');
$lists=array(
"html"=>array("我手机","设计方案","双方就尽快"),
"nubers"=>array(1,2,3,4,5),
"css"=>array("a"=>"设计方案","b"=>"双方就尽快"),
"js"=>array("我手机","lala"=>"设计方案","双方就尽快"),
);
$a = "<h1>没有笔记</h1>";
$contents=$_GET['text'];
switch($contents){
    case '常用标签':
    echo $HT1=file_get_contents('../note/HT1.html');
    break;
    case '列表':
    echo $HT2=file_get_contents('../note/HT2.html');
    break;
    case '表单':
    echo $HT3=file_get_contents('../note/HT3.html');
    break;
    case '路径':
    echo $HT4=file_get_contents('../note/HT4.html');
    break;
    case '位置分类':
    echo $CSS1=file_get_contents('../note/CSS1.html');
    break;
    case '样式':
    echo $CSS2=file_get_contents('../note/CSS2.html');
    break;
    case '基本选择器':
    echo $CSS3=file_get_contents('../note/CSS3.html');
    break;
    case '复合选择器':
    echo $CSS4=file_get_contents('../note/CSS4.html');
    break;
    case '书写规范':
    echo $CSS5=file_get_contents('../note/CSS5.html');
    break;
    case '显示模式':
    echo $CSS6=file_get_contents('../note/CSS6.html');
    break;
    case '表格':
    echo $CSS7=file_get_contents('../note/CSS7.html');
    break;
    case '盒模型':
    echo $CSS8=file_get_contents('../note/CSS8.html');
    break;
    case '三大特性':
    echo $CSS9=file_get_contents('../note/CSS9.html');
    break;
    case '背景':
    echo $CSS10=file_get_contents('../note/CSS10.html');
    break;
    case '浮动':
    echo $CSS11=file_get_contents('../note/CSS11.html');
    break;
    case '定位':
    echo $CSS12=file_get_contents('../note/CSS12.html');
    break;
    case '精灵图':
    echo $CSS13=file_get_contents('../note/CSS13.html');
    break;
    case '面向对象':
    echo $js6=file_get_contents('../note/js6.html');
    break;
    case '构造函数':
    echo $js7=file_get_contents('../note/js7.html');
    break;
    case '原型及原型链':
    echo $js8=file_get_contents('../note/js8.html');
    break;
    case '函数闭包':
    echo $js9=file_get_contents('../note/js9.html');
    break;
    case '函数递归':
    echo $js10=file_get_contents('../note/js10.html');
    break;
    case '正则表达式':
    echo $js11=file_get_contents('../note/js11.html');
    break;
    // jquery
    case '入口函数':
    echo $jQ1=file_get_contents('../note/jQ1.html');
    break;
    case '选择器，筛选器':
    echo $jQ2=file_get_contents('../note/jQ2.html');
    break;
    case 'css操作':
    echo $jQ3=file_get_contents('../note/jQ3.html');
    break;
    case 'class操作':
    echo $jQ4=file_get_contents('../note/jQ4.html');
    break;
    case '事件机制':
    echo $jQ11=file_get_contents('../note/jQ11.html');
    break;
    // case 'css操作':
    // echo $jQ2=file_get_contents('../note/jQ3.html');
    // break;
}

// $html=file_get_contents('../note/03j.html');
