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

var date = ['Jan 22', 'Jan 23', 'Jan 24', 'Jan 25', 'Jan 26', 'Jan 27', 'Jan 28', 'Jan 29', 'Jan 30', 'Jan 31', 'Feb 01', 'Feb 02', 'Feb 03', 'Feb 04', 'Feb 05', 'Feb 06', 'Feb 07', 'Feb 08', 'Feb 09', 'Feb 10', 'Feb 11', 'Feb 12', 'Feb 13', 'Feb 14', 'Feb 15', 'Feb 16', 'Feb 17', 'Feb 18', 'Feb 19', 'Feb 20', 'Feb 21', 'Feb 22', 'Feb 23', 'Feb 24', 'Feb 25', 'Feb 26', 'Feb 27', 'Feb 28', 'Feb 29', 'Mar 01', 'Mar 02', 'Mar 03', 'Mar 04', 'Mar 05', 'Mar 06', 'Mar 07', 'Mar 08', 'Mar 09', 'Mar 10', 'Mar 11', 'Mar 12', 'Mar 13', 'Mar 14', 'Mar 15', 'Mar 16', 'Mar 17', 'Mar 18', 'Mar 19', 'Mar 20', 'Mar 21', 'Mar 22', 'Mar 23', 'Mar 24', 'Mar 25', 'Mar 26', 'Mar 27', 'Mar 28', 'Mar 29', 'Mar 30', 'Mar 31', 'Apr 01', 'Apr 02', 'Apr 03', 'Apr 04', 'Apr 05', 'Apr 06', 'Apr 07', 'Apr 08', 'Apr 09', 'Apr 10', 'Apr 11', 'Apr 12', 'Apr 13', 'Apr 14', 'Apr 15', 'Apr 16', 'Apr 17', 'Apr 18', 'Apr 19', 'Apr 20', 'Apr 21', 'Apr 22', 'Apr 23', 'Apr 24', 'Apr 25', 'Apr 26', 'Apr 27', 'Apr 28', 'Apr 29', 'Apr 30', 'May 01', 'May 02', 'May 03', 'May 04', 'May 05', 'May 06', 'May 07', 'May 08', 'May 09', 'May 10', 'May 11', 'May 12', 'May 13', 'May 14', 'May 15', 'May 16', 'May 17', 'May 18', 'May 19', 'May 20', 'May 21', 'May 22', 'May 23', 'May 24', 'May 25', 'May 26', 'May 27', 'May 28', 'May 29', 'May 30', 'May 31', 'Jun 01', 'Jun 02', 'Jun 03', 'Jun 04', 'Jun 05', 'Jun 06', 'Jun 07', 'Jun 08', 'Jun 09', 'Jun 10', 'Jun 11', 'Jun 12', 'Jun 13', 'Jun 14', 'Jun 15', 'Jun 16', 'Jun 17', 'Jun 18', 'Jun 19', 'Jun 20', 'Jun 21', 'Jun 22', 'Jun 23', 'Jun 24', 'Jun 25', 'Jun 26', 'Jun 27', 'Jun 28', 'Jun 29', 'Jun 30', 'Jul 01', 'Jul 02', 'Jul 03', 'Jul 04', 'Jul 05', 'Jul 06', 'Jul 07', 'Jul 08', 'Jul 09', 'Jul 10', 'Jul 11', 'Jul 12', 'Jul 13', 'Jul 14', 'Jul 15', 'Jul 16', 'Jul 17', 'Jul 18', 'Jul 19', 'Jul 20', 'Jul 21', 'Jul 22', 'Jul 23', 'Jul 24', 'Jul 25', 'Jul 26', 'Jul 27', 'Jul 28', 'Jul 29', 'Jul 30', 'Jul 31', 'Aug 01', 'Aug 02', 'Aug 03', 'Aug 04', 'Aug 05', 'Aug 06', 'Aug 07', 'Aug 08', 'Aug 09', 'Aug 10', 'Aug 11', 'Aug 12', 'Aug 13', 'Aug 14', 'Aug 15']
var dailycnf = ['0', '265', '472', '698', '785', '1781', '1477', '1755', '2010', '2135', '2623', '2852', '3257', '3928', '3736', '3183', '3453', '2685', '3005', '2569', '2050', '14175', '5185', '2682', '2132', '2157', '2039', '1880', '538', '1039', '1059', '1037', '627', '999', '875', '1155', '1472', '1835', '2218', '2662', '2644', '3329', '3206', '4326', '5173', '5770', '5963', '7294', '8855', '11462', '13419', '16762', '17325', '19497', '20722', '22786', '26834', '31631', '38013', '33023', '36074', '43672', '44249', '48365', '59108', '62942', '64622', '57930', '61781', '70580', '74662', '76883', '81601', '78608', '68524', '71938', '76718', '82111', '83990', '90246', '77693', '70236', '69497', '71975', '78991', '79122', '81359', '78838', '72257', '73600', '73426', '77927', '82022', '96756', '87252', '71139', '67460', '74205', '76454', '84740', '92684', '81538', '81294', '78894', '79758', '93180', '93573', '93733', '86991', '78672', '71669', '84939', '88712', '96288', '99231', '95173', '81642', '90568', '95778', '103259', '108301', '107708', '100380', '97159', '91814', '93541', '107446', '117143', '126790', '125143', '109944', '105945', '116503', '121397', '131485', '131536', '129539', '114871', '108834', '122056', '136910', '139132', '143226', '135029', '124401', '126247', '144254', '146459', '141502', '182662', '157982', '131097', '140342', '164733', '174512', '181333', '195591', '178352', '164799', '162427', '175681', '199269', '210161', '214973', '196204', '178742', '172391', '209515', '214929', '224849', '238473', '217514', '199198', '197274', '220875', '236387', '249844', '241472', '227058', '222669', '206310', '240527', '281238', '276429', '289735', '261663', '224987', '219236', '249495', '289961', '287192', '291102', '259639', '224181', '200333', '254722', '271917', '282714', '282245', '270268', '224046', '215110', '264061', '284348', '285486', '285902', '260409']
var dailydec = ['0', '8', '16', '15', '24', '26', '26', '38', '43', '46', '45', '58', '64', '66', '73', '73', '86', '89', '97', '108', '97', '146', '122', '143', '143', '106', '98', '136', '117', '121', '113', '100', '158', '81', '64', '37', '58', '65', '54', '73', '67', '85', '83', '102', '106', '106', '228', '197', '275', '331', '354', '449', '415', '692', '647', '820', '987', '1101', '1379', '1652', '1642', '1934', '2491', '2586', '3016', '3484', '3717', '3385', '4185', '4749', '5205', '6286', '6049', '6177', '5114', '5659', '7918', '6815', '7727', '7429', '6380', '5712', '5772', '7500', '8258', '7113', '8563', '6735', '5031', '5636', '7299', '6712', '6860', '6481', '6253', '3944', '4614', '6845', '6684', '5863', '5772', '5423', '3672', '4266', '5921', '6955', '5715', '5591', '4372', '4184', '3644', '5646', '5261', '5338', '5081', '4392', '3669', '3546', '4666', '4703', '5066', '4765', '4262', '3294', '3412', '3868', '5282', '4736', '4923', '4182', '3368', '3172', '4716', '4937', '5662', '4945', '4347', '3610', '3297', '4789', '5205', '5054', '4659', '4312', '3429', '3540', '6593', '5274', '5229', '5129', '4540', '3491', '3935', '5358', '5116', '5260', '4855', '4645', '3594', '3564', '5067', '4898', '5186', '5172', '4548', '3655', '3619', '5465', '5546', '5451', '5462', '4965', '4210', '3855', '5470', '5822', '5796', '5563', '5046', '4363', '4069', '5678', '7099', '6338', '6161', '5683', '4313', '4179', '5528', '6929', '6358', '6332', '5575', '4475', '4360', '6123', '6818', '6422', '6385', '5581', '4837', '4520', '6468', '6762', '6539', '5944', '5410']
var dailyrec = {};

var cumcnf = ['580', '845', '1317', '2015', '2800', '4581', '6058', '7813', '9823', '11958', '14581', '17433', '20690', '24618', '28354', '31537', '34990', '37675', '40680', '43249', '45299', '59474', '64659', '67341', '69473', '71630', '73669', '75549', '76087', '77126', '78185', '79222', '79849', '80848', '81723', '82878', '84350', '86185', '88403', '91065', '93709', '97038', '100244', '104570', '109743', '115513', '121476', '128770', '137625', '149087', '162506', '179268', '196593', '216090', '236812', '259598', '286432', '318063', '356076', '389099', '425173', '468845', '513094', '561459', '620567', '683509', '748131', '806061', '867842', '938422', '1013084', '1089967', '1171568', '1250176', '1318700', '1390638', '1467356', '1549467', '1633457', '1723703', '1801396', '1871632', '1941129', '2013104', '2092095', '2171217', '2252576', '2331414', '2403671', '2477271', '2550697', '2628624', '2710646', '2807402', '2894654', '2965793', '3033253', '3107458', '3183912', '3268652', '3361336', '3442874', '3524168', '3603062', '3682820', '3776000', '3869573', '3963306', '4050297', '4128969', '4200638', '4285577', '4374289', '4470577', '4569808', '4664981', '4746623', '4837191', '4932969', '5036228', '5144529', '5252237', '5352617', '5449776', '5541590', '5635131', '5742577', '5859720', '5986510', '6111653', '6221597', '6327542', '6444045', '6565442', '6696927', '6828463', '6958002', '7072873', '7181707', '7303763', '7440673', '7579805', '7723031', '7858060', '7982461', '8108708', '8252962', '8399421', '8540923', '8723585', '8881567', '9012664', '9153006', '9317739', '9492251', '9673584', '9869175', '10047527', '10212326', '10374753', '10550434', '10749703', '10959864', '11174837', '11371041', '11549783', '11722174', '11931689', '12146618', '12371467', '12609940', '12827454', '13026652', '13223926', '13444801', '13681188', '13931032', '14172504', '14399562', '14622231', '14828541', '15069068', '15350306', '15626735', '15916470', '16178133', '16403120', '16622356', '16871851', '17161812', '17449004', '17740106', '17999745', '18223926', '18424259', '18678981', '18950898', '19233612', '19515857', '19786125', '20010171', '20225281', '20489342', '20773690', '21059176', '21345078', '21605487']
var cumact = ['563', '786', '1238', '1910', '2669', '4415', '5823', '7519', '9439', '11456', '13949', '16567', '19621', '23219', '26616', '29337', '32183', '34178', '36447', '38188', '39381', '52226', '56468', '57619', '58266', '58882', '59084', '58987', '57604', '56355', '54930', '54112', '52240', '50682', '48909', '47273', '44972', '43832', '43096', '42893', '42484', '42892', '43435', '45577', '48641', '51740', '55369', '60688', '66702', '76146', '87148', '101239', '114814', '132090', '149988', '168960', '192082', '219792', '253013', '280436', '311747', '350077', '385010', '425426', '471825', '522141', '574168', '619353', '662870', '715959', '769380', '821940', '881030', '935647', '982078', '1033090', '1078435', '1124117', '1175712', '1238713', '1283454', '1327122', '1369502', '1399946', '1439019', '1473689', '1521718', '1566846', '1603173', '1650208', '1670263', '1712754', '1757853', '1780199', '1820890', '1863810', '1881711', '1915969', '1938049', '1976881', '2021611', '2055766', '2099615', '2132291', '2158899', '2185038', '2229760', '2273971', '2300283', '2332573', '2361864', '2373317', '2395496', '2440482', '2478898', '2514758', '2545467', '2583039', '2619774', '2652631', '2694967', '2689981', '2726360', '2763372', '2785840', '2807559', '2840052', '2866788', '2919680', '2960960', '2956483', '3001520', '3004977', '2967422', '3010513', '3058150', '3106662', '3168600', '3198830', '3248270', '3247365', '3275627', '3327319', '3351615', '3398062', '3429870', '3460992', '3492722', '3529428', '3597503', '3637119', '3663710', '3717057', '3756145', '3792293', '3882792', '3974869', '4047198', '4112889', '4161980', '4201289', '4263192', '4267980', '4343281', '4393322', '4471059', '4534246', '4529878', '4560695', '4623782', '4708892', '4775738', '4865910', '4945289', '5010302', '5051010', '5053044', '5112760', '5183244', '5277490', '5307766', '5338290', '5372506', '5456862', '5553283', '5618141', '5702923', '5733910', '5752501', '5797185', '5836235', '5894987', '5978300', '6046486', '6036384', '6051414', '6075946', '6158041', '6246225', '6333083', '6312994', '6306161', '6305760', '6318895', '6382959', '6441589', '6510814']
var cumdec = ['17', '25', '41', '56', '80', '106', '132', '170', '213', '259', '304', '362', '426', '492', '565', '638', '724', '813', '910', '1018', '1115', '1261', '1383', '1526', '1669', '1775', '1873', '2009', '2126', '2247', '2360', '2460', '2618', '2699', '2763', '2800', '2858', '2923', '2977', '3050', '3117', '3202', '3285', '3387', '3493', '3599', '3827', '4024', '4299', '4630', '4984', '5433', '5848', '6540', '7187', '8007', '8994', '10095', '11474', '13126', '14768', '16702', '19193', '21779', '24795', '28279', '31996', '35381', '39566', '44315', '49520', '55806', '61855', '68032', '73146', '78805', '86723', '93538', '101265', '108694', '115074', '120786', '126558', '134058', '142316', '149429', '157992', '164727', '169758', '175394', '182693', '189405', '196265', '202746', '208999', '212943', '217557', '224402', '231086', '236949', '242721', '248144', '251816', '256082', '262003', '268958', '274673', '280264', '284636', '288820', '292464', '298110', '303371', '308709', '313790', '318182', '321851', '325397', '330063', '334766', '339832', '344597', '348859', '352153', '355565', '359433', '364715', '369451', '374374', '378556', '381924', '385096', '389812', '394749', '400411', '405356', '409703', '413313', '416610', '421399', '426604', '431658', '436317', '440629', '444058', '447598', '454191', '459465', '464694', '469823', '474363', '477854', '481789', '487147', '492263', '497523', '502378', '507023', '510617', '514181', '519248', '524146', '529332', '534504', '539052', '542707', '546326', '551791', '557337', '562788', '568250', '573215', '577425', '581280', '586750', '592572', '598368', '603931', '608977', '613340', '617409', '623087', '630186', '636524', '642685', '648368', '652681', '656860', '662388', '669317', '675675', '682007', '687582', '692057', '696417', '702540', '709358', '715780', '722165', '727746', '732583', '737103', '743571', '750333', '756872', '762816', '768226']
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

