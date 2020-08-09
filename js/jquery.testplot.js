function plot_tested_Data(id, data){
	con_name = []
	cases = []
	tests = []
	
	for (var con in data){
		var condata = data[con]
		con_name.push(con)
		cases.push(data[con][0])
		tests.push(data[con][1])
	}
	arrayOfObj = con_name.map(function(d, i) {
		return {
			label: d,
			data: tests[i] || 0,
			data1: cases[i] || 0
		};
	});

	sortedArrayOfObj = arrayOfObj.sort(function(a, b) {
	  return b.data-a.data;
	});

	ConLabel = [];
	testedpos = [];
	tottests = [];
	sortedArrayOfObj.forEach(function(d){
	  ConLabel.push(d.label);
	  testedpos.push(d.data1);
	  tottests.push(d.data);
	});
	var ctx = document.getElementById(id).getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ConLabel,
			datasets: [
				{
					label: 'Tested Positive',
					fill:true,
					data: testedpos,
					backgroundColor: 'rgba(255, 0, 0, 0.8)',borderColor: [],borderWidth: 1,
					barThickness : (id == 'cnf1m') ? 10 : (id== 'cnf500k100k')? 10 : (id == 'cnf100k50k')? 10 : 5,
				},
				{
					label: 'Total Tests',
					fill:false,
					data: tottests,
					backgroundColor: 'rgba(50, 0, 150, 0.5)',borderColor: [],borderWidth: 1,
					barThickness : (id == 'cnf1m') ? 10 : (id== 'cnf500k100k')? 10 : (id == 'cnf100k50k')? 10 : 5,
				},
			]
		},
		options: {
			tooltips: { mode: 'index', intersect: true, reverse: true, 
					backgroundColor	: 'rgba(0, 0, 0, 0.7)',
						callbacks: {
							afterLabel: function(tooltipItem, data){
								var index = tooltipItem.index;
								var currentValue = data.datasets[tooltipItem.datasetIndex].data[index];
								// var total = (parseInt(data.datasets[3].data[index]))
								var denoValue = data.datasets[1].data[index]
								var numeValue = data.datasets[0].data[index]	
								var percentage = parseFloat((100*numeValue/denoValue).toFixed(2));
								var addline = 'Overall Positivity Rate: '+ percentage+'%'
								if (tooltipItem.datasetIndex == 0) {return addline};
							},
						}

					},
			labels: {display: true,},
				responsive: false,
			legend: {
				display: true, position: "bottom", reverse : true,
				labels: {fontColor: "#333",fontSize: 13}
				},
			scales: {
			xAxes: [{
				stacked : true, display : true,
				ticks:  id=='cnf1m'? {maxRotation: 0,minRotation: 0,fontSize: 14, offsetGridLines: false,}:
							{maxRotation: 0,minRotation: 60,fontSize: 12, offsetGridLines: false,}
				}],
			yAxes: [{ stacked : false, ticks: {beginAtZero: true,fontSize: 16,
					callback: function(value, index, values){
						if (value < 999) {return value} ;
						if (value > 999 && value < 999999){return value/1e3+'K';}
						if (value > 999999){return value/1e6+'M';}
						
					}
			}
				}]
			}
		}
	});

}	

function plot_permin_Data(id, data){
	testspmil = []
	casespermil = []

	con_name = []
	cases = []
	tests = []
	
	for (var con in data){
		var condata = data[con]
		con_name.push(con)
		cases.push(data[con][0])
		tests.push(data[con][1])
	}
	arrayOfObj = con_name.map(function(d, i) {
		return {
			label: d,
			data: tests[i] || 0,
			data1: cases[i] || 0
		};
	});

	sortedArrayOfObj = arrayOfObj.sort(function(a, b) {
	  return b.data-a.data;
	});

	ConLabel = [];
	testedpos = [];
	tottests = [];
	sortedArrayOfObj.forEach(function(d){
	  ConLabel.push(d.label);
	  casespermil.push(d.data1);
	  testspmil.push(d.data);
	});
	var ctx = document.getElementById(id).getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ConLabel,
			datasets: [
				{
					label: 'Positive Cases per million',
					fill:true,
					data: casespermil,
					backgroundColor: 'rgba(255, 0, 0, 0.8)',borderColor: [],borderWidth: 1,
					barThickness : (id == 'india') ? 30 :  10,
				},
				{
					label: 'Tests per million',
					fill:false,
					data: testspmil,
					backgroundColor: 'rgba(50, 0, 150, 0.5)',borderColor: [],borderWidth: 1,
					barThickness : (id == 'india') ? 30 : 10,
				},
			]
		},
		options: {
			tooltips: { mode: 'index', intersect: true, reverse: true, 
					backgroundColor	: 'rgba(0, 0, 0, 0.7)',
						callbacks: {
							afterLabel: function(tooltipItem, data){
								var index = tooltipItem.index;
								var currentValue = data.datasets[tooltipItem.datasetIndex].data[index];
								// var total = (parseInt(data.datasets[3].data[index]))
								var denoValue = data.datasets[1].data[index]
								var numeValue = data.datasets[0].data[index]	
								var percentage = parseFloat((100*numeValue/denoValue).toFixed(2));
								var addline = 'Overall Positivity Rate: '+ percentage+'%'
								if (tooltipItem.datasetIndex == 0) {return addline};
							},
						}
					},
			labels: {display: true,},
				responsive: false,
			legend: {
				display: true, position: "bottom", reverse : true,
				labels: {fontColor: "#333",fontSize: 13}
				},
			scales: {
			xAxes: [{
				stacked : true, display : true,
				ticks:  {maxRotation: 0,minRotation: 60,fontSize: 12,offsetGridLines: false,}
				}],
			yAxes: [{ stacked : false, ticks: {beginAtZero: true,fontSize: 16,
					callback: function (value, index, values){
						return value/1e3 + 'K';
					}
			}
				}]
			}
		}
	});

}

var stname_conf100 ={};

function state_namefun(stnames) {
		stname_conf100 = stnames
		//for (var i in stname_conf100){
		//console.log(i,stname_conf100[i][0])
		//}
}

function plot_daily_testedRate(id, data){
	
	rndcolor = []
	con_name = []
	borcolor = []
	var dynamicColors = function() {
		var r = Math.floor(Math.random() * 255);
		var g = Math.floor(Math.random() * 255);
		var b = Math.floor(Math.random() * 255);
		return "rgb(" + r + "," + g + "," + b + ")";
	};
	var main_arr = [];
	for (var i in data){
		rndcolor.push(dynamicColors());
		borcolor.push(dynamicColors());
		con_name.push(i)
		main_arr.push([{x: data[i][0], y: data[i][1], r: 8}])
	}
	
	
	var ctx = document.getElementById(id).getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'bubble',
		data: {
			// labels: date_name,
			datasets: 
				(function (main_arr){
					var out = []
					for (var i=0; i<main_arr.length; i++){
						out.push({
							label: con_name[i], 
							backgroundColor: rndcolor[i], borderColor: borcolor[i],
							data: main_arr[i], hoverRadius: 5, hitRdius: 5,
						});
					}
					return out;
				})(main_arr),
			
		},
		options: {
		tooltips: {
			mode: 'point',
			intersect: true,
			reverse: true,
			backgroundColor : 'rgba(0, 0, 0, 0.7)',
					callbacks: {
						label: function(tooltipItem, data) {
							rLabel = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].r;
							var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
							return datasetLabel + ': ' +'Total Cases: ' + tooltipItem.xLabel+ ',';
						},
						afterLabel: function(tooltipItem, data){
							// var index = tooltipItem.index;
							// var currentValue = data.datasets[tooltipItem.datasetIndex].data[index];
							// // var total = (parseInt(data.datasets[3].data[index]))
							// var denoValue = data.datasets[1].data[index]
							// var numeValue = data.datasets[0].data[index]	
							// var percentage = parseFloat((100*numeValue/denoValue).toFixed(2));
							// var addline = 'Overall Positivity Rate: '+ percentage+'%'
							var addline = 'Positivity Rate: ' + tooltipItem.yLabel + '%';
							// if (tooltipItem.datasetIndex == 0) {return addline};
							{return addline}
						},
					}
			},
	labels: {display: true,},
    responsive: false,
	title:{
		display: false,
		text: '',
		fontSize: 20,
	},
	legend: {
      display: true,
      position: "bottom",
	  reverse : true,
      labels: {fontColor: "#333",fontSize: 13, usePointStyle: true, boxWidth: 10}
    },
    scales: {
      xAxes: [{
	  stacked : (id == 'india') ? false : true,
	  id : "bar-x-axis1",
	  display : true,
        ticks: {maxRotation: 00,minRotation: 0, fontSize: 14,offsetGridLines: false, autoSkip: true,
				max: 6000000,
				callback: function(value, index, values) {//needed to change the scientific notation results from using logarithmic scale
					if (value>999 && value < 999999){return value/1e3 + 'K'}
					if (value>999999){return value/1e6 + 'M' ;}
				}
		},
		scaleLabel: {
        display: true,
        labelString: "Total Cases",
        // fontColor: "black",
		fontSize: 16,
      },
      }],
      yAxes: [{
	  ticks: {beginAtZero: true,fontSize: 16, offsetGridLines: false, autoSkip: true,max: 70, min: 0,
				  callback: function(value, index, values) {//needed to change the scientific notation results from using logarithmic scale
					  return value ;//pass tick values as a string into Number function
				      }
	  },
	  scaleLabel: {
        display: true,
        labelString: "Positivity Rate (%)",
        // fontColor: "black",
		fontSize: 16,
      },
	  type: 'linear',
				
      }]
    }
  }

	});
	
$("#ratelinear").on("click", function (){
		myChart.options.scales.yAxes[0] = {
				type : 'linear',
				scaleLabel: {
					display: true,
					labelString:  "Positivity Rate (%)",
					fontColor: "black",
					fontSize: 18,
				},
				ticks: {beginAtZero: true,fontSize: 16,max: 40, min: 0}
		};
		myChart.update();
	
});
$("#ratelog").click( function (){
		myChart.options.scales.yAxes[0] = {
				scaleLabel: {
					display: true,
					labelString:  "Positivity Rate (%)",
				fontColor: "black",
				fontSize: 18,
				},
				type : 'logarithmic',
				ticks: {beginAtZero: true,fontSize: 16, max: 50, min: 0,
				  callback: function(value, index, values) {//needed to change the scientific notation results from using logarithmic scale
				      i
					  return value ;//pass tick values as a string into Number function
				      }
				},
				 afterBuildTicks: function(allcountline) {    
                        allcountline.ticks = [];
                        allcountline.ticks.push(0);
                        allcountline.ticks.push(0.5);
                        allcountline.ticks.push(1);
                        allcountline.ticks.push(2);
                        allcountline.ticks.push(5);
						allcountline.ticks.push(10);
						allcountline.ticks.push(20);
						allcountline.ticks.push(50);
                      }
		};
		
		myChart.update();
	})


}


var api = 'https://corona.lmao.ninja/v2/countries'
var request = new XMLHttpRequest()

request.open('GET', api, true)
request.onload = function() {
	var data = JSON.parse(this.response)
	//Variables
	var allcases = {};
	var cnf_1m = {};
	var cnf_1m_100k = {};
	var cnf_500k_100k = {};
	var cnf_100k_50k = {};
	var cnf_50k_10k = {};
	var cnf_10k_1k = {};
	var cnf_1k = {};
	
	var prate = {};
	var total = 0;
	for (var i in data){
		var data_val = data[i]
		var conname = data_val.country
		var tests = data_val.tests
		var testspm = data_val.testsPerOneMillion
		var tot = data_val.cases
		var totpm = data_val.casesPerOneMillion
		var pr = (100*tot/tests).toFixed(2)
		// var totd = data_val.deaths
		// var nc = data_val.todayCases
		// var nr = data_val.todayRecovered
		// var nd = data_val.todayDeaths
		if (conname != 'China'){
			tot > 500000? cnf_1m[conname]= [tot, tests, totpm, testspm]:
			(tot < 500000 && tot > 100000)? cnf_500k_100k[conname]=[tot, tests, totpm, testspm]:
			(tot < 100000 && tot > 50000)? cnf_100k_50k[conname]=[tot, tests, totpm, testspm]:
			(tot < 50000 && tot > 10000)? cnf_50k_10k[conname]=[tot, tests, totpm, testspm]:
			(tot < 10000 && tot > 1000)? cnf_10k_1k[conname]=[tot, tests, totpm, testspm]:
			(tot < 1000 && tot > 100)?cnf_1k[conname] = [tot, tests, totpm, testspm]:0	
		}
		if (tot>=50000) {
			prate[conname] = [tot,pr]
		}
		//conf>100?statename[state] = [conf] :0
		// var rndcolor = dynamicColors()
		// tot > 10000? allcases[conname]=[tot, tota, totr, totd, rndcolor]:0
		
		// total = tot + total
		
	}
	
	
	plot_tested_Data('cnf1m', cnf_1m)
	plot_tested_Data('cnf500k100k', cnf_500k_100k)
	plot_tested_Data('cnf100k50k', cnf_100k_50k)
	plot_tested_Data('cnf50k10k', cnf_50k_10k)
	plot_tested_Data('cnf10k1k', cnf_10k_1k)
	plot_tested_Data('cnf1k', cnf_1k)
	// plot_permin_Data('permilplot', currentpm)
	plot_daily_testedRate('dailytestedRate',prate)


}

request.send()
