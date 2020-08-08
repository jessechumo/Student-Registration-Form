
function populate (s1,s2)
{
  let s1=document.getElementById('slct1');
  let  s2=document.getElementById('slct2');
 
  
   s2.innerHTML = "";
   if(s1.value == "Medicine and Health Sciences")
   { 
     let optionArray=["select|Select","nursing|Nursing","clinical medicine|Clinical Medicine","family medicine|Family Medicine","public health|Public Health"];
   }
   else if(s1.value == "Law")
   {
    let optionArray=["select|Select","law|Law"];
   }
   else if(s1.value == "Business and Economics")
   {
    let optionArray=["select|Select","commerce|Commerce","economics|Economics","hospitality & tourism|Hospitality & Tourism"];
   }
   else if(s1.value == "Music and Performing Arts")
   {
    let optionArray=["select|Select","music theory|Music Theory","production|Production"];
   }
   else if(s1.value == "Science,Engineering and Technology")
   {
    let optionArray=["select|Select","computer science & information technology|Computer Science & Information Technology","biological & physical sciences|Biological & Physical Sciences","mathematics & actuarial science|Mathematics & Actuarial Science"];
   }
   else if(s1.value == "Education")
   {
    let optionArray=["select|Select","education|Education","mass communiacation|Mass Communication","theology|Theology",];
   }
   else if(s1.value=="Pharmacy")
   {
    let optionArray=["select|Select","pharmacy|Pharmacy",];
   }
   

   for(let option in optionArray)
   {
     let pair = optionArray[option].split("|");
     let newOption = document.createElement("option");
     newOption.value = pair[0];
     newOption.innerHTML = pair[1];
   s2.options.add(newOption);

   }
   
}



function populated(c1,c2)
{
  var c1=document.getElementById(c1);
  var c2=document.getElementById(c2);
 
    c2.innerHTML = "";
   if (c1.value == "nursing")
   { 
     let optionArray = ["select|Select","bsc nursing|Bsc Nursing","diploma in nursing|Diploma in Nursing"];
   }
   else if (c1.value == "clinical medicine")
   { 
     let optionArray = ["select|Select","bsc clinical medicine|Bsc Clinical Medicine","diploma in clinical medicine|Diploma in Clinical Medicine "];
   }
    else if (c1.value == "family medicine")
   { 
     let optionArray = ["select|Select","bsc family medicine|Bsc Family Medicine","diploma in family medicine|Diploma in Family Medicine"];
   }
   else if (c1.value == "clinical medicine")
   { 
     let optionArray = ["select|Select","bsc public health|Bsc Public Health","diploma in public health|Diploma in Public Health"];
   }
    else if (c1.value == "law")
     { 
      let optionArray = ["select|Select","bsc law|Bsc Clinical Law","diploma in law|Diploma in Law"];
     }
     else if (c1.value == "economics")
   { 
     let optionArray = ["select|Select","bsc economics|Bsc Economics","diploma in economics|Diploma in Economics"];
   }
   else if (c1.value == "production")
   { 
     let optionArray = ["select|Select","bsc production|Bsc Production","diploma in production|Diploma in Production"];
   }
   else if (c1.value == "computer science & information technnology")
   { 
    let optionArray = ["select|Select","bsc comp science|Bsc Comp Science","diploma in comp science|Diploma in Comp Science"];
   }
   else if (c1.value == "education")
   { 
     let optionArray = ["select|Select","bsc education|Bsc Education","diploma in education|Diploma in education"];
   }
   else if (c1.value == "theology")
   { 
     let optionArray = ["select|Select","ba theology |BA Theology","diploma in theology|Diploma in Theology"];
   }
   else if (c1.value == "pharmacy")
   { 
     let optionArray = ["select|Select","bsc pharmacy|Bsc Pharmacy","diploma in pharmacy|Diploma in Pharmacy"];
   }



   for(let option in optionArray)
   {
     let pair = optionArray[option].split("|");
    let newOption = document.createElement("option");
     newOption.value = pair[0];
     newOption.innerHTML = pair[1];
   c2.options.add(newOption);

   }

}

