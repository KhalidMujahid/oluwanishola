/*
* Project name: ChatBot
* Author: Khalid Zikirullah
* Title: JavaScript
* Date: 09 september 2020
*/

/*
* =================={{{{{{{{{{{ Details }}}}}}}}}}}}}}}}}} ===============
*  Variables: t , button , div
*  Info: 
*      -  The (t) var get the input element form from the HTML tag(this is where the user made his/her input.
*      -  The (button) var get the button element from the HTML tag(this is where th user click to send his/her input.
       -  The (div) var get the div element form the HTML tag.(this is where the input of the users and the bot are been send to. 
*/

let t = document.querySelector("input[type=text]");
let button = document.querySelector("input[type=button");
let div = document.querySelector("div");

//============{{{{{{{ Olanishola bot }}}}}}}}} ===========


/*
* =================={{{{{{{{{{{ Details }}}}}}}}}}}}}}}}}} ===============
*  Variables: user , nextBox , dustBin
*  Info: 
*      -  The (user) array: the (userSend) will check this (user) array to see if there is a new input/message from the user, then it take the input/message and placed it into the (div) before it send it back to the (nextBox) and delete/empty the array(user) for other new message/input.
 
*      -  The (nextBox) array: the (computerSend) will check the (nextBox) to see if there is a new message/input in the array(nextBox), after that it will now compare the input with his own default input if they matches it will send a message and if not it will still send a message back to the user. at the end it will send the input into the (dustBin) and the empty the (nextBox) for new messages.

       -  The (dustBin) array: the funnction of this array is that it store the users input(temporay) for usage later on.
*/

let user = [];
let nextBox = [];
let dustBin = [];
 
 
//the computer(bot) function start here
 
function computerSend()
{
   //looping through the nextBox array and comparing it with the default input in the computer
   for(let i in nextBox)
   {
      if(nextBox[i].toLowerCase() == "hello" || nextBox[i].toLowerCase() == "howfar" || nextBox[i].toLowerCase() == "sup" || nextBox[i].toLowerCase() == "yo" || nextBox[i].toLowerCase() == "hi")
      {
         //Answers in which the computer can give(Note: that you can add more)
         
         let answers_one = [
            "Hi",
            "Hello",
            "Good day"
          ];
          
          //Making a random select from the Answers
          let send = Math.floor(Math.random() * answers_one.length);
          
           //creating the tag and the message in which the computer will use to reply the user
           let hTag = document.createElement("h6");
           let text = document.createTextNode(`${answers_one[send]}`);
           hTag.append(text);
           div.append(hTag);
           //sending the input into the dustBin
           dustBin.push(nextBox[i]);
           //removing the input from the nextBox
           delete nextBox[i];
      } else
       if(nextBox[i].toLowerCase() == "how are you" || nextBox[i].toLowerCase() == "how was your day" || nextBox[i].toLowerCase() == "how was your night" || nextBox[i].toLowerCase() == "how was your enjoyment")
      {
         let answers_two = [
            "fine and you",
            "fine jare and you",
            "Super fine and you",
            "🤣 fine and yours"
          ];
          
          let send = Math.floor(Math.random() * answers_two.length);
           let hTag = document.createElement("h6");
           let text = document.createTextNode(`${answers_two[send]}`);
           hTag.append(text);
           div.append(hTag);
           dustBin.push(nextBox[i]);
           delete nextBox[i];
      } else
        if(nextBox[i].toLowerCase() == "what is your name")
        {
           let answers_three = [
             "Oluwanishola",
             "khalid",
             "Mujahid"
        ];
           let send = Math.floor(Math.random() * answers_three.length);
           let hTag = document.createElement("h6");
           let text = document.createTextNode(`My name is ${answers_three[send]}`);
           hTag.append(text);
           div.append(hTag);
           dustBin.push(nextBox[i]);
           delete nextBox[i];
      } else {
      
         let answers_four = [
             "i cant get you",
             "you say what?? 🙄",
             "i be your mate ni",
             "Go and sleep jhoor",
             "Speak english jare",
             "What did you mean"
         ];
           let send = Math.floor(Math.random() * answers_four.length);
           let hTag = document.createElement("h6");
           let text = document.createTextNode(`${answers_four[send]}`);
           hTag.append(text);
           div.append(hTag);
           dustBin.push(nextBox[i]);
           delete nextBox[i];
      } 
    }
}

//The computer bot function ends here




//the user function start here

function userSend(){
     //checking if the user did not made an empty input
     if(t.value != "")
     {
        //sending the input into the user array
        user.push(t.value);
        //looping the user array
        for(let i in user)
        {
           //creating the model the user input will be placed in the (div).
           let pTag = document.createElement("p");
           let text = document.createTextNode(`${user[i]}`);
           pTag.append(text);
           div.append(pTag);
           //sending the user input into the nextBox array
           nextBox.push(user[i]);
           //delaying the computer reply by 3 seconds
           setTimeout(() => {
             computerSend();
            },3000);
            //removing the input from the user array
           delete user[i];
         }
         
         //clearing the (t) for new message/input
        t.value = "";
     }
}
//using the button to click the userSend function
button.addEventListener("click",userSend);
