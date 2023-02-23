let downloadbtn= document.querySelectorAll(".resume-btn");
for(let i=0;i<downloadbtn.length;i++)
{
    downloadbtn[i].onclick= ()=>{
        open("https://drive.google.com/file/d/1m76iN3TilPN4damYcp9Y-y8HTtEXSoMO/view?usp=share_link");
    };
}
