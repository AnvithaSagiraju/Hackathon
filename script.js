var userPoints = 0;
var userName = "";
var habitMatrix = [["Met sleep goal", 0], ["Exercised 30 minutes", 0], ["Studied 1 hour for Math", 0]];
var otherUsers = [["Bob", 20], ["Joe", 25], ["Sophia", 80], ["Mary", 110], ["Billy", 125], ["Sam", 130]];

var displayStreak = document.getElementById("streak_display");
displayStreak.textContent = userPoints;
//HABITS

leaderboard();

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
//use HTML to print these (access these somehow?)
function leaderbord(){
    otherUsers.push(["User", userPoints]);
    otherUsers.sort((a, b) => b[1] - a[1]);


    var leader1 = document.getElementById("leaderboard_name1");
    leader1.textContent = otherUsers[0][0];
    var leader1S = document.getElementById("leaderboard_score1");
    leader1S.textContent = otherUsers[0][1];

    var leader2 = document.getElementById("leaderboard_name2");
    leader2.textContent = otherUsers[1][0];
    var leader2S = document.getElementById("leaderboard_score2");
    leader2S.textContent = otherUsers[1][1];

    var leader3 = document.getElementById("leaderboard_name3");
    leader3.textContent = otherUsers[2][0];
    var leader3S = document.getElementById("leaderboard_score3");
    leader3S.textContent = otherUsers[2][1];

    var leader4 = document.getElementById("leaderboard_name4");
    leader4.textContent = otherUsers[3][0];
    var leader4S = document.getElementById("leaderboard_score4");
    leader4S.textContent = otherUsers[3][1];

    var leader5 = document.getElementById("leaderboard_name5");
    leader5.textContent = otherUsers[4][0];
    var leader5S = document.getElementById("leaderboard_score5");
    leader5S.textContent = otherUsers[4][1];
    //IF SHOUTOUT BUTTON CLICKED, GIVE NOTIFICATION "You gave your friend a shoutout!"
}
