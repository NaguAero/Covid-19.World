function plotData(id, data){
	con_name = []
	active = []
	confirmed = []
	deceased = []
	recovered = []
	
	for (var state in data){
		
		con_name.push(state)
		active.push(data[state][1])
		confirmed.push(data[state][0])
		deceased.push(data[state][3])
		recovered.push(data[state][2])
		
	}
	arrayOfObj = con_name.map(function(d, i) {
		
		return {
			label: d,
			tot: confirmed[i] || 0,
			act: active[i] || 0,
			rec: recovered[i] || 0,
			dec: deceased[i] || 0,
			
		};
		
	});

	sortedArrayOfObj = arrayOfObj.sort(function(a, b) {
		return b.tot-a.tot;
		
	});
	
	Label = [];
	confirmed_data = [];
	active_data = [];
	recovered_data = [];
	deceased_data = [];
	
	sortedArrayOfObj.forEach(function(d){
		Label.push(d.label);
		confirmed_data.push(d.tot);
		active_data.push(d.act);
		recovered_data.push(d.rec);
		deceased_data.push(d.dec);
	});
	var ctx = document.getElementById(id).getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: Label,
			datasets: [
				{
					label: 'Deceased',
					fill:true,
					data: deceased_data,
					backgroundColor: 'rgba(255, 0, 0, 0.8)',borderColor: [],borderWidth: 1,
					barThickness :  (id == 'cnf1m') ? 10 : (id== 'cnf500k100k')? 10 : (id == 'cnf100k50k')? 10 : 3,
				},
				{
					label: 'Recovered',
					fill:false,
					data: recovered_data,
					backgroundColor: 'rgba(0, 100, 0, 1)',borderColor: [],borderWidth: 1,
					barThickness :  (id == 'cnf1m') ? 10 : (id== 'cnf500k100k')? 10 : (id == 'cnf100k50k')? 10 : 3,
				},
				{
					label: 'Active Cases',
					fill:false,
					data: active_data,
					backgroundColor: 'rgba(51, 51, 255, 0.8)',borderColor: [],borderWidth: 1,
					barThickness : (id == 'cnf1m') ? 10 : (id== 'cnf500k100k')? 10 : (id == 'cnf100k50k')? 10 : 3,
					
				},
				{
					label: 'Total Cases',
					fill:false,
					data: confirmed_data,
					backgroundColor: 'rgba(50, 0, 150, 0.5)',borderColor: [],borderWidth: 1,
					barThickness : (id == 'cnf1m') ? 10 : (id== 'cnf500k100k')? 10 : (id == 'cnf100k50k')? 10 : 3,
				}
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
				var total = (parseInt(data.datasets[3].data[index])) 
				var mylbl = data.datasets[tooltipItem.datasetIndex].label
				var percentage = parseFloat((currentValue/total*100).toFixed(1));
				return mylbl+': ' + currentValue + ' ('+ percentage+'%)';
			},
		}
	  },
	labels: {display: true,},
    responsive: false,
	title:{
		display: false,
		position: "bottom",
		text: "*Toggle between the data in all charts: Click on the legend",
		fontSize: 10,
	},
	legend: {
      display: true,
      position: "bottom",
	  reverse : true,
      labels: {fontColor: "#333",fontSize: 13}
    },
    scales: {
      xAxes: [{
	  stacked :  (id == 'cnf1m') ? false : true,
	  id : "bar-x-axis1",
	  display : true,
        ticks: {maxRotation: 00,minRotation: (id == 'cnf1m') ? 0 : 45, fontSize: (id == 'cnf1m') ? 14 : 12,offsetGridLines: false,}
      }],
      yAxes: [{
	  stacked : false,
        ticks: {beginAtZero: true,fontSize: 16,
			callback: function(value, index, values){ // scientific ticks
						if (value >999 && value < 999999){return value/1e3 + 'K'}
						if (value > 999999)
						{return value/1e6 + 'M';} else {return value}
				      }
		}
      }]
    }
  }
	});

}


function plotstatepieData(id, data, total){

	active = []
	confirmed = []
	deceased = []
	recovered = []
	lblst = []
	coloR = []
	intot =[]
	// var mystdat = {};
	mystdat = []
	
	
	for (var state in data){
		lblst.push(state)
		confirmed.push(data[state][0])
		active.push(data[state][1])
		recovered.push(data[state][2])
		deceased.push(data[state][3])
		coloR.push(data[state][4])
		
			
	}
	
	intot.push(total)
	arrayOfObj = lblst.map(function(d, i) {
		
		return {
			label: d,
			tot: confirmed[i] || 0,
			act: active[i] || 0,
			rec: recovered[i] || 0,
			dec: deceased[i] || 0,
			
		};
		
	});

	sortedArrayOfObj = arrayOfObj.sort(function(a, b) {
		return b.tot-a.tot;
		
	});
	
	Label = [];
	confirmed_data = [];
	active_data = [];
	recovered_data = [];
	deceased_data = [];
	
	sortedArrayOfObj.forEach(function(d){
		Label.push(d.label);
		confirmed_data.push(d.tot);
		active_data.push(d.act);
		recovered_data.push(d.rec);
		deceased_data.push(d.dec);
		mystdat.push(d.tot)
	});
	var ctx = document.getElementById(id).getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'pie',
		data: {
			labels: Label,
			datasets: [
			{
			fill:true,
			data: confirmed_data,// active_data, recovered_data, deceased_data],
			backgroundColor: coloR,
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
					var total = intot
					var mylbl = data.labels[index]
					var percentage = parseFloat((currentValue/total*100).toFixed(2));
					return mylbl+': ' + currentValue + ' ('+ percentage+'%)';
					},
					}
			},
			labels: {display: false,},
			responsive: false,
			title:{
				display: false,
				position: "top",
				
				fontSize: 14,
			},
			legend: {
				display: true,
				position: "bottom",
				//reverse : true,
				labels: {fontColor: 'rgba(0,0,0,1)',fontSize: 11, boxWidth: 12,
					
				}
			},
		}
	});


$("#allstdat").on("click", function (){
		myChart.data.datasets[0].data = mystdat
		myChart.update();
	
});

$("#top5").on("click", function (){
		var alldat = mystdat
		
		var top5 = {};
		for (var i in alldat){
			if (i<=4){
				top5[i] = alldat[i]
			console.log(i,top5[i])
			}
		}
		myChart.data.datasets[0].data = top5
		myChart.update();
	
});

$("#top10").on("click", function (){
		var alldat = mystdat
		//console.log(alldat)
		var top10 = {};
		for (var i in alldat){
			if (i<=9){
				top10[i] = alldat[i]
			}
		}
		myChart.data.datasets[0].data = top10
		myChart.update();
	
});



}

var api2 = 'https://corona.lmao.ninja/v2/countries'
var request2 = new XMLHttpRequest()
request2.open('GET', api2, true)
	request2.onload = function() {
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
	var dynamicColors = function() {
		var r = Math.floor(Math.random() * 255);
		var g = Math.floor(Math.random() * 255);
		var b = Math.floor(Math.random() * 255);
		return "rgb(" + r + "," + g + "," + b + ")";
	};
	
	var total = 0;
	for (var i in data){
		var data_val = data[i]
		var conname = data_val.country
		var tot = data_val.cases
		var tota = data_val.active
		var totr = data_val.recovered
		var totd = data_val.deaths
		var nc = data_val.todayCases
		var nr = data_val.todayRecovered
		var nd = data_val.todayDeaths
		
		tot > 500000? cnf_1m[conname]=[tot, tota, totr, totd, nc, nr, nd]:
		(tot < 500000 && tot > 100000)? cnf_500k_100k[conname]=[tot, tota, totr, totd, nc, nr, nd]:
		(tot < 100000 && tot > 50000)? cnf_100k_50k[conname]=[tot, tota, totr, totd, nc, nr, nd]:
		(tot < 50000 && tot > 10000)? cnf_50k_10k[conname]=[tot, tota, totr, totd, nc, nr, nd]:
		(tot < 10000 && tot > 1000)? cnf_10k_1k[conname]=[tot, tota, totr, totd, nc, nr, nd]:
		(tot < 1000 && tot > 100)?cnf_1k[conname] = [tot, tota, totr, totd, nc, nr, nd]:0	
		//conf>100?statename[state] = [conf] :0
		var rndcolor = dynamicColors()
		tot > 10000? allcases[conname]=[tot, tota, totr, totd, rndcolor]:0
		
		total = tot + total
		
	}
	
	
	plotData('cnf1m', cnf_1m)
	plotData('cnf500k100k',cnf_500k_100k)
	plotData('cnf100k50k',cnf_100k_50k)
	plotData('cnf50k10k',cnf_50k_10k)
	plotData('cnf10k1k',cnf_10k_1k)
	plotData('cnf1k',cnf_1k)
	
	plotstatepieData('statepie',allcases,total)
	
	
}

request2.send()