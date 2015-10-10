//集合定义
function Set(){
	this.dataStore=[];
	this.add=add;
	this.remove=remove;
	this.size = size;
	this.union = union;
	this.intersect = intersect;
	this.subset = subset;
	this.difference = difference;
	this.show=show;
}

function index(data,context){
	return context.dataStore.indexOf(data);
}

function include(data,context){
	return context.dataStore.indexOf(data)!==-1;
}

Set.index = index;
Set.include = include;

function add(data){
	if(Set.include(data,this)){
		return false;
	}
	this.dataStore.push(data);
	return true;
}

function remove(data){
	var idx;
	if(( idx = Set.index(data,this))!==-1){
		this.dataStore.splice(idx,1)
		return true;
	}
	return false;
}

function size(){
	return this.dataStore.length;
}

function show(){
	return this.dataStore;
}

function union(set){
	var tempSet = new Set();
	this.dataStore.forEach(function(item,index){
		tempSet.add(item);
	});
	set.dataStore.forEach(function(item,index){
		Set.include(item,tempSet) ? '' : tempSet.dataStore.push(item);
	});
	return tempSet;
}

function intersect(set){
	var tempSet = new Set();
	this.dataStore.forEach(function(item,index){
		Set.include(item,set) ? tempSet.add(item) : '';
	});
	return tempSet;
}

function subset(set){
	if(this.size()>set.size()){
		return false;
	}
	return this.dataStore.every(function(item,index){
		return Set.include(item,set);
	});
}

function difference(set){
	var tempSet = new Set();
	this.dataStore.forEach(function(item,index){
		Set.include(item,set) ? '' : tempSet.add(item);
	});
	return tempSet;
}

module.exports = Set;