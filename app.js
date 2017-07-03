$(document).ready(function() {
  console.log("Sanity check!");

// Player fills in form, and on submit the form will be replaced with just the players name.


  var nameExists = 0;
  var playerScore = 0;
  var compScore = 0;
  var playerName;

      $('#name-form').on('click', function(event){
        event.preventDefault();
        playerName = document.getElementById('name-value').value;
        if (playerName == false)  {
          alert("Name must be filled out");
          location.reload();
        }
        else
        {
        $('#player-form').text("Player 1: " + playerName);
        $("#player-one").attr("style", "display:block;");

          alert("Welcome " + playerName + "!");
          $('#pscore').text(playerScore);
          $('#cscore').text(compScore);

            $('#player_one_button').on('click', function(event){
              event.preventDefault();
              var computerArsenal = ['rock', 'paper', 'scissors'];
              var computerMove = Math.floor(Math.random() * computerArsenal.length);
              var compWeapon = computerArsenal[computerMove];
              var pWeapon = document.getElementById('playerWeapon').value;
                $('#computer-weapon').text(compWeapon);
                  if (pWeapon === "rock" && compWeapon === "paper") {
                    alert(pWeapon + " vs " + compWeapon + " Computer wins!!");
                    compScore ++;
                    $('#cscore').text(compScore);
                    nameExists ++;
                    console.log(playerName);
                  }
                  else if (pWeapon === "rock" && compWeapon === "scissors"){
                    alert(pWeapon + " vs " + compWeapon + " " + playerName + " wins!!");
                    playerScore ++;
                    $('#pscore').text(playerScore);
                    nameExists ++;
                    console.log(playerName);
                  }
                  else if (pWeapon === "paper" && compWeapon === "rock"){
                    alert(pWeapon + " vs " + compWeapon + " " + playerName + " wins!!");
                    playerScore ++;
                    $('#pscore').text(playerScore);
                    nameExists ++;
                    console.log(playerName);
                  }
                  else if (pWeapon === "paper" && compWeapon === "scissors"){
                    alert(pWeapon + " vs " + compWeapon + " Computer wins!!");
                    compScore ++;
                    $('#cscore').text(compScore);
                    nameExists ++;
                    console.log(playerName);
                  }
                  else if (pWeapon === "scissors" && compWeapon === "rock"){
                    alert(pWeapon + " vs " + compWeapon + " Computer wins!!");
                    compScore ++;
                    $('#cscore').text(compScore);
                    nameExists ++;
                    console.log(playerName);
                  }
                  else if (pWeapon === "scissors" && compWeapon === "paper"){
                    alert(pWeapon + " vs " + compWeapon + " " + playerName + " wins!!");
                    playerScore ++;
                    $('#pscore').text(playerScore);
                    nameExists ++;
                    console.log(playerName);
                  }
                  else {
                    alert(pWeapon + " vs " + compWeapon + " TIE!");
                    nameExists ++;
                  };
                  if (playerScore == 3) {
                    alert("GAME OVER, " + playerName + " takes all!");
                    compScore = 0;
                    playerScore = 0;
                    $('#pscore').text(playerScore);
                    $('#cscore').text(compScore);

                  }
                  else if (compScore == 3) {
                    alert ("GAME OVER, computer takes all!");
                    compScore = 0;
                    playerScore = 0;
                    $('#pscore').text(playerScore);
                    $('#cscore').text(compScore);
                  };
                });

            };

  });


            // nameExists++;



});
