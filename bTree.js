function BTreeNode(data,left,right){
	this.data = data;
	this.left = left || null;
	this.right = right || null;
}

function BTree(){
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
	this.find = find;
	this.min = getMin;
	this.max = getMax;
	this.remove = remove;
}

function insert(data){
	var newNode = new BTreeNode(data),
		current = this.root,
		parent;
	if(current === null){
		this.root = newNode;
		return newNode;
	}
	while(true){
		parent = current;
		if(data<current.data){
			current = current.left;
			if(current === null){
				parent.left = newNode;
				return parent;
			}
		}else{
			current = current.right;
			if(current === null){
				parent.right = newNode;
				return parent;
			}
		}
	}
}

//中序遍历二叉树
function inOrder(node){
	node = node || this.root;
	if(!(node==null)){
		inOrder(node.left);
		showNode(node);
		inOrder(node.right);
	}
}

//前序遍历
function preOrder(node){
	node = node || this.root;
	if(node !== null){
		showNode(node);
		preOrder(node.left);
		preOrder(node.right);
	}
}

//后序遍历
function postOrder(node){
	node = node || this.root;
	if(node !== null){
		postOrder(node.left);
		postOrder(node.right);
		showNode(node);
	}
}

function showNode(node){
	console.log(node.data);
	return node.data;
}


function getMax(current){
	var current = current || this.root;
	if(!current){
		return null;
	}
	while(current.right){
		current = current.right;
	}
	return current.data;
}

function getMin(current){
	var current = current || this.root;
	if(!current){
		return null;
	}
	while(current.left){
		current = current.left;
	}
	return current.data;
}

//使用二叉查找
function find(data){
	var current = this.root;
	while(current){
		if(current.data == data){
			return current;
		}else if(data<current.data){
			current = current.left;
		}else{
			current = current.right;
		}
	}
	return null;
}

//二叉删除
function remove(data){
	var removedNode = removeNode(this.root,data);
	return removedNode;
}

function removeNode(node,data){
	if(node == null){
		return null;
	}
	if(data === node.data){
		if(node.left === null && node.right === null){
			return null;
		}
		if(node.left === null){
			return node.right;
		}
		if(node.right===null){
			return node.left;
		}
		var tempNode = this.min(node.right);
		node.data = tempNode.data;
		node.right = removeNode(node.right,tempNode.data);
		return node;
	}else if(data<node.data){
		node.left = removeNode(node.left,data);
		return node;
	}else{
		node.right = removeNode(node.right,data);
		return node;
	}
}

module.exports = BTree;