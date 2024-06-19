"use strict";(self.webpackChunkreact_tailwindcss_portfolio=self.webpackChunkreact_tailwindcss_portfolio||[]).push([[698],{6498:(e,t,a)=>{a.d(t,{Z:()=>d});var i=a(2791),o=a(6408),n=a(184);const s=e=>{let{title:t,category:a,image:i,description:s,skills:r,link:d,youtubeLink:l}=e;return console.log(l),(0,n.jsx)(o.E.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:(0,n.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[(0,n.jsx)("div",{className:"flex flex-col",children:l?(0,n.jsx)("iframe",{className:"rounded-t-xl w-full",title:t,height:"650",allowfullscreen:"true",frameborder:"0",src:"https://youtube.com/embed/".concat(l,"?loop=1&playlist=xGu3qIIDqaw&controls=0")}):(0,n.jsx)("a",{href:i,children:(0,n.jsx)("img",{src:i,className:"rounded-t-xl border-none",alt:"Single Project"})})}),(0,n.jsxs)("div",{className:"text-center px-4 py-6",children:[(0,n.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),d?(0,n.jsx)("a",{href:d,children:(0,n.jsx)("p",{className:"text-sm text-ternary-dark dark:text-ternary-light",children:"Source Code"})}):null]}),null===s||void 0===s?void 0:s.map((e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{className:"text-primary-dark dark:text-primary-light",children:e}),(0,n.jsx)("br",{})]}))),(0,n.jsx)("p",{className:"text-primary-dark dark:text-primary-light font-bold",children:"Tools:"}),(0,n.jsx)("p",{className:"text-primary-dark dark:text-primary-light",children:r})]})})};var r=a(595);const d=()=>{const{projects:e,searchProject:t,searchProjectsByTitle:a,selectProject:o,selectProjectsByCategory:d}=(0,i.useContext)(r.v);return(0,n.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[(0,n.jsx)("div",{className:"text-center",children:(0,n.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),(0,n.jsx)("div",{className:"mt-10 sm:mt-16",children:(0,n.jsx)("div",{className:" flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3 ",children:(0,n.jsx)("div",{className:"flex justify-between gap-2"})})}),(0,n.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:o?d.map((e=>(0,n.jsx)(s,{title:e.title,category:e.category,image:e.img},e.id))):t?a.map((e=>(0,n.jsx)(s,{title:e.title,category:e.category,image:e.img,projectId:e.id},e.id))):e.map((e=>(0,n.jsx)(s,{title:e.title,category:e.category,image:e.img,description:e.description,skills:e.skills,link:e.link,youtubeLink:e.youtubeLink},e.id)))})]})}},595:(e,t,a)=>{a.d(t,{v:()=>p,V:()=>m});var i=a(2791);const o=a.p+"static/media/cinequeue.736ea538d87ce65537a3.png",n=a.p+"static/media/gp-appointment.ab891a7676f56e15bb94.png",s=a.p+"static/media/hail.2feef6fce10c544a6c57.png",r=a.p+"static/media/postgram-max.61dc14b5db81acba7389.png",d=a.p+"static/media/rcmndr.aac3c1fda475092ecc8f.png",l=a.p+"static/media/todos.f0f9165c2edc422801b6.png",c=[{id:7,title:"Sales Ledger",category:"UI/UX Design",description:["A solo project that I had envisioned while I was at Dev Academy. This was a project that I wanted to work on after I had graduated so I continued to have a project to work on. I am currently still working on this project however now that it is in a state that I would consider past MVP (minimal viable product) I have decided to show the public.","I worked on this project during my free time and had found myself changing the design and functionality as time went on to further develop my skills and also as I went on I realised the app needed more functionality to be useful.","I like to keep track of my buying and selling and seeing how much profit I am currently on. This app helps me keep track of my inventory, the value of the inventory and where I had done the sales and dates. Specifically with TradeMe, it does not store data for very long so any user data like sold items or won items etc are not kept track of for more than a few months. It also does not have a way for me to check how much I have made in profit. Rather it only shows per sale. This along with using Facebook as my other primary source of trading I decided to make an app that encompasses what I had been doing with Excel spreadsheet which wasn\u2019t very tidy looking. I wanted to make sure I could have a nice UI and UX so that it would not be cumbersome to use.","I am looking into switching from React to React Native so that I can have the Sales Ledger on my mobile as I had already designed the Sales Ledger with mobile first in mind.\n    "],skills:"*React\n    *TypeScript\n    *JavaScript\n    *SQL Database(Knex)\n    *Express\n    *Superagent\n    *HTML\n    *Tailwind CSS\n    *Material Tailwind\n    *Toastify\n    ",img:a.p+"static/media/sales-ledger-small.f6edb29b5aed87d8fb9f.png",youtubeLink:"xGu3qIIDqaw"},{id:3,title:"CineQueue",category:"UI/UX Design",description:["This App was the final group project that was done during the DevAcademy bootcamp with 4 members in the team over 7 days.","This app gave users the ability to add movies and tv shows to their watchlist, completed list, and see the runtime. It gave users options to choose content based on if they wanted to see TV Shows or Movies, the different genres within them and categories like upcoming and top rated. The key feature we had for our app was that you could see the entire runtime of a tv show and be able to change your availability in minutes per day. If you say for example only had 60 minutes to watch a show that was 40 hours long, it will take you 40 days to complete the series. We utilised the data from an API that was free to use and filtered based on data points we needed. Auth0 was also implemented so that each user could add content to their own watchlist and completed list.","Recommendations were implemented based on the content clicked on and appeared at the bottom of the screen. There is also a search functionality within the app to search for your desired content.","The idea came from combining different ideas together, one for recommendations and another for displaying time to watch a series and the idea of viewing the content. I personally was really wanting to create this app because I have a huge interest in movies and TV shows and wanted to have somewhere I could search and find the runtime of a show. This was a huge motivation for me to do this project. There are plans to continue doing this project and implementing new features such as adding friends and seeing their watchlist/completed lists.","I was the product owner, team lead, git lead, designer, and planner for this project. I worked heavily on the front-end and backend for the SQL database creating the overall display of the website and functionality.\n    "],skills:"*React\n    *TypeScript\n    *REST API\n    *JavaScript\n    *SQL Database(Knex)\n    *Express\n    *Superagent\n    *HTML\n    *Tailwind CSS\n    *Auth0\n    ",img:o,link:"https://github.com/samir-lekinwala/CineQueue"},{id:5,title:"rcmndr",category:"Mobile Application",description:["This was a project done with the entire classroom and the facilitators acting as senior devs to mimic what it would be like in the work force as a developer during an almost week long period. Students either paired up or went solo to add features, fix bugs and create a functional app that lets you recommend songs to your friends. There was also the ability to report songs which then get sent to the moderator team who have their own admin logins to check the reports and deem them offensive or not.","Within this collaborative project I worked on adding loading based on data being fetched, PWA functionality, and worked on creating the moderation of reported songs.\n    ","All the tickets that I worked on was for areas that I had not worked in before, so it was a good learning opportunity. I especially enjoyed the satisfaction of being able to download the app to our mobile phones and being able to display it on there."],skills:"*React\n    *TypeScript\n    *Tailwind CSS\n    *SQL Database(Knex)\n    *Express\n    *Superagent\n    *HTML\n    *HTMX\n    ",img:d,link:"https://github.com/samir-lekinwala/rcmndr"},{id:1,title:"GP-Appointment",category:"Web Application",img:n,description:["This App is just as the title suggests, it was a means for patients to make appointments with their GP. This App was made collaboratively with 2 other fellow students in the span of 1 day. You could create a new appointment, adjusting the time and date, if the appointment was already taken for that time and with that GP then the APP would let you know that the timing was unavailable. You could also view your previous/current appointments by inserting your name into the Appointment History to get a view of all past appointments.","As a group we wanted to utilize the skills we had learnt so far at the bootcamp. This was at a point before we learned about SQL databases so as a substitute we used JSON data. It was a good learning opportunity. We wanted to make an app that could serve some real purpose in the real world. I believe we achieved this to some degree although it is a bit unpolished, the basic functionality is there. We wanted to have a separate admin page which requires some sort of passcode or login so the doctors practice could see who would becoming to be seen on any given day but we did not have enough time to create that function.","\n      In this project I worked heavily on the front-end with HandleBars, HTML and CSS, creating the overall design for the app whilst also chipping in the backend with the team to assist where I could. Within this project I got quite a bit of knowledge using Handlebars and CSS..\n    "],skills:"*Handlebars\n    *Javascript\n    * HTML\n    * CSS\n    * Express\n    ",link:"https://github.com/samir-lekinwala/GP-Appointment"},{id:2,title:"HAiL",category:"Mobile Application",description:["This App was a collaborative project made in the span of 1 day with 2 others to utilise a REST API to create an App that displayed the weather based on location chosen. In this App you could see the initial location which was set to Auckland but on the top right there is a dropdown menu that reveals Locations. The Locations page reveals many different popular cities from across the globe. \n    ","The weather data comes from an API which can display many different properties and it is up to the user how to interpret the data. In our case we had to determine that x amount level of clouds in the sky would mean that it is considered cloudy. We had to adjust the icons we chose to display under the temperature to adjust based on the conditions of this data.","The reason we chose to do this project was because we wanted to be able to utilize an API. It was one of our first times using them and as it turns out it worked out well. We wanted to be able to originally be able to give the temperature based on any location, this would use longitude and latitude data based on a person\u2019s current location or being able to search a country which would in the backend look at the longitude and latitude data which in turn would display the cities temperature. To do this it would be required to find a data set of cities and their coordinates. As far as I can tell this is doable and the resources are out there. Unfortunately doing so would have required a lot more time which we did not have.","\n    I worked heavily on the front-end design using React, TypeScript, HTML & CSS.\n    "],skills:"*React\n    *TypeScript\n    *HTML\n    *CSS\n    *REST API\n    ",img:s,link:"https://github.com/samir-lekinwala/HAiL"},{id:4,title:"Todo List",category:"UI/UX Design",description:["This is a solo project done as a challenge part of DevAcademy to make a functioning todo list app. Within this app you can add, edit, delete, and complete a todo, see how many todos are left in your list and clear todos that you have already marked as completed.","The aim of the app is to create a full-stack web application using the skills we had learnt over the course of the bootcamp and deploying apps to the web.","This was my first time using Dokku so it was a good learning opportunity for when it comes to deploying apps. It was a bit of a struggle due to some syntax issues but it felt good to have to have it successfully deploy.","The app functionality is basic as it is only a todo list but to achieve this many different technologies had to be utilised to create this full-stack app which was deployed for a short time on the web using dokku.\n    "],skills:"*React\n    *TypeScript\n    *JavaScript\n    *SQL Database(Knex)\n    *Express\n    *Superagent\n    *HTML\n    *Dokku\n    ",img:l,link:"https://github.com/samir-lekinwala/todos-full-stack"},{id:6,title:"Postgram-Max",category:"Web Application",description:["This was originally a 4 man team project but two of the team members ended up getting sick so the team was reduced to 2 after the planning stage. The aim of this project was to make a gallery app where you could upload a photo and attach a caption to the photo. It had taken some inspiration from Instagram however functionality wise our app due to the reduced number of team members and lack of API knowledge at the time we had to compromise to just using local data instead of being able to upload data using a back-end server and api. This was before we had managed to learn about connecting the front-end and back-end with api so our app ended up having to be a very basic gallery app. However this project was still a good learning opportunity as we had reduced members both me and the one other team member had to wear many hats during this project.","If we were to redo this project, I would focus more on the front end and making it look better, more responsive using Tailwind and having more functionality such as commenting but last but not least, being able to have a proper backend where users could upload directly to the server instead of having to use local images."],skills:"*React\n    *TypeScript\n    *CSS\n    *HTML\n    ",img:r,link:"https://github.com/samir-lekinwala/postgram-max"}];var h=a(184);const p=(0,i.createContext)(),m=e=>{const[t,a]=(0,i.useState)(c),[o,n]=(0,i.useState)(""),[s,r]=(0,i.useState)(""),d=t.filter((e=>e.title.toLowerCase().includes(o.toLowerCase())||""===o?e:"")),l=t.filter((e=>(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(s)));return(0,h.jsx)("div",{id:"projects",children:(0,h.jsx)(p.Provider,{value:{projects:t,setProjects:a,searchProject:o,setSearchProject:n,searchProjectsByTitle:d,selectProject:s,setSelectProject:r,selectProjectsByCategory:l},children:e.children})})}},8743:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var i=a(5558),o=a(3313);a(2791);const n=a.p+"static/media/developer.ef097afbc427c634086d2f1c2ad6032e.svg";const s=a.p+"static/media/developer-dark.3f07bd13e2bd324f87466260088da040.svg";var r=a(6408),d=a(184);const l=()=>{const[e]=(0,i.Z)();return(0,d.jsxs)(r.E.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2",children:[(0,d.jsxs)("div",{className:"w-full md:w-1/3 text-left",children:[(0,d.jsx)(r.E.h1,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.1},className:"font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase",children:"Samir Lekinwala"}),(0,d.jsx)(r.E.p,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200",children:"A Full-Stack Web Developer & Tech Enthusiast"}),(0,d.jsx)(r.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.3},className:"flex justify-center sm:block",children:(0,d.jsxs)("a",{download:"Samir_Lekinwala_CV.pdf",href:"files/Samir_Lekinwala_CV.pdf",className:"font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500","aria-label":"Download Resume",children:[(0,d.jsx)(o.UJB,{className:"mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"}),(0,d.jsx)("span",{className:"text-sm sm:text-lg font-general-medium duration-300",children:"Download CV"})]})})]}),(0,d.jsx)(r.E.div,{initial:{opacity:0,y:-180},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0",children:(0,d.jsx)("img",{src:"dark"===e?n:s,alt:"Developer"})})]})};var c=a(6498),h=a(595),p=(a(992),a(1458));const m=()=>(0,d.jsxs)("div",{className:"container mx-auto",children:[(0,d.jsx)(l,{}),(0,d.jsx)(p.default,{}),(0,d.jsx)(h.V,{children:(0,d.jsx)(c.Z,{})})]})}}]);
//# sourceMappingURL=698.8e61d360.chunk.js.map