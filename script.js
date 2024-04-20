var userPoints = 0;
var userName = "";
var habitMatrix = [];
var otherUsers = [["Bob", 20], ["Joe", 25], ["Sophia", 80], ["Mary", 110], ["Billy", 125], ["Sam", 130]];

//HABITS


//when user clicks add habit -- this will be a STRING
function addHabit(){
    //for line9 you need an HTML variable called habitInput for the habit the user wants, and when the user clicks "save" this function should be called
    const newHabit = document.getElementById('habitInput').value 
    habitArray.push([newHabit, 0]);
}

//when the checkbox for a habit is clicked, to update habit streak and points
//habit is a parameter that you need to add in the html code
//this MUST be the exact name of the habit (case sensitive) 
function updateHabitStreakAndPoints(habit){
    userPoints +=5;
    var habitLocation;
    for(var i = 0; i < habitMatrix.length; i++){
        if(habitMatrix[i][0] === habit){
            habitMatrix[i][1] += 1; 
        }     
    }
}

//to display date on website
async function todaysDate(){
    var api = await fetch("http://worldclockapi.com/api/json/pst/now");
    var apiData = await api.json();
    var time = apiData.currentDateTime;
    var month = time.slice(5,7);
    var day = time.slice(8,10);
    var date = month + ", " + day;
    return date;
}



//STREAKS

//checks if streak is divisible by 10
function streakCheck(){
    for(var i = 0; i < habitMatrix.length; i++){
        if(habitMatrix[i][1]%7 == 0){
            var streak = habit
            //USE HTML TO PRINT NOTIFICATION "Congrats! You hit a [streak] day streak with a habit! +15 points"
            userPoints += 15;
        }
    }
}


//LEADERBOARD

//this makes the array of other users ordered from least to greatest in order of points
//use HTML to print these (access these somehow?)
function leaderbord(){
    for(var i = 0; i < habitMatrix.length; i++){
        if(otherUsers[i][1] < userPoints){
            habitMatrix.splice([i], 0, ["User", points]);
        }
    }
    //IF SHOUTOUT BUTTON CLICKED, GIVE NOTIFICATION "You gave your friend a shoutout!"
}