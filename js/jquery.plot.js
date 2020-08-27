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

var date = ['Jan 22', 'Jan 23', 'Jan 24', 'Jan 25', 'Jan 26', 'Jan 27', 'Jan 28', 'Jan 29', 'Jan 30', 'Jan 31', 'Feb 01', 'Feb 02', 'Feb 03', 'Feb 04', 'Feb 05', 'Feb 06', 'Feb 07', 'Feb 08', 'Feb 09', 'Feb 10', 'Feb 11', 'Feb 12', 'Feb 13', 'Feb 14', 'Feb 15', 'Feb 16', 'Feb 17', 'Feb 18', 'Feb 19', 'Feb 20', 'Feb 21', 'Feb 22', 'Feb 23', 'Feb 24', 'Feb 25', 'Feb 26', 'Feb 27', 'Feb 28', 'Feb 29', 'Mar 01', 'Mar 02', 'Mar 03', 'Mar 04', 'Mar 05', 'Mar 06', 'Mar 07', 'Mar 08', 'Mar 09', 'Mar 10', 'Mar 11', 'Mar 12', 'Mar 13', 'Mar 14', 'Mar 15', 'Mar 16', 'Mar 17', 'Mar 18', 'Mar 19', 'Mar 20', 'Mar 21', 'Mar 22', 'Mar 23', 'Mar 24', 'Mar 25', 'Mar 26', 'Mar 27', 'Mar 28', 'Mar 29', 'Mar 30', 'Mar 31', 'Apr 01', 'Apr 02', 'Apr 03', 'Apr 04', 'Apr 05', 'Apr 06', 'Apr 07', 'Apr 08', 'Apr 09', 'Apr 10', 'Apr 11', 'Apr 12', 'Apr 13', 'Apr 14', 'Apr 15', 'Apr 16', 'Apr 17', 'Apr 18', 'Apr 19', 'Apr 20', 'Apr 21', 'Apr 22', 'Apr 23', 'Apr 24', 'Apr 25', 'Apr 26', 'Apr 27', 'Apr 28', 'Apr 29', 'Apr 30', 'May 01', 'May 02', 'May 03', 'May 04', 'May 05', 'May 06', 'May 07', 'May 08', 'May 09', 'May 10', 'May 11', 'May 12', 'May 13', 'May 14', 'May 15', 'May 16', 'May 17', 'May 18', 'May 19', 'May 20', 'May 21', 'May 22', 'May 23', 'May 24', 'May 25', 'May 26', 'May 27', 'May 28', 'May 29', 'May 30', 'May 31', 'Jun 01', 'Jun 02', 'Jun 03', 'Jun 04', 'Jun 05', 'Jun 06', 'Jun 07', 'Jun 08', 'Jun 09', 'Jun 10', 'Jun 11', 'Jun 12', 'Jun 13', 'Jun 14', 'Jun 15', 'Jun 16', 'Jun 17', 'Jun 18', 'Jun 19', 'Jun 20', 'Jun 21', 'Jun 22', 'Jun 23', 'Jun 24', 'Jun 25', 'Jun 26', 'Jun 27', 'Jun 28', 'Jun 29', 'Jun 30', 'Jul 01', 'Jul 02', 'Jul 03', 'Jul 04', 'Jul 05', 'Jul 06', 'Jul 07', 'Jul 08', 'Jul 09', 'Jul 10', 'Jul 11', 'Jul 12', 'Jul 13', 'Jul 14', 'Jul 15', 'Jul 16', 'Jul 17', 'Jul 18', 'Jul 19', 'Jul 20', 'Jul 21', 'Jul 22', 'Jul 23', 'Jul 24', 'Jul 25', 'Jul 26', 'Jul 27', 'Jul 28', 'Jul 29', 'Jul 30', 'Jul 31', 'Aug 01', 'Aug 02', 'Aug 03', 'Aug 04', 'Aug 05', 'Aug 06', 'Aug 07', 'Aug 08', 'Aug 09', 'Aug 10', 'Aug 11', 'Aug 12', 'Aug 13', 'Aug 14', 'Aug 15', 'Aug 16', 'Aug 17', 'Aug 18', 'Aug 19', 'Aug 20', 'Aug 21', 'Aug 22', 'Aug 23', 'Aug 24', 'Aug 25', 'Aug 26', 'Aug 27', 'Aug 28']
var dailycnf = ['0', '265', '472', '698', '785', '1781', '1477', '1755', '2010', '2135', '2623', '2852', '3258', '3928', '3736', '3183', '3453', '2685', '3005', '2570', '2051', '14177', '5185', '2682', '2133', '2158', '2039', '1881', '538', '1040', '1060', '1037', '627', '999', '875', '1155', '1473', '1835', '2218', '2662', '2645', '3332', '3206', '4327', '5175', '5772', '5963', '7294', '8859', '11466', '13420', '16768', '17329', '19502', '20719', '22789', '26841', '31637', '38017', '33020', '36074', '43674', '44251', '48363', '59112', '62938', '64624', '57929', '61797', '70583', '74668', '76884', '81598', '78609', '68518', '71939', '76717', '82115', '83994', '90241', '77692', '70239', '69497', '71978', '78993', '79123', '81357', '78839', '72259', '73598', '73427', '77928', '82022', '96749', '87252', '71139', '67448', '74189', '76424', '84846', '92685', '81540', '81294', '78876', '79756', '93174', '93555', '93700', '86990', '78653', '71662', '84881', '88725', '96292', '99226', '95156', '81635', '90556', '95797', '103266', '108324', '107716', '100355', '97151', '91777', '93552', '107443', '117160', '126784', '125217', '109940', '105964', '116521', '121397', '131477', '131544', '129521', '114890', '108849', '122071', '136896', '139120', '143188', '134980', '124410', '126264', '144216', '146462', '141470', '182578', '157921', '131115', '140349', '164719', '174442', '181303', '195574', '178240', '164763', '162455', '175612', '199386', '210227', '215053', '196260', '178786', '172553', '209697', '214950', '224887', '238559', '217527', '199356', '197442', '220949', '236437', '249973', '241599', '227180', '222883', '206535', '240740', '281447', '276642', '290005', '261950', '225224', '219580', '249740', '290399', '287727', '291641', '259852', '224478', '200946', '255044', '273129', '284286', '284121', '270844', '225435', '219186', '268668', '288876', '287926', '289137', '265588', '217562', '202412', '259174', '275679', '271166', '262491', '265945', '209841', '213752', '248313', '273442']
var dailydec = ['0', '8', '16', '15', '24', '26', '26', '38', '43', '46', '45', '58', '64', '66', '73', '73', '86', '89', '97', '108', '97', '146', '122', '143', '143', '106', '98', '136', '117', '121', '113', '100', '158', '81', '64', '37', '58', '65', '54', '73', '67', '85', '83', '102', '106', '106', '228', '197', '275', '329', '357', '450', '417', '697', '647', '831', '993', '1116', '1396', '1658', '1674', '1968', '2535', '2606', '3081', '3517', '3781', '3448', '4252', '4727', '5290', '6334', '6135', '6272', '5220', '5716', '7771', '6886', '7764', '7202', '6354', '5742', '5734', '7522', '8233', '6975', '8502', '6649', '5009', '5677', '7334', '6650', '6810', '6449', '6171', '3910', '4655', '6854', '6623', '5875', '5749', '5454', '3664', '4280', '5922', '6712', '5714', '5555', '4386', '4179', '3665', '5656', '5223', '5333', '5064', '4391', '3652', '3549', '4674', '4693', '5060', '4772', '4278', '3276', '3410', '3872', '5275', '4737', '4907', '4175', '3377', '3175', '4717', '4939', '5656', '4938', '4345', '3606', '3297', '4784', '5204', '5059', '4656', '4317', '3429', '3537', '6596', '5268', '5227', '5121', '4539', '3491', '3940', '5352', '5110', '5258', '4855', '4642', '3601', '3565', '5045', '4892', '5175', '5158', '4541', '3643', '3616', '5453', '5528', '5444', '5453', '4960', '4202', '3825', '5462', '5808', '5788', '5556', '5033', '4335', '4060', '5662', '7087', '6323', '6146', '5672', '4302', '4174', '5525', '6914', '6738', '6314', '5483', '4427', '4405', '6172', '6832', '6446', '6428', '5610', '4828', '4507', '6472', '6809', '6581', '6004', '5486', '4567', '4302', '6345', '6709', '6206', '6073', '5373', '4290', '4355', '6052', '6341']
var dailyrec = {};

var cumcnf = ['580', '845', '1317', '2015', '2800', '4581', '6058', '7813', '9823', '11958', '14581', '17433', '20691', '24619', '28355', '31538', '34991', '37676', '40681', '43251', '45302', '59479', '64664', '67346', '69479', '71637', '73676', '75557', '76095', '77135', '78195', '79232', '79859', '80858', '81733', '82888', '84361', '86196', '88414', '91076', '93721', '97053', '100259', '104586', '109761', '115533', '121496', '128790', '137649', '149115', '162535', '179303', '196632', '216134', '236853', '259642', '286483', '318120', '356137', '389157', '425231', '468905', '513156', '561519', '620631', '683569', '748193', '806122', '867919', '938502', '1013170', '1090054', '1171652', '1250261', '1318779', '1390718', '1467435', '1549550', '1633544', '1723785', '1801477', '1871716', '1941213', '2013191', '2092184', '2171307', '2252664', '2331503', '2403762', '2477360', '2550787', '2628715', '2710737', '2807486', '2894738', '2965877', '3033325', '3107514', '3183938', '3268784', '3361469', '3443009', '3524303', '3603179', '3682935', '3776109', '3869664', '3963364', '4050354', '4129007', '4200669', '4285550', '4374275', '4470567', '4569793', '4664949', '4746584', '4837140', '4932937', '5036203', '5144527', '5252243', '5352598', '5449749', '5541526', '5635078', '5742521', '5859681', '5986465', '6111682', '6221622', '6327586', '6444107', '6565504', '6696981', '6828525', '6958046', '7072936', '7181785', '7303856', '7440752', '7579872', '7723060', '7858040', '7982450', '8108714', '8252930', '8399392', '8540862', '8723440', '8881361', '9012476', '9152825', '9317544', '9491986', '9673289', '9868863', '10047103', '10211866', '10374321', '10549933', '10749319', '10959546', '11174599', '11370859', '11549645', '11722198', '11931895', '12146845', '12371732', '12610291', '12827818', '13027174', '13224616', '13445565', '13682002', '13931975', '14173574', '14400754', '14623637', '14830172', '15070912', '15352359', '15629001', '15919006', '16180956', '16406180', '16625760', '16875500', '17165899', '17453626', '17745267', '18005119', '18229597', '18430543', '18685587', '18958716', '19243002', '19527123', '19797967', '20023402', '20242588', '20511256', '20800132', '21088058', '21377195', '21642783', '21860345', '22062757', '22321931', '22597610', '22868776', '23131267', '23397212', '23607053', '23820805', '24069118', '24342560']
var cumact = ['563', '786', '1238', '1910', '2669', '4415', '5823', '7519', '9439', '11456', '13949', '16567', '19622', '23220', '26617', '29338', '32184', '34179', '36448', '38190', '39384', '52231', '56473', '57624', '58272', '58889', '59091', '58995', '57612', '56364', '54940', '54122', '52250', '50692', '48919', '47283', '44983', '43843', '43107', '42904', '42496', '42907', '43450', '45593', '48659', '51760', '55389', '60708', '66726', '76176', '87176', '101272', '114848', '132124', '150019', '168983', '192106', '219807', '253015', '280430', '311709', '350007', '384898', '425292', '471629', '521907', '573872', '618990', '662456', '715571', '768910', '821423', '880422', '934943', '981260', '1032217', '1077705', '1123316', '1174879', '1238102', '1282868', '1326507', '1368923', '1399348', '1438450', '1473256', '1521349', '1566565', '1602916', '1649906', '1669930', '1712484', '1757639', '1780010', '1820784', '1863738', '1881582', '1915821', '1937940', '1976868', '2021631', '2055762', '2099618', '2132260', '2158868', '2185245', '2229950', '2274164', '2300461', '2332737', '2362003', '2373388', '2395620', '2440615', '2479043', '2514887', '2545606', '2583163', '2619909', '2652786', '2695151', '2690166', '2726504', '2763526', '2785959', '2807685', '2840182', '2866932', '2919834', '2961195', '2956705', '3001758', '3005232', '2967675', '3010766', '3058419', '3106915', '3168876', '3199121', '3248581', '3247663', '3275908', '3327565', '3351807', '3398263', '3430091', '3461173', '3492912', '3529588', '3597587', '3637143', '3663750', '3717100', '3756180', '3792264', '3882735', '3974795', '4047015', '4112663', '4161781', '4201043', '4263069', '4267934', '4343329', '4393433', '4471226', '4534578', '4530404', '4561260', '4624393', '4709598', '4776462', '4866801', '4946378', '5011473', '5052245', '5054417', '5114265', '5184884', '5279372', '5309884', '5340637', '5375074', '5459658', '5556364', '5621524', '5706554', '5737890', '5756729', '5801867', '5841072', '5900376', '5983991', '6052521', '6042987', '6058290', '6084020', '6167663', '6257680', '6345092', '6326402', '6323658', '6327860', '6345475', '6411937', '6473742', '6548070', '6533885', '6500912', '6498112', '6512378', '6564036', '6628414', '6688861', '6718564', '6653114', '6645689', '6645620']
var cumdec = ['17', '25', '41', '56', '80', '106', '132', '170', '213', '259', '304', '362', '426', '492', '565', '638', '724', '813', '910', '1018', '1115', '1261', '1383', '1526', '1669', '1775', '1873', '2009', '2126', '2247', '2360', '2460', '2618', '2699', '2763', '2800', '2858', '2923', '2977', '3050', '3117', '3202', '3285', '3387', '3493', '3599', '3827', '4024', '4299', '4628', '4985', '5435', '5852', '6549', '7196', '8027', '9020', '10136', '11532', '13190', '14864', '16832', '19367', '21973', '25054', '28571', '32352', '35800', '40052', '44779', '50069', '56403', '62538', '68810', '74030', '79746', '87517', '94403', '102167', '109369', '115723', '121465', '127199', '134721', '142954', '149929', '158431', '165080', '170089', '175766', '183100', '189750', '196560', '203009', '209180', '213090', '217745', '224599', '231222', '237097', '242846', '248300', '251964', '256244', '262166', '268878', '274592', '280147', '284533', '288712', '292377', '298033', '303256', '308589', '313653', '318044', '321696', '325245', '329919', '334612', '339672', '344444', '348722', '351998', '355408', '359280', '364555', '369292', '374199', '378374', '381751', '384926', '389643', '394582', '400238', '405176', '409521', '413127', '416424', '421208', '426412', '431471', '436127', '440444', '443873', '447410', '454006', '459274', '464501', '469622', '474161', '477652', '481592', '486944', '492054', '497312', '502167', '506809', '510410', '513975', '519020', '523912', '529087', '534245', '538786', '542429', '546045', '551498', '557026', '562470', '567923', '572883', '577085', '580910', '586372', '592180', '597968', '603524', '608557', '612892', '616952', '622614', '629701', '636024', '642170', '647842', '652144', '656318', '661843', '668757', '675495', '681809', '687292', '691719', '696124', '702296', '709128', '715574', '722002', '727612', '732440', '736947', '743419', '750228', '756809', '762813', '768299', '772866', '777168', '783513', '790222', '796428', '802501', '807874', '812164', '816519', '822571', '828912']
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

