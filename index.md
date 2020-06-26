---
layout: default
---
# Covid-19: Initial Growth Trend
The novel coronavirus COVID-19 is affecting around 200 countries and territories around the world. 
The timeline of the first case recorded in every country differed. In order to compare the data of the affected countries, 'day ZERO' 
is defined as the day when the country recorded its first case of novel Covid-19. The 'day ZERO' is identified from each country's respective local/official news reported online. 
The line chart (growth of cases across countries) shows the growth of cases in the countries. 
This comparison primarily provides the information about the initial spread of the novel Covid-19 and the timeline associated with it. 
Based on the growth of the cases, most of the countries can be classified in to two categories.

* The first category includes those countries, wherein, the number of cases rose almost immediately (within 5-20 days) after the first encounter of the novel Covid-19 was recorded. Despite of the swift initial rise in the cases, most of countries (except Turkey, Iran) in this category managed to contain the spread. The slope is now showing signs of flattening for most of them.
* The second set of coronavirus affected countries, the number of cases remained low (less than 50) for 20-35 days after the first case was recorded. However, after this period of silence, these countries experienced a rapid growth in the cases. Italy faced the minimum silence time of 20 days. On the other hand, US, Russia, India, France, Japan, Canada and Germany recorded maximum time of silence of almost 30 days. Except India and Russia, these countries witnessed similar number of cases between 30-50 in the first 30 days. India registered 2 cases, while, Russia recorded 3 cases, in first 30 days. The current situation of these countries is known to everyone post period of silence. The total cases in US has reached 1 million, while, Japan is close to 15000 cases. Other countries fall between these two extremes.
## Timeline
* Brazil and Russia crossed 300K mark other than US.
* US crossed 300K total cases in 75 days.
* Brazil crossed 500K from 300K in 10 days (May 31, days: 96). Brazil crossed 300K total cases in 86 days (May 21).
* Russia crossed 400K from 300K in 11 days (May 31, days: 122). Russia crossed 300K total cases in 111 days (May 20).
* India entered in the group of top 10 countries with maximum number of total cases (May 24).
* India moved one place up by crossing Italy (June 5). India moved two places up by crossing Germany and France (May 31). India moved one place up by crossing Turkey on May 28.
* India is among the top 4 countries with maximum number of Active Cases.
## Plots
<canvas id="testsmall" width="400" height="500"></canvas>
<script>
var ctx = document.getElementById("testsmall").getContext("2d");
var allstates = new Chart(ctx, {
  type: 'bar',
  data: {
	  labels : ['USA', 'Brazil', 'Russia', 'Spain', 'UK', 'Italy', 'France', 'Germany', 'India', 'Turkey', 'Iran', 'Peru', 'Canada', 'Chile', 'Saudi Arabia', 'Mexico', 'Pakistan', 'Belgium', 'Qatar'],
    datasets: [
	{
		label: 'Tested positive per million',
		data : [5346, 2065, 2656, 6095, 3966, 3832, 2853, 2178, 121, 1910, 1748, 4305, 2347, 4551, 2352, 631, 290, 5011, 18393],
		backgroundColor: 'rgba(255, 0, 0, 0.8)',borderColor: [],borderWidth: 1,
		barThickness : 10,xAxisID: "bar-x-axis1",
	},
	{
      label: 'Tests per million pop',
	  type: 'bar',
	  xAxisID: "bar-x-axis1",
	  data : ['49370', '4104', '68527', '76071', '57743', '60909', '21217', '47194', '2527', '22885', '10687', '28207', '42036', '27756', '22171', '1901', '2359', '72237', '74016'],
	  backgroundColor: 'rgba(50, 0, 150, 0.5)',borderColor: [],borderWidth: 1,
	  barThickness : 10,
    }]
  },
  options: {
	  tooltips: {
	    mode: 'index',
	  	reverse: true,
		intersect: true,
			callbacks: {
				label: function(tooltipItem, data) {
					var index = tooltipItem.index;
					var ttcases = (data.datasets[1].data[index]);
					var currentValue = (data.datasets[0].data[index]);
					var total = (parseInt(data.datasets[1].data[index])) 
					var mylbl = data.datasets[tooltipItem.datasetIndex].label
					var percentage = parseFloat((currentValue/total*100).toFixed(1));
					if (tooltipItem.datasetIndex == 1){return mylbl+': ' + ttcases ;}
					if (tooltipItem.datasetIndex == 0){return mylbl+': ' + currentValue + ' ('+ percentage+'%)';}
				},
			}
	  },
    responsive: false,
	title:{
		display: true,
		text: ["Countries with Total Cases above 50 K"],
		fontSize: 14,
	},
	legend: {
      display: true,
      position: "bottom",
	  reverse: true,
      labels: {fontColor: "#333",fontSize: 13}
    },
    scales: {
      xAxes: [{
	  stacked : true,
	  id : "bar-x-axis1",
		//barThickness : 30,
        ticks: {maxRotation: 0,minRotation: 60,fontSize: 14,offsetGridLines: false,}
      }],
      yAxes: [{
	  stacked : false,
        ticks: {beginAtZero: true,fontSize: 16,
				callback: function(value, index, values) {//needed to change the scientific notation results from using logarithmic scale
						return value/1e3 + 'K';//pass tick values as a string into Number function
				      }
		}
      }]
    }
  }
});

</script>
