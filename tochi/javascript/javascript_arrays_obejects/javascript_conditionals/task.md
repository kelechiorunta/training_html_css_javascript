Challenge

Repeat a grade system using if/else, switch and ternary operator.

Score Grade
70 - 100 = A
60 - 69 = B
50 - 59 = C
40 - 49 = D
Below 40 = F

Hint for the block of code, return console.log(grade)

SOLUTION :

Using if/else

function getGradeWithIf(score) {
    if (score >= 70 && score <= 100) {
        return 'A';} 

        else if (score >= 60 && score <= 69) {
        return 'B';} 
        else if (score >= 50 && score <= 59) {
        return 'C';} 
        else if (score >= 40 && score <= 49) {
        return 'D';} 
        else if (score >= 0 && score < 40) {
        return 'F';} 
        else {
        return 'Invalid Score';} }


Using switch:
function getGradeWithSwitch(score) 
{
    switch (true) { // true value is used here to represent truthiness of the score value. So we can alternatively use switch(score)
        case (score >= 70 && score <= 100):
            return 'A';
        case (score >= 60 && score <= 69):
            return 'B';
        case (score >= 50 && score <= 59):
            return 'C';
        case (score >= 40 && score <= 49):
            return 'D';
        case (score >= 0 && score < 40):
            return 'F';
        default:
            return 'Invalid Score';
    }
}


Using Ternary

function getGradeWithTernary(score) {
    return (score >= 70 && score <= 100) ? 'A' :
           (score >= 60 && score <= 69)  ? 'B' :
           (score >= 50 && score <= 59)  ? 'C' :
           (score >= 40 && score <= 49)  ? 'D' :
           (score >= 0 && score < 40)    ? 'F' : 
                                           'Invalid Score';
}

