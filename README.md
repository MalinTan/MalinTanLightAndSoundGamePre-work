# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Malin Tan

Time spent: **3** hours spent in total

Link to project: https://glitch.com/edit/#!/chartreuse-exclusive-cornucopia

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [X] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] Added visual strikes when player chooses incorrect answer
- [X] Added visual when player chooses correct answer
- [X] Added visual color change when player hovers over buttons

## Video Walkthrough

Here's a walkthrough of implemented user stories:

![X](https://i.imgur.com/RYqOUpz.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
- https://www.w3schools.com/jsref/met_win_setinterval.asp
- https://www.w3schools.com/tags/tag_img.asp
- https://www.w3schools.com/jsref/met_win_clearinterval.asp
- https://www.w3schools.com/csSref/css_colors.asp
- https://freesound.org/search/q=chord&f=&s=duration+asc&advanced=0&g=1

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
    
  A challenge that I faced while creating this submission was during the creation of the ticking clock. This was a tricky problem and was the feature that I spent quite some time on debugging. Before implementing this feature, 
I had no experience creating this ticking clock before. I decided to try out this feature not only because it was one of the trickier optional features mentioned, but also because I thought this feature would add some visual 
flair to the project. At first, I was a bit worried when I saw that there were no steps on the implementation provided by the guide, but there were some resources on certain useful methods. I decided to first take a look at the 
provided websites for both the setInterval and clearInterval methods and decided that I was going to create this feature. After reading the provided resources, I immediately began working on the implementation of the timer. 
There were no initial bugs at first, but as soon as I started the game, the timer didn’t seem to work. The text displaying the time only went down by one second, and I was confused why this wasn’t working properly. 
Fast forward an hour, and I was still stuck on this issue. I was using console.log to help me debug and created additional methods to help me debug but still no progress.  At some point, I even contemplated giving up and turning in 
what I had at the time. JavaScript was also one of my rustier programming languages that I have learned as I have been mostly working with C++ for university projects, but this timer feature seemed like a must-have, so I had to continue 
debugging. A few more minutes pass, and I decided to take a break from my computer. When I finally came back to debug, I examined my code, and the documentation to the setInterval method when I noticed the bug. There was a set of 
parentheses after my displayTime in my setInterval. I was furious that I didn’t notice this bug before, and after a quick fix, everything was working as planned. I really should have stopped, rested my eyes, and then evaluate the situation 
before debugging. Hopefully, the next debugging session won’t be as much of a challenge.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

  After completing the project, I had a few questions regarding web development. They were mostly on the size and scope of projects. The project that we worked on for the prework seems quite simple and small in comparison.
My question would be how big could a web development project get? What are some examples of complex web development projects? Are there any web development projects that would require more team members? How would teams be 
divided in these projects? Are there specific roles that are common for every project? As web developers, what are the most essential skills that an aspiring web developer should learn?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
  
  If I had more hours, I would add some more additional features to make to game more fun for the player. This would include different difficulty levels that the user can choose from before starting the game. 
These difficulty modes would include an easy, normal, and hard mode that changes the time to guess after each clue as well as adding or removing additional buttons. I would also include an additional option that allows 
the player to customize the difficulty for themselves if they find the preset modes too easy or difficult. This would allow the player to change the amount of time to guess to their liking. I would also want to add 
more competition to the game. This would include adding a leaderboard that ranks each player’s time to finish a game. This leaderboard would most likely be a separate page that the player can click on. I would 
also try to put more hours into making this game more accessible. For example, I would have an option for the player to choose specific key bindings for each button. I would also add a feature that doesn’t allow the 
player to guess while the clue is being played, and also add a feature that makes the timer tick down only until the clue is finished.


## License

    Copyright Malin Tan

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.