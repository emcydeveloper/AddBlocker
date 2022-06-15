var adClass = document.querySelectorAll('[class *= "-ad-"],[class *= "_ad_"],[class *= "_ads_"]');
var adId = document.querySelectorAll('[id *= "-ad-"],[id *= "_ad_"],[id *= "_ads_"]');

var allAd = [...adClass, ...adId];


function hideAd(){
for (let i = 0; i < allAd.length; i++) {
  let getClassName = document.getElementsByClassName(allAd[i].className);
  //   console.log(document.getElementById(all[i].id) === true);
  
  if (document.getElementById(allAd[i].id)) {
    let getIDName = document.getElementById(allAd[i].id);
    console.log(`Blocking Div with ad: ID Name: ${getIDName.id} Content: ${getIDName.innerHTML}`);
    getIDName.style.display = "none";
  }


  for (let j = 0; j < getClassName.length; j++) {
    console.log(`Blocking Div with ad: Class Name: ${getClassName[j].className} Content: ${getClassName[j].innerHTML}`);
    getClassName[j].style.display = "none";
  }
}

console.log(`Total ad blocked - ${allAd.length}`)}


function showAd(){

    for (let i = 0; i < allAd.length; i++) {
        let getClassName = document.getElementsByClassName(allAd[i].className);
        //   console.log(document.getElementById(all[i].id) === true);
        
        if (document.getElementById(allAd[i].id)) {
          let getIDName = document.getElementById(allAd[i].id);
          console.log(`Blocking Div with ad: ID Name: ${getIDName.id} Content: ${getIDName.innerHTML}`);
          getIDName.style.display = "block";
        }
      
      
        for (let j = 0; j < getClassName.length; j++) {
          console.log(`Blocking Div with ad: Class Name: ${getClassName[j].className} Content: ${getClassName[j].innerHTML}`);
          getClassName[j].style.display = "block";
        }
      }
      
      console.log(`Add displaying - ${allAd.length}`)}

