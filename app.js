var Name = prompt ("Enter your Name");
document.getElementById("name").innerHTML=(Name);
var Name1 = prompt ("Enter your Roll Number");
document.getElementById("name1").innerHTML=(Name1);
var Name2 = prompt ("Enter your Father Name");
document.getElementById("name2").innerHTML=(Name2);
var Name3 = prompt ("Enter your HTML5 Test Score");
if (Name3 >= 80) {
    document.getElementById("name3").innerHTML=(Name3 + "%" + "A+");
}   else if (Name3 <=70) {
    document.getElementById("name3").innerHTML=(Name3 + "%" + "A");
}
else if (Name3 <=60) {
    document.getElementById("name3").innerHTML=(Name3 + "%" + "B+");
}
document.getElementById("name3").innerHTML=(Name3);
var Name4 = prompt ("Enter your CSS3 Test 1 Score");
document.getElementById("name4").innerHTML=(Name4);
var Name5 = prompt ("Enter your CSS3 Test 2 Score");
document.getElementById("name5").innerHTML=(Name5);
var Name6 = prompt ((Name3 + Name4 + Name5) /3);
document.getElementById("name6").innerHTML=(Name6);