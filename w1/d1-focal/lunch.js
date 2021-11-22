function whatToDoForLunch(hungry, availableTime) {
if (hungry == false){
console.log("You are not hungry");
} else if (availableTime < 20) {
console.log("pick something up and eat in back in the Lab or in the kitchen, where you can get to know your fellow classmates.");
} else if (availableTime <= 20 && availableTime < 30) {
console.log("you've been working hard and are ahead of schedule, you want your program to tell you that you deserve a break and could try a place in Gastown.");
} else if (availableTime => 30){
console.log("this is a bootcamp after all and you should probably reconsider.");
}
}
whatToDoForLunch(true, 20);

whatToDoForLunch(true, 50);

whatToDoForLunch(false, 30);

whatToDoForLunch(true, 15);