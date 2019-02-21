<?php

$html = array("常用标签","列表","表单","路径");

$css = array("位置分类","样式","基本选择器","复合选择器","书写规范",
                "显示模式","表格","盒模型","三大特性","背景","浮动","定位","精灵图");

$js = array("变量，数据类型及转换","操作符，流程控制","数组","函数及其作用域",
                "对象","面向对象","构造函数","原型及原型链","函数闭包","函数递归","正则表达式");

$jquery = array("入口函数","选择器，筛选器","css操作","class操作","序号","动画ainimate，stop(),finish()",
"show(),hide(),toggle()","fadeIn(),fadeOut(),fadeTO(),fadeToggle()","slideDown(),slideUP(),slideToggle()","节点操作","事件机制");

$ajax = array("原生Ajax",'$GET()','$POST()','$AJAX()',"JSONP","模板引擎");

$html5 = array("新增标签","video，audio","web存储");

$css3 = array("C3选择器","2D，3D转换","动画","字体图标","伸缩布局");

$x = array("请添加笔记");

$index = empty($_GET['id']) ? 1 : intval($_GET['id']);

switch($index){
    case 1 :
    echo json_encode($html);
    break;
    case 2 :
    echo json_encode($css);
    break;
    case 3 :
    echo json_encode($js);
    break;
    case 4 :
    echo json_encode($jquery);
    break;
    case 5 :
    echo json_encode($ajax);
    break;
    case 6 :
    echo json_encode($html5);
    break;
    case 7 :
    echo json_encode($css3);
    break;
    case 8 :
    echo json_encode($x);
    break;
    case 9 :
    echo json_encode($x);
    break;
    case 10 :
    echo json_encode($x);
    break;

}
// header('Content-Type: application/json');