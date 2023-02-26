# Phuc (Paul) Nguyen HTN 2023 Frontend Challenge
### Live Demo
https://htn23-challenge.vercel.app/

### Video Demo
https://user-images.githubusercontent.com/119803257/221338743-0cb69560-7779-4acb-b2f5-141f7ca80831.mp4

### Contribute
To contribute, fork the repository, open it and `cd` to the correct path. Type `npm i` in the terminal to install the packages and then type `npm start` to start the application. In the scenario of any errors with `npm i`, run `npm i --legacy-peer-deps` instead, then `npm start`.

### Account Information
You can manually create your own account and login via the register/login pages at the top right of the navigation bar.

#### Preset Accounts:

Email: testing@gmail.com
Password: 123456

Email: test123@gmail.com
Password: 123456

# Write-Up
1. Walk us through your development process as you worked on this project. How did you plan out the structure and design of it? How did you decide on the tools you've used? Did you encounter any problems? And if so, how did you solve them? Are there any areas of your code that you're particularly proud of or want to point out?

### Development Process
As soon as I learned that I had been accepted for the second round of applications, I was thrilled. Yet when viewing the instructions I felt overwhelmed as I was unable to map a clear path from point A to B of the project since I lacked experience in using React, API's, or other similar technologies. I repeatedly read the instructions, but couldn't a way to proceed. Eventually, I took a break and returned to the task after finishing my exams. At that point, I realized that creating a small report, or brainstorm, would be helpful. This report detailed the steps I needed to take, the issues I was grappling with, and the actual tasks I needed to accomplish, overall breaking up my problems into smaller substeps. This helped me to organize the beginning of my project and where my excitement for this project accelerated.

I realize that to get started, I had to learn new programs like React. So, I watched several hours of instructional videos to gain some basic understanding of setting up React and using its superpowers. As I began structuring my React project, I started with components which were easy to understand. In the first step, I had to create an appealing display, and although rough at first, I started creating components such as a navigation bar, some hero text, and an events display container. Next, I had to display the API data and sort it by start_time, which wasn't too difficult since I had previously followed along with a similar tutorial using a movie's API and the sort could be accomplished via the JS array method `sort`. With a basic structure in place, including navbar links, hero text, and a large container with API data, I felt that it was lacking in visuals. To deal with this, I consulted with other people who specialized in UX design and front-end development for feedback. I learned from this that it would've been best to follow a design template from the beginning. However, bit by bit, I attempted to improve the design by implementing small features throughout, such as an animated particle background, styling the texts and adjusting the spacing to reduce whitespace. Over several versions, I was able to complete a semi-decent looking design. Additionally, I added the search bar feature which was mostly straightforward since I had experience with JS array methods. I simply used the filter method to filter out all events that didn't include the user's input from the search bar. Furthermore, I also implemented a category filter as well, using a select form with options and using the values to filter out events that did not contain the specified category. The last step in the process was setting up user authentication to be able to view more events/information. Thus, I had to create a form. I first used the react-router-dom library to have different routes to login/register pages as well as a home page. After creating the form, I followed tutorials to implement firebase authentication to imitate a backend where users can register and login. Firebase had a wide variety of functions that made filtering events based on permission or events with a public or private url much less complex. I simply created a component that contained a useState hook that would be set to true if the user is logged in or false if not logged in. Then using this variable, I simply imported it into other components and set url + filter events accordingly based on the results of the variable. Lastly, with regards to responsiveness, I constantly checked the sizes with the inspect tool after implementing a new feature and adjusted the css for a responsive design.

### Challenges
One of the challenging tasks were lining up the height of the cards because the event descriptions varied in length. It took me a day or two to experiment with different approaches, such as using bootstrap rows and columns, to set the height of each column equal to the height of the longest card. I think the best thing I learned here, was to take a break and do something else, because my solution came from a random conversation with a friend. I ended up using CSS grids which enabled me to create dynamic columns based on the height of the cards. 

Additionally, running `npm i` gave all sort of unfamiliar errors, thus I had been using `--legacy-peer-deps` to install new libraries. This had no effect on my website but I wanted to resolve the issue in case there were unexpected issues later on. Upon googling a few of the errors, I learned about Yarn and implemented it. Yarn would automatically deal with a variety of tasks including updating packages and et cetera. However, there were still problems remaining as error messages regarding my current libraries popped up when I tried to install certain libraries. I was able to solve this by debugging the error messages and had realized that I needed other packages, which I used Yarn to install, fixing the problem.

Overall, I had a lot of small errors through the project that took me one or two+ hours to debug. The general mentality I used approaching these types of issues were as following:

- Stepping through the code, visualizing and explaining out loud what it is that the code is doing, and then what I want it to do.
- Check the syntax and fix accordingly, then test
- Implementing another version of the code and test
- Repeat

### Technologies
I did not have a particular technology stack in mind when I started the project since I lacked experience. However, I gained a better understanding of the required technologies and learned as I built the project. The technologies I ended up using throughout the program are: `React, HTML/CSS, JS, Bootstrap, Firebase Authentication`.

Although there is not a specific section of code that I am proud of, I am pleased with the entire project. This was my most significant project to date, and I learned a tremendous amount of new information and skills. Overall, I became even more passionate about coding after this.

2. Given additional time, how would you extend your application to become a fully functional product that thousands of hackers and the general public would use at Hackathon Global Inc.™'s next event? Would you add more features and performance metrics? If so, what would they be?

If I were to be given more time, and the ability to work in a team, I’d have endless fixes to my project. Although it’s decent and completes the basic tasks required, I want to ask for the ideas of others for more efficient solutions and more creative/unique designs to restructure the overall feel and look of the project. Throughout the entire project, I constantly chipped away at the appearance until it somewhat came together. But, with more time I would definitely make a more appealing and less-whitespace filled page using a template or such, especially the plain looking login page and the indicator that you are signed in at the top. However, with the register/login task, I was more just trying to complete the functionality rather than designing. Additionally, I would add more animated visuals, images, and possibly a better idea for displaying the events, as in my opinion, the events container looks out of place. I would obviously also add more content similar to the main Hack the North page, and tell a story with animated visuals. I believe that I am more fixated on the visuals and feel of the page rather than the features. I’d still love to implement new features that would help user experience as a whole, but the look was important to me and still bothers me somewhat. Lastly, I would deploy the website to make it more accessible, but due to time crunch I was unable to implement this last feature. Despite this, it was a great learning experience and I'll know a lot more going into a project next time.

3. Any other thoughts you have (not limited to the previous questions).

I feel incredibly grateful for this process because it has taught me so much. Learning React has ignited a new level of excitement in me for coding. The last time I felt this way was when I first began my journey into computer science and realized the vast amount of things I could learn. Although I was initially clueless about React, I am proud of the progress I made and the skills I gained through completing my first React project. I hope to be able to join the 2023 team, which would be an amazing opportunity for me to continue learning and grow as a developer. My passion for coding has been the source of my strong adaptability to foreign technologies, and I believe that given an environment where I can work with others would exponentially increase my skills. I can't wait to see what new challenges and opportunities lie ahead!

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

I would most definitely improve the styling and appearance of my website given more time, following design templates and such. But as for now, it is consistent throughout the project, same colors, same fonts (two extremely similar ones) along with parallax + background animations to give a more unique feel.
