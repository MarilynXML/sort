function Dictionary(){
	this.dataStore = {};
	this.add = add;
	this.get = get;
	this.remove = remove;
	this.show = show;
	this.count = count;
	this.clear =clear;
	this.size=0;
	return this;
}


function add(key,value){
	var kind = type(key);
	switch(kind){
		case 'String':
			this.dataStore[key] = value;
			this.size++;
			break;
		case 'Object':
			var attr = Object.keys(key)[0];
			this.dataStore[attr] = key[attr];
			this.size++;
			break;
		case 'Array':
			var self = this;
			key.forEach(function(item){
				var attr = Object.keys(item)[0];
				self.dataStore[attr] = item[attr];
				self.size++;
			});
			break;
		default:
			break;
	}
	return this.dataStore;

	/*
	* @description 获取参数类型
	* @param[String|Array|Object] variable
	* @return[String] 返回参数类型
	 */
	function type(variable){
		var kind = Object.prototype.toString.call(variable),
			kindReg = /Array|String|Object/;
		return kindReg.exec(kind)[0];
	}
}

function get(key){
	return this.dataStore[key];
}

function remove(key){
	var val = this.dataStore[key];
	delete this.dataStore[key];
	this.size--;
	return val;
}

function show(){
	var values = [],
	dataStore = this.dataStore;
	for(var key in dataStore){
		values.push(key+'->'+dataStore[key]);
	}
	return values;
}

function count(){
	return this.size;
}

function clear(){
	this.dataStore = {};
	this.size = 0;
}

module.exports = Dictionary;