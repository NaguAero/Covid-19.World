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

var date = ['Jan 22', 'Jan 23', 'Jan 24', 'Jan 25', 'Jan 26', 'Jan 27', 'Jan 28', 'Jan 29', 'Jan 30', 'Jan 31', 'Feb 01', 'Feb 02', 'Feb 03', 'Feb 04', 'Feb 05', 'Feb 06', 'Feb 07', 'Feb 08', 'Feb 09', 'Feb 10', 'Feb 11', 'Feb 12', 'Feb 13', 'Feb 14', 'Feb 15', 'Feb 16', 'Feb 17', 'Feb 18', 'Feb 19', 'Feb 20', 'Feb 21', 'Feb 22', 'Feb 23', 'Feb 24', 'Feb 25', 'Feb 26', 'Feb 27', 'Feb 28', 'Feb 29', 'Mar 01', 'Mar 02', 'Mar 03', 'Mar 04', 'Mar 05', 'Mar 06', 'Mar 07', 'Mar 08', 'Mar 09', 'Mar 10', 'Mar 11', 'Mar 12', 'Mar 13', 'Mar 14', 'Mar 15', 'Mar 16', 'Mar 17', 'Mar 18', 'Mar 19', 'Mar 20', 'Mar 21', 'Mar 22', 'Mar 23', 'Mar 24', 'Mar 25', 'Mar 26', 'Mar 27', 'Mar 28', 'Mar 29', 'Mar 30', 'Mar 31', 'Apr 01', 'Apr 02', 'Apr 03', 'Apr 04', 'Apr 05', 'Apr 06', 'Apr 07', 'Apr 08', 'Apr 09', 'Apr 10', 'Apr 11', 'Apr 12', 'Apr 13', 'Apr 14', 'Apr 15', 'Apr 16', 'Apr 17', 'Apr 18', 'Apr 19', 'Apr 20', 'Apr 21', 'Apr 22', 'Apr 23', 'Apr 24', 'Apr 25', 'Apr 26', 'Apr 27', 'Apr 28', 'Apr 29', 'Apr 30', 'May 01', 'May 02', 'May 03', 'May 04', 'May 05', 'May 06', 'May 07', 'May 08', 'May 09', 'May 10', 'May 11', 'May 12', 'May 13', 'May 14', 'May 15', 'May 16', 'May 17', 'May 18', 'May 19', 'May 20', 'May 21', 'May 22', 'May 23', 'May 24', 'May 25', 'May 26', 'May 27', 'May 28', 'May 29', 'May 30', 'May 31', 'Jun 01', 'Jun 02', 'Jun 03', 'Jun 04', 'Jun 05', 'Jun 06', 'Jun 07', 'Jun 08', 'Jun 09', 'Jun 10', 'Jun 11', 'Jun 12', 'Jun 13', 'Jun 14', 'Jun 15', 'Jun 16', 'Jun 17', 'Jun 18', 'Jun 19', 'Jun 20', 'Jun 21', 'Jun 22', 'Jun 23', 'Jun 24', 'Jun 25', 'Jun 26', 'Jun 27', 'Jun 28', 'Jun 29', 'Jun 30', 'Jul 01', 'Jul 02', 'Jul 03', 'Jul 04', 'Jul 05', 'Jul 06', 'Jul 07', 'Jul 08', 'Jul 09', 'Jul 10', 'Jul 11', 'Jul 12', 'Jul 13', 'Jul 14', 'Jul 15', 'Jul 16', 'Jul 17', 'Jul 18', 'Jul 19', 'Jul 20', 'Jul 21', 'Jul 22', 'Jul 23', 'Jul 24', 'Jul 25']
var dailycnf = ['0', '265', '472', '698', '785', '1781', '1477', '1755', '2010', '2127', '2603', '2838', '3239', '3915', '3721', '3173', '3437', '2676', '3001', '2546', '2035', '14153', '5151', '2662', '2097', '2132', '2003', '1852', '516', '977', '996', '978', '554', '885', '738', '992', '1288', '1509', '1989', '1980', '1862', '2570', '2306', '3090', '3637', '4052', '3894', '4434', '4644', '7232', '8258', '10913', '10960', '13017', '12934', '15765', '20690', '26145', '30670', '29421', '32442', '41559', '43826', '48630', '60967', '64686', '66788', '60512', '64277', '74037', '77165', '80218', '84117', '81627', '70485', '73137', '78394', '84507', '85258', '91614', '79303', '71571', '70113', '73137', '82804', '80841', '85000', '80343', '75248', '73512', '75490', '80131', '84917', '101749', '90301', '73317', '69389', '75488', '79910', '85899', '95028', '82947', '82239', '79484', '81486', '95935', '96383', '96636', '89385', '80290', '74689', '85765', '89789', '97351', '100439', '96979', '82603', '90573', '95895', '103573', '108465', '108985', '100521', '97392', '90949', '93931', '107598', '117829', '127003', '125523', '109949', '105798', '116451', '121401', '131466', '131445', '129672', '114939', '108670', '122032', '136942', '139297', '143439', '135294', '124593', '126151', '144216', '146666', '141692', '182603', '158197', '131219', '140249', '164650', '174480', '181388', '195617', '178640', '164843', '162271', '175582', '199127', '210186', '214889', '196236', '178724', '172170', '209108', '214458', '224530', '238176', '217410', '199124', '196698', '220220', '235595', '249668', '240936', '227019', '222732', '205620', '239697', '280355', '276433', '288997', '257789']
var dailydec = ['0', '8', '16', '15', '24', '26', '26', '38', '43', '46', '45', '58', '64', '66', '73', '73', '86', '89', '97', '108', '97', '146', '122', '143', '143', '106', '98', '136', '117', '121', '113', '100', '158', '81', '64', '37', '58', '65', '54', '73', '67', '85', '83', '102', '106', '105', '228', '197', '274', '330', '353', '448', '414', '691', '645', '819', '986', '1100', '1384', '1648', '1648', '1937', '2495', '2593', '2965', '3477', '3711', '3380', '4177', '4738', '5201', '6303', '6016', '6155', '5077', '5650', '7904', '6802', '7684', '7415', '6338', '5682', '5729', '7448', '8199', '7043', '8491', '6700', '4991', '5580', '7236', '6666', '6782', '6422', '6196', '3853', '4535', '6775', '6644', '5850', '5704', '5335', '3600', '4121', '5858', '6871', '5640', '5526', '4328', '4063', '3519', '5570', '5259', '5314', '5055', '4399', '3685', '3520', '4622', '4671', '4999', '4696', '4230', '3223', '3370', '3835', '5375', '4730', '4970', '4186', '3329', '3121', '4723', '4987', '5622', '4965', '4340', '3574', '3227', '4821', '5230', '5081', '4699', '4350', '3383', '3493', '6652', '5300', '5247', '5208', '4561', '3444', '3901', '5512', '5140', '5259', '4922', '4671', '3559', '3513', '5139', '4941', '5254', '5295', '4622', '3715', '3661', '5616', '5655', '5508', '5522', '5119', '4249', '3878', '5576', '5898', '5862', '5659', '5108', '4409', '4074', '5785', '7121', '6309', '6199', '5689']
var dailyrec = {};

var cumcnf = ['580', '845', '1317', '2015', '2800', '4581', '6058', '7813', '9823', '11950', '14553', '17391', '20630', '24545', '28266', '31439', '34876', '37552', '40553', '43099', '45134', '59287', '64438', '67100', '69197', '71329', '73332', '75184', '75700', '76677', '77673', '78651', '79205', '80090', '80828', '81820', '83108', '84617', '86606', '88586', '90448', '93018', '95324', '98414', '102051', '106103', '109997', '114431', '119075', '126307', '134565', '145478', '156438', '169455', '182389', '198154', '218844', '244989', '275659', '305080', '337522', '379081', '422907', '471537', '532504', '597190', '663978', '724490', '788767', '862804', '939969', '1020187', '1104304', '1185931', '1256416', '1329553', '1407947', '1492454', '1577712', '1669326', '1748629', '1820200', '1890313', '1963450', '2046254', '2127095', '2212095', '2292438', '2367686', '2441198', '2516688', '2596819', '2681736', '2783485', '2873786', '2947103', '3016492', '3091980', '3171890', '3257789', '3352817', '3435764', '3518003', '3597487', '3678973', '3774908', '3871291', '3967927', '4057312', '4137602', '4212291', '4298056', '4387845', '4485196', '4585635', '4682614', '4765217', '4855790', '4951685', '5055258', '5163723', '5272708', '5373229', '5470621', '5561570', '5655501', '5763099', '5880928', '6007931', '6133454', '6243403', '6349201', '6465652', '6587053', '6718519', '6849964', '6979636', '7094575', '7203245', '7325277', '7462219', '7601516', '7744955', '7880249', '8004842', '8130993', '8275209', '8421875', '8563567', '8746170', '8904367', '9035586', '9175835', '9340485', '9514965', '9696353', '9891970', '10070610', '10235453', '10397724', '10573306', '10772433', '10982619', '11197508', '11393744', '11572468', '11744638', '11953746', '12168204', '12392734', '12630910', '12848320', '13047444', '13244142', '13464362', '13699957', '13949625', '14190561', '14417580', '14640312', '14845932', '15085629', '15365984', '15642417', '15931414', '16189203']
var cumact = ['563', '786', '1238', '1910', '2669', '4415', '5823', '7519', '9439', '11448', '13921', '16525', '19561', '23146', '26528', '29239', '32069', '34055', '36320', '38038', '39216', '52039', '56247', '57378', '57990', '58581', '58747', '58622', '57217', '55906', '54418', '53541', '51596', '49924', '48014', '46215', '43730', '42264', '41299', '40414', '39223', '38872', '38515', '39421', '40949', '42331', '43891', '46350', '48154', '53369', '59211', '67454', '74665', '85462', '95574', '107526', '124505', '146730', '172603', '196428', '224101', '260315', '294821', '335495', '383804', '435871', '490070', '537842', '583863', '640420', '696348', '752226', '813865', '871523', '919952', '972172', '1019207', '1067298', '1120204', '1184587', '1230980', '1276013', '1319052', '1350710', '1393655', '1430114', '1481856', '1528524', '1567882', '1614885', '1637067', '1681808', '1729880', '1757278', '1801075', '1846264', '1866173', '1901784', '1927360', '1967364', '2014506', '2050158', '2095024', '2128435', '2156834', '2185812', '2233419', '2280598', '2309348', '2343377', '2375813', '2388168', '2411426', '2457499', '2497149', '2534808', '2566462', '2604065', '2640961', '2674164', '2716731', '2713091', '2749643', '2786959', '2808604', '2830746', '2863298', '2890726', '2943784', '2985440', '2981007', '3025948', '3029346', '2991745', '3034857', '3082383', '3131035', '3193077', '3223213', '3272597', '3271699', '3300099', '3351964', '3376487', '3423172', '3454931', '3485956', '3517867', '3554745', '3622682', '3662492', '3689252', '3742540', '3781391', '3817483', '3908038', '4000074', '4072665', '4138435', '4187421', '4226559', '4288277', '4293022', '4368116', '4418115', '4495774', '4558698', '4553772', '4584009', '4646720', '4731473', '4798061', '4888120', '4966900', '5031152', '5070992', '5073350', '5132762', '5203465', '5298154', '5328057', '5358027', '5391859', '5476621', '5572739', '5634151']
var cumdec = ['17', '25', '41', '56', '80', '106', '132', '170', '213', '259', '304', '362', '426', '492', '565', '638', '724', '813', '910', '1018', '1115', '1261', '1383', '1526', '1669', '1775', '1873', '2009', '2126', '2247', '2360', '2460', '2618', '2699', '2763', '2800', '2858', '2923', '2977', '3050', '3117', '3202', '3285', '3387', '3493', '3598', '3826', '4023', '4297', '4627', '4980', '5428', '5842', '6533', '7178', '7997', '8983', '10083', '11467', '13115', '14763', '16700', '19195', '21788', '24753', '28230', '31941', '35321', '39498', '44236', '49437', '55740', '61756', '67911', '72988', '78638', '86542', '93344', '101028', '108443', '114781', '120463', '126192', '133640', '141839', '148882', '157373', '164073', '169064', '174644', '181880', '188546', '195328', '201750', '207946', '211799', '216334', '223109', '229753', '235603', '241307', '246642', '250242', '254363', '260221', '267092', '272732', '278258', '282586', '286649', '290168', '295738', '300997', '306311', '311366', '315765', '319450', '322970', '327592', '332263', '337262', '341958', '346188', '349411', '352781', '356616', '361991', '366721', '371691', '375877', '379206', '382327', '387050', '392037', '397659', '402624', '406964', '410538', '413765', '418586', '423816', '428897', '433596', '437946', '441329', '444822', '451474', '456774', '462021', '467229', '471790', '475234', '479135', '484647', '489787', '495046', '499968', '504639', '508198', '511711', '516850', '521791', '527045', '532340', '536962', '540677', '544338', '549954', '555609', '561117', '566639', '571758', '576007', '579885', '585461', '591359', '597221', '602880', '607988', '612397', '616471', '622256', '629377', '635686', '641885', '647574']
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

