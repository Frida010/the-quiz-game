# Quiz Game

The Quiz game is a game were you can play a quiz game and learn more about codeing. 
The quiz has three questions in total and has three options per question. 
The questions are fun, and why not test your knowledge against friends? 
At the end of the game the user will get a score of how many points the person got in total and a choice to play again if wanted. 

The Quiz game is targeted towards adults and children as a fun way to test your knowledge about coding

The website contains a header and a footer. The footer contains icons with links to social media and invites the user to interact.

![Screenshot of the website on diffrent screen sizes](https://user-images.githubusercontent.com/129947589/257799226-e3222ec0-2534-4520-94cd-6e99b689dfbf.png)

## Features

#### - Favicon

- Featured in the web browser is a small heart, the favicon did work before I deployed the website to github. But after the deployment it seems to not work. 

![Screenshot of the favicon](https://user-images.githubusercontent.com/129947589/257761171-66ad6c29-948e-4de5-977c-6ee06235900b.png)


#### - Header

- Featured at the top at the page is the header. The header does not have any features it does only display the name, which makes it more apparant for the user what game they are playing.
- The header creates a nice contrast on the game's website and creates a nice framing.
- The font has a playful look and fits the character of the website well.

![Screenshot of the header](https://user-images.githubusercontent.com/129947589/257760962-5b66766b-2dcb-4a9a-95ff-9049182e0c30.png)

#### - The Quiz

- The buttons have a hover effect that lights up the button the mouse hovers over.
- The quiz area has one question and three options for the user to choose from.
- The buttons have a hover effect that lights up the button the mouse hovers over.

![Screenshot of the quiz area](https://user-images.githubusercontent.com/129947589/257763227-ab33b021-1cde-4e60-a0a0-246267f6d715.png)
![Screenshot of the quiz area with hower effect](https://user-images.githubusercontent.com/129947589/257760813-742039de-a288-4b3e-be7d-69ddc795b5a3.png)

- When the user has made a decision the button with the correct answer will light up in a green color and the wrong answer in a red color (if the user picked the wrong answer).
- When a choice is made, a button with the text "Next" will appear for the user to click on and continue to the next question.

![Screenshot of the quiz area whit wrong answer selected](https://user-images.githubusercontent.com/129947589/257760858-9636acc6-54ce-4104-9a42-21ea2497b4ba.png)

- When the quiz is over and all the questions are answered, the user will get a message saying "You scored ... out of 3!".
- On this last page the button will also have changed and have a text saying "Play Again" and now the user can make the choice to play again if wanted.

![Screenshot of the score board at the end of the game](https://user-images.githubusercontent.com/129947589/257760916-eda875e1-7bfb-48d8-a66b-2f6c60d7d95e.png)

#### - Footer

- The footer contains clickable social media links for the user to find the game on Facebook and Instagram.
- The footer also contains the text "Share your results with us on social media!" to invite the user to interact with the game on different platforms.

![Screenshot of the footer with social media links](https://user-images.githubusercontent.com/129947589/257760997-2c66967c-5695-420f-a9d6-c9f799ac51d2.png)

### Features left to implement

- In the future I would like to expand this game and make more questions and levels with different levels of difficulty.

## Testing

- I tested this website on different browsers such as: Safari, Crome and Firefox and it works as expected.

- I confirmed that this website looks good on different screen sizes using the devtools device toolbar.

- I confirmed that the header, options, results and footer text are all readable and easy to understand.

- I confirmed that the colors and fonts chosen are easy to read and accessible by running it through lighthouse in devtools.

![Screenshot of the lighthouse](https://user-images.githubusercontent.com/129947589/257808095-c8d8b829-1682-4018-936d-fd17d91fea0c.png)

### Bugs

- One bug that I have discovered when working on this project is that I had spelled one word wrong (dispaly insted of display). It caused the next button function to not work as expected. 
- After fixing that problem, the quiz worked good. 

### Validator Testing

##### - HTML
- One error that was found when passing through the validator was that the favicon link was broken and did not work properly. 
![Screenshot of the error message](https://user-images.githubusercontent.com/129947589/257799315-203a9a8b-ef07-491c-a649-1a1346d38236.png)
- After fixing that problem, no error message were returned from the [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Ffrida010.github.io%2Fthe-quiz-game%2F)

##### - CSS
- No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ffrida010.github.io%2Fthe-quiz-game%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

##### - JAVASCRIPT
- No errors were found when passing through the official [Jshint validator](https://jshint.com/), however I did get some warnings.
- The following metrics were returned:
- There are 9 functions in this file.
- Function with the largest signature take 1 arguments, while the median is 0.
- Largest function has 8 statements in it, while the median is 4.
- The most complex function has a cyclomatic complexity value of 2 while the median is 2.

### Unfixed bugs

- I do not have any unfixed bugs on this website. 

## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:

- In the GitHub repository, navigate to the Settings tab
- From the source section drop-down menu, select the Master Branch
- Once the master branch has been selected, the page provided the link to the completed website.

The live link can be found here - [Quiz Game](https://frida010.github.io/the-quiz-game/)

## Credits

### Content

- In the process of making this webpage I have used [Code Institutes](https://codeinstitute.net/) videos and course material as help with how to write some of the code and to remind me how the code works both css and javascript.
- I used [W3Schools](https://www.w3schools.com/css/css3_gradients.asp) and their CSS Gradients lesson as help when making the gradient background of the webpage. 
- I used [W3Schools](https://www.w3schools.com/jsref/jsref_foreach.asp) and their JavaScript Array forEach() lesson as help on that part of the code.
- Used [W3Schools](https://www.w3schools.com/js/js_if_else.asp) and their JavaScript if, else, and else if lesson to remind me of how to write that code.
- Reminder of how to make JavaScript Array forEach() I looked on [W3Schools](https://www.w3schools.com/jsref/jsref_foreach.asp).
- I used [W3Schools](https://www.w3schools.com/js/js_functions.asp) to help me with JavaScript Functions.
- I used [Simple Steps Code](https://simplestepscode.com/javascript-quiz-tutorial/) as inspiration with how to make a quiz game.
- I also used [Geeks for geeks](https://www.geeksforgeeks.org/how-to-create-a-simple-javascript-quiz/) to help me with the javascript in this project.
- In the process of making this game I used this [Youtube video](https://www.google.com/search?q=how+to+make+a+quiz+in+javascript&oq=how+to+make+a+quiz&gs_lcrp=EgZjaHJvbWUqBwgCEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIGCAYQRRhBMgYIBxBFGEHSAQg4MzUyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:509fe98a,vid:p-2G-7vLuV4) from Coding artist as help.
- I also used this [Youtube video](https://www.google.com/search?q=how+to+make+a+quiz+in+javascript&oq=how+to+make+a+quiz&gs_lcrp=EgZjaHJvbWUqBwgCEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIGCAYQRRhBMgYIBxBFGEHSAQg4MzUyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:370e1017,vid:riDzcEQbX6k) from Web Dev Simplified as help with the javascript code writing.
- This [Youtube video](https://www.youtube.com/watch?v=-cX5jnQgqSM&ab_channel=GeekProbin) from GeekProbin was used as help when making this quiz game.
- And this [Youtube video](https://www.youtube.com/watch?v=pQr4O1OITJo&t=146s&ab_channel=CodingNepal) from CodingNepal was used to help me when making this quiz game.
- I used this [Youtube video](https://www.youtube.com/watch?v=MxrGPP4F8Sc&ab_channel=Keepcoding) from Keep coding when making this quiz game as help.
- This [Youtube video](https://www.youtube.com/watch?v=xZXW5SnCiWI&ab_channel=AliAslan) from Ali Aslan was used for insiration to maybe in the future make a timer function.
- In the process of making this quiz game I also used the [Python Tutor code visualiser](https://pythontutor.com/javascript.html#mode=edit).

### Media

- The icons in the footer were taken from [Font awesome](https://fontawesome.com/).
- The favicon in the browser were taken from [Favicon.cc](https://www.favicon.cc/?action=icon&file_id=986511)


 
