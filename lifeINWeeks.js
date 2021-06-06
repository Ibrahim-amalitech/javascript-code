const lifeInWeeks=(currentAge)=>{
    let lifeInDays=365*(90-currentAge);
    let weeksLife=52*(90-currentAge);
    let lifeInMonths=12*(90-currentAge);
    return console.log("You have" +" " +lifeInDays+" "+ "days"+"," +" "+ weeksLife +" "+ "weeks"+" "+ "and" 
    +" "+lifeInMonths+" " + "months left."
); 
}