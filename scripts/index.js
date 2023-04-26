let downloadbtn= document.querySelectorAll(".resume");
for(let i=0;i<downloadbtn.length;i++)
{
    downloadbtn[i].onclick= (event)=>{
        open("https://drive.google.com/file/d/1m76iN3TilPN4damYcp9Y-y8HTtEXSoMO/view?usp=share_link");
          
    
    };
}

let opentbtn= document.querySelector("#option");
let closebtn= document.querySelector("#close-btn");

closebtn.onclick= ()=>{
    document.querySelector("#side-menu").style.width="0%";
}

opentbtn.onclick= (e)=>{
    e.preventDefault();
    document.querySelector("#side-menu").style.width="50%";
    console.log("open working");
};




//stop the auto refresh feature of side navaber

let sideoptions= document.querySelectorAll(".side-menu-options");
for(let i=0;i<sideoptions.length;i++)
{
     sideoptions[i].onclick= (e)=>{
        e.preventDefault();
     }
}