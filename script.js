$(".blue").click(function()
{
  $(".cc").css("color", "blue");
});

$(".red").click(function()
{
  $(".cc").css("color", "red");
});

$(".green").click(function()
{
  $(".cc").css("color", "green");
});

$(".laugh").click(function()
{
  $(".cc").html("HAHAHA");
});

$(".undo").click(function()
{
  $(".cc").html("要變色的文字");
  $(".cc").css("color", "black");
});
$(".cc").hover(function()               {
  $(".cc").css("font-size", "43px");
}, 
function(){
  $(".cc").css("font-size", "");
}
);

$(".send").click(
function(){
  
  $(".cc").html($(".inp").val());
  $(".inp").val(" ");
});