let marks=prompt("Enter your Grades.");
let grade;
if(marks>=90 && marks<=100)
{
    grade="A";
}
else if(marks>=70 && marks<=89)
{
    grade="B";
}
else if(marks>=60 && marks<=69)
{
    grade="C";
}
else if(marks>=50 && marks<=59)
{
    grade="D";
}
else
{
    grade="F";
}
console.log("Your grade :",grade);