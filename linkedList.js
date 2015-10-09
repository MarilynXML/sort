function Node(element){
	this.element = element;
	this.next = null;
}

function LinkedList(){
	this.head = new Node('head');
	this.find = find;
	this.insertAfter = insertAfter;
	this.remove = remove;
	this.display = display;
}

function find(node,prev){
	var currNode,prevNode;
		currNode = this.head;
	if(prev){
		while(currNode){
			if(currNode == node){
				return prevNode;
			}else{
				prevNode = currNode;
				currNode = currNode.next;
			}
		}
	}else{
		while(currNode){
			if(currNode == node){
				return currNode;
			}else{
				currNode = currNode.next;
			}
		}
	}
	return null;
}

function insertAfter(node,newElement){
	var newNode = new Node(newElement),
		currNode = this.find(node);
	newNode.next = currNode.next;
	currNode.next = newNode;
}

function display(){
	var currNode = this.head,
		elements = [];
	while(currNode){
		elements.push(currNode.element);
		currNode = currNode.next;
	}
	return elements;
}

function remove(node){
	var currNode = this.find(node,true);
	while(currNode){
		currNode.next = currNode.next.next;
		return true;
	}
	return false;
}

module.exports = LinkedList;