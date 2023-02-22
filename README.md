# Phuc (Paul) Nguyen HTN 2023 Frontend Challenge

# Write-Up
1. Walk us through your development process as you worked on this project. How did you plan out the structure and design of it? How did you decide on the tools you've used? Did you encounter any problems? And if so, how did you solve them? Are there any areas of your code that you're particularly proud of or want to point out?

### Development Process
As soon as I learned that I had been accepted for the second round of applications, I was thrilled. However, when I reviewed the instructions, I felt a bit lost and struggled to map out a path from A to B. Since I lacked experience in using React, API's, and other technologies, I read the instructions repeatedly, trying to figure out how to proceed. Eventually, I took a break and returned to the task after finishing my exams. At that point, I realized that creating a small report, or brainstorm, would be helpful. This report detailed the steps I needed to take, the issues I was grappling with, and the actual tasks I needed to accomplish. This helped me to organize the beginning of my project. To get started, I had to learn new programs like React. I watched several hours of instructional videos to gain the necessary skills. As I began structuring my React project, I started with components which were easy to understand. I created components such as a navigation bar, some hero text, and an events display container. Next, I had to display the API data, which wasn't too difficult since I had previously followed along with a similar tutorial using a movie's API. With a basic structure in place, including navbar links, hero text, and a large container with API data, I wanted to make it more visually appealing. I consulted with people who specialize in UX design and front-end development and realized that I should have followed a design template from the beginning. However, I attempted to improve the design by implementing an animated particle background, styling the text and fonts, and adjusting the spacing to reduce whitespace. Over time and with the help of feedback from peers, I was able to create a semi-decent looking design. I was able to add an optional search bar and filter by category, which was mostly straightforward since I had experience from a previous video. I simply used the JavaScript method filter to filter out all events that didn't include the user's input or the sort method for filtering by category. 

### Challenges
One of the challenging tasks were lining up the height of the cards because the event descriptions varied in length. It took me a day or two to experiment with different approaches, such as using bootstrap rows and columns, to set the height of each column equal to the height of the longest card. Ultimately, I found a solution in CSS grids that enabled me to create dynamic columns based on the height of the cards. 

Additionally, I had issues with installing new libraries due to outdated libraries in my package.json. This took me a day to think about and how I could resolve the issue as I didn't want conflict for each package as I had been using `--legacy-peer-deps` to install my packages. This was not the greatest and if I restarted I would definitely keep an eye out. But this was resolved by implementing Yarn, which would automatically deal with a majority of the issue. However, there were problems that were still remained as error messages regarding my current libraries popped up when I tried to install certain libraries. I had to debug the error codes using the help of google and used yarn to add unmet dependencies and such to fix the rest.

### Technologies
I did not have a particular technology stack in mind when I started the project since I lacked experience. However, I gained a better understanding of the required technologies as I built the project. The technologies I used throughout the program include, but not limited to: `React, HTML/CSS, JS, Bootstrap, Express`.

Although there is not a specific section of code that I am proud of, I am pleased with the entire project. This was my most significant project to date, and I learned a tremendous amount of new information and skills.

2. Given additional time, how would you extend your application to become a fully functional product that thousands of hackers and the general public would use at Hackathon Global Inc.™'s next event? Would you add more features and performance metrics? If so, what would they be?

If I were to be given more time, and the ability to work in a team, I’d have endless fixes to my project. Although it’s decent and completes the basic tasks required, I want to ask for the ideas of others for more efficient solutions and more creative/unique designs to restructure the overall feel and look of the project. Throughout the entire project, I constantly chipped away at the appearance until it somewhat came together. But, with more time I would definitely make a more appealing and less-whitespace filled page using a template or such, especially the plain looking login page. However, with the register/login pages, I was more just trying to complete the functionality rather than designing. Additionally, I would add more animated visuals, images, and possibly a better idea for displaying the events, as in my opinion, the events container looks out of place. I would obviously also add more content similar to the main Hack the North page, and tell a story with animated visuals. I believe that I am more fixated on the visuals and feel of the page rather than the features. I’d still love to implement new features that would help user experience as a whole.

3. Any other thoughts you have (not limited to the previous questions).

I feel incredibly grateful for this process because it has taught me so much. Discovering React has ignited a new level of excitement in me for coding. The last time I felt this way was when I first began my journey into computer science and realized the vast amount of things I could learn. Although I was initially clueless about React, I am proud of the progress I made and the skills I gained through completing my first React project. I hope to be able to join the 2023 team, which would be an amazing opportunity for me to continue learning and grow as a developer. My passion for coding has been the source of my strong adaptability to foreign technologies, and I believe that given an environment where I can work with others would exponentially increase my skills. I can't wait to see what new challenges and opportunities lie ahead!

# Considerations
- Is the code written and documented such that a developer who is unfamiliar with the code can understand it relatively quickly?

I believe so, I tried to organize the code in separate folders and the usage of react components definitely play an essential part. I also tried to comment parts of my code that used JavaScript. Additionally, I asked for a code review from a peer software developer who had experience winning multiple hackathons, and he was able to pick up on it easily.

- Is your project structured in a way that is extensible and scalable? For example, if we wanted to add more events or event types, would it be possible to do so easily?

Yes, adding more events or event types would not affect the project, as long as the events object obtained from the API remained the same. Even if it were to be modified, with the usage of react components it will be extremely easy to modify the card to obtain the new information and implement the new content.

- Are you following best practices to make sure the project is maintainable if development were to continue on it?

Yes, I believe this is the case thanks to the usage of react and components. Additionally, the readability of the code allows for easy modifications if newer practices were to be implemented such as design features, etc.

- Is your application accessible and responsive (usable on multiple device types and/or for individuals with impairments)?

The application is responsive and mobile-friendly, using various media queries and a responsive grid container along with bootstrap.

- Is the styling and appearance of your application consistent and appealing?

I would most definitely improve the styling and appearance of my website given more time, following design templates and such. But as for now, it is consistent throughout the project, same colors, same fonts (two extremely similar ones).
