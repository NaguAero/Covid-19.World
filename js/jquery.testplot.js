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
					barThickness : (id == 'india') ? 30 :  10,
				},
				{
					label: 'Total Tests',
					fill:false,
					data: tottests,
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
					callback: function(value, index, values){
						return value/1e6 + 'M';
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
	date_name = []
	
	conf_data = []
	dec_data = []
	rec_data = []
	stname = []
	cum_actdat = []
	
	var k = 0
	for (var xx in data){
		stname.push(xx)
		var eachdata = data[xx][1]
		act_data = []
		for (var i in eachdata){
			if (xx == 'Maharashtra'){date_name.push(data[xx][0][i])}
			var act_sm = eachdata[i]
			act_data.push(eachdata[i])
		}
		//console.log(xx,k)
		cum_actdat.push(act_data)
		k = k+1
	}
	
		

		
	var ctx = document.getElementById(id).getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: date_name,
			datasets: [
				
			
				//{
				//	label: stname[23], //tg
				//	fill:false,
				//	data: cum_actdat[23],
				//	lineTension: 0.1,
				//	borderColor: "rgba(100,100,0,1)", borderDash: [], pointBackgroundColor: "rgba(100,100,0,1)",
				//	pointBorderWidth: 1, pointHoverRadius: 4, 
				//	pointHoverBorderWidth: 0, pointRadius: 0, pointHitRadius: 5,
				//},
				{
					label: stname[0], //ap
					fill:false,
					data: cum_actdat[0],
					lineTension: 0.1,
					borderColor: "rgba(0,50,150,1)", borderDash: [], pointBackgroundColor: "rgba(0,50,150,1)",
					pointBorderWidth: 1, pointHoverRadius: 4, 
					pointHoverBorderWidth: 0, pointRadius: 0, pointHitRadius: 5,
				},
				{
					label: stname[2],  //bihar
					fill:false,
					data: cum_actdat[2],
					lineTension: 0.1,
					borderColor: "rgba(200,0,200,1)", borderDash: [], pointBackgroundColor: "rgba(200,0,200,1)",
					pointBorderWidth: 1, pointHoverRadius: 4, 
					pointHoverBorderWidth: 0, pointRadius: 0, pointHitRadius: 5,
				},
				//{
				//	label: stname[6],  //goa
				//	fill:false,
				//	data: cum_actdat[6],
				//	lineTension: 0.1,
				//	borderColor: "rgba(255,0,100,1)", borderDash: [], pointBackgroundColor: "rgba(255,0,100,1)",
				//	pointBorderWidth: 1, pointHoverRadius: 4, 
				//	pointHoverBorderWidth: 0, pointRadius: 0, pointHitRadius: 5,
				//},
				{
					label: stname[25], // up
					fill:false,
					data: cum_actdat[25],
					lineTension: 0.1,
					borderColor: "rgba(0,100,255,1)", borderDash: [], pointBackgroundColor: "rgba(0,100,255,1)",
					pointBorderWidth: 1, pointHoverRadius: 4, 
					pointHoverBorderWidth: 0, pointRadius: 0, pointHitRadius: 5,
				},
				{
					label: stname[14], // mp
					fill:false,
					data: cum_actdat[14],
					lineTension: 0.1,
					borderColor: "rgba(0,255,200,1)", borderDash: [], pointBackgroundColor: "rgba(0,255,200,1)",
					pointBorderWidth: 0, pointHoverRadius: 4, 
					pointHoverBorderWidth: 0, pointRadius: 0, pointHitRadius: 5,
				},
				{
					label: stname[21], //rj
					fill:false,
					data: cum_actdat[21],
					lineTension: 0.1,
					borderColor: "rgba(180,180,0,1)", borderDash: [], pointBackgroundColor: "rgba(180,180,0,1)",
					pointBorderWidth: 0, pointHoverRadius: 4, 
					pointHoverBorderWidth: 0, pointRadius: 0, pointHitRadius: 5,
				},
				{
					label: stname[7], //gj
					fill:false,
					data: cum_actdat[7],
					lineTension: 0.1,
					borderColor: "rgba(0,0,0,1)", borderDash: [], pointBackgroundColor: "rgba(0,0,0,1)",
					pointBorderWidth: 0, pointHoverRadius: 4, 
					pointHoverBorderWidth: 0, pointRadius: 0, pointHitRadius: 5,
				},
				{
					label: stname[5], // delhi
					fill:false,
					data: cum_actdat[5],
					lineTension: 0.1,
					borderColor: "rgba(200,100,200,1)", borderDash: [], pointBackgroundColor: "rgba(200,100,200,1)",
					pointBorderWidth: 0, pointHoverRadius: 4, 
					pointHoverBorderWidth: 0, pointRadius: 0, pointHitRadius: 5,
				},
				{
					label: stname[22], //tn
					fill:false,
					data: cum_actdat[22],
					lineTension: 0.1,
					borderColor: "rgba(0,100,0,1)", borderDash: [], pointBackgroundColor: "rgba(0,100,0,1)",
					pointBorderWidth: 0, pointHoverRadius: 4, 
					pointHoverBorderWidth: 0, pointRadius: 0, pointHitRadius: 5,
				},
				{
					label: stname[15], // mh
					fill:false,
					data: cum_actdat[15],
					lineTension: 0.1,
					borderColor: "rgba(255,0,0,0.9)", borderDash: [], pointBackgroundColor: "rgba(255,0,0,0.9)",
					pointBorderWidth: 0, pointHoverRadius: 4, 
					//pointHoverBackgroundColor: "rgba(192,192,192,1)",
					pointHoverBorderWidth: 0, pointRadius: 0, pointHitRadius: 5,
				},
			]
		},
		options: {
		tooltips: {
			mode: 'index',
			intersect: true,
			reverse: true,
			backgroundColor : 'rgba(0, 0, 0, 0.7)'
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
        ticks: {maxRotation: 00,minRotation: 45,fontSize: 13,offsetGridLines: false, autoSkip: true,
		maxTicksLimit: 12,}
      }],
      yAxes: [{
	  ticks: {beginAtZero: true,fontSize: 16, max: 40, min: 0,
				  callback: function(value, index, values) {//needed to change the scientific notation results from using logarithmic scale
					  return value ;//pass tick values as a string into Number function
				      }
	  },
	  scaleLabel: {
        display: true,
        labelString: "%",
        fontColor: "black",
		fontSize: 18,
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
					labelString: "%",
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
					labelString: "%",
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


var api = 'https://covid.ourworldindata.org/data/owid-covid-data.json'
var request = new XMLHttpRequest()

request.open('GET', api, true)
request.onload = function() {
	var data = JSON.parse(this.response)
	//  data set
	
	
	var tescasedata = {};
	var current = {};
	var currentpm = {};
	for (var isocode in data){
		var tottests = {};
		var ttcases = {};
		var date_name = {};
		var data_values = data[isocode]
		var lstval = Object.keys(data_values).length - 1;
		
		for (values in data_values){
			
			var count_values = data_values[values]
			
			var loc = count_values.location
			var pop = count_values.population
			date_name[values] = count_values.date
			
			ttcases[values] = count_values.total_cases
			
			if (count_values.hasOwnProperty('total_tests')){
				tottests[values] = count_values.total_tests
			} else {
				tottests[values] = 0;
			}
		}
		var currentTotCases = ttcases[lstval]
		var currrentTotTests = tottests[lstval]
		
		
		if (currrentTotTests == 0) {currrentTotTests = tottests[lstval-1]}
		var TotTestspm = parseInt(1e6*currrentTotTests/pop)
		var TotCasepm = parseInt(1e6*currentTotCases/pop)
		
		tescasedata[loc] = [date_name,ttcases,tottests]
		if (currrentTotTests != 0){
			current[loc] = [currentTotCases, currrentTotTests]
			currentpm[loc] = [TotCasepm, TotTestspm]
		}
	}
	
	console.log(currentpm)
	
	
	
	//tested_data = [conf,ttcas,thtstate,testpermi, pospermil]
	
	
	plot_tested_Data('teststateplot', current)
	plot_permin_Data('permilplot', currentpm)
	//plot_daily_testedRate('dailytestedRate',rateconfdaily)


}

request.send()
