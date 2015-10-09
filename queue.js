function Queue(){
	this.dataStore=[];
	this.enqueue = enqueue;
	this.dequeue=dequeue;
	this.front=front;
	this.back=back;
	this.valueOf=valueOf;
	this.empty=empty;
}