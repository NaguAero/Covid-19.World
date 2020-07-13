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

var date = ['Jan 22', 'Jan 23', 'Jan 24', 'Jan 25', 'Jan 26', 'Jan 27', 'Jan 28', 'Jan 29', 'Jan 30', 'Jan 31', 'Feb 01', 'Feb 02', 'Feb 03', 'Feb 04', 'Feb 05', 'Feb 06', 'Feb 07', 'Feb 08', 'Feb 09', 'Feb 10', 'Feb 11', 'Feb 12', 'Feb 13', 'Feb 14', 'Feb 15', 'Feb 16', 'Feb 17', 'Feb 18', 'Feb 19', 'Feb 20', 'Feb 21', 'Feb 22', 'Feb 23', 'Feb 24', 'Feb 25', 'Feb 26', 'Feb 27', 'Feb 28', 'Feb 29', 'Mar 01', 'Mar 02', 'Mar 03', 'Mar 04', 'Mar 05', 'Mar 06', 'Mar 07', 'Mar 08', 'Mar 09', 'Mar 10', 'Mar 11', 'Mar 12', 'Mar 13', 'Mar 14', 'Mar 15', 'Mar 16', 'Mar 17', 'Mar 18', 'Mar 19', 'Mar 20', 'Mar 21', 'Mar 22', 'Mar 23', 'Mar 24', 'Mar 25', 'Mar 26', 'Mar 27', 'Mar 28', 'Mar 29', 'Mar 30', 'Mar 31', 'Apr 01', 'Apr 02', 'Apr 03', 'Apr 04', 'Apr 05', 'Apr 06', 'Apr 07', 'Apr 08', 'Apr 09', 'Apr 10', 'Apr 11', 'Apr 12', 'Apr 13', 'Apr 14', 'Apr 15', 'Apr 16', 'Apr 17', 'Apr 18', 'Apr 19', 'Apr 20', 'Apr 21', 'Apr 22', 'Apr 23', 'Apr 24', 'Apr 25', 'Apr 26', 'Apr 27', 'Apr 28', 'Apr 29', 'Apr 30', 'May 01', 'May 02', 'May 03', 'May 04', 'May 05', 'May 06', 'May 07', 'May 08', 'May 09', 'May 10', 'May 11', 'May 12', 'May 13', 'May 14', 'May 15', 'May 16', 'May 17', 'May 18', 'May 19', 'May 20', 'May 21', 'May 22', 'May 23', 'May 24', 'May 25', 'May 26', 'May 27', 'May 28', 'May 29', 'May 30', 'May 31', 'Jun 01', 'Jun 02', 'Jun 03', 'Jun 04', 'Jun 05', 'Jun 06', 'Jun 07', 'Jun 08', 'Jun 09', 'Jun 10', 'Jun 11', 'Jun 12', 'Jun 13', 'Jun 14', 'Jun 15', 'Jun 16', 'Jun 17', 'Jun 18', 'Jun 19', 'Jun 20', 'Jun 21', 'Jun 22', 'Jun 23', 'Jun 24', 'Jun 25', 'Jun 26', 'Jun 27', 'Jun 28', 'Jun 29', 'Jun 30', 'Jul 01', 'Jul 02', 'Jul 03', 'Jul 04', 'Jul 05', 'Jul 06', 'Jul 07', 'Jul 08', 'Jul 09', 'Jul 10', 'Jul 11', 'Jul 12']
var dailycnf = ['null', '265', '472', '698', '785', '1781', '1477', '1755', '2010', '2127', '2603', '2838', '3239', '3915', '3721', '3173', '3437', '2676', '3001', '2546', '2035', '14153', '5151', '2662', '2097', '2132', '2003', '1852', '516', '977', '996', '978', '554', '885', '738', '992', '1288', '1509', '1989', '1980', '1862', '2570', '2306', '3090', '3637', '4052', '3894', '4434', '4644', '7232', '8258', '10912', '10959', '13016', '12934', '15764', '20686', '26143', '30666', '29411', '32440', '41554', '43800', '48624', '60961', '64666', '66781', '60484', '64262', '74018', '77151', '80203', '84093', '81605', '70467', '73070', '78374', '84458', '85239', '91576', '79255', '71526', '70067', '73114', '82776', '80815', '84966', '80314', '75193', '73488', '75461', '80101', '84889', '101714', '90281', '73291', '69367', '75467', '79882', '85869', '95004', '82923', '82206', '79445', '81463', '95896', '96348', '96615', '89354', '80221', '74667', '85739', '89774', '97311', '100406', '96965', '82577', '90501', '95867', '103547', '108422', '108945', '100501', '97355', '90920', '93897', '107550', '117763', '126941', '125469', '109922', '105737', '116424', '121375', '131438', '131410', '129637', '114909', '108647', '122008', '136909', '139264', '143405', '135256', '124524', '126075', '144131', '146592', '141609', '182492', '158038', '131077', '140076', '164514', '174307', '181201', '195406', '178387', '164647', '162047', '175349', '198788', '209549', '213778', '195788', '178387', '171737', '208324', '213687', '223640', '236918', '214786', '194677']
var dailydec = ['null', '8', '16', '15', '24', '26', '26', '38', '43', '46', '45', '58', '64', '66', '73', '73', '86', '89', '97', '108', '97', '146', '122', '143', '143', '106', '98', '136', '117', '121', '113', '100', '158', '81', '64', '37', '58', '65', '54', '73', '67', '85', '83', '102', '106', '105', '228', '197', '274', '330', '353', '448', '414', '691', '645', '819', '986', '1100', '1383', '1648', '1648', '1937', '2494', '2592', '2965', '3476', '3710', '3379', '4175', '4736', '5199', '6299', '6010', '6152', '5074', '5637', '7900', '6798', '7680', '7403', '6335', '5678', '5723', '7444', '8193', '7039', '8485', '6688', '4976', '5561', '7226', '6653', '6768', '6405', '6178', '3844', '4521', '6755', '6621', '5821', '5684', '5312', '3567', '4104', '5827', '6842', '5614', '5501', '4299', '4042', '3499', '5542', '5228', '5285', '5011', '4360', '3648', '3478', '4585', '4636', '4961', '4664', '4189', '3194', '3309', '3786', '5317', '4694', '4928', '4141', '3285', '3078', '4673', '4930', '5574', '4910', '4289', '3444', '3184', '4772', '5152', '5003', '4616', '4266', '3301', '3440', '6589', '5210', '5160', '5116', '4466', '3362', '3836', '5459', '5057', '5182', '4850', '4568', '3483', '3440', '5046', '4855', '5164', '5188', '4537', '3607', '3577', '5524', '5524', '5418', '5435', '5015', '3956']
var dailyrec = {};

var cumcnf = ['580', '845', '1317', '2015', '2800', '4581', '6058', '7813', '9823', '11950', '14553', '17391', '20630', '24545', '28266', '31439', '34876', '37552', '40553', '43099', '45134', '59287', '64438', '67100', '69197', '71329', '73332', '75184', '75700', '76677', '77673', '78651', '79205', '80090', '80828', '81820', '83108', '84617', '86606', '88586', '90448', '93018', '95324', '98414', '102051', '106103', '109997', '114431', '119075', '126307', '134565', '145477', '156436', '169452', '182386', '198150', '218836', '244979', '275645', '305056', '337496', '379050', '422850', '471474', '532435', '597101', '663882', '724366', '788628', '862646', '939797', '1020000', '1104093', '1185698', '1256165', '1329235', '1407609', '1492067', '1577306', '1668882', '1748137', '1819663', '1889730', '1962844', '2045620', '2126435', '2211401', '2291715', '2366908', '2440396', '2515857', '2595958', '2680847', '2782561', '2872842', '2946133', '3015500', '3090967', '3170849', '3256718', '3351722', '3434645', '3516851', '3596296', '3677759', '3773655', '3870003', '3966618', '4055972', '4136193', '4210860', '4296599', '4386373', '4483684', '4584090', '4681055', '4763632', '4854133', '4950000', '5053547', '5161969', '5270914', '5371415', '5468770', '5559690', '5653587', '5761137', '5878900', '6005841', '6131310', '6241232', '6346969', '6463393', '6584768', '6716206', '6847616', '6977253', '7092162', '7200809', '7322817', '7459726', '7598990', '7742395', '7877651', '8002175', '8128250', '8272381', '8418973', '8560582', '8743074', '8901112', '9032189', '9172265', '9336779', '9511086', '9692287', '9887693', '10066080', '10230727', '10392774', '10568123', '10766911', '10976460', '11190238', '11386026', '11564413', '11736150', '11944474', '12158161', '12381801', '12618719', '12833505', '13028182']
var cumact = ['563', '786', '1238', '1910', '2669', '4415', '5823', '7519', '9439', '11448', '13921', '16525', '19561', '23146', '26528', '29239', '32069', '34055', '36320', '38038', '39216', '52039', '56247', '57378', '57990', '58581', '58747', '58622', '57217', '55906', '54418', '53541', '51596', '49924', '48014', '46215', '43730', '42264', '41299', '40414', '39223', '38872', '38515', '39422', '40949', '42331', '43891', '46350', '48154', '53370', '59212', '67454', '74664', '85460', '95572', '107522', '124497', '146720', '172590', '196405', '224076', '260246', '294727', '335391', '383668', '435723', '489909', '537646', '583655', '640172', '696088', '751943', '813583', '871162', '919628', '971832', '1018780', '1066850', '1119761', '1184108', '1230443', '1275493', '1318518', '1350151', '1393053', '1429534', '1481274', '1527965', '1567354', '1614399', '1636604', '1681404', '1729543', '1756972', '1800812', '1846017', '1865983', '1901634', '1927234', '1967286', '2014492', '2050185', '2095121', '2128534', '2156980', '2185965', '2233615', '2280816', '2309580', '2343599', '2376056', '2388447', '2411750', '2457832', '2497508', '2535256', '2566962', '2604575', '2641600', '2674836', '2717420', '2713800', '2750405', '2787753', '2809451', '2831647', '2864259', '2891697', '2944771', '2986463', '2982146', '3027088', '3030575', '2993085', '3036264', '3083893', '3132596', '3194851', '3225042', '3274517', '3273819', '3302365', '3354345', '3379008', '3425824', '3457600', '3488662', '3520684', '3557617', '3625588', '3665365', '3692121', '3745318', '3784142', '3820194', '3910686', '4002673', '4075202', '4140903', '4189828', '4228959', '4290548', '4294896', '4369204', '4418946', '4496530', '4559169', '4553678', '4583461', '4645493', '4729219', '4793468', '4881579']
var cumdec = ['17', '25', '41', '56', '80', '106', '132', '170', '213', '259', '304', '362', '426', '492', '565', '638', '724', '813', '910', '1018', '1115', '1261', '1383', '1526', '1669', '1775', '1873', '2009', '2126', '2247', '2360', '2460', '2618', '2699', '2763', '2800', '2858', '2923', '2977', '3050', '3117', '3202', '3285', '3387', '3493', '3598', '3826', '4023', '4297', '4627', '4980', '5428', '5842', '6533', '7178', '7997', '8983', '10083', '11466', '13114', '14762', '16699', '19193', '21785', '24750', '28226', '31936', '35315', '39490', '44226', '49425', '55724', '61734', '67886', '72960', '78597', '86497', '93295', '100975', '108378', '114713', '120391', '126114', '133558', '141751', '148790', '157275', '163963', '168939', '174500', '181726', '188379', '195147', '201552', '207730', '211574', '216095', '222850', '229471', '235292', '240976', '246288', '249855', '253959', '259786', '266628', '272242', '277743', '282042', '286084', '289583', '295125', '300353', '305638', '310649', '315009', '318657', '322135', '326720', '331356', '336317', '340981', '345170', '348364', '351673', '355459', '360776', '365470', '370398', '374539', '377824', '380902', '385575', '390505', '396079', '400989', '405278', '408722', '411906', '416678', '421830', '426833', '431449', '435715', '439016', '442456', '449045', '454255', '459415', '464531', '468997', '472359', '476195', '481654', '486711', '491893', '496743', '501311', '504794', '508234', '513280', '518135', '523299', '528487', '533024', '536631', '540208', '545732', '551256', '556674', '562109', '567124', '571080']
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

