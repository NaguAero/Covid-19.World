function plot2Data(id, data, name){
	date_name = []
	act_data = []
	conf_data = []
	dec_data = []
	rec_data = []
	stname = []
	
	if (id == 'dailyindia') {
		for (var i in data[0]){
			date_name.push(data[0][i])
			//confirmed_data.push(data[0])
			conf_data.push(data[1][i])
			rec_data.push(data[2][i])
			dec_data.push(data[3][i])
		}
		} else {
		var mydat = data
		for (var xx in mydat){
		date_name.push(mydat[xx][0])
		//active_data.push(data[state][1])
		conf_data.push(mydat[xx][1])
		dec_data.push(mydat[xx][3])
		rec_data.push(mydat[xx][2])
		}
		}
		stname.push(name)
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
				{
					label: 'Recovered',
					fill:false,
					data: rec_data,
					backgroundColor: 'rgba(0, 100, 0, 1)',borderColor: [],borderWidth: 1,
					barThickness : 5,
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
		display: (id == 'dailyindia') ? false : true,
		text: 'Daily',
		fontSize: 16,
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
        ticks: {beginAtZero: true,fontSize: 16,}
      }]
    }
  }

	});

}	

function plot_st_cumData(id, data){
	date_name = []
	
	conf_data = []
	dec_data = []
	rec_data = []
	stname = []
	act_data = []
	
	for (var i in data){
		date_name.push(data[i][0])
		conf_data.push(data[i][1])
		act_data.push(data[i][2])
		rec_data.push(data[i][3])
		dec_data.push(data[i][4])
	}
	stname.push("Deceased", "Recovered", "Active Cases", "Total Cases")
	
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
				{
					label: stname[1], //wb
					fill:false,
					data: rec_data,
					lineTension: 0.1,
					borderColor: "rgba(0, 100, 0, 1)",  pointBackgroundColor: "rgba(0, 100, 0, 1)",
					pointBorderWidth: 0, pointHoverRadius: 3, 
					pointHoverBorderWidth: 0, pointRadius: 0, pointHitRadius: 5,
				},
				{
					label: stname[2],  //pb
					fill:false,
					data: act_data,
					lineTension: 0.1,
					borderColor: "rgba(51, 51, 255, 0.9)",  pointBackgroundColor: "rgba(51, 51, 255, 0.9)",
					pointBorderWidth: 0, pointHoverRadius: 3, 
					pointHoverBorderWidth: 0, pointRadius: 0, pointHitRadius: 5,
				},
				{
					label: stname[3],  //ap
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
		display: true,
		text: 'Cummulative',
		fontSize: 16,
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
				ticks: {beginAtZero: true,fontSize: 16,}
		};
		myChart.update();
	
});
$("#1").click( function (){
		myChart.options.scales.yAxes[0] = {
				type : 'logarithmic',
				ticks: {beginAtZero: true,fontSize: 16, max: 500000,
				  callback: function(value, index, values) {//needed to change the scientific notation results from using logarithmic scale
				      return Number(value.toString());//pass tick values as a string into Number function
				      }
				  },
				 afterBuildTicks: function(allcountline) {    
                        allcountline.ticks = [];
                        allcountline.ticks.push(1);
                        allcountline.ticks.push(10);
                        allcountline.ticks.push(100);
                        allcountline.ticks.push(1000);
                        allcountline.ticks.push(10000);
						allcountline.ticks.push(100000);
						
						allcountline.ticks.push(500000);
                      }
		};
		
		myChart.update();
	})


}	

var api = 'https://api.covid19india.org/states_daily.json'
var request = new XMLHttpRequest()

request.open('GET', api, true)
request.onload = function() {
	var data = JSON.parse(this.response)
	
	var state_mh = {}
	var act_plotdata = {}

	//  data set

		var district_data = data.states_daily;
		
		var idx = ["mh", "gj", "dl", "tn", "rj", "mp", "up", "ap", "pb", "wb", "tg", "kl"];
		var sname = ["Maharashtra", "Gujarat", "Delhi", "Tamilnadu", "Rajasthan", "Madhya Pradesh",
					"Uttar Pradesh", "Andhra Pradesh", "Punjab", "West Bengal", "Telangana", "Kerala"]
		
		for (var itm in idx) {
		
		var i = 0;
		var state_daily = {}
		var state_daily_apr = {}
		var cum_data = {}
		var	conf = 0
		var conf_cum =0 
		var dec = 0
		var dec_cum = 0
		var rec =0
		var rec_cum = 0
		var date ;	
		var act_cum = 0

			//console.log(idx[itm])
			
			for (var district=0; district < district_data.length; district++){
			var data_values = district_data[district]
			
			//console.log(data_values)
			//act = act + data_values.active
				if (district%3 ==0 ) {
					date = data_values.date;
					conf = data_values[idx[itm]];
					if (conf == "") {conf = 0}
					conf_cum = parseInt(conf_cum) + parseInt(conf)
					i = i+1;
				} 
				if ((district+1)%3 ==0) {
					dec = data_values[idx[itm]];
					dec_cum = parseInt(dec) + parseInt(dec_cum)
					
					} 
				if ((district-1)%3 ==0) {
					rec = data_values[idx[itm]];
					if (rec < 0) {rec = 0}
					rec_cum = parseInt(rec) + parseInt(rec_cum)
					
				}
			//state_daily[i] = [date, conf, rec, dec]
				if (i>=19) {
				var j = i-19
				state_daily_apr[j] = [date, conf, rec, dec]
				
				}
				
				act_cum = conf_cum - (rec_cum + dec_cum)
				cum_data[i] = [date, conf_cum, act_cum, rec_cum, dec_cum]
			}
			
			act_plotdata[itm] = cum_data
			state_mh[itm] = state_daily_apr;
			//console.log(state_mh)
		}
	
	
	//plotData('api_chart', state_data)
	plot2Data('maha', state_mh[0], sname[0])
	plot2Data('guju', state_mh[1], sname[1])
	plot2Data('delhi', state_mh[2], sname[2])
	plot2Data('tamilnadu', state_mh[3], sname[3])
	plot2Data('rajs', state_mh[4], sname[4])
	plot2Data('mp', state_mh[5], sname[5])
	plot2Data('up', state_mh[6], sname[6])
	plot2Data('ap', state_mh[7], sname[7])
	plot2Data('pb', state_mh[8], sname[8])
	plot2Data('wb', state_mh[9], sname[9])
	plot2Data('tg', state_mh[10], sname[10])
	plot2Data('kl', state_mh[11], sname[11])
	
	plot_st_cumData('maha_cum',act_plotdata[0])
	plot_st_cumData('tn_cum',act_plotdata[3])
	plot_st_cumData('dl_cum',act_plotdata[2])
	plot_st_cumData('gj_cum',act_plotdata[1])
	plot_st_cumData('rj_cum',act_plotdata[4])
	plot_st_cumData('mp_cum',act_plotdata[5])
	plot_st_cumData('up_cum',act_plotdata[6])
	plot_st_cumData('ap_cum',act_plotdata[7])
	plot_st_cumData('pb_cum',act_plotdata[8])
	plot_st_cumData('wb_cum',act_plotdata[9])
	plot_st_cumData('tg_cum',act_plotdata[10])
	plot_st_cumData('kl_cum',act_plotdata[11])
	
}

request.send()