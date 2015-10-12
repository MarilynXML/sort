function HashTable(tableSize){
	tableSize = tableSize || 137;
	this.table = new Array(tableSize);
	this.simpleHash = simpleHash;
	this.showDistro = showDistro;
	this.put = put;
	this.get = get;
	return this;
}

function simpleHash(data){
	//霍纳算子
	var OPERATOR = 37;

	var total = 0;
	for(var i=0,dataLen = data.length;i<dataLen;i++){
		total=total*OPERATOR+data.charCodeAt(i);
	}
	return total % this.table.length;
}

function put(data){
	var pos = this.simpleHash(data);
	this.table[pos] = data;
	return pos;
}

function get(key){
	return this.table[this.simpleHash(key)];
}

function showDistro(){
	var resultArr = [];
	this.table.forEach(function(item,index){
		if(item!==undefined){
			resultArr.push(index+':'+item);
		}
	});
	return resultArr;
}

/*
* 碰撞检测
* 1、开链法 
* 2、线性探测法 table大小是待hash的元素个数的2倍及以上
 */


module.exports = HashTable;