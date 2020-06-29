function plotdData(id, data){

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
	// u_time.push(utime)
	
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
				labels: {fontColor: "#333",fontSize: 14, usePointStyle: true, boxWidth: 10,}
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
			rec_data.push(data[2][i])
			dec_data.push(data[3][i])
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
					barThickness : 3,
				},
				{
					label: 'Recovered',
					fill:false,
					data: rec_data,
					backgroundColor: 'rgba(0, 100, 0, 1)',borderColor: [],borderWidth: 1,
					barThickness : 3,
				},
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
					barThickness : 3,
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
        ticks: {maxRotation: 0,minRotation: 45,fontSize: 14,offsetGridLines: false,}
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
	
	for (var i in data){
		date_name.push(data[i][0])
		drate_data.push(data[i][1])
		drated_data.push(data[i][3])
		drater_data.push(data[i][2])
		
	}
	
	
	stname.push("Death Rate", "Recovery rate", "Daily Cases Growth Rate")
	
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
				{
					label: stname[1], //recovery rate
					fill:false,
					data: drater_data,
					lineTension: 0.1,
					borderColor: "rgba(0, 100, 0, 1)",  pointBackgroundColor: "rgba(0, 100, 0, 1)",
					pointBorderWidth: 0, pointHoverRadius: 3, 
					pointHoverBorderWidth: 0, pointRadius: 0, pointHitRadius: 5,
				},
				{
					label: stname[2], //growth rate
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
        ticks: {maxRotation: 00,minRotation: 45,fontSize: 13,offsetGridLines: false, autoSkip: true,
		maxTicksLimit: 12,}
      }],
      yAxes: [{
		type : 'logarithmic',
				ticks: {beginAtZero: true,fontSize: 16, max: 50,
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
				ticks: {beginAtZero: true,fontSize: 16, max: 50,
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
						// allcountline.ticks.push(100);
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
		dec_data.push(data[4][i])
		act_data.push(data[2][i])
		rec_data.push(data[3][i])
		
	}
	stname.push("Deceased", "Recovered", "Active Cases", "Total Cases")
	
	
	var ctx = document.getElementById(id).getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: date_name,
			datasets: [
				
			
				{
					label: stname[0], 
					fill:false,
					data: dec_data,
					lineTension: 0.1,
					borderColor: "rgba(255, 0, 0, 0.8)", 
					pointBackgroundColor: "rgba(255, 0, 0, 0.8)",
					pointBorderWidth: 0, pointHoverRadius: 3, 
					pointHoverBorderWidth: 0, pointRadius: 0, pointHitRadius: 5,
				},
				{
					label: stname[1], 
					fill:false,
					data: rec_data,
					lineTension: 0.1,
					borderColor: "rgba(0, 100, 0, 1)",  pointBackgroundColor: "rgba(0, 100, 0, 1)",
					pointBorderWidth: 0, pointHoverRadius: 3, 
					pointHoverBorderWidth: 0, pointRadius: 0, pointHitRadius: 5,
				},
				{
					label: stname[2],  
					fill:false,
					data: act_data,
					lineTension: 0.1,
					borderColor: "rgba(51, 51, 255, 0.9)",  pointBackgroundColor: "rgba(51, 51, 255, 0.9)",
					pointBorderWidth: 0, pointHoverRadius: 3, 
					pointHoverBorderWidth: 0, pointRadius: 0, pointHitRadius: 5,
				},
				{
					label: stname[3], 
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
        ticks: {maxRotation: 0,minRotation: 45,fontSize: 13,offsetGridLines: false, autoSkip: true,
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
				ticks: {beginAtZero: true,fontSize: 16, max: 20000000,
				  callback: function(value, index, values) {//needed to change the scientific notation results from using logarithmic scale
				      if (value > 999 && value <999999){
					  return value/1e3 + 'K';}
					  if (value > 999999){return value/1e6 + 'M'}
					  else {return value}//pass tick values as a string into Number function
				      }
				  },
				 afterBuildTicks: function(allcountline) {    
                        allcountline.ticks = [];
                        // allcountline.ticks.push(1);
                        allcountline.ticks.push(1000);
                        allcountline.ticks.push(10000);
                        allcountline.ticks.push(100000);
						// allcountline.ticks.push(500000);
						allcountline.ticks.push(1000000);
						// allcountline.ticks.push(5000000);
						allcountline.ticks.push(10000000);
						allcountline.ticks.push(20000000);
                      }
		};
		
		myChart.update();
	})


}	

var api2 = 'https://corona.lmao.ninja/v2/all'
var request2 = new XMLHttpRequest()
request2.open('GET', api2, true)
	request2.onload = function() {
		var data = JSON.parse(this.response)
		
		var tot = data.cases
		var tota = data.active
		var totr = data.recovered
		var totd = data.deaths
		var nc = data.todayCases
		var nr = data.todayRecovered
		var nd = data.todayDeaths
		worldcases = [tot, tota, totr, totd, nc, nr, nd]
		//span push numbers
	  
		//var allp = $("p:eq(1)")
		//$("p:first").text("Cummulative: "+timeupdate[0]+ ", "+timeupdate[1]+" IST");
		//$("p:eq(1)").text("Today's Cases, updated on: "+timeupdate[0]+ ", "+timeupdate[1]+" IST");
		$("span.fh5co-counter.js-counter:first").attr("data-to",tot).css( "color", "rgba(0,0,0,0.8)"); 
		$("span.fh5co-counter.js-counter:eq(1)").attr("data-to",tota).css( "color", "rgba(51,51,255,0.8)" ); 
		$("span.fh5co-counter.js-counter:eq(2)").attr("data-to",totr).css( "color", "rgba(0,100,0,1)" ); 
		$("span.fh5co-counter.js-counter:eq(3)").attr("data-to",totd).css( "color", "rgba(255,0,0,0.8)" );
		$("span.fh5co-counter.js-counter:eq(4)").attr("data-to",nc).css( "color", "rgba(0,0,0,0.8)"); 
		$("span.fh5co-counter.js-counter:eq(5)").attr("data-to",nr).css( "color", "rgba(0,100,0,1)" ); 
		$("span.fh5co-counter.js-counter:eq(6)").attr("data-to",nd).css( "color", "rgba(255,0,0,0.8)" );
		plotdData('world', worldcases)
	}

request2.send()

var date = ['Jan 22', 'Jan 23', 'Jan 24', 'Jan 25', 'Jan 26', 'Jan 27', 'Jan 28', 'Jan 29', 'Jan 30', 'Jan 31', 'Feb 01', 'Feb 02', 'Feb 03', 'Feb 04', 'Feb 05', 'Feb 06', 'Feb 07', 'Feb 08', 'Feb 09', 'Feb 10', 'Feb 11', 'Feb 12', 'Feb 13', 'Feb 14', 'Feb 15', 'Feb 16', 'Feb 17', 'Feb 18', 'Feb 19', 'Feb 20', 'Feb 21', 'Feb 22', 'Feb 23', 'Feb 24', 'Feb 25', 'Feb 26', 'Feb 27', 'Feb 28', 'Feb 29', 'Mar 01', 'Mar 02', 'Mar 03', 'Mar 04', 'Mar 05', 'Mar 06', 'Mar 07', 'Mar 08', 'Mar 09', 'Mar 10', 'Mar 11', 'Mar 12', 'Mar 13', 'Mar 14', 'Mar 15', 'Mar 16', 'Mar 17', 'Mar 18', 'Mar 19', 'Mar 20', 'Mar 21', 'Mar 22', 'Mar 23', 'Mar 24', 'Mar 25', 'Mar 26', 'Mar 27', 'Mar 28', 'Mar 29', 'Mar 30', 'Mar 31', 'Apr 01', 'Apr 02', 'Apr 03', 'Apr 04', 'Apr 05', 'Apr 06', 'Apr 07', 'Apr 08', 'Apr 09', 'Apr 10', 'Apr 11', 'Apr 12', 'Apr 13', 'Apr 14', 'Apr 15', 'Apr 16', 'Apr 17', 'Apr 18', 'Apr 19', 'Apr 20', 'Apr 21', 'Apr 22', 'Apr 23', 'Apr 24', 'Apr 25', 'Apr 26', 'Apr 27', 'Apr 28', 'Apr 29', 'Apr 30', 'May 01', 'May 02', 'May 03', 'May 04', 'May 05', 'May 06', 'May 07', 'May 08', 'May 09', 'May 10', 'May 11', 'May 12', 'May 13', 'May 14', 'May 15', 'May 16', 'May 17', 'May 18', 'May 19', 'May 20', 'May 21', 'May 22', 'May 23', 'May 24', 'May 25', 'May 26', 'May 27', 'May 28', 'May 29', 'May 30', 'May 31', 'Jun 01', 'Jun 02', 'Jun 03', 'Jun 04', 'Jun 05', 'Jun 06', 'Jun 07', 'Jun 08', 'Jun 09', 'Jun 10', 'Jun 11', 'Jun 12', 'Jun 13', 'Jun 14', 'Jun 15', 'Jun 16', 'Jun 17', 'Jun 18', 'Jun 19', 'Jun 20', 'Jun 21', 'Jun 22', 'Jun 23', 'Jun 24', 'Jun 25', 'Jun 26', 'Jun 27', 'Jun 28'] 
var dailycnf = [null,265,472,698,785,1781,1477,1755,2010,2127,2603,2838,3239,3915,3721,3173,3437,2676,3001,2546,2035,14153,5151,2662,2097,2132,2003,1852,516,977,996,978,554,885,738,992,1288,1509,1989,1981,1862,2571,2309,3093,3642,4056,3901,4438,4650,7239,8270,10929,10990,13037,12947,15783,20747,26197,30727,29508,32497,41643,43928,48754,61136,64911,66959,60669,64495,74270,77532,80563,84493,81904,70988,73369,78690,84958,85609,92396,79712,71961,70366,73498,83162,81168,85379,80783,75704,73782,75748,80407,85195,102121,90594,73620,69679,75687,80173,86224,95432,83162,82567,79717,81747,96297,96752,96841,89602,80499,74937,85998,89962,97507,100641,97155,82654,90520,95828,103499,108443,108942,100509,97241,90884,93705,107452,117698,126827,125232,109698,105491,116335,121344,131359,131328,129610,114871,108482,121953,136788,139170,143275,135073,124444,125895,143919,146388,141431,182209,157786,130805,139721,164156,173765,180601,194190,176568,163172]
var dailydec = ['null', '8', '16', '15', '24', '26', '26', '38', '43', '46', '45', '58', '64', '66', '73', '73', '86', '89', '97', '108', '97', '146', '122', '143', '143', '106', '98', '136', '117', '121', '113', '100', '158', '81', '64', '37', '58', '65', '54', '73', '67', '85', '83', '102', '106', '105', '228', '197', '274', '330', '353', '447', '414', '690', '647', '819', '982', '1094', '1379', '1644', '1638', '1932', '2487', '2592', '2948', '3472', '3675', '3346', '4166', '4722', '5205', '6298', '5980', '6097', '5017', '5623', '7930', '6779', '7700', '7390', '6249', '5593', '5658', '7467', '8248', '7058', '8470', '6713', '4917', '5517', '7349', '6748', '6766', '6451', '6145', '3771', '4528', '6754', '6644', '5867', '5673', '5255', '3502', '4110', '5840', '6856', '5633', '5576', '4277', '3531', '3465', '5535', '5324', '5307', '5070', '4339', '3599', '3435', '4590', '4669', '4947', '4662', '4199', '3156', '3171', '3853', '5372', '4699', '4971', '4146', '3239', '3086', '4701', '4977', '5548', '4948', '4277', '3414', '3180', '4762', '5190', '4988', '4627', '4253', '3275', '3428', '6609', '5280', '5143', '5088', '4438', '3342', '3886', '5473', '5083', '5183', '4891', '4547', '3454']
var dailyrec = {};

var cumcnf = ['580', '845', '1317', '2015', '2800', '4581', '6058', '7813', '9823', '11950', '14553', '17391', '20630', '24545', '28266', '31439', '34876', '37552', '40553', '43099', '45134', '59287', '64438', '67100', '69197', '71329', '73332', '75184', '75700', '76677', '77673', '78651', '79205', '80090', '80828', '81820', '83108', '84617', '86606', '88587', '90449', '93020', '95329', '98422', '102064', '106120', '110021', '114459', '119109', '126348', '134618', '145547', '156537', '169574', '182521', '198304', '219051', '245248', '275975', '305483', '337980', '379623', '423551', '472305', '533441', '598352', '665311', '725980', '790475', '864745', '942277', '1022840', '1107333', '1189237', '1260225', '1333594', '1412284', '1497242', '1582851', '1675247', '1754959', '1826920', '1897286', '1970784', '2053946', '2135114', '2220493', '2301276', '2376980', '2450762', '2526510', '2606917', '2692112', '2794233', '2884827', '2958447', '3028126', '3103813', '3183986', '3270210', '3365642', '3448804', '3531371', '3611088', '3692835', '3789132', '3885884', '3982725', '4072327', '4152826', '4227763', '4313761', '4403723', '4501230', '4601871', '4699026', '4781680', '4872200', '4968028', '5071527', '5179970', '5288912', '5389421', '5486662', '5577546', '5671251', '5778703', '5896401', '6023228', '6148460', '6258158', '6363649', '6479984', '6601328', '6732687', '6864015', '6993625', '7108496', '7216978', '7338931', '7475719', '7614889', '7758164', '7893237', '8017681', '8143576', '8287495', '8433883', '8575314', '8757523', '8915309', '9046114', '9185835', '9349991', '9523756', '9704357', '9898547', '10075115', '10238287']
var cumact = ['563', '786', '1238', '1910', '2669', '4415', '5823', '7519', '9439', '11448', '13921', '16525', '19561', '23146', '26528', '29239', '32069', '34055', '36320', '38038', '39216', '52039', '56247', '57378', '57990', '58581', '58747', '58622', '57217', '55906', '54418', '53541', '51596', '49924', '48014', '46215', '43730', '42264', '41299', '40415', '39224', '38874', '38520', '39430', '40962', '42348', '43915', '46378', '48188', '53411', '59265', '67525', '74766', '85584', '95707', '107676', '124716', '146999', '172934', '196850', '224588', '260852', '295468', '336262', '384733', '437038', '491448', '539407', '585659', '642444', '698737', '754954', '817026', '874965', '924014', '976535', '1023773', '1072365', '1125631', '1190814', '1237827', '1283482', '1326887', '1359028', '1402420', '1439509', '1491979', '1539355', '1579594', '1627246', '1649952', '1695288', '1744139', '1772361', '1816867', '1862896', '1883507', '1919747', '1945880', '1986611', '2034650', '2071030', '2116503', '2150548', '2179791', '2209811', '2258587', '2307122', '2337639', '2373899', '2407564', '2416947', '2441035', '2487823', '2528201', '2566747', '2599170', '2636745', '2674265', '2708206', '2751529', '2748313', '2785116', '2823054', '2845201', '2867809', '2900922', '2929226', '2982919', '3024883', '3021245', '3066519', '3070613', '3032811', '3076821', '3125088', '3173843', '3236851', '3267360', '3317782', '3317956', '3346688', '3399057', '3424005', '3471638', '3503569', '3534915', '3567272', '3604737', '3672837', '3713194', '3739971', '3793044', '3831915', '3867986', '3958215', '4049030', '4119943', '4184251']
var cumdec = ['17', '25', '41', '56', '80', '106', '132', '170', '213', '259', '304', '362', '426', '492', '565', '638', '724', '813', '910', '1018', '1115', '1261', '1383', '1526', '1669', '1775', '1873', '2009', '2126', '2247', '2360', '2460', '2618', '2699', '2763', '2800', '2858', '2923', '2977', '3050', '3117', '3202', '3285', '3387', '3493', '3598', '3826', '4023', '4297', '4627', '4980', '5427', '5841', '6531', '7178', '7997', '8979', '10073', '11452', '13096', '14734', '16666', '19153', '21745', '24693', '28165', '31840', '35186', '39352', '44074', '49279', '55577', '61557', '67654', '72671', '78294', '86224', '93003', '100703', '108093', '114342', '119935', '125593', '133060', '141308', '148366', '156836', '163549', '168466', '173983', '181332', '188080', '194846', '201297', '207442', '211213', '215741', '222495', '229139', '235006', '240679', '245934', '249436', '253546', '259386', '266242', '271875', '277451', '281728', '285259', '288724', '294259', '299583', '304890', '309960', '314299', '317898', '321333', '325923', '330592', '335539', '340201', '344400', '347556', '350727', '354580', '359952', '364651', '369622', '373768', '377007', '380093', '384794', '389771', '395319', '400267', '404544', '407958', '411138', '415900', '421090', '426078', '430705', '434958', '438233', '441661', '448270', '453550', '458693', '463781', '468219', '471561', '475447', '480920', '486003', '491186', '496077', '500624', '504078']
var cumrec = {};

var worldrates = {};
for (var i in cumcnf){
	var rec = parseInt(cumcnf[i])-(parseInt(cumact[i])+parseInt(cumdec[i]))
	cumrec[i] = rec
	var drec = cumrec[i]
	if (i>=1){
		drec = cumrec[i]-cumrec[i-1]
	}
	dailyrec[i] = drec
	var recrate = (100*dailyrec[i]/parseInt(cumcnf[i])).toFixed(2)
	var growthrate = (100*dailycnf[i]/parseInt(cumcnf[i])).toFixed(2)
	var decrate = (100*dailydec[i]/parseInt(cumcnf[i])).toFixed(2)
	worldrates[i] = [date[i], growthrate, recrate, decrate]
}

var worlddailydata = [date, dailycnf, dailyrec, dailydec]
var worldcum = [date, cumcnf, cumact, cumrec, cumdec]
	
	
plot2Data('dailyworld', worlddailydata)	
plotlinecum('cummulative', worldcum)
plotratedata('rateplot',worldrates)
	// // plot2Data('dailyworld', cumworld)
	// // plotlinecum('cummulative', cumworld)
	// // plotratedata('rateplot',rateworld)

