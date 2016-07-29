import * as ActionTypes from '../actions/constants'
import * as Actions from '../actions/index'
import $ from 'jquery'

const stockUrl = 'http://hq.sinajs.cn/list='


const queryData = store => next => action => {
	if (action.type == ActionTypes.QUERY_DATA) {
		let {
			stockcodes,
			stockdatas
		} = store.getState();
		let codes = stockcodes.join(',');
		/*let myHeaders = new Headers({
			"Content-Type": "application/x-javascript"
		});
		let init = {
			method: 'GET',
			headers: myHeaders,
			mode: 'no-cors'
		};*/
		/*fetch(stockUrl + codes,init).then(response=>{
			console.log("Response:",response);
			return response.text();})
		.then(data => {
			console.log("Data:",data);
			store.dispatch(Actions.dataArrived(analysisData(data)));
		}).catch(e=>console.log("Error:",e));*/
		$.ajax({
			cache: true,
			url: stockUrl + codes,
			type: "GET",
            dataType: "script",
            success: function () {
                /*var elements=hq_str_sh601001.split(",");  
               console.log(elements.length);*/
				var result = [];
				for (var i = 0; i < stockcodes.length; i++) {
					let tmp = window['hq_str_' + stockcodes[i]];
					if (tmp != null && tmp != undefined) {
						var stockdata = analysisScriptData(tmp);
						stockdata['code'] = stockcodes[i];
						result.push(stockdata);
					}
				}
				store.dispatch(Actions.dataArrived(result));
            },
			error:function(xhr,text,error){
				store.dispatch(Actions.errorHappended(text))
			}
		});
	}
	return next(action);
};

//var hq_str_sh601006="大秦铁路,6.020,6.020,6.030,6.040,6.010,6.020,6.030,10014076,60350720.000,1047467,6.020,1886502,6.010,1617900,6.000,941200,5.990,1086600,5.980,744600,6.030,1222179,6.040,1197000,6.050,1035499,6.060,1052700,6.070,2016-07-25,13:31:55,00";
//var hq_str_sh600085="同仁堂,31.150,31.120,31.260,31.510,31.000,31.260,31.290,3054223,95616144.000,10000,31.260,1600,31.250,300,31.240,1600,31.230,1200,31.220,5086,31.290,3700,31.300,2700,31.320,2900,31.350,2100,31.360,2016-07-25,13:31:55,00";
//0：”大秦铁路”，股票名字；
/*1：”27.55″，今日开盘价；
2：”27.25″，昨日收盘价；
3：”26.91″，当前价格；
4：”27.55″，今日最高价；
5：”26.20″，今日最低价；*/
const analysisData = (data) => {
	let result = [];
	let returnData = String.prototype.split(data, ';');
	var reg = /.+(sh|sz)(\d{6})="(.+)"/g;
	for (var i = 0; i < returnData.length; i++) {
		let item = returnData[i];
		var myarr = reg.exec(item);
		if (myarr.length >= 4) {
			let code = myarr[2];
			let datas = myarr[3];
			let infors = datas.split(',');
			result.push({
				code: code,
				name: infors[0],
				current: infors[3],
				open: infors[1],
				high: infors[4],
				low: infors[5]
			})
		}
	}
	return result;
}

const analysisScriptData = (data) => {
	let infors = data.split(',');
	return {
		name: infors[0],
		current: infors[3],
		open: infors[1],
		high: infors[4],
		low: infors[5]
	};
}

const api = [queryData];

export default api;

/*export {
	getProducts
}*/
