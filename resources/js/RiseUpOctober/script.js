var i = 0;
var filename;
var barMapping = new Object();
var svgRan = "false";

var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    //.scale(y)
    .orient("left");
     //.ticks(1);

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Number of Tweets:</strong> <span style='color:#FF8A65'>" + d.tweetvolume + "</span>";
  });

var svg = d3.select("#chartDiv").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.call(tip);

function runTSV(){
  document.getElementById("description1").innerHTML = "";
  document.getElementById("description2").innerHTML = "";

  var a = 1;
  d3.tsv(filename, type, function(error, data) {
    if (error) throw error;

    x.domain(data.map(function(d) { return d.hour; }));
    y.domain([0, d3.max(data, function(d) { return d.tweetvolume; })]);

    svg.append("g")
        .attr("id",function(){return"gx"})
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .append("text")
          .attr("x",900)
          .attr("y",20)
          .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Hour of Day");

    svg.append("g")
        .attr("id",function(){return "gy"})
        .attr("class", "y axis")
        .attr("transform", "rotate(0)")
        .attr("x", 45)
        .attr("dy", ".71em")
        .style("text-anchor", "end")

    svg.selectAll(".bar")
        .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("id", function(d){i = i + 1; return "bar" + i })
        .attr("x", function(d) { return x(d.hour); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.tweetvolume);})
        .attr("onclick", "clickBar(this.id)")
        .attr("height", function(d) { return height - y(d.tweetvolume); })
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide);
  });
  svgRan = "true";

  console.log(filename);
}

function updateTSV(){
  d3.tsv(filename, type, function(error,data){
    x.domain(data.map(function(d) { return d.hour; }));
    y.domain([0, d3.max(data, function(d) { return d.tweetvolume; })]);

  svg.selectAll(".bar")
    .data(data)
    .attr("y",function(d){return y(d.tweetvolume);})
    .attr("height", function(d){return height - y(d.tweetvolume); })
    .call(yAxis);
  });

  console.log(filename);
}

function type(d) {
  d.tweetvolume = +d.tweetvolume;
  return d;
}




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
   
  switch (currentHashtag) {
    case 0:
      document.getElementById("dayShown").innerHTML = "Friday Oct. 23";
      filename = "friday.tsv";
      // filename = "../../resources/data/RiseUpOctober/tsv/friday.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case 1:
      document.getElementById("dayShown").innerHTML = "Friday Oct. 23 - #RiseUpOctober";
      filename = "../../resources/data/RiseUpOctober/tsv/fridayRiseUpOctober.tsv";
      if (svgRan == "false")
        runTSV();
      else
        updateTSV();
      break;
    case 2:
      document.getElementById("dayShown").innerHTML = "Friday Oct. 23 - #BlackLivesMatter";
      filename = "fridayBlackLivesMatter.tsv";
      // filename = "../../resources/data/RiseUpOctober/tsv/fridayBlackLivesMatter.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case 3:
      document.getElementById("dayShown").innerHTML = "Friday Oct. 23 - #BLM";
      filename = "../../resources/data/RiseUpOctober/tsv/fridayBLM.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case 4:
      document.getElementById("dayShown").innerHTML = "Friday Oct. 23 - #SayTheirNames";
      filename = "../../resources/data/RiseUpOctober/tsv/fridaySayTheirNames.tsv";
     if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case 5:
      document.getElementById("dayShown").innerHTML = "Friday Oct. 23 - #StopPoliceBrutality";
      filename = "../../resources/data/RiseUpOctober/tsv/fridayStopPoliceBrutality.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    default:
      document.getElementById("dayShown").innerHTML = "Friday Oct. 23";
      filename = "../../resources/data/RiseUpOctober/tsv/friday.tsv";
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

  switch (currentHashtag) {
    case 0:
      document.getElementById("dayShown").innerHTML = "Saturday Oct. 24";
      filename = "../../resources/data/RiseUpOctober/tsv/saturday.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case 1:
      document.getElementById("dayShown").innerHTML = "Saturday Oct. 24 - #RiseUpOctober";
      filename = "../../resources/data/RiseUpOctober/tsv/saturdayRiseUpOctober.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case 2:
      document.getElementById("dayShown").innerHTML = "Saturday Oct. 24 - #BlackLivesMatter";
      filename = "../../resources/data/RiseUpOctober/tsv/saturdayBlackLivesMatter.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case 3:
      document.getElementById("dayShown").innerHTML = "Saturday Oct. 24 - #BLM";
      filename = "../../resources/data/RiseUpOctober/tsv/saturdayBLM.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case 4:
      document.getElementById("dayShown").innerHTML = "Saturday Oct. 24 - #SayTheirNames";
      filename = "../../resources/data/RiseUpOctober/tsv/saturdaySayTheirNames.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case 5:
      document.getElementById("dayShown").innerHTML = "Saturday Oct. 24 - #StopPoliceBrutality";
      filename = "../../resources/data/RiseUpOctober/tsv/saturdayStopPoliceBrutality.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    default:
      document.getElementById("dayShown").innerHTML = "Saturday Oct. 24";
      filename = "../../resources/data/RiseUpOctober/tsv/saturday.tsv";
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

  switch (currentHashtag) {
    case 0:
      document.getElementById("dayShown").innerHTML = "Sunday Oct. 25";
      filename = "../../resources/data/RiseUpOctober/tsv/sunday.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case 1:
      document.getElementById("dayShown").innerHTML = "Sunday Oct. 25 - #RiseUpOctober";
      filename = "../../resources/data/RiseUpOctober/tsv/sundayRiseUpOctober.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case 2:
      document.getElementById("dayShown").innerHTML = "Sunday Oct. 25 - #BlackLivesMatter";
      filename = "../../resources/data/RiseUpOctober/tsv/sundayBlackLivesMatter.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case 3:
      document.getElementById("dayShown").innerHTML = "Sunday Oct. 25 - #BLM";
      filename = "../../resources/data/RiseUpOctober/tsv/sundayBLM.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case 4:
      document.getElementById("dayShown").innerHTML = "Sunday Oct. 25 - #SayTheirNames";
      filename = "../../resources/data/RiseUpOctober/tsv/sundaySayTheirNames.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case 5:
      document.getElementById("dayShown").innerHTML = "Friday Oct. 25 - #StopPoliceBrutality";
      filename = "../../resources/data/RiseUpOctober/tsv/sundayStopPoliceBrutality.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    default:
      document.getElementById("dayShown").innerHTML = "Friday Oct. 25";
      filename = "../../resources/data/RiseUpOctober/tsv/sunday.tsv";
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
      // filename = "../../resources/data/RiseUpOctober/tsv/friday.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case "Saturday":
      document.getElementById("dayShown").innerHTML = "Saturday Oct. 24";
      filename = "../../resources/data/RiseUpOctober/tsv/saturday.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case "Sunday":
      document.getElementById("dayShown").innerHTML = "Sunday Oct. 25";
      filename = "../../resources/data/RiseUpOctober/tsv/sunday.tsv";
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
      filename = "../../resources/data/RiseUpOctober/tsv/fridayRiseUpOctober.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case "Saturday":
      document.getElementById("dayShown").innerHTML = "Saturday Oct. 24 - #RiseUpOctober";
      filename = "../../resources/data/RiseUpOctober/tsv/saturdayRiseUpOctober.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case "Sunday":
      document.getElementById("dayShown").innerHTML = "Sunday Oct. 25 - #RiseUpOctober";
      filename = "../../resources/data/RiseUpOctober/tsv/sundayRiseUpOctober.tsv";
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
      // filename = "../../resources/data/RiseUpOctober/tsv/fridayBlackLivesMatter.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case "Saturday":
      document.getElementById("dayShown").innerHTML = "Saturday Oct. 24 - #BlackLivesMatter";
      filename = "../../resources/data/RiseUpOctober/tsv/saturdayBlackLivesMatter.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case "Sunday":
      document.getElementById("dayShown").innerHTML = "Sunday Oct. 25 - #BlackLivesMatter";
      filename = "../../resources/data/RiseUpOctober/tsv/sundayBlackLivesMatter.tsv";
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
      filename = "../../resources/data/RiseUpOctober/tsv/fridayBLM.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case "Saturday":
      document.getElementById("dayShown").innerHTML = "Saturday Oct. 24 - #BLM";
      filename = "../../resources/data/RiseUpOctober/tsv/saturdayBLM.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case "Sunday":
      document.getElementById("dayShown").innerHTML = "Sunday Oct. 25 - #BLM";
      filename = "../../resources/data/RiseUpOctober/tsv/sundayBLM.tsv";
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
      filename = "../../resources/data/RiseUpOctober/tsv/fridaySayTheirNames.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case "Saturday":
      document.getElementById("dayShown").innerHTML = "Saturday Oct. 24 - #SayTheirNames";
      filename = "../../resources/data/RiseUpOctober/tsv/saturdaySayTheirNames.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case "Sunday":
      document.getElementById("dayShown").innerHTML = "Sunday Oct. 25 - #SayTheirNames";
      filename = "../../resources/data/RiseUpOctober/tsv/sundaySayTheirNames.tsv";
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
      filename = "../../resources/data/RiseUpOctober/tsv/fridayStopPoliceBrutality.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case "Saturday":
      document.getElementById("dayShown").innerHTML = "Saturday Oct. 24 - #StopPoliceBrutality";
      filename = "../../resources/data/RiseUpOctober/tsv/saturdayStopPoliceBrutality.tsv";
      if (svgRan == "false")
        runTSV();
      else 
        updateTSV();
      break;
    case "Sunday":
      document.getElementById("dayShown").innerHTML = "Sunday Oct. 25 - #StopPoliceBrutality";
      filename = "../../resources/data/RiseUpOctober/tsv/sundayStopPoliceBrutality.tsv";
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

processJSONs('../../resources/data/RiseUpOctober/json/fridayFollowers.json', fridayFollowersObjs);
processJSONs('../../resources/data/RiseUpOctober/json/saturdayFollowers.json', saturdayFollowersObjs);
processJSONs('../../resources/data/RiseUpOctober/json/sundayFollowers.json', sundayFollowersObjs);

processJSONs('../../resources/data/RiseUpOctober/json/fridayRiseUpOctober.json', fridayRiseUpOctoberFollowersObjs);
processJSONs('../../resources/data/RiseUpOctober/json/saturdayRiseUpOctober.json', saturdayRiseUpOctoberFollowersObjs);
processJSONs('../../resources/data/RiseUpOctober/json/sundayRiseUpOctober.json', sundayRiseUpOctoberFollowersObjs);

processJSONs('../../resources/data/RiseUpOctober/json/fridayBlackLivesMatter.json', fridayBlackLivesMatterFollowersObjs);
processJSONs('../../resources/data/RiseUpOctober/json/saturdayBlackLivesMatter.json', saturdayBlackLivesMatterFollowersObjs);
processJSONs('../../resources/data/RiseUpOctober/json/sundayBlackLivesMatter.json', sundayBlackLivesMatterFollowersObjs);

processJSONs('../../resources/data/RiseUpOctober/json/fridayBLM.json', fridayBLMFollowersObjs);
processJSONs('../../resources/data/RiseUpOctober/json/saturdayBLM.json', saturdayBLMFollowersObjs);
processJSONs('../../resources/data/RiseUpOctober/json/sundayBLM.json', sundayBLMFollowersObjs);

processJSONs('../../resources/data/RiseUpOctober/json/fridaySTN.json', fridaySTNFollowersObjs);
processJSONs('../../resources/data/RiseUpOctober/json/saturdaySTN.json', saturdaySTNFollowersObjs);
processJSONs('../../resources/data/RiseUpOctober/json/sundaySTN.json', sundaySTNFollowersObjs);

processJSONs('../../resources/data/RiseUpOctober/json/fridaySPB.json', fridaySPBFollowersObjs);
processJSONs('../../resources/data/RiseUpOctober/json/saturdaySPB.json', saturdaySPBFollowersObjs);
processJSONs('../../resources/data/RiseUpOctober/json/sundaySPB.json', sundaySPBFollowersObjs);

// console.log(saturdayFollowersObjs[1]);
