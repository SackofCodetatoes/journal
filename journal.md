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

