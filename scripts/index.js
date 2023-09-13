let downloadbtn= document.querySelectorAll(".resume");
let githubLink= ["https://github.com/akt0001c/fumbling-hand-3558.git",
                 "https://github.com/akt0001c/reach-wren-1563.git",
                 "https://github.com/akt0001c/brash-profit-9147.git",
                 "https://github.com/akt0001c/subdued-money-2515.git"];

let deployORVideoLink=["https://aesthetic-capybara-e0c08f.netlify.app/",
                       "https://dynamic-dolphin-4e9832.netlify.app/",
                       "https://drive.google.com/file/d/1tWH0XZIBY5bSUa8G6E_m8N9hI-UczItT/view?usp=sharing",
                       "https://drive.google.com/file/d/1L09UbTLdAD9NPXcjDx1MDzVznJne-55u/view?usp=sharing"];


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

 

let locationarr=["#skills-section","#project-section","#contact-section","#main"];  

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


  