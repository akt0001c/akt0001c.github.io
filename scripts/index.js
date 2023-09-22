let downloadbtn= document.querySelectorAll(".resume");
let githubLink= ["https://github.com/akt0001c/fumbling-hand-3558.git",
                 "https://github.com/akt0001c/brash-profit-9147.git",
                 "https://github.com/akt0001c/subdued-money-2515.git",
                 "https://github.com/akt0001c/Safar.git",
                 "https://github.com/akt0001c/LearnHub.git"
                  ];

let deployORVideoLink=["https://aesthetic-capybara-e0c08f.netlify.app/",
                       "https://drive.google.com/file/d/1tWH0XZIBY5bSUa8G6E_m8N9hI-UczItT/view?usp=sharing",
                       "https://drive.google.com/file/d/1L09UbTLdAD9NPXcjDx1MDzVznJne-55u/view?usp=sharing",
                       "https://drive.google.com/drive/folders/18tLLJYfZK_vBnbmLgdkxO2iGyy5c6b8C?usp=sharing",
                       "https://drive.google.com/drive/folders/1_5PGz7ebAgvmRuUlI-5ziqj9fhfCAgLB?usp=sharing"];


let contactIcon= [  "https://github.com/akt0001c",
                    "https://www.linkedin.com/in/ankit-choubey-09b071239/",
                    "https://leetcode.com/akt0001c/"    
];    





for(let i=0;i<downloadbtn.length;i++)
{
    downloadbtn[i].onclick= (event)=>{
       
        open("https://drive.google.com/file/d/19jpr8frNJys5BmI39ZSLwAGkSn8c_NEh/view?usp=sharing");
          
    
    };
}



let opentbtn= document.querySelector("#option");
let closebtn= document.querySelector("#close-btn");
let githubBtn= document.querySelectorAll(".project-github-link");
let deployBtn= document.querySelectorAll(".project-deployed-link");


closebtn.onclick= ()=>{
    document.querySelector("#side-menu").style.width="0%";
}

opentbtn.onclick= (e)=>{
    e.preventDefault();
    document.querySelector("#side-menu").style.width="50%";
    console.log("open working");
};

for(let a=0;a<githubBtn.length;a++)
 {
    githubBtn[a].onclick= ()=>{
        open(githubLink[a]);
    };
 }

 for(let b=0; b<deployBtn.length;b++)
  {
    deployBtn[b].onclick= ()=>{
        open(deployORVideoLink[b]);
    }
  }

 

let locationarr=["#skill-div","#project-section","#contact-section","#main"];  

//stop the auto refresh feature of side navaber

let sideoptions= document.querySelectorAll(".side-menu-options");
for(let i=0;i<sideoptions.length;i++)
{
     sideoptions[i].onclick= (e)=>{
        e.preventDefault();
        document.querySelector("#side-menu").style.width="0%";
        window.location.hash=locationarr[i];
     }
}


let contacticonBtn= document.querySelectorAll(".contact-icon");
for(let a=0;a<contacticonBtn.length;a++)
  {
    contacticonBtn[a].onclick= (e)=>{
        e.preventDefault();
        open(contactIcon[a]);
    };
  }


    // Replace 'YOUR_GITHUB_USERNAME' and 'YOUR_GITHUB_TOKEN' with your GitHub username and token.
const username = 'akt0001c';
const token = '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';





//   //function to genrate github calander
//   function generateCalendar(contributionData) {
//     const calendarTable = document.querySelector('.calendar table');
//     const daysInWeek = 7;
//     const weeksInCalendar = 52; 

//     for (let week = 0; week < weeksInCalendar; week++) {
//         const row = document.createElement('tr');

//         for (let day = 0; day < daysInWeek; day++) {
//             const cell = document.createElement('td');
//             const contributionCount = contributionData[week * daysInWeek + day] || 0;

//             cell.textContent = contributionCount;
//             cell.classList.add('day', `contributions-${contributionCount}`);

//             row.appendChild(cell);
//         }

//         calendarTable.appendChild(row);
//     }
// }

// function processGitHubData(data) {
//     // Initialize an object to store contribution counts per day
//     const contributionCounts = {};

//     // Iterate through the GitHub events
//     data.forEach((event) => {
//         const eventType = event.type;
//         const eventDate = new Date(event.created_at).toLocaleDateString();

//         // Check if the event is a "PushEvent" and matches your criteria (e.g., your repository)
//         if (eventType === 'PushEvent') {
//             // Increment the contribution count for the event's date
//             if (contributionCounts[eventDate]) {
//                 contributionCounts[eventDate]++;
//             } else {
//                 contributionCounts[eventDate] = 1;
//             }
//         }
//     });

//     // Convert the contribution count object into an array
//     const contributionData = Object.values(contributionCounts);

//     return contributionData;
// }


// // Function to fetch and display the contribution calendar
// function fetchAndDisplayContributionCalendar() {
//     // Make an authenticated API request using the token
//     fetch(`https://api.github.com/users/${username}/events`, {
//         headers: {
//             Authorization: `token ${token}`,
//         },
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             // Process the data and generate the calendar
//             const contributionData = processGitHubData(data);
//             console.log(contributionData);
//             generateCalendar(contributionData);
//         })
//         .catch((error) => {
//             console.error('Error fetching GitHub data:', error);
//         });
// }







 



  