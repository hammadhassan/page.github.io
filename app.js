var Name = prompt ("Enter your Name");
document.getElementById("name").innerHTML=(Name);
var Name1 = prompt ("Enter your Roll Number");
document.getElementById("name1").innerHTML=(Name1);
var Name2 = prompt ("Enter your Father Name");
document.getElementById("name2").innerHTML=(Name2);

var Num3 = prompt ("Enter your HTML5 Test Score");
if (Num3 >= 80 ) {
    document.getElementById("num3").innerHTML=(Num3 + " %" + " A+");
}
else if (Num3 >= 70 ) {
    document.getElementById("num3").innerHTML=(Num3 + " %" + " A");
}
else if (Num3 >= 60 ) {
    document.getElementById("num3").innerHTML=(Num3 + " %" + " B+");
}
else if (Num3 >= 50 && Num3 <= 30 ) {
    document.getElementById("num3").innerHTML=(Num3 + " %" + " C");
}
//document.getElementById("Num3").innerHTML=(Num3);

var Num4 = prompt ("Enter your CSS3 Test 1 Score");
if (Num4 >= 80 ) {
    document.getElementById("num4").innerHTML=(Num4 + " %" + " A+");
}
else if (Num4 >= 70 ) {
    document.getElementById("num4").innerHTML=(Num4 + " %" + " A");
}
else if (Num4 >= 60 ) {
    document.getElementById("num4").innerHTML=(Num4 + " %" + " B+");
}
else if (Num4 >= 50 && Num4 <= 30 ) {
    document.getElementById("num4").innerHTML=(Num4 + " %" + " C");
}
// document.getElementById("name4").innerHTML=(Name4);
var Num5 = prompt ("Enter your CSS3 Test 2 Score");
if (Num5 >= 80 ) {
    document.getElementById("num5").innerHTML=(Num5 + " %" + " A+");
}
else if (Num5 >= 70 ) {
    document.getElementById("num5").innerHTML=(Num5 + " %" + " A");
}
else if (Num5 >= 60 ) {
    document.getElementById("num5").innerHTML=(Num5 + " %" + " B+");
}
else if (Num5 >= 50 && Num5 <= 30 ) {
    document.getElementById("num5").innerHTML=(Num5 + " %" + " C");
}
// document.getElementById("name5").innerHTML=(Name5);
var Num6 = ((Num3 + Num4 + Num5) / 3);
document.getElementById("num6").innerHTML=(Num6);