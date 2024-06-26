let userPoints = 0;
var userStreak = 0;
var userName = document.getElementById("textInput");
var habitMatrix = [["Met sleep goal", 0], ["Exercised 30 minutes", 0], ["Studied 1 hour for Math", 0]];
var otherUsers = [["Bob", 20], ["Joe", 25], ["Billy", 125], ["Sam", 130], ["Mark", 85], ["Jim", 50]];
var weeklyHabitMatrix = [["Did the laundry", 0], ["Took out trash", 0], ["Attended a school seminar", 0]];



leaderboard();
streakDisplay();
updateHabitStreakAndPoints();
updateWeeklyHabitStreakAndPoints();
streakCheck();

function updatePoints(){
    var displayPoints = document.getElementById("point_display");
    displayPoints.innerText = userPoints;
}

//when user clicks add habit -- this will be a STRING
function addHabit(newHabit){
    habitMatrix.push([newHabit, 0]);
}

//returns the list of user's habits
function getHabits(){
    return habitMatrix;
}

function returnPoints(){
    return userPoints;
}

//when the checkbox for a habit is clicked, to update habit streak and points
function updateHabitStreakAndPoints(habit, points){    
    var displayPoints = document.getElementById("point_display");
    let upoints = Number(displayPoints.innerText);
    upoints += points;
    userPoints = upoints;    
    updatePoints();
    var habitLocation;
    for(var i = 0; i < habitMatrix.length; i++){
        if(habitMatrix[i][0] === habit){
            habitMatrix[i][1] += 1; 
        }     
    }
}

function streakDisplay(){

    for (var i = 0; i < habitMatrix.length; i++) {
        var streakElement = document.getElementById("habit_streak" + (i + 1));
    
        var nameElement = document.getElementById("habit_name" + (i + 1));

        if (streakElement && nameElement) {
            // Update leaderboard name and score based on otherUsers array
            nameElement.textContent = habitMatrix[i][0];
            streakElement.textContent = habitMatrix[i][1];
        }
    }
}

//when user clicks add habit -- this will be a STRING
function addWeeklyHabit(newHabit){
    weeklyHabitMatrix.push([newHabit, 0]);
}

//returns the list of user's habits
function getWeeklyHabits(){
    return weeklyHabitMatrix;
}

//when the checkbox for a habit is clicked, to update habit streak and points
function updateWeeklyHabitStreakAndPoints(habit){
    userPoints +=10;
    var habitLocation;
    for(var i = 0; i < weeklyHabitMatrix.length; i++){
        if(weeklyHabitMatrix[i][0] === habit){
            weeklyHabitMatrix[i][1] += 1; 
        }     
    }
}




//STREAKS

//checks if streak is divisible by 7
function streakCheck(){
    for(var i = 0; i < habitMatrix.length; i++){
        if(habitMatrix[i][1]%7 == 0){
            //USE HTML TO PRINT NOTIFICATION "Congrats! You hit a streak milestone with a habit! +15 points"
            userPoints += 15;
        }
    }
    return true;
}


//LEADERBOARD

//this makes the array of other users ordered from least to greatest in order of points
//FUNCTION CALLED ABOVE
function leaderboard(){
    otherUsers.push(["User", userPoints]);
    otherUsers.sort((a, b) => b[1] - a[1]);


    for (var i = 0; i < 5; i++) {
        var leaderName = document.getElementById("leaderboard_name" + (i + 1));
        var leaderScore = document.getElementById("leaderboard_score" + (i + 1));
    
        if (leaderName && leaderScore) {
            // Update leaderboard name and score based on otherUsers array
            leaderName.textContent = otherUsers[i][0];
            leaderScore.textContent = otherUsers[i][1];
        }
    }

    //IF SHOUTOUT BUTTON CLICKED, GIVE NOTIFICATION "You gave your friend a shoutout!"
}