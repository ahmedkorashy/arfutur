/*
blog : https://arab-futur.blogspot.com
name :ahmed korashy
*/
$(".btnclose").click(function(){$("#arfutur-download,.btnclose").remove(),$(".btneffect").text(text).toggleClass("reload").attr("onclick","history.go(0)")}),$(".btneffect").click(function(){function t(){if("1"==$(".count_direct_link .countdownnumber .count").text()){if($(".directdownloadlink").show(),d-=1,-1>=d){d=n
var t=$(".count_direct_link")
t.before(t.clone(!0)).remove()}$(".count_direct_link .countdownnumber .count").text(d),$(".count_direct_link").addClass("paused"),l=$(".count_direct_link").hasClass("paused")?!0:!1,$(".directdownloadlink").html('<em><i class="fa fa-download animated"></i></em>'),$(".count_direct_link").addClass("done"),$(".anotherserver").show(),$(".btnclose").toggleClass("open")}else if(!l){if(d-=1,-1>=d){d=n
var t=$(".count_direct_link")
t.before(t.clone(!0)).remove()}$(".count_direct_link .countdownnumber .count").text(d)}}var e=$(".post-body").find("img")
try{$(".arfutur-downloadbg").attr("style","background-image: url("+e[0].src+");")}catch(o){$(".arfutur-downloadbg").attr("style","background-image: url("+noimg+");")}$("#arfutur-download").toggleClass("open")
var n=$(".count").text(),i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style")
a.type="text/css"
var r='#arfutur-download .count_direct_link .countdownnumber .l-half,#arfutur-download .count_direct_link .countdownnumber .r-half{float:left;height:100%;overflow:hidden;width:50%}.l-half:before{content:"";display:block;width:100%;height:100%;box-sizing:border-box;border:10px solid #ffffff;-webkit-animation-duration:'+n+'s;-webkit-animation-iteration-count:1;-webkit-animation-timing-function:linear;-webkit-animation-fill-mode:forwards}.r-half:before{content:"";display:block;width:100%;height:100%;box-sizing:border-box;border:10px solid #ffffff;-webkit-animation-duration:'+n+"s;-webkit-animation-iteration-count:1;-webkit-animation-timing-function:linear;-webkit-animation-fill-mode:forwards}.l-half:before{border-right:none;border-top-left-radius:999px;border-bottom-left-radius:999px;-webkit-transform-origin:center right;-webkit-animation-name:l-rotate}.r-half:before{border-left:none;border-top-right-radius:999px;border-bottom-right-radius:999px;-webkit-transform-origin:center left;-webkit-animation-name:r-rotate}"
a.appendChild(document.createTextNode(r)),i.appendChild(a)
var d=n,l=!1
setInterval(t,1e3)})
