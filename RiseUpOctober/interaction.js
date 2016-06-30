
var text;
var lines = [];

var fridayFollowersObjs = [];
var saturdayFollowersObjs = [];
var sundayFollowersObjs = [];

var fridayRiseUpOctoberFollowersObjs = [];
var saturdayRiseUpOctoberFollowersObjs = [];
var sundayRiseUpOctoberFollowersObjs = [];

var fridayBlackLivesMatterFollowersObjs = [];
var saturdayBlackLivesMatterFollowersObjs = [];
var sundayBlackLivesMatterFollowersObjs = [];

var fridayBLMFollowersObjs = [];
var saturdayBLMFollowersObjs = [];
var sundayBLMFollowersObjs = [];

var fridaySTNFollowersObjs = [];
var saturdaySTNFollowersObjs = [];
var sundaySTNFollowersObjs = [];

var fridaySPBFollowersObjs = [];
var saturdaySPBFollowersObjs = [];
var sundaySPBFollowersObjs = [];

var currentDayViewed = 0;
var currentHashtag = 0;

function clickFriday(){
   currentDayViewed = "Friday";
   document.getElementById("dateButton").innerHTML = "Friday Oct. 23";
   document.getElementById("description1").innerHTML = "";
   document.getElementById("description2").innerHTML = "";
   
  switch (currentHashtag) {
    case 0:
      document.getElementById("dayShown").innerHTML = "Friday Oct. 23";
      filename = "friday.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case 1:
      document.getElementById("dayShown").innerHTML = "Friday Oct. 23 - #RiseUpOctober";
      filename = "fridayRiseUpOctober.tsv";
      if (svgRan == "false")
        runTSV();
      else
        updateTSV();
      break;
    case 2:
      document.getElementById("dayShown").innerHTML = "Friday Oct. 23 - #BlackLivesMatter";
      filename = "fridayBlackLivesMatter.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case 3:
      document.getElementById("dayShown").innerHTML = "Friday Oct. 23 - #BLM";
      filename = "fridayBLM.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case 4:
      document.getElementById("dayShown").innerHTML = "Friday Oct. 23 - #SayTheirNames";
      filename = "fridaySayTheirNames.tsv";
     if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case 5:
      document.getElementById("dayShown").innerHTML = "Friday Oct. 23 - #StopPoliceBrutality";
      filename = "fridayStopPoliceBrutality.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    default:
      document.getElementById("dayShown").innerHTML = "Friday Oct. 23";
      filename = "friday.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
  }
}
function clickSaturday(){
     currentDayViewed = "Saturday";
     document.getElementById("dateButton").innerHTML = "Saturday Oct. 24";
	 document.getElementById("description1").innerHTML = "";
     document.getElementById("description2").innerHTML = "";
  switch (currentHashtag) {
    case 0:
      document.getElementById("dayShown").innerHTML = "Saturday Oct. 24";
      filename = "saturday.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case 1:
      document.getElementById("dayShown").innerHTML = "Saturday Oct. 24 - #RiseUpOctober";
      filename = "saturdayRiseUpOctober.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case 2:
      document.getElementById("dayShown").innerHTML = "Saturday Oct. 24 - #BlackLivesMatter";
      filename = "saturdayBlackLivesMatter.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case 3:
      document.getElementById("dayShown").innerHTML = "Saturday Oct. 24 - #BLM";
      filename = "saturdayBLM.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case 4:
      document.getElementById("dayShown").innerHTML = "Saturday Oct. 24 - #SayTheirNames";
      filename = "saturdaySayTheirNames.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case 5:
      document.getElementById("dayShown").innerHTML = "Saturday Oct. 24 - #StopPoliceBrutality";
      filename = "saturdayStopPoliceBrutality.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    default:
      document.getElementById("dayShown").innerHTML = "Saturday Oct. 24";
      filename = "saturday.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
  }
}
function clickSunday(){
     document.getElementById("dateButton").innerHTML = "Sunday Oct. 25";
     currentDayViewed = "Sunday";
	 document.getElementById("description1").innerHTML = "";
     document.getElementById("description2").innerHTML = "";
  switch (currentHashtag) {
    case 0:
      document.getElementById("dayShown").innerHTML = "Sunday Oct. 25";
      filename = "sunday.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case 1:
      document.getElementById("dayShown").innerHTML = "Sunday Oct. 25 - #RiseUpOctober";
      filename = "sundayRiseUpOctober.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case 2:
      document.getElementById("dayShown").innerHTML = "Sunday Oct. 25 - #BlackLivesMatter";
      filename = "sundayBlackLivesMatter.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case 3:
      document.getElementById("dayShown").innerHTML = "Sunday Oct. 25 - #BLM";
      filename = "sundayBLM.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case 4:
      document.getElementById("dayShown").innerHTML = "Sunday Oct. 25 - #SayTheirNames";
      filename = "sundaySayTheirNames.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case 5:
      document.getElementById("dayShown").innerHTML = "Friday Oct. 25 - #StopPoliceBrutality";
      filename = "sundayStopPoliceBrutality.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    default:
      document.getElementById("dayShown").innerHTML = "Friday Oct. 25";
      filename = "sunday.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
  }
}

function clickNoHashtag() {
  document.getElementById("hashtagButton").innerHTML = "No Hashtag";
  currentHashtag = 1;
  switch (currentDayViewed) {
    case "Friday":
      document.getElementById("dayShown").innerHTML = "Friday Oct. 23";
      filename = "friday.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case "Saturday":
      document.getElementById("dayShown").innerHTML = "Saturday Oct. 24";
      filename = "saturday.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case "Sunday":
      document.getElementById("dayShown").innerHTML = "Sunday Oct. 25";
      filename = "sunday.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    default:
      break;
  }
}

function clickRiseUpOctober() {
    document.getElementById("hashtagButton").innerHTML = "#RiseUpOctober";
    currentHashtag = 1;
  switch (currentDayViewed) {
    case 0:

      break;
    case "Friday":
      document.getElementById("dayShown").innerHTML = "Friday Oct. 23 - #RiseUpOctober";
      filename = "fridayRiseUpOctober.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case "Saturday":
      document.getElementById("dayShown").innerHTML = "Saturday Oct. 24 - #RiseUpOctober";
      filename = "saturdayRiseUpOctober.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case "Sunday":
      document.getElementById("dayShown").innerHTML = "Sunday Oct. 25 - #RiseUpOctober";
      filename = "sundayRiseUpOctober.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    default:

      break;
  }

}

function clickBlackLivesMatter() {
    document.getElementById("hashtagButton").innerHTML = "#BlackLivesMatter";
    currentHashtag = 2;
  switch (currentDayViewed) {
    case 0:

      break;
    case "Friday":
      document.getElementById("dayShown").innerHTML = "Friday Oct. 23 - #BlackLivesMatter";
      filename = "fridayBlackLivesMatter.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case "Saturday":
      document.getElementById("dayShown").innerHTML = "Saturday Oct. 24 - #BlackLivesMatter";
      filename = "saturdayBlackLivesMatter.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case "Sunday":
      document.getElementById("dayShown").innerHTML = "Sunday Oct. 25 - #BlackLivesMatter";
      filename = "sundayBlackLivesMatter.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    default:
      
      break;
  }

}

function clickBLM() {
    currentHashtag = 3;
        document.getElementById("hashtagButton").innerHTML = "#BLM";
  switch (currentDayViewed) {
    case 0:

      break;
    case "Friday":
      document.getElementById("dayShown").innerHTML = "Friday Oct. 23 - #BLM";
      filename = "fridayBLM.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case "Saturday":
      document.getElementById("dayShown").innerHTML = "Saturday Oct. 24 - #BLM";
      filename = "saturdayBLM.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case "Sunday":
      document.getElementById("dayShown").innerHTML = "Sunday Oct. 25 - #BLM";
      filename = "sundayBLM.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    default:
      
      break;
  }
}

function clickSayTheirNames() {
      document.getElementById("hashtagButton").innerHTML = "#SayTheirNames";
    currentHashtag = 4;
  switch (currentDayViewed) {
    case 0:

      break;
    case "Friday":
      document.getElementById("dayShown").innerHTML = "Friday Oct. 23 - #SayTheirNames";
      filename = "fridaySayTheirNames.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case "Saturday":
      document.getElementById("dayShown").innerHTML = "Saturday Oct. 24 - #SayTheirNames";
      filename = "saturdaySayTheirNames.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case "Sunday":
      document.getElementById("dayShown").innerHTML = "Sunday Oct. 25 - #SayTheirNames";
      filename = "sundaySayTheirNames.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    default:
      
      break;
  }
}

function clickStopPoliceBrutality() {
      document.getElementById("hashtagButton").innerHTML = "#StopPoliceBrutality";
    currentHashtag = 5;
  switch (currentDayViewed) {
    case 0:

      break;
    case "Friday":
      document.getElementById("dayShown").innerHTML = "Friday Oct. 23 - #StopPoliceBrutality";
      filename = "fridayStopPoliceBrutality.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case "Saturday":
      document.getElementById("dayShown").innerHTML = "Saturday Oct. 24 - #StopPoliceBrutality";
      filename = "saturdayStopPoliceBrutality.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case "Sunday":
      document.getElementById("dayShown").innerHTML = "Sunday Oct. 25 - #StopPoliceBrutality";
      filename = "sundayStopPoliceBrutality.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    default:
      
      break;
  }
}


function readTextFile(filename)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", filename, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                text = rawFile.responseText;
                lines = text.split("\n");
            }
        }
    }
    rawFile.send(null);
}

function processJSONs(filename, jsonArray)
{
    readTextFile(filename);
    for (var i = 0; i < lines.length - 1; i++){
        obj = JSON.parse(lines[i]);
        jsonArray.push(obj);
    }
}

function clickBar(id){
    for (var i = 1; i < 25; i++)
    {
        if (currentDayViewed == "Friday")
        {
          if (id == "bar" + String(i))
          {
            document.getElementById("a1-2").innerHTML = fridayFollowersObjs[i-1].text;
            document.getElementById("a2-2").innerHTML = "\@" + fridayFollowersObjs[i-1].user.screen_name;
            document.getElementById("a3-2").innerHTML = fridayFollowersObjs[i-1].user.followers_count;

            document.getElementById("a1-2").href = "https://twitter.com/" + fridayFollowersObjs[i-1].user.screen_name + "/status/" + fridayFollowersObjs[i-1].id_str;
            document.getElementById("a2-2").href = "https://twitter.com/" + fridayFollowersObjs[i-1].user.screen_name;
            document.getElementById("a3-2").href = "https://twitter.com/" + fridayFollowersObjs[i-1].user.screen_name + "/followers";
          }
          if (currentHashtag == 1)
          {
              if (id == "bar" + String(i))
              {
                document.getElementById("a1-2").innerHTML = fridayRiseUpOctoberFollowersObjs[i-1].text;
                document.getElementById("a2-2").innerHTML = "\@" + fridayRiseUpOctoberFollowersObjs[i-1].user.screen_name;
                document.getElementById("a3-2").innerHTML = fridayRiseUpOctoberFollowersObjs[i-1].user.followers_count;

                document.getElementById("a1-2").href = "https://twitter.com/" + fridayRiseUpOctoberFollowersObjs[i-1].user.screen_name + "/status/" + fridayRiseUpOctoberFollowersObjs[i-1].id_str;
                document.getElementById("a2-2").href = "https://twitter.com/" + fridayRiseUpOctoberFollowersObjs[i-1].user.screen_name;
                document.getElementById("a3-2").href = "https://twitter.com/" + fridayRiseUpOctoberFollowersObjs[i-1].user.screen_name + "/followers";
              }
          }
          if (currentHashtag == 2)
          {
              if (id == "bar" + String(i))
              {
                document.getElementById("a1-2").innerHTML = fridayBlackLivesMatterFollowersObjs[i-1].text;
                document.getElementById("a2-2").innerHTML = "\@" + fridayBlackLivesMatterFollowersObjs[i-1].user.screen_name;
                document.getElementById("a3-2").innerHTML = fridayBlackLivesMatterFollowersObjs[i-1].user.followers_count;

                document.getElementById("a1-2").href = "https://twitter.com/" + fridayBlackLivesMatterFollowersObjs[i-1].user.screen_name + "/status/" + fridayBlackLivesMatterFollowersObjs[i-1].id_str;
                document.getElementById("a2-2").href = "https://twitter.com/" + fridayBlackLivesMatterFollowersObjs[i-1].user.screen_name;
                document.getElementById("a3-2").href = "https://twitter.com/" + fridayBlackLivesMatterFollowersObjs[i-1].user.screen_name + "/followers";
              }
          }  

          if (currentHashtag == 3)
          {
              if (id == "bar" + String(i))
              {
                document.getElementById("a1-2").innerHTML = fridayBLMFollowersObjs[i-1].text;
                document.getElementById("a2-2").innerHTML = "\@" + fridayBLMFollowersObjs[i-1].user.screen_name;
                document.getElementById("a3-2").innerHTML = fridayRiseUpOctoberFollowersObjs[i-1].user.followers_count;

                document.getElementById("a1-2").href = "https://twitter.com/" + fridayBLMFollowersObjs[i-1].user.screen_name + "/status/" + fridayBLMFollowersObjs[i-1].id_str;
                document.getElementById("a2-2").href = "https://twitter.com/" + fridayBLMFollowersObjs[i-1].user.screen_name;
                document.getElementById("a3-2").href = "https://twitter.com/" + fridayBLMFollowersObjs[i-1].user.screen_name + "/followers";
              }
          }

          if (currentHashtag == 4)
          {
              if (id == "bar" + String(i))
              {
                document.getElementById("a1-2").innerHTML = fridaySTNFollowersObjs[i-1].text;
                document.getElementById("a2-2").innerHTML = "\@" + fridaySTNFollowersObjs[i-1].user.screen_name;
                document.getElementById("a3-2").innerHTML = fridaySTNFollowersObjs[i-1].user.followers_count;

                document.getElementById("a1-2").href = "https://twitter.com/" + fridaySTNFollowersObjs[i-1].user.screen_name + "/status/" + fridaySTNFollowersObjs[i-1].id_str;
                document.getElementById("a2-2").href = "https://twitter.com/" + fridaySTNFollowersObjs[i-1].user.screen_name;
                document.getElementById("a3-2").href = "https://twitter.com/" + fridaySTNFollowersObjs[i-1].user.screen_name + "/followers";
              }
          } 

          if (currentHashtag == 5)
          {
              if (id == "bar" + String(i))
              {
                document.getElementById("a1-2").innerHTML = fridaySPBFollowersObjs[i-1].text;
                document.getElementById("a2-2").innerHTML = "\@" + fridaySPBFollowersObjs[i-1].user.screen_name;
                document.getElementById("a3-2").innerHTML = fridaySPBFollowersObjs[i-1].user.followers_count;

                document.getElementById("a1-2").href = "https://twitter.com/" + fridaySPBFollowersObjs[i-1].user.screen_name + "/status/" + fridaySPBFollowersObjs[i-1].id_str;
                document.getElementById("a2-2").href = "https://twitter.com/" + fridaySPBFollowersObjs[i-1].user.screen_name;
                document.getElementById("a3-2").href = "https://twitter.com/" + fridaySPBFollowersObjs[i-1].user.screen_name + "/followers";
              }
          } 

        }

        if (currentDayViewed == "Saturday")
        {
            if (id == "bar" + String(i))
            {
              document.getElementById("a1-2").innerHTML = saturdayFollowersObjs[i-1].text;
              document.getElementById("a2-2").innerHTML = "\@" + saturdayFollowersObjs[i-1].user.screen_name;
              document.getElementById("a3-2").innerHTML = saturdayFollowersObjs[i-1].user.followers_count;

              document.getElementById("a1-2").href = "https://twitter.com/" + saturdayFollowersObjs[i-1].user.screen_name + "/status/" + saturdayFollowersObjs[i-1].id_str;
              document.getElementById("a2-2").href = "https://twitter.com/" + saturdayFollowersObjs[i-1].user.screen_name;
              document.getElementById("a3-2").href = "https://twitter.com/" + saturdayFollowersObjs[i-1].user.screen_name + "/followers";

            }
            if (currentHashtag == 1)
             {
              if (id == "bar" + String(i))
              {
                document.getElementById("a1-2").innerHTML = saturdayRiseUpOctoberFollowersObjs[i-1].text;
                document.getElementById("a2-2").innerHTML = "\@" + saturdayRiseUpOctoberFollowersObjs[i-1].user.screen_name;
                document.getElementById("a3-2").innerHTML = saturdayRiseUpOctoberFollowersObjs[i-1].user.followers_count;

                document.getElementById("a1-2").href = "https://twitter.com/" + saturdayRiseUpOctoberFollowersObjs[i-1].user.screen_name + "/status/" + saturdayRiseUpOctoberFollowersObjs[i-1].id_str;
                document.getElementById("a2-2").href = "https://twitter.com/" + saturdayRiseUpOctoberFollowersObjs[i-1].user.screen_name;
                document.getElementById("a3-2").href = "https://twitter.com/" + saturdayRiseUpOctoberFollowersObjs[i-1].user.screen_name + "/followers";

              }
             }
            if (currentHashtag == 2)
            {
              if (id == "bar" + String(i))
              {

                document.getElementById("a1-2").innerHTML = saturdayBlackLivesMatterFollowersObjs[i-1].text;
                document.getElementById("a2-2").innerHTML = "\@" + saturdayBlackLivesMatterFollowersObjs[i-1].user.screen_name;
                document.getElementById("a3-2").innerHTML = saturdayBlackLivesMatterFollowersObjs[i-1].user.followers_count;

                document.getElementById("a1-2").href = "https://twitter.com/" + saturdayBlackLivesMatterFollowersObjs[i-1].user.screen_name + "/status/" + saturdayBlackLivesMatterFollowersObjs[i-1].id_str;
                document.getElementById("a2-2").href = "https://twitter.com/" + saturdayBlackLivesMatterFollowersObjs[i-1].user.screen_name;
                document.getElementById("a3-2").href = "https://twitter.com/" + saturdayBlackLivesMatterFollowersObjs[i-1].user.screen_name + "/followers";
              }
            }  

            if (currentHashtag == 3)
            {
                if (id == "bar" + String(i))
                {
                  document.getElementById("a1-2").innerHTML = saturdayBLMFollowersObjs[i-1].text;
                  document.getElementById("a2-2").innerHTML = "\@" + saturdayBLMFollowersObjs[i-1].user.screen_name;
                  document.getElementById("a3-2").innerHTML = saturdayBLMFollowersObjs[i-1].user.followers_count;

                  document.getElementById("a1-2").href = "https://twitter.com/" + saturdayBLMFollowersObjs[i-1].user.screen_name + "/status/" + saturdayBLMFollowersObjs[i-1].id_str;
                  document.getElementById("a2-2").href = "https://twitter.com/" + saturdayBLMFollowersObjs[i-1].user.screen_name;
                  document.getElementById("a3-2").href = "https://twitter.com/" + saturdayBLMFollowersObjs[i-1].user.screen_name + "/followers";
                }
            }

          if (currentHashtag == 4)
          {
              if (id == "bar" + String(i))
              {
                document.getElementById("a1-2").innerHTML = saturdaySTNFollowersObjs[i-1].text;
                document.getElementById("a2-2").innerHTML = "\@" + saturdaySTNFollowersObjs[i-1].user.screen_name;
                document.getElementById("a3-2").innerHTML = saturdaySTNFollowersObjs[i-1].user.followers_count;

                document.getElementById("a1-2").href = "https://twitter.com/" + saturdaySTNFollowersObjs[i-1].user.screen_name + "/status/" + saturdaySTNFollowersObjs[i-1].id_str;
                document.getElementById("a2-2").href = "https://twitter.com/" + saturdaySTNFollowersObjs[i-1].user.screen_name;
                document.getElementById("a3-2").href = "https://twitter.com/" + saturdaySTNFollowersObjs[i-1].user.screen_name + "/followers";
              }
          } 

          if (currentHashtag == 5)
          {
              if (id == "bar" + String(i))
              {
                document.getElementById("a1-2").innerHTML = saturdaySPBFollowersObjs[i-1].text;
                document.getElementById("a2-2").innerHTML = "\@" + saturdaySPBFollowersObjs[i-1].user.screen_name;
                document.getElementById("a3-2").innerHTML = saturdaySPBFollowersObjs[i-1].user.followers_count;

                document.getElementById("a1-2").href = "https://twitter.com/" + saturdaySPBFollowersObjs[i-1].user.screen_name + "/status/" + saturdaySPBFollowersObjs[i-1].id_str;
                document.getElementById("a2-2").href = "https://twitter.com/" + saturdaySPBFollowersObjs[i-1].user.screen_name;
                document.getElementById("a3-2").href = "https://twitter.com/" + saturdaySPBFollowersObjs[i-1].user.screen_name + "/followers";
              }
          } 
        }

        if (currentDayViewed == "Sunday")
        {
            if (id == "bar" + String(i))
            {
                document.getElementById("a1-2").innerHTML = sundayFollowersObjs[i-1].text;
                document.getElementById("a2-2").innerHTML = "\@" + sundayFollowersObjs[i-1].user.screen_name;
                document.getElementById("a3-2").innerHTML = sundayFollowersObjs[i-1].user.followers_count;

                document.getElementById("a1-2").href = "https://twitter.com/" + sundayFollowersObjs[i-1].user.screen_name + "/status/" + sundayFollowersObjs[i-1].id_str;
                document.getElementById("a2-2").href = "https://twitter.com/" + sundayFollowersObjs[i-1].user.screen_name;
                document.getElementById("a3-2").href = "https://twitter.com/" + sundayFollowersObjs[i-1].user.screen_name + "/followers";
            }

            if (currentHashtag == 1)
             {
              if (id == "bar" + String(i))
              {
                document.getElementById("a1-2").innerHTML = sundayRiseUpOctoberFollowersObjs[i-1].text;
                document.getElementById("a2-2").innerHTML = "\@" + sundayRiseUpOctoberFollowersObjs[i-1].user.screen_name;
                document.getElementById("a3-2").innerHTML = sundayRiseUpOctoberFollowersObjs[i-1].user.followers_count;

                document.getElementById("a1-2").href = "https://twitter.com/" + sundayRiseUpOctoberFollowersObjs[i-1].user.screen_name + "/status/" + sundayRiseUpOctoberFollowersObjs[i-1].id_str;
                document.getElementById("a2-2").href = "https://twitter.com/" + sundayRiseUpOctoberFollowersObjs[i-1].user.screen_name;
                document.getElementById("a3-2").href = "https://twitter.com/" + sundayRiseUpOctoberFollowersObjs[i-1].user.screen_name + "/followers";
              }
             }
            if (currentHashtag == 2)
            {
              if (id == "bar" + String(i))
              {
                document.getElementById("a1-2").innerHTML = sundayBlackLivesMatterFollowersObjs[i-1].text;
                document.getElementById("a2-2").innerHTML = "\@" + sundayBlackLivesMatterFollowersObjs[i-1].user.screen_name;
                document.getElementById("a3-2").innerHTML = sundayBlackLivesMatterFollowersObjs[i-1].user.followers_count;

                document.getElementById("a1-2").href = "https://twitter.com/" + sundayBlackLivesMatterFollowersObjs[i-1].user.screen_name + "/status/" + sundayBlackLivesMatterFollowersObjs[i-1].id_str;
                document.getElementById("a2-2").href = "https://twitter.com/" + sundayBlackLivesMatterFollowersObjs[i-1].user.screen_name;
                document.getElementById("a3-2").href = "https://twitter.com/" + sundayBlackLivesMatterFollowersObjs[i-1].user.screen_name + "/followers";
              }
            }  

            if (currentHashtag == 3)
            {
                if (id == "bar" + String(i))
                {
                  document.getElementById("a1-2").innerHTML = sundayBLMFollowersObjs[i-1].text;
                  document.getElementById("a2-2").innerHTML = "\@" + sundayBLMFollowersObjs[i-1].user.screen_name;
                  document.getElementById("a3-2").innerHTML = sundayBLMFollowersObjs[i-1].user.followers_count;

                  document.getElementById("a1-2").href = "https://twitter.com/" + sundayBLMFollowersObjs[i-1].user.screen_name + "/status/" + sundayBLMFollowersObjs[i-1].id_str;
                  document.getElementById("a2-2").href = "https://twitter.com/" + sundayBLMFollowersObjs[i-1].user.screen_name;
                  document.getElementById("a3-2").href = "https://twitter.com/" + sundayBLMFollowersObjs[i-1].user.screen_name + "/followers";
                }
            }

          if (currentHashtag == 4)
          {
              if (id == "bar" + String(i))
              {
                document.getElementById("a1-2").innerHTML = sundaySTNFollowersObjs[i-1].text;
                document.getElementById("a2-2").innerHTML = "\@" + sundaySTNFollowersObjs[i-1].user.screen_name;
                document.getElementById("a3-2").innerHTML = sundaySTNFollowersObjs[i-1].user.followers_count;

                document.getElementById("a1-2").href = "https://twitter.com/" + sundaySTNFollowersObjs[i-1].user.screen_name + "/status/" + sundaySTNFollowersObjs[i-1].id_str;
                document.getElementById("a2-2").href = "https://twitter.com/" + sundaySTNFollowersObjs[i-1].user.screen_name;
                document.getElementById("a3-2").href = "https://twitter.com/" + sundaySTNFollowersObjs[i-1].user.screen_name + "/followers";
              }
          } 

          if (currentHashtag == 5)
          {
              if (id == "bar" + String(i))
              {
                document.getElementById("a1-2").innerHTML = sundaySPBFollowersObjs[i-1].text;
                document.getElementById("a2-2").innerHTML = "\@" + sundaySPBFollowersObjs[i-1].user.screen_name;
                document.getElementById("a3-2").innerHTML = sundaySPBFollowersObjs[i-1].user.followers_count;

                document.getElementById("a1-2").href = "https://twitter.com/" + sundaySPBFollowersObjs[i-1].user.screen_name + "/status/" + sundaySPBFollowersObjs[i-1].id_str;
                document.getElementById("a2-2").href = "https://twitter.com/" + sundaySPBFollowersObjs[i-1].user.screen_name;
                document.getElementById("a3-2").href = "https://twitter.com/" + sundaySPBFollowersObjs[i-1].user.screen_name + "/followers";
              }
          } 
        }        
    }
}

processJSONs('fridayFollowers.json', fridayFollowersObjs);
processJSONs('saturdayFollowers.json', saturdayFollowersObjs);
processJSONs('sundayFollowers.json', sundayFollowersObjs);

processJSONs('fridayRiseUpOctober.json', fridayRiseUpOctoberFollowersObjs);
processJSONs('saturdayRiseUpOctober.json', saturdayRiseUpOctoberFollowersObjs);
processJSONs('sundayRiseUpOctober.json', sundayRiseUpOctoberFollowersObjs);

processJSONs('fridayBlackLivesMatter.json', fridayBlackLivesMatterFollowersObjs);
processJSONs('saturdayBlackLivesMatter.json', saturdayBlackLivesMatterFollowersObjs);
processJSONs('sundayBlackLivesMatter.json', sundayBlackLivesMatterFollowersObjs);

processJSONs('fridayBLM.json', fridayBLMFollowersObjs);
processJSONs('saturdayBLM.json', saturdayBLMFollowersObjs);
processJSONs('sundayBLM.json', sundayBLMFollowersObjs);

processJSONs('fridaySTN.json', fridaySTNFollowersObjs);
processJSONs('saturdaySTN.json', saturdaySTNFollowersObjs);
processJSONs('sundaySTN.json', sundaySTNFollowersObjs);

processJSONs('fridaySPB.json', fridaySPBFollowersObjs);
processJSONs('saturdaySPB.json', saturdaySPBFollowersObjs);
processJSONs('sundaySPB.json', sundaySPBFollowersObjs);



console.log(saturdayFollowersObjs[1]);

