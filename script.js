var userPoints = 0;
var userName = "";
var habitMatrix = [["Met sleep goal", 0], ["Exercised 30 minutes", 0], ["Studied 1 hour for Math", 0]];
var otherUsers = [["Bob", 20], ["Joe", 25], ["Billy", 125], ["Sam", 130]];

var displayStreak = document.getElementById("streak_display");
displayStreak.textContent = userPoints;
//HABITS

leaderboard();
streakDisplay();


//when user clicks add habit -- this will be a STRING
function addHabit(newHabit){
    //for line9 you need an HTML variable called habitInput for the habit the user wants, and when the user clicks "save" this function should be called
    habitMatrix.push([newHabit, 0]);
}

//returns the list of user's habits
function getHabits(){
    return habitMatrix;
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

function streakDisplay(){

    for (var i = 0; i < habitMatrix.length; i++) {
        var streakElement = document.getElementById("habit_streak" + (i + 1));
        //streakElement.textContent = habitMatrix[i][1];
    
        var nameElement = document.getElementById("habit_name" + (i + 1));
        //nameElement.textContent = habitMatrix[i][0];

        if (streakElement && nameElement) {
            // Update leaderboard name and score based on otherUsers array
            nameElement.textContent = habitMatrix[i][0];
            streakElement.textContent = habitMatrix[i][1];
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

//checks if streak is divisible by 7
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