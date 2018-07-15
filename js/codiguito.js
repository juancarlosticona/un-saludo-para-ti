$(document).on("ready", inicio);
function inicio()
{
    $("#contactar").on("click", transicion);
}
function transicion()
{
//    var cambiosCSS=
//    {
//        display: none,
//        margin: 0,
//        overflow: "hidden",
//        padding: 0
////        width: 0
//    };
    var cambiosPerson=
    {
        height: "20%",
        opacity: 1
//        width: "40%"
    };
    $("#historia").hide();
//    $("#historia").css(cambiosCSS);
    $("#personalizacion").css(cambiosPerson);
}
$(document).on("ready", vuelve);
function vuelve()
{
    $("#opcion2").on("click", vuelta);
}
function vuelta()
{
    var cambiosCSS_vu=
    {
        height: "auto",
        margin: "0 1em 7em 1em",
        padding: "1em",
        width: "40%"
    };
    var cambiosPerson_vu=
    {
        height: "0%",
        opacity:0,
        overflow:"hidden",
        margin: "0 0 6em 2%",
        padding:"0",
        width: "0"
    };
    $("#historia").css(cambiosCSS_vu);
    $("#personalizacion").css(cambiosPerson_vu);
}