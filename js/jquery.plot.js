function plotdData(id, data, utime){

	active_data = []
	confirmed_data = []
	deceased_data = []
	recovered_data = []
	n_dat = []
	u_time = []
	confirmed_data.push(data[0])
	active_data.push(data[1])
	recovered_data.push(data[2])
	deceased_data.push(data[3])
	n_dat.push(data[4],data[5],data[6])
	u_time.push(utime)
	
	var ctx = document.getElementById(id).getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'doughnut',
		data: {
			labels: ["Total Cases", "Active Cases", "Recovered", "Deceased"],
			datasets: [
			{
			fill:true,
			data: [confirmed_data, active_data, recovered_data, deceased_data],
			backgroundColor: [ 'rgba(55, 0, 150, 0.5)', 'rgba(51, 51, 255, 0.8)', 
				'rgba(0, 100, 0, 1)', 'rgba(255, 0, 0, 0.9)'], 
			borderColor: [],borderWidth: 1,
			},
			]
		},
		options: {
			tooltips: {
				mode: 'index',
				intersect: true,
				reverse: true,
					callbacks: {
					label: function(tooltipItem, data) {
					var index = tooltipItem.index;
					var currentValue = data.datasets[tooltipItem.datasetIndex].data[index];
					var total = data.datasets[tooltipItem.datasetIndex].data[0]
					var mylbl = data.labels[index]
					var percentage = parseFloat((currentValue/total*100).toFixed(1));
					return mylbl+': ' + currentValue + ' ('+ percentage+'%)';
					},
					}
			},
			labels: {display: true,},
			responsive: false,
			title:{
				display: false,
				position: "top",
				text: ['Last updated on: '+ u_time[0]+ ' hrs',
				'Today Cases: '+'Confirmed: '+n_dat[0]+', '+'Recovered: '+n_dat[1]+', '+
				'Deceased: '+n_dat[2]],
				fontSize: 14, fontColor : 'rgba(0, 0, 255, 0.9)',
			},
			legend: {
				display: true,
				position: "bottom",
				//reverse : true,
				labels: {fontColor: "#333",fontSize: 14}
			},
		}
	});

}

function plot2Data(id, data){
	date_name = []
	act_data = []
	conf_data = []
	dec_data = []
	rec_data = []
	stname = []
	
	for (var i in data[0]){
		date_name.push(data[0][i])
		conf_data.push(data[1][i])
		dec_data.push(data[2][i])
	}
	
		
	//console.log(date_name)
	var ctx = document.getElementById(id).getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: date_name,
			datasets: [
				{
					label: 'Deceased',
					fill:true,
					data: dec_data,
					backgroundColor: 'rgba(255, 0, 0, 0.8)',borderColor: [],borderWidth: 1,
					barThickness : 5,
				},
				// {
					// label: 'Recovered',
					// fill:false,
					// data: rec_data,
					// backgroundColor: 'rgba(0, 100, 0, 1)',borderColor: [],borderWidth: 1,
					// barThickness : 5,
				// },
				//{
				//	label: 'Active Cases',
				//	fill:false,
				//	data: active_data,
				//	backgroundColor: 'rgba(51, 51, 255, 0.8)',borderColor: [],borderWidth: 1,
				//	barThickness : 10,
				//	
				//},
				{
					label: 'Daily Confirmed',
					fill:false,
					data: conf_data,
					backgroundColor: 'rgba(50, 0, 150, 0.5)',borderColor: [],borderWidth: 1,
					barThickness : 5,
				}
			]
		},
		options: {
		tooltips: {
			mode: 'index',
			intersect: true,
			reverse: true,
			},
	labels: {display: true,},
    responsive: false,
	title:{
		display:  false,
		text: stname,
		fontSize: 20,
	},
	legend: {
      display: true,
      position: "bottom",
	  reverse : true,
      labels: {fontColor: "#333",fontSize: 13}
    },
    scales: {
      xAxes: [{
	  stacked : true,
	  id : "bar-x-axis1",
	  display : true,
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

}

function plotratedata(id, data){
	date_name = []
	drated_data = []
	drater_data = []
	drate_data = []
	drate3_data = []
	stname = []
	ratedate = []
	drate3r_data = []
	drate3d_data = []
	pushdate = []
	
	for (var i in data[0]){
		pushdate[i] = data[0][i]
		date_name.push(data[0][i])
		drate_data.push(data[1][i])
		drated_data.push(data[2][i])
		//drater_data.push(data[2][i])
		
		
	}
	// for (var i in data[4]){
		// drate3_data.push(data[5][i])
		// ratedate.push(data[4][i])
		// drate3r_data.push(data[6][i])
		// drate3d_data.push(data[7][i])
	// }
	
	stname.push("Death Rate", "Daily Cases Growth Rate")
	
	var ctx = document.getElementById(id).getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: date_name,
			datasets: [
				{
					label: stname[0], //death rate
					fill:false,
					data: drated_data,
					lineTension: 0.1,
					borderColor: "rgba(255, 0, 0, 0.8)",  pointBackgroundColor: "rgba(255, 0, 0, 0.8)",
					pointBorderWidth: 0, pointHoverRadius: 3, 
					pointHoverBorderWidth: 0, pointRadius: 0, pointHitRadius: 5,
				},
				// {
					// label: stname[1], //recovery rate
					// fill:false,
					// data: drater_data,
					// lineTension: 0.1,
					// borderColor: "rgba(0, 100, 0, 1)",  pointBackgroundColor: "rgba(0, 100, 0, 1)",
					// pointBorderWidth: 0, pointHoverRadius: 3, 
					// pointHoverBorderWidth: 0, pointRadius: 0, pointHitRadius: 5,
				// },
				{
					label: stname[1], //growth rate
					fill:false,
					data: drate_data,
					lineTension: 0.1,
					borderColor: "rgba(0, 0, 0, 0.8)",  pointBackgroundColor: "rgba(0, 0, 0, 0.8)",
					pointBorderWidth: 0, pointHoverRadius: 3, 
					pointHoverBorderWidth: 0, pointRadius: 0, pointHitRadius: 5,
				},
			]
		},
		options: {
		tooltips: {
			mode: 'index',
			intersect: true,
			reverse: true,
			callbacks: {
				label: function(tooltipItem, data) {
					var index = tooltipItem.index;
					var currentValue = data.datasets[tooltipItem.datasetIndex].data[index];
					var mylbl = data.datasets[tooltipItem.datasetIndex].label
					  return mylbl+': ' + currentValue + '%';
					},
				}	
			},
	labels: {display: true,},
    responsive: false,
	title:{
		display: false,
		text: stname,
		fontSize: 20,
	},
	legend: {
      display: true,
      position: "bottom",
	  reverse : true,
      labels: {fontColor: "#333",fontSize: 13}//, boxWidth: 40}
    },
    scales: {
      xAxes: [{
	  stacked : (id == 'india') ? false : true,
	  id : "bar-x-axis1",
	  display : true,
        ticks: {maxRotation: 00,minRotation: 60,fontSize: 13,offsetGridLines: false, autoSkip: true,
		maxTicksLimit: 12,}
      }],
      yAxes: [{
		type : 'logarithmic',
				ticks: {beginAtZero: true,fontSize: 16, 
				  callback: function(value, index, values) {//needed to change the scientific notation results from using logarithmic scale
				      return Number(value.toString());//pass tick values as a string into Number function
				      }
				  },
				 afterBuildTicks: function(allcountline) {    
                        allcountline.ticks = [];
                        allcountline.ticks.push(0);
						//allcountline.ticks.push(0.1);
                        allcountline.ticks.push(0.3);
						allcountline.ticks.push(0.5);
                        allcountline.ticks.push(1);
						allcountline.ticks.push(5);
                        allcountline.ticks.push(10);
                        allcountline.ticks.push(30);
						allcountline.ticks.push(50);
						allcountline.ticks.push(100);
                      }
	  
      }]
    }
  }

	});

// $("#7").on("click", function (){
		// myChart.data.labels = ratedate;
		// myChart.data.datasets[2].data = drate3_data;
		// myChart.data.datasets[1].data = drate3r_data;
		// myChart.data.datasets[0].data = drate3d_data;
		// myChart.update();
	
// });

// $("#6").on("click", function (){
		// myChart.data.labels = pushdate;
		// myChart.data.datasets[2].data = drate_data;
		// myChart.data.datasets[1].data = drater_data;
		// myChart.data.datasets[0].data = drated_data;
		// myChart.update();
	
// });

$("#4").on("click", function (){
		myChart.options.scales.yAxes[0] = {
				type : 'linear',
				ticks: {beginAtZero: true,fontSize: 16,}
		};
		myChart.update();
	
});
$("#5").click( function (){
		myChart.options.scales.yAxes[0] = {
				type : 'logarithmic',
				ticks: {beginAtZero: true,fontSize: 16, max: 100,
				  callback: function(value, index, values) {//needed to change the scientific notation results from using logarithmic scale
				      return Number(value.toString());//pass tick values as a string into Number function
				      }
				  },
				 afterBuildTicks: function(allcountline) {    
                        allcountline.ticks = [];
                        allcountline.ticks.push(0);
						allcountline.ticks.push(0.1);
                        allcountline.ticks.push(0.3);
						allcountline.ticks.push(0.5);
                        allcountline.ticks.push(1);
						allcountline.ticks.push(5);
                        allcountline.ticks.push(10);
                        allcountline.ticks.push(30);
						allcountline.ticks.push(50);
						allcountline.ticks.push(100);
                      }
	  
		};
		myChart.update();
	})


}

function plotlinecum(id, data){
	date_name = []
	
	conf_data = []
	dec_data = []
	rec_data = []
	stname = []
	act_data = []
	
	for (var i in data[0]){
		date_name.push(data[0][i])
		conf_data.push(data[1][i])
		dec_data.push(data[2][i])
		// act_data.push(data[2][i])
		// rec_data.push(data[3][i])
		
	}
	// stname.push("Deceased", "Recovered", "Active Cases", "Total Cases")
	stname.push("Deceased", "Total Cases")
	
	var ctx = document.getElementById(id).getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: date_name,
			datasets: [
				
			
				{
					label: stname[0], //tg
					fill:false,
					data: dec_data,
					lineTension: 0.1,
					borderColor: "rgba(255, 0, 0, 0.8)", 
					pointBackgroundColor: "rgba(255, 0, 0, 0.8)",
					pointBorderWidth: 0, pointHoverRadius: 3, 
					pointHoverBorderWidth: 0, pointRadius: 0, pointHitRadius: 5,
				},
				// {
					// label: stname[1], //wb
					// fill:false,
					// data: rec_data,
					// lineTension: 0.1,
					// borderColor: "rgba(0, 100, 0, 1)",  pointBackgroundColor: "rgba(0, 100, 0, 1)",
					// pointBorderWidth: 0, pointHoverRadius: 3, 
					// pointHoverBorderWidth: 0, pointRadius: 0, pointHitRadius: 5,
				// },
				// {
					// label: stname[2],  //pb
					// fill:false,
					// data: act_data,
					// lineTension: 0.1,
					// borderColor: "rgba(51, 51, 255, 0.9)",  pointBackgroundColor: "rgba(51, 51, 255, 0.9)",
					// pointBorderWidth: 0, pointHoverRadius: 3, 
					// pointHoverBorderWidth: 0, pointRadius: 0, pointHitRadius: 5,
				// },
				{
					label: stname[1],  //ap
					fill:false,
					data: conf_data,
					lineTension: 0.1,
					borderColor: "rgba(0, 0, 0, 0.8)", pointBackgroundColor: "rgba(0, 0, 0, 0.8)",
					pointBorderWidth: 0, pointHoverRadius: 3, 
					pointHoverBorderWidth: 0, pointRadius: 0, pointHitRadius: 5,
				},
			]
		},
		options: {
		tooltips: {
			mode: 'index',
			intersect: true,
			reverse: true,
			},
	labels: {display: true,},
    responsive: false,
	title:{
		display: false,
		text: stname,
		fontSize: 20,
	},
	legend: {
      display: true,
      position: "bottom",
	  reverse : true,
      labels: {fontColor: "#333",fontSize: 13}//, boxWidth: 40}
    },
    scales: {
      xAxes: [{
	  stacked : (id == 'india') ? false : true,
	  id : "bar-x-axis1",
	  display : true,
        ticks: {maxRotation: 00,minRotation: 60,fontSize: 13,offsetGridLines: false, autoSkip: true,
		maxTicksLimit: 12,}
      }],
      yAxes: [{
	  ticks: {beginAtZero: true,fontSize: 16,
					callback: function(value, index, values){ // scientific ticks
						if (value > 1)
						{return value/1e6 + 'M';} else {return value}
				      }
	  },
	  scaleLabel: {
        display: false,
        labelString: "Total Cases",
        fontColor: "red",
		fontSize: 18,
      },
	  type: 'linear',
      }]
    }
  }

	});

$("#0").on("click", function (){
		myChart.options.scales.yAxes[0] = {
				type : 'linear',
				ticks: {beginAtZero: true,fontSize: 16,
						callback: function(value, index, values){ // scientific ticks
						if (value > 1)
						{return value/1e6 + 'M';} else {return value}//pass tick values 
				      }
				}
		};
		myChart.update();
	
});
$("#1").click( function (){
		myChart.options.scales.yAxes[0] = {
				type : 'logarithmic',
				ticks: {beginAtZero: true,fontSize: 16, max: 10000000,
				  callback: function(value, index, values) {//needed to change the scientific notation results from using logarithmic scale
				      if (value > 999 && value <999999){
					  return value/1e3 + 'K';}
					  if (value > 999999){return value/1e6 + 'M'}
					  else {return value}//pass tick values as a string into Number function
				      }
				  },
				 afterBuildTicks: function(allcountline) {    
                        allcountline.ticks = [];
                        allcountline.ticks.push(1);
                        allcountline.ticks.push(100);
                        allcountline.ticks.push(1000);
                        allcountline.ticks.push(10000);
						allcountline.ticks.push(100000);
						allcountline.ticks.push(1000000);
						allcountline.ticks.push(10000000);
                      }
		};
		
		myChart.update();
	})


}	

// var localurl = 'https://github.com/NaguAero/Covid-19.World/blob/master/Todaydata.json'
// var request1 = new XMLHttpRequest()
// request1.open('GET', localurl, true)
	// request1.onload = function() {
	// var data = JSON.parse(this.response)
	// console.log(data)
	// }
// request1.send()


	
var api = 'https://covid.ourworldindata.org/data/owid-covid-data.json'
var request = new XMLHttpRequest()
request.open('GET', api, true)
	request.onload = function() {
	var data = JSON.parse(this.response)
	//Variables
	var loc = {};
	var totalcases = {};
	var totaldeaths = {};
	var ncases = {};
	var ndeaths = {};
	var worldcases = {};
	var date_name = {};
	var grcases = {};
	var grdeath = {};
	var cumworld = {};
	var dailyworld = {};
	
	
	world = data.OWID_WRL
	US = data.USA
	UK = data.GBR
	

	
	var last_value = Object.keys(world).length-1
	
	for (var i in world){
		var data_values = world[i]
		totalcases[i] = parseInt(data_values.total_cases)
		totaldeaths[i] = parseInt(data_values.total_deaths)
		ncases[i] = parseInt(data_values.new_cases)
		ndeaths[i] = parseInt(data_values.new_deaths)
		date_name[i] = data_values.date
		grcases[i] = (100*ncases[i]/totalcases[i]).toFixed(2)
		grdeath[i] = (100*ndeaths[i]/totaldeaths[i]).toFixed(2)
	}
	
	rateworld = [date_name,grcases,grdeath]
	
	cumworld = [date_name,totalcases,totaldeaths]
	
	dailyworld = [date_name,ncases,ndeaths]
	
	var tot = totalcases[last_value]
	var totd = totaldeaths[last_value]
	var totr = 4992211;
	var tota = tot-(totr+totd)
	var nc = ncases[last_value]
	var nd = ndeaths[last_value]
	var nr
	var timeupdate = date_name[last_value]
	worldcases = [tot, tota, totr, totd, nc, nr, nd]
	
	
	
	//span push numbers
	$("span.fh5co-counter.js-counter:first").attr("data-to",tot).css( "color", "rgba(0,0,0,0.8)"); 
	$("span.fh5co-counter.js-counter:eq(1)").attr("data-to",tota).css( "color", "rgba(51,51,255,0.8)" ); 
	$("span.fh5co-counter.js-counter:eq(2)").attr("data-to",totr).css( "color", "rgba(0,100,0,1)" ); 
	$("span.fh5co-counter.js-counter:eq(3)").attr("data-to",totd).css( "color", "rgba(255,0,0,0.8)" );
   $("span.fh5co-counter.js-counter:eq(4)").attr("data-to",nc).css( "color", "rgba(0,0,0,0.8)"); 
	//$("span.fh5co-counter.js-counter:eq(5)").attr("data-to",nr).css( "color", "rgba(0,100,0,1)" ); 
	$("span.fh5co-counter.js-counter:eq(6)").attr("data-to",nd).css( "color", "rgba(255,0,0,0.8)" );  
	//var allp = $("p:eq(1)")
	//$("p:first").text("Cummulative: "+timeupdate[0]+ ", "+timeupdate[1]+" IST");
	//$("p:eq(1)").text("Today's Cases, updated on: "+timeupdate[0]+ ", "+timeupdate[1]+" IST");
	
	plotdData('world', worldcases,timeupdate)
	plot2Data('dailyworld', dailyworld)
	plotlinecum('cummulative', cumworld)
	plotratedata('rateplot',rateworld)

}

request.send()