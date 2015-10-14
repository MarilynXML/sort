/*
 * @description 构造顶点函数
 * @param {label} 顶点标识
*/
function Vertex(label){
	this.label = label;
	return this;
}

function Graph(v){
	this.vertices = v;
	this.edges = 0;
	this.adj = [];
	this.marked = [];
	this.edgeTo = [];
	this.addEdge = addEdge;
	this.valueOf = valueOf;
	this.showGraph = showGraph;
	this.dfs = dfs;
	this.bfs = bfs;
	this.pathTo = pathTo;
	this.hasPathTo = hasPathTo;
	this.resetMark= resetMark;
	this.topoSort = topoSort;
	this.topoSortHelper = topoSortHelper;
	constructorGraph.bind(this)();
}

function constructorGraph(){
	for(var i =0;i<this.vertices;i++){
		this.adj[i] = [];
		// this.adj[i].push('');
		this.marked[i] = false;
	}
}

function addEdge(v,w){
	try{
		this.adj[v].push(w);
		this.adj[w].push(v);
		this.edges++;
	}catch(e){
		console.log(e);
	}finally{
		return this.edges;
	}
}

function showGraph(){
	for(var i = 0,v = this.vertices;i<v;i++){
		var temp = [];
		temp.push(i+'->');
		for(var j = 0;j<v;j++){
			if(this.adj[i][j]!==undefined){
				temp.push(this.adj[i][j]);
			}
		}
		console.log(temp.join(' '));
	}
}

function valueOf(){

}

function dfs(v){
	v = v || 0;
	this.marked[v] = true;
	if(this.adj[v]!==undefined){
		console.log('visited vertex: '+v);
	}
	var temp = this.adj[v];
	for(var i in temp){
		if(!this.marked[temp[i]]){
			this.dfs(temp[i]);
		}
	}
}

function bfs(s){
	s = s||0;
	var queue = [];
	this.marked[s] = true;
	queue.push(s);
	while(queue.length){
		var v = queue.shift();
		if(v !== undefined){
			console.log('visited vertex:'+v);
		}
		var temp = this.adj[v];
		for(var i in temp){
			if(!this.marked[temp[i]]){
				this.edgeTo[temp[i]] = v;
				this.marked[temp[i]] = true;
				queue.push(temp[i]);
			}
		}
	}
}

function pathTo(v){
	var s = 0;
	if(!this.hasPathTo(v)){
		return undefined;
	}
	var path = [];
	for(var i=v;i!==s;i=this.edgeTo[i]){
		path.push(i);
	}
	path.push(s);
	return path.reverse();
}

function hasPathTo(v){
	return this.marked[v];
}

function resetMark(){
	this.marked.forEach(function(item,ind,mark){
		mark[ind] = false;
	});
	return this;
}

function topoSort(){
	var stack = [],
		visited = [];
	for(var i =0,v=this.vertices;i<v;i++){
		visited[i] = false;
	}
	for(var i=0;i<v;i++){
		if(visited[i] === false){
			this.topoSortHelper(i,visited,stack);
		}
	}
	for(var i=0,len=stack.length;i<len;i++){
		if(stack[i] != undefined && stack[i]!==false){
			console.log(this.vertexList[stack[i]]);
		}
	}
}

function topoSortHelper(v,visited,stack){
	var temp = this.adj[v]; 
	visited[v] = true;
	for(var i in temp[i]){
		if(!visited[temp[i]]){
			this.topoSortHelper(visited[temp[i]],visited,stack);
		}
	}
	stack.push(v);
}

module.exports = Graph;