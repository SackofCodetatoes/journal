
//should try making 
Added more flascards. must review                                                                                                                          

negotiations
vacaions, benefits, role responsibilities, upward mobility membership, equity, perks (gym membership
) 
how to leverage current offer with jobs i am applying for



how does your project work? Where does it all start
Created my application using ruby on rails with postgres system. 
started with the backend by initializing my database by structuring model objects with appropriate fields. Things that can be created are:
-users
-projects
-steps

Additional api's include 
-session creation and deletion
-search index and or projects

how does the backend interact?
works by utilizing the api routes 
make a request to a given route, ex: 
show all projects or single project would be 
/api/projects
/api/projects/id


the way frontend connects to backend is event listeners. when an action is prompted from a button, we run an ajax request based in the utils file. the ajax request defines the method, route and any additional info that might be neded, such as creating a project with project data. 
button -> project actions -> project utils -> updates database -> updates state store -> updates button






work on learning event loop


My name is Jason and I love bringing ideas to life. I graduated from uc davis with a bachelors of science in computer science and engineering. After graduationg I worked independently in art and video game development to explore a creative path. Soon after I fell in love with web development as it blended my creative and engineering passions and decided to level up my skills by enrolling in app academy. I gained hands on experience in modern web frameworks and concepts such as React, ruby on rails, REST APIs, and relational databases like postgres. 

And from all those experiences of working with different techs and learnign practices, I feel like im ready to take on any tasks that may come my way

I think id be a great fit because I myself am a growth 
oriented self starer with experience working across the stack



notes

grapplehook
fix scrolling
viewport is off center, adjust the background
soundeffects html 5 audio tags and music
dont forget to add mute button
start muted and allow to be turned on

full stack - > 
more seed data
add more common building data
more realistic data
more constructions
site looks static, no liking or interactability, or comment, save for later

make the site more alive
textural hieracy can change
droppign paragraph font by a few points and change how things look
textural hierachies, read abotu them

grouple
- logout padding 
- make more styling changes
- put text in white littl ebox or add some cards
- textural hierachies would come in handy
- 



scalability is if we have an app and currently 100 peeps, how can we scale to 100000 and process works

scaling the database to larger audience, multithreading, with load balancers

web architecture tied to scaling

http://blog.self-loop.com/architecture_lecture/
can relate to dev ops and your enviornment, setting up continuous integration and continuous deploayment
automated test that run against our our implementations


hit up a hackathon, more fun than regular events
also good networking opportunities and realworld experience. Eventbrite, meetup
mebe get one or two to go with 
might be good on algorithms

highly recommend doing javascript flashcards
once its done, its in your brain, trivia knowledge would be can be difficult to learn but flashcards would eb a great
anki available on mobile as well
javascript to web architecture
eventloop or what makes things restful
frotnent, backend full stack developer
web developer, app developer, web app developer, web engineer, web app engineer
include entry level, junior, or specifics engieers, javascript, rails, react etc.

https://github.com/gelstudios/gitfiti to retracively fix github
call in 

create a plaintext resume

Follow up with with brain health, add soemthign witty or funny from the interview and just checkin. 
might be a framework like in spring to write out a controller

since c++ or Java -> study object oriented, know java's little nuances and learn a bit about a framework with java. 
- followup on brainhealth
- set a deadline to do the skillz test
- keep the applications up and as many clearbits
setting up deadlines will help keep motivation up.

Current goals for java review are to be able to work through medium difficult questions in java. Includeds array and string manipulation. enumeration funcitions similar to ruby. and object oriented design. If time avails, dive deeper into how java is used for backend. File manipulation also would be nice

review matrix manipulations, set up schedule and learning, 

set some deadlines, 

Current plan to review Java, work through some exercises using java for remainder of week. on the side planning to review full stack and fix new project creation error and implement current swing mechanic to refactored code. Goal is to have clean, easy to read code that is lightweight functional. potentially would like to build out the interface as well to be more aesthetically pleasing.



tough questions encountered were check valid camelCase given set of words and variable name
craete substrings of at most k unique characters from substring, with minimal number of substrings
count number of substring pairs that differ by the kth index 
aaaccdeeggeefjjjoi => aaaccd, eeggeef, jjjoi (returns 3)
abacaba => 8 (stupidly as it counts repeated comparisons)



add animation to constructables if not lean up how things load. exercise in project development
on logout, refine the system and pop to main page.

mock notes
better wrap up on pitch with . : since then I've been actively job searching while practicing my programming skills in algorithms and new project ideas

review javascript, brush up on whatever trivia i can
dfs find max
with graphs, create two approaches before starting
take a breath and stay focused
if thought comes up, take a note and come back to it. taka breath ebfore jumping into it.


If possible, avoid using javascript functions unless they fit the purpose. Important to develop your interview potential as presentational. might have technical prowesss, but need to make it a presentational aspect. Pseudocode more and present. take the time to formulate, and be presentable and clean

What is infrastructure engineering

contact cory if i run into issues on my projects
go thru the code of my projects
- explain design decisions
- reason to split these to two tables vs one, reasoning to nest routes
- be comfortable explaining all of my project code
- POLISH projects as well

Algorithms, 
- cracking the code
- check out other resources as well

Study up trivia
- react questions
- system design questions
- pick a random prompt and architecht an app based on that criteria
ex: project management app
- todos
- msg board
- events
- layout app from db, schema, routes, react components, redux state, wireframe it


non profit and others 

React app commission tracker => 
MVP features
- artists can create accounts. 
- artists can start new commission -> generates unique tracking code. 
- -requires attention for scalability. completed projectswill remain on artist's history but open commission will last 1 week before expiration
- -intention is to allow previously unique code to be reused
- aritsts can upload images and leave comment
- clients can access a trackign page via their unique tracking code.
- - requires attention ii how the code is structured and want to avoid other users from bruteforcing to see other ommissions by a specific artist. fixable by purely random code for all users, no hashing or xyz. 




Where I am now isnt cutting it. I need to live and breath for code.
Areas to focus on are: 
- Dive deeper into JavaScript specific functions instead of using for loops to reduce confusion during interviews
- Absolutely try to avoid being unfamiliar with my tools. Processing the question is fine, but not my own tools.
- Live and breath code.

Base conversion technique to determine if a number is of a certain base. Think binary, a value is of a base n if the converted base number is 1 with trailing 0s. Ex. 4 is base 2 since binary is 10. 5 is not as it is 101. Similarly can be done with 9 and base 3 leading to 100. 
This can be done in JavaScript with i = integer.  based =  i.toString(base). the following was my approach to resolve the remaining while other approach can also be done. based.slice(1) and check if all trailing values is 0, based.slice(1).every(a => a === 0) 


//

Walk me throuhg the project youve done and the challenges with it.
Constructables 
- Full stack website highly inspired by instructables with some single page features
- Users can create an account, post and search step-by-step project guides. 
- Used Rails to quickly setup a postgres backend and setup api endpoints for creating accounts, projects, and project steps. 
- Implemented a state store using redux cycle and react components to represent different states of the website

Grapplehook
- developed 2d projectile system 
////


something to note is look up news about the company


// var preorder = function(root) {
//     if(root === null) return [];
//     let result = [root.val];
//     for(let i = 0; i < root.children.length; i++){
//         result = result.concat(preorder(root.children[i]))
//     }
//     return result;
// };

//itterative would use stack
//assuming we can modify the given tree. append root. add to stack, change pointer to first child. repeat, append current, if childre, add to stack. if no children, append self to result, shift off child element from top element of stack. continue until stack is empty

//itterative
var preorder = function(root) {
    if(root === null) return [];
    let result = [root.val];
    let stack = [root];
    let current;    
    while(stack.length){
        current = stack[stack.length - 1];
        if(current.children.length){
            stack.push(current.children[0]);
            result.push(current.children[0].val);
            current.children.shift();
        }
        else{
            stack.pop();
        }
    }
    return result;
};

==
Ask others about how their conferrence calls were all about. Contact Cory to see what he has to say and gain insight. 
==

Artist Commission tracker
Artists sign up, create wip commissions (allows for notes, and image uploads, basic messaging (possibly live)), unique code per commission.
clients can track their work via unique code and tracking page to see current progress. 
Artists can request feedback / clients provide feedback in form of notes or basic image editing. 
Free users past completed commissions will be logged artist side but tracking will expire within given period
tos outlining tracking services is not man in the middle, but simply a service

2 hours of studying algoirthm problems
- 1 hour to studying, algo expert.com, algo design manual, reading about solutions
- 1 hour practicing. Set a timer for an hour on leetcode for time constraint. SPend the hour trying to solve the problem. after the hour look for the optmial solution. 
if did not find optimal, mark as incomplete and come back to it next week


did c++ coding challenge and realized it wasnt all too bad. While I know it and can use it well, im still not a master at it, but enough knowledge to work it.

been a bit out of touch but been focused on various aspects thats dificult to create a defined habbit
plans to react app to stay on top of react techs


temp coach to be cory for the following month
agenda of things to do might be to create a react app to review frontend technologies. Use react app to create my artist site. 




self note is not to apply for positions that don't neccesarily include skills i am very fluent at currently. Given that i have experience, it's not very wise to do so.



following very niche positions
phaiden internatonal stem field, life fields, financial services, civil engineers
nuced motors


allowed me to quickly implement my datamodels for users and user associated projects 


Love bringing things to life
graduated with bacheors in computer scienc eand engineering
worked independinetly in art and video game development, soon after fell in love with web development. 
enrolled in app academy to level up my skills 


My name is Jason and I love bringing ideas to life. I graduated from uc davis with a bachelors of science in computer science and engineering. After graduationg I worked independently in art and video game development to explore a creative path. Soon after I fell in love with web development as it blended my creative and engineering passions and decided to level up my skills by enrolling in app academy. I gained hands on experience in modern web frameworks and concepts such as React, ruby on rails, REST APIs, and relational databases like postgres. 

I think id be a great fit because I myself am a growth oriented self starer with experience working across the stack

I saw that wanderjaunt takes care to create amazing experiences, and as someone that loves to go through the iterative process, I'd love to develop that process. 



existing homeowners owners outa the picture and wanderjaunt takes care of it
design to activation team, redesign the place, works with other 3rd party travel agencies, take care of cehckins checkouts and cust service
win win can see from on airbnb 
4 % to 8 %

180 - 450

3rd market 

20 white collar hrly labr to move things
50 - 60 white collar
 second pillar to wander juant
 raise money under properties 
 buying homes for long term


 flexibility and ambiquity and engineers are more multifunctional
 product and consumer oriented


 what youd be doing
 straight forward, travel company book thru platform
 bookable thru airbnb
  they take a cut from that venue and want to increase ours
  more ui, page decrease functionality, web page optimization
  more operational side of things scheduling the night before
  more factors at demand basis
  warehouse management,
  artwork, phoneix austin, direct manufacturer partnerships
  data challenges at play, buy property to be efficient
  want tooling that sort of gud for the optmization and tooling to input data and predict





im interested in wanderjaunt because i feel id be a really great fit because I myself am self starter growth-oriented with experince working across the stack. 

dont say fit for the position

why i want to work at wanderjaunt
I love the iterative and transformation process behind wanderjaunt does, from acquiring potential venues, reimaginging the it's potential and creating a new experience. 

come up wiht the best u have

off
4 people 
have autonomy and running point



 and during that time I hed the pleasure of learnign various algorithms, fundamentals to computer science, and some hands on experience to co



3/20
IBM meetup talk
applcation modernization on enterprise cloud stack
Will have a quiz to earn a badge later as part of the coder platform
What is app modernization and we keep evolving. bit better than the custom order
have to agree on a format within the appliaction and lead to service oriented architecture. data could descripbbe itself when transmitting data. there would be interfaces that was set in 
late 90s had custom interfaces . 10's had more standardized protocols 
2015 microservices using language agnostic apis and protocols

devs like to dive in and learn to swim
app modernization requires planning
biggest factor to modernize the app looks at business value and the cost and benefits from migrating
typically lots of buisness rules

good value usually found in apps that have 
  - multiple upgrades per year, 
  lots of buisness rules requring complex regression, testing and extended service ouotages to implement. large stable growng user base

also needs to account for how easy it is to migrate, technically
three ways to migrat is replatform, repackage, refactor

repackage involves repackaing of the app, breaking out the components, 

refactor rewrites the app on a modern platform

IBM cloud transformation advisor
can be pointed to jboss or 
migrate and check the errors that occur on the ibm cloud transformation advisor
checks to see how feasible it would be to move the application

underlying technologies required for the new environment

refactor what is necessary but dont necessarily refactor
what doesnt make sense to rewrite it from scratch
replatform takes legacy ap

containers and dockers
containers not a new idea, what is significant and docker containers is the overall ecosystem itself thats built upon its own library

how do containers work? processes run for the life time of the container
comparable to vm machine
have to map certain things 
running contained is fine but running multiple live is a lot mroe and less organized
use kubernetes will help organize the containers
containers developed by google since open source
kubernetes 
based on api system
client requests somethign in the enviornent, make request to storage, maps to storage and are monitored byb collection of watchers
which manage the enviornment
zero downpoint deployment, 
add pods to the application
once built, deploy to second level 

openshift container, ibm cloud private
 review the ibm and red hat replatofmred application, zero downtime.
 show 
 will show s
point is you always have a version of the app running
 pe

 key tenets of microservices architecture
 1. large monoliths are broken down into many small services
 2. services are optimized for a single function
 3. services are tightly encapsulated behind concrete programming interfaces
 3. communication via res api and or message brokers
 5. per-service continuous integration and continous deploayment
 per-service ha and clustering

 microservices fundamentals
 encapsulation is key, 
microservice as api enabler
micorservices architecture, review the slides

review the slides 
important to remember staging and deployment
take a chunk of functionality, bring it to cloud, implement as microservices and then deploy and will have small migrations


Since then I;ve been trying to grow myself as a developer by picking up and refining new skills such as web development using react, javascript, ruby, and relational databases.


3/19
=========================
for trapped water problem, we start with two pointers, left and right wall and increment the smaller of the two positions inwards. if the moving index finds an element greater than current wall, update it and iterate on the direction of the smaller of the two walls again
this will run in linear time and add all less than walls.points of data as captured water. if greater than, we jst update the 
been having a stomach ache. not doing well

==========================
3/15/19
==========================
Google Interview Question
Given singly linked list and integer k, remove the kth element. Linked List might be very long and thus we can only iterate over the list in a single pass
Approach: Approach the problem with a few pointers. Offset pointer, index pointer, and previous pointer. index pointer will point to current index item as we iterate, offset will point to k elements behind index and previous will point to the elemennt previous to the offset. start by iterating index pointer by k elements. offset will point to root, previous will point to null or head. now as we iterate over elements, we updte our previous to offset, offset to offset.next and index to index.next until index.next is null. at end of list, we set our previous.next to point to offset.next as offset is kth element from end of list




==========================
3/14/19
==========================

Dodge, Data scientist
did a lot of buisness analssis and was also a bootcamp grad thats into data science 
Data scientist is person who is better at stats than any software engineer and better at oftware engineering than any statician. Need that stats background and be able to effectively communicate on
Thinkful Mentor Dodge Mcintosh

Data science project at a real company. Linkedin back in 2006 and how a scientist came in to work on pa project and the outcome of it
Johnathan was the datasceintist that joined LinkedIn and wanted to grow their numbers via statisticis. 
want to frame the question, collect raw data

after processing our data, we want to explore it, find the insights, distribution of variables and the findings behind the data. 

Be able to effectively tailor the information to the audience to be meaningful

1. Frame the question, What questions we want to answer?
What connection type and number lead to higher user engagement. 
which connections do people want to make but are currently limited from making
how might we predict these types of connections with limited data 

leads us to need to know connection data, demographic data, how are these people possibly connected? Collegues, vicinity? etc


how is data dirty and how can we clean it?
  user input
  redundancies
  feature changes
  data model changes
    Early linkedin was just entering data with no way to verify that data or just has typos
    possible connection question is people wiht similar responsiblities but differrent titles
    possible fix is have categoical dropdown information to clean up user input

what are the meaningful questions behind the data
  triangle closing
    im connected to john, johns conencted to arty, so maybe i should be connected to arty. Then we could look at other statistical data such as vicinity, location, etc to make a suggestion of being connected

How do we communicate this to be mroe meaningful?
  hey do x to gain y

out of that, we gained possible connections with othe rindividuals


Python and specific library to clean that data

lot of data is stored jupiter notebook and 
automate the boring stuff with python book which python will help us clean our code 

Scala also big in big data specialization

Will be building a model that will be a decission treem
  - predict the most likely outcome based on nput
  like a computer building a version of 20 questions
  regression problem is determingin a contiguious value, defined set
  the decisioin tree is will we play golf givn these conditions
  is a binary classification problem and is a biased learnign problem because we already know if we will play or not play. If we didnt have the outcome, it would not be biased

  Supervised learning is having all our historical data and unsupervised is not? Since we have all our information in our golf example, it is supervised

  unsupervised ex is customer segmentation information
    have purchase data, but no grouoping of the customers
    up to us to make useful differentiation

Collabortory - googles version of jupiter notebooks
juptr java python r notebook which works for us with python
allows us to run code on the notebook

with python, from sklearn, import tree
import pandas as pd
python uses DataFrame objects with our pandas

Dummy columns, sidekick elarn, need to convert categoriical info to converted to numerical representation. the get_dummies function creates a new DataFrame object that returns us dummied version
can use graphviz which is a visualization model which we copy the code to generate a decision tree model visual
interptable model = whitebox, blackbox = less interpertability
clf-train.predict() where clf-train was our model
double squre bracket passes in matrix
run thru our code and try it out with different temperatures or osmething 

decision trees are prety easy to get up n running and not worried about scaling after numerically encoded, but has some limitation
  limited data points that has been trained on

data analystic role isnt specifically all about this, data science is more on prediction
Dataquest and dataCamp is good intro/sources to data science
thinkful has free trials to learn more on python and statistics


Making products that dont exist by StreetContext PM, Prachy Mohan



================================
3/13/19
================================
Have a new project idea that requires some hashing out. Main idea is art prompt generator. For my current purpose, it would generate an expression and character or perhaps even a specific twitch emote option to practice drawing a specific emote. Plans to have user accounts to allow users to creaate their own lists to randomly select from and possiblily to upload images to show their progress or daily checkin.

================================
3/11/19
================================
Worked through more coding problems and noticing my problem with jumping ahead of myself. Need to remember to break down my steps on white boarding
1. Clarify the question + determine sample input
2. Create an approach, possibly with pseudo code
3. Talk about tradeoffs
4. Code 
5. Debug

Something else I'd like to focus on is more JavaScript trivia, given that I am appling also applying for frontend / web / JavaScript positions. Mason recommended the typical google search to find questions and keep a log of my findings which I will include. Additonally should check the job boards that mason recommended.

Mock with Mason
- Be clear on my approach and envelop my work.
 

Meeting with Adrian:
- Get referrals from people
- More clearbits
- Referral first, then apply. Clearbit to get the referral and then apply through the referral system
- Most of job search is networking and coding
- Talk to more people, more events


- 25 clearbits
- event by this Friday, required selfie
- 3 of which to be about combining passions, explicitly on 
- held accountable
- Reflect on WePay challenge

Given string of paranthesis and *, where * represents a wildcard, can be open or closed. determine if given string can be valid parenthesis. 



Clearbitting and networking Priority
finance@appacademy.io



================================
3/09/19
================================
Going to install windows ontop of ubuntu to dualboot. Wish me luck



================================
3/08/19
================================
My high level approach to a XOR Linked List, a more efficient doubly linked list that utilizes as both field instead of a previous and next by XOR-ing the previous and next. To build our XOR linked list, we build a class that takes can add a node and has reference to the root node and tail node. We have a root node and tail node pointer in order to append elements in our list in constant time and allow us to iterate in linear time. When adding a node into XOR LL, we create a node and set the both field to be the tail node XOR with some indicator, ex NULL as both refers to previous and next. Additoinally, we update the tail node's both field to be it's previous XOR with current new node. 

In order to iterate over the nodes, we start with a root and XOR the both field with NULL or an element we use to indicate the head/tail which returns us bitwise the next node. Dealing with pointers would give us that pointer. We then store the previous node's pointer and XOR with the next node's both field to repeat the process until we've managed the number of iterations we want. 




================================
3/07/19
================================
Noticed that my Math solution doesnt quite work and I should in fact build up a solution than rely on some underlying premise, despite how it might seem in my head.

Prior to my math-centric solution, My approach 

================================
3/06/19
================================
Worked out interviewing problems involving more math and logic. Determined I need more work with the math related problems and develop a way to build a flow towards the answer. Working through 343 Integer break was fun as I created an approach based on a mathematical note of squared numbers. Additional plans I have soon is to partition my ubuntu system to so that I can install windows and work on some more passion projects. Hope thigns go well and I need to remember to make backups prior to installation. 


================================
3/05/19
================================
Recruiter Panel Notes
- 10 secs to view, what to look for: tech stack & languages, related tech stack, certificates, background, typically online, 
- likes to look for C# and C++ due to knowing the fundamentals
- some also look for social good, volunteer work, (dependent)
- good description of your experience on the project and what it is
- segment - more customer facing and need more technical person looking for in depth knowledge
- Having passion, blurb. From trees, It might be more passion

pitfall
- tech stack sometimes too generic
- Presentable to hiring manager vs online presentation
- segment - lacking customer facing experience, like having long gaps and want to have more transferable skills. 
- Cant tell what you are, are you frontend, backend, product, etc?
    - if you are a specific engiener (identity), display it with summary, or objective or what you want to do. EX. say frontend, backend, full stack, etc
    - sometimes needs to determine years of experience
- do you really want to work here and stick around?


Coverletters
- not really looked at, typically just resume due to time, but there are some hr thta looks at coverletter
- some are required, coverletter should say what you bring to the company, market, market share, and evidence why you're passionate about the indiustry. If you can create a personal connection to the industry, that would be great and show
- paying atttention to the space is pretty important, like applying to bing despite the lower market share
- eye catching first liner, if not, prob wont look at. Segment is more dependent and want an answer to their unique questions
- Thank you letter 'is very important and here is what i heard', 'you will not regret hiring me'. Want to express that it is not a gamble
- personal part of the cover letter is very important. two sentences is bigger than a paragraph, depending on content


Postitives and pitfalls are sort of red flags 
What do you look for in tech interview
- can you learn, take ownership or large projects, 
- people should layout your approach and code isnt self explained
- Make sure to ask questions and clarify the question and make sure you sound excited
- try to sound excited about the interview
- dont bypass the recruiters
- speak about ME, I DID this and more on what you did
- be able to speak about ownership, facinated by challenges, showw enjoy facing obstacles and you have 30 mins to sell yourself. Be geunine, tell your story. KNOW WHO YOU ARE SPEAKING TO on call
- Be authentic with human element. Companies are investing on brand names and culture. Identify and brand yourself to fit with your group and who you are speaking to
project abotu ROI perspective so u can frame your language and project. Hard to explain what the value of your project will be to the organizaiton to someone not in your world
- speak about your we's and I's 
- Consulting, contract might be easier as less risk as they can cut you off easier. "Too early in the process to tell about culture and fit" but for contract work, better to have a number as it is more logistical. No culture and fit for contract work
- keep the confidence as you go through your call, ask about enxt steps but do stay positive, be prepared and do your research on your company. Go to glassdoor to be able to talk about it


What are the pitfalls to tech interview
- if someone seems stagnant, unwilling to learn, doing something the same. dont seize up, try to overcome. Don't force a method, but rather be flexible. Seizing up is more of a frustration and should be avoided. Be able to move past to a solution.
- layout the structure of the solution before jumping to the solution. Be clear while you whiteboard a solution. 
- try to avoid WE on projects or recruiter will pry for more info


onsite has 4 - 5 people 

Note- Trees is more of a learning problem while others are more traditional
- have key blurbs that recruiter can memorize as some are theere just to take notes
- recrutiers look everywhere. Recruiters do know some coding so know your brand, 
- Do your research about the project, better if I know ABC but can you dive deeper in A. Have enough ammunition to go into your content. Have your questions ready and be curious 
- know stage of company, funding, private, public, original founder, remaining foudners, understand the nuances and foudners story details the product and ask about the business model. Know as much as you can about the project. Have questions of how the product functions or such. 

Prove you can do what oyu can as recruiter needs to know the team built will be viable
be able to show your passion. Show what you are passonate with 

Biggest problem with False briefs? SOme are fans of open source or willing to get used to code

SEGMENT Panel
 - Customer Facing and Engineering is a big topic to looka t 
 - Success engineers - technical side of the customer facing, does not lie in engineering but rather revenue and buisness
 - have additional groups continuously with 8 peeps every 2 weeks now at 300 peeps

 Segment requires an api to gather data and their customers has to fill out forms. Segment takes the info and maintain

mroe for customer success engineer - can you relay your specific info to me
lots of work with success engineers move into engineering and looks at people passionate about engineering
Talks about here are the steps to taking them to where they want to go

for Segment, check out talent match, but it is viewing success engineering
Huge demand 
Happy number on leet code was a pcoding problem


Jeremy from Treez
Michelle from AutoDesk, connect and provide jobs of interest


TL;DR


    ----------------------- 

Go to meetups to investigagte interests to apply for


Project overviews:
Constructables
  - Built full stack application with Ruby on Rails framework, PostgreSQL, React, JavaScript, and Redux 
  

  Most difficult part: 
  - Understanding how the technologies fit together to create single page application 

Grouple:
  - used axios


Noticed to fix items: 
  - Magnify glass on constructables
  - Related project datas



Routine to follow:
Morning:
  - 3 leet code problems
  - Work on some project goal
    - if no goals, create some and work on it incrementally for a project
    - i.e. a feature, text box, object, etc. 
  - Study a project concept, either personal coding project or review the concepts of my project 



================================
3/04/19
================================
Some things I'd like to keep in mind is keeping up the journal even when not much is going on and to keep ensure I can maintain my schedule of work and personal life together. Would prefer to do code related projects within the mornings and move onto personal engagements at night. 


================================
2/27/19
================================
When CSS is too abundant, Reset the css on web tools and think big layout and go granular. 
Go through elements on html to be more efficient.

Continue css discussion next week tuesday after panel.
CTOS or CEOs, hiring managers, or recruiters.

730px is a magic sweetspot


================================
2/26/19
================================
Continued work on project view page. Made some better adjustments after playing around with the css. Really wish I took the care to organize my css and remove redundancies. However, the project was an early work and bounded to have some learning mistakes. Additionally ran into heroku push errors after reconfiguring machine to properly run rails. Unsure where bug stems from.

================================
2/25/19
================================
Project plans: work on Project view page
Reworked some basic views on project view
Need to consider learning coding organizatoin and invest in the time while working on projects to for longterm readability/viability.
================================
2/22/19
================================

Need to work on in-place array algorithms. ex: return first repeated number, return lowested ascending value not in array problems. Respective tricks were to iterate over array and keep track of the visited elements with a pointer to the latest repeated starting from the end and to modify the array in respect to the growing lsit of integers, given the list must start at 1 and array and 1 being the lowest value.

Project plans: Work through revising splash page.


================================
2/21/2019
================================
Things to work on:
  Refine Project

Things to remember:
To keep organized and make it easier to engage the interviewer, follow the process
1. Ask clarifying questions to understand the problem better and to catch for edge cases
2. Find an approach tht works and possible more approaches that might lead to optimal
3. Talk about the tradeoffs of the different approaches
4. Write out the code
5. Test the code 

