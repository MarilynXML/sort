function Stack(){
	this.dataStore=[];
	this.top=0;
	this.push=push;
	this.pop=pop;
	this.peek=peek;
	this.size=size;
	this.clear=clear;
}

function push(element){
	this.dataStore[this.top++]=element;
	return this.top;
}

function pop(){
	if(this.top){
		return this.dataStore.splice(--this.top,1)[0];
	}
}

function peek(){
	return this.dataStore[this.top-1];
}

function size(){
	return this.top;
}

function clear(){
	delete this.dataStore;
	this.dataStore=[];
	this.top=0;
	return this.top;
}

module.exports=Stack;