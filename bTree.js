function BTreeNode(data,left,right){
	this.data = data;
	this.left = left || null;
	this.right = right || null;
}

function BTree(){
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
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

module.exports = BTree;