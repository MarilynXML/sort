function List(){
	this.listSize=0;
	this.pos=0;
	this.dataStore=[];
	this.size=size;
	this.clear=clear;
	this.find=find;
	this.valueOf=valueOf;
	this.getElement=getElement;
	this.insert=insert;
	this.append=append;
	this.remove=remove;
	this.front=front;
	this.end=end;
	this.prev=prev;
	this.next=next;
	this.currPos=currPos;
	this.moveTo=moveTo;
	this.contains=contains;
	return this;
}

function append(element){
	this.dataStore[this.listSize++]=element;
	return this.listSize;
}

function find(element,startIdx){
	startIdx=startIdx||0;
	return this.dataStore.indexOf(element,startIdx);
}

function contains(element){
	var idx=this.find(element);
	return idx!==-1;
}

function remove(element){
	if(contains(element)){
		var idx = this.find(element);
		this.dataStore.splice(idx,1);
		--this.listSize;
		return true;
	}
	return false;
}

function size(){
	return this.listSize;
}

function valueOf(){
	return this.dataStore;
}

function insert(element,after){
	var hasAfter=contains(after),
		idx;
	if(hasAfter){
		idx=this.find(after)+1;
		this.dataStore.splice(idx,0,element);
		++this.listSize;
		return true;
	}
	return false;
}

function clear(){
	delete this.dataStore;
	this.dataStore = [];
	this.listSize = this.pos=0;
}

function front(){
	this.pos=0;
}

function end(){
	this.pos=this.listSize-1;
}

function prev(){
	if(this.pos>0){
		--this.pos;
	}else{
		return false;
	}
}

function next(){
	if(this.pos<this.listSize-1){
		++this.pos;
	}else{
		return false;
	}
}

function currPos(){
	return this.pos;
}

function moveTo(position){
	if(0<=position&&pos<=listSize-1){
		this.pos=position;
	}
}

function getElement(){
	return this.dataStore[this.pos];
}

module.exports=List;