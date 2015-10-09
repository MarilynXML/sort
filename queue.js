function Queue(){
	this.dataStore=[];
	this.enqueue = enqueue;
	this.dequeue=dequeue;
	this.front=front;
	this.back=back;
	this.toString=toString;
	this.isEmpty=isEmpty;
	this.size=size;
}

function size(){
	return this.dataStore.length;
}

function enqueue(element){
	this.dataStore.push(element);
	return this.size();
}

function dequeue(){
	return this.dataStore.shift();
}

function toString(){
	var resultStr = this.dataStore.join('\n');
	return resultStr;
}

function isEmpty(){
	return this.size()===0;
}

function front(){
	return this.size()?this.dataStore[0]:null;
}

function back(){
	var size = this.size();
	return size?this.dataStore[size-1]:null;
}

module.exports=Queue;