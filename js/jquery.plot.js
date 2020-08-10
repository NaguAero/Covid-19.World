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
				ticks: {beginAtZero: true,fontSize: 16, max: 30000000,
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

var date = ['Jan 22', 'Jan 23', 'Jan 24', 'Jan 25', 'Jan 26', 'Jan 27', 'Jan 28', 'Jan 29', 'Jan 30', 'Jan 31', 'Feb 01', 'Feb 02', 'Feb 03', 'Feb 04', 'Feb 05', 'Feb 06', 'Feb 07', 'Feb 08', 'Feb 09', 'Feb 10', 'Feb 11', 'Feb 12', 'Feb 13', 'Feb 14', 'Feb 15', 'Feb 16', 'Feb 17', 'Feb 18', 'Feb 19', 'Feb 20', 'Feb 21', 'Feb 22', 'Feb 23', 'Feb 24', 'Feb 25', 'Feb 26', 'Feb 27', 'Feb 28', 'Feb 29', 'Mar 01', 'Mar 02', 'Mar 03', 'Mar 04', 'Mar 05', 'Mar 06', 'Mar 07', 'Mar 08', 'Mar 09', 'Mar 10', 'Mar 11', 'Mar 12', 'Mar 13', 'Mar 14', 'Mar 15', 'Mar 16', 'Mar 17', 'Mar 18', 'Mar 19', 'Mar 20', 'Mar 21', 'Mar 22', 'Mar 23', 'Mar 24', 'Mar 25', 'Mar 26', 'Mar 27', 'Mar 28', 'Mar 29', 'Mar 30', 'Mar 31', 'Apr 01', 'Apr 02', 'Apr 03', 'Apr 04', 'Apr 05', 'Apr 06', 'Apr 07', 'Apr 08', 'Apr 09', 'Apr 10', 'Apr 11', 'Apr 12', 'Apr 13', 'Apr 14', 'Apr 15', 'Apr 16', 'Apr 17', 'Apr 18', 'Apr 19', 'Apr 20', 'Apr 21', 'Apr 22', 'Apr 23', 'Apr 24', 'Apr 25', 'Apr 26', 'Apr 27', 'Apr 28', 'Apr 29', 'Apr 30', 'May 01', 'May 02', 'May 03', 'May 04', 'May 05', 'May 06', 'May 07', 'May 08', 'May 09', 'May 10', 'May 11', 'May 12', 'May 13', 'May 14', 'May 15', 'May 16', 'May 17', 'May 18', 'May 19', 'May 20', 'May 21', 'May 22', 'May 23', 'May 24', 'May 25', 'May 26', 'May 27', 'May 28', 'May 29', 'May 30', 'May 31', 'Jun 01', 'Jun 02', 'Jun 03', 'Jun 04', 'Jun 05', 'Jun 06', 'Jun 07', 'Jun 08', 'Jun 09', 'Jun 10', 'Jun 11', 'Jun 12', 'Jun 13', 'Jun 14', 'Jun 15', 'Jun 16', 'Jun 17', 'Jun 18', 'Jun 19', 'Jun 20', 'Jun 21', 'Jun 22', 'Jun 23', 'Jun 24', 'Jun 25', 'Jun 26', 'Jun 27', 'Jun 28', 'Jun 29', 'Jun 30', 'Jul 01', 'Jul 02', 'Jul 03', 'Jul 04', 'Jul 05', 'Jul 06', 'Jul 07', 'Jul 08', 'Jul 09', 'Jul 10', 'Jul 11', 'Jul 12', 'Jul 13', 'Jul 14', 'Jul 15', 'Jul 16', 'Jul 17', 'Jul 18', 'Jul 19', 'Jul 20', 'Jul 21', 'Jul 22', 'Jul 23', 'Jul 24', 'Jul 25', 'Jul 26', 'Jul 27', 'Jul 28', 'Jul 29', 'Jul 30', 'Jul 31', 'Aug 01', 'Aug 02', 'Aug 03', 'Aug 04', 'Aug 05', 'Aug 06', 'Aug 07', 'Aug 08', 'Aug 09']
var dailycnf = ['0', '265', '472', '698', '785', '1781', '1477', '1755', '2010', '2127', '2603', '2838', '3239', '3915', '3721', '3173', '3437', '2676', '3001', '2546', '2035', '14153', '5151', '2662', '2097', '2132', '2003', '1852', '516', '977', '996', '978', '554', '885', '738', '992', '1288', '1509', '1989', '1980', '1861', '2571', '2304', '3089', '3641', '4052', '3894', '4434', '4644', '7232', '8258', '10913', '10960', '13022', '12968', '15743', '20713', '26180', '30656', '29419', '32433', '41570', '43854', '48663', '60956', '64710', '66700', '60486', '64278', '74039', '77172', '80221', '84130', '81633', '70492', '73149', '78403', '84516', '85268', '91621', '79313', '71576', '70125', '73171', '82781', '80851', '85008', '80398', '75204', '73528', '75495', '80150', '84923', '101756', '90307', '73323', '69376', '75491', '79913', '85906', '95036', '82950', '82237', '79492', '81488', '95938', '96389', '96640', '89390', '80294', '74691', '85792', '89771', '97355', '100443', '96984', '82609', '90578', '95898', '103576', '108466', '108989', '100524', '97396', '90953', '93935', '107597', '117830', '127004', '125537', '109958', '105810', '116462', '121411', '131475', '131454', '129685', '114945', '108678', '122043', '136950', '139335', '143418', '135320', '124599', '126164', '144221', '146561', '141809', '182716', '158096', '131218', '140286', '164639', '174493', '181399', '195639', '178629', '164868', '162279', '175583', '199163', '210209', '214904', '196231', '178762', '172188', '209136', '214485', '224555', '238279', '217387', '199143', '196725', '220185', '235627', '249706', '240974', '227001', '222766', '205695', '239705', '280387', '276937', '289648', '261924', '225371', '218647', '248432', '289173', '287389', '289632', '258773', '224694', '200026', '256256', '271685', '283766', '283348', '264662', '219487']
var dailydec = ['0', '8', '16', '15', '24', '26', '26', '38', '43', '46', '45', '58', '64', '66', '73', '73', '86', '89', '97', '108', '97', '146', '122', '143', '143', '106', '98', '136', '117', '121', '113', '100', '158', '81', '64', '37', '58', '65', '54', '73', '67', '85', '83', '102', '106', '105', '228', '197', '274', '330', '353', '448', '414', '691', '645', '819', '986', '1100', '1384', '1648', '1648', '1937', '2495', '2593', '2966', '3478', '3710', '3381', '4176', '4739', '5200', '6303', '6017', '6155', '5079', '5651', '7903', '6802', '7684', '7415', '6338', '5681', '5730', '7450', '8200', '7043', '8492', '6701', '4993', '5579', '7235', '6667', '6782', '6422', '6199', '3854', '4536', '6773', '6649', '5853', '5708', '5336', '3600', '4123', '5861', '6875', '5641', '5530', '4331', '4065', '3521', '5571', '5262', '5317', '5060', '4403', '3687', '3520', '4625', '4672', '5007', '4697', '4232', '3224', '3370', '3838', '5377', '4732', '4971', '4189', '3329', '3123', '4727', '4988', '5626', '4967', '4343', '3575', '3229', '4824', '5233', '5085', '4703', '4353', '3384', '3496', '6658', '5306', '5252', '5212', '4563', '3445', '3904', '5517', '5146', '5266', '4928', '4677', '3561', '3517', '5147', '4949', '5260', '5300', '4626', '3720', '3670', '5628', '5671', '5523', '5537', '5131', '4254', '3891', '5592', '5917', '5879', '5681', '5125', '4423', '4123', '5838', '7180', '6368', '6243', '5741', '4355', '4234', '5682', '7037', '6457', '6469', '5664', '4483', '4373', '6300', '6840', '6452', '6444', '5624', '4813']
var dailyrec = {};

var cumcnf = ['580', '845', '1317', '2015', '2800', '4581', '6058', '7813', '9823', '11950', '14553', '17391', '20630', '24545', '28266', '31439', '34876', '37552', '40553', '43099', '45134', '59287', '64438', '67100', '69197', '71329', '73332', '75184', '75700', '76677', '77673', '78651', '79205', '80090', '80828', '81820', '83108', '84617', '86606', '88586', '90447', '93018', '95322', '98411', '102052', '106104', '109998', '114432', '119076', '126308', '134566', '145479', '156439', '169461', '182429', '198172', '218885', '245065', '275721', '305140', '337573', '379143', '422997', '471660', '532616', '597326', '664026', '724512', '788790', '862829', '940001', '1020222', '1104352', '1185985', '1256477', '1329626', '1408029', '1492545', '1577813', '1669434', '1748747', '1820323', '1890448', '1963619', '2046400', '2127251', '2212259', '2292657', '2367861', '2441389', '2516884', '2597034', '2681957', '2783713', '2874020', '2947343', '3016719', '3092210', '3172123', '3258029', '3353065', '3436015', '3518252', '3597744', '3679232', '3775170', '3871559', '3968199', '4057589', '4137883', '4212574', '4298366', '4388137', '4485492', '4585935', '4682919', '4765528', '4856106', '4952004', '5055580', '5164046', '5273035', '5373559', '5470955', '5561908', '5655843', '5763440', '5881270', '6008274', '6133811', '6243769', '6349579', '6466041', '6587452', '6718927', '6850381', '6980066', '7095011', '7203689', '7325732', '7462682', '7602017', '7745435', '7880755', '8005354', '8131518', '8275739', '8422300', '8564109', '8746825', '8904921', '9036139', '9176425', '9341064', '9515557', '9696956', '9892595', '10071224', '10236092', '10398371', '10573954', '10773117', '10983326', '11198230', '11394461', '11573223', '11745411', '11954547', '12169032', '12393587', '12631866', '12849253', '13048396', '13245121', '13465306', '13700933', '13950639', '14191613', '14418614', '14641380', '14847075', '15086780', '15367167', '15644104', '15933752', '16195676', '16421047', '16639694', '16888126', '17177299', '17464688', '17754320', '18013093', '18237787', '18437813', '18694069', '18965754', '19249520', '19532868', '19797530', '20017017']
var cumact = ['563', '786', '1238', '1910', '2669', '4415', '5823', '7519', '9439', '11448', '13921', '16525', '19561', '23146', '26528', '29239', '32069', '34055', '36320', '38038', '39216', '52039', '56247', '57378', '57990', '58581', '58747', '58622', '57217', '55906', '54418', '53541', '51596', '49924', '48014', '46215', '43730', '42264', '41299', '40414', '39222', '38872', '38513', '39418', '40950', '42332', '43892', '46351', '48155', '53370', '59212', '67455', '74666', '85468', '95614', '107544', '124546', '146806', '172665', '196488', '224152', '260377', '294911', '335618', '383915', '436005', '490117', '537862', '583885', '640443', '696379', '752260', '813911', '871575', '920009', '972240', '1019285', '1067385', '1120301', '1184691', '1231094', '1276133', '1319183', '1350873', '1393794', '1430263', '1482012', '1528734', '1568046', '1615066', '1637254', '1682013', '1730091', '1757496', '1801296', '1846490', '1866385', '1902001', '1927575', '1967583', '2014729', '2050383', '2095247', '2128664', '2157062', '2186039', '2233651', '2280830', '2309582', '2343613', '2376049', '2388430', '2411667', '2457741', '2497390', '2535050', '2566708', '2604316', '2641212', '2674417', '2716977', '2713340', '2749893', '2787212', '2808861', '2831004', '2863553', '2890980', '2944038', '2985705', '2981281', '3026232', '3029637', '2992045', '3035162', '3082695', '3131357', '3193404', '3223546', '3272938', '3272045', '3300479', '3352319', '3376865', '3423555', '3455324', '3486348', '3518148', '3555138', '3623184', '3662891', '3689649', '3742971', '3781806', '3817905', '3908464', '4000516', '4073090', '4138883', '4187873', '4227004', '4288750', '4293512', '4368616', '4418606', '4496298', '4559231', '4554321', '4584569', '4647290', '4732131', '4798684', '4888757', '4967551', '5031752', '5071605', '5073984', '5133412', '5204080', '5298789', '5328718', '5358643', '5392448', '5477655', '5574380', '5639875', '5725434', '5756176', '5773961', '5818144', '5857754', '5915278', '5998006', '6067060', '6057530', '6074321', '6099000', '6182342', '6271893', '6353409', '6390960']
var cumdec = ['17', '25', '41', '56', '80', '106', '132', '170', '213', '259', '304', '362', '426', '492', '565', '638', '724', '813', '910', '1018', '1115', '1261', '1383', '1526', '1669', '1775', '1873', '2009', '2126', '2247', '2360', '2460', '2618', '2699', '2763', '2800', '2858', '2923', '2977', '3050', '3117', '3202', '3285', '3387', '3493', '3598', '3826', '4023', '4297', '4627', '4980', '5428', '5842', '6533', '7178', '7997', '8983', '10083', '11467', '13115', '14763', '16700', '19195', '21788', '24754', '28232', '31942', '35323', '39499', '44238', '49438', '55741', '61758', '67913', '72992', '78643', '86546', '93348', '101032', '108447', '114785', '120466', '126196', '133646', '141846', '148889', '157381', '164082', '169075', '174654', '181889', '188556', '195338', '201760', '207959', '211813', '216349', '223122', '229771', '235624', '241332', '246668', '250268', '254391', '260252', '267127', '272768', '278298', '282629', '286694', '290215', '295786', '301048', '306365', '311425', '315828', '319515', '323035', '327660', '332332', '337339', '342036', '346268', '349492', '352862', '356700', '362077', '366809', '371780', '375969', '379298', '382421', '387148', '392136', '397762', '402729', '407072', '410647', '413876', '418700', '423933', '429018', '433721', '438074', '441458', '444954', '451612', '456918', '462170', '467382', '471945', '475390', '479294', '484811', '489957', '495223', '500151', '504828', '508389', '511906', '517053', '522002', '527262', '532562', '537188', '540908', '544578', '550206', '555877', '561400', '566937', '572068', '576322', '580213', '585805', '591722', '597601', '603282', '608407', '612830', '616953', '622791', '629971', '636339', '642582', '648323', '652678', '656912', '662594', '669631', '676088', '682557', '688221', '692704', '697077', '703377', '710217', '716669', '723113', '728737', '733550']
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

