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
	this.addEdge = addEdge;
	this.valueOf = valueOf;
	this.showGraph = showGraph;
	this.dfs = dfs;
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

module.exports = Graph;