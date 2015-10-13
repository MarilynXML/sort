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
	for(var i =0,verticesLen = vertices.length;i<verticesLen;i++){
		this.adj[i] = [];
		this.adj[i].push('');
	}
	this.addEdge = addEdge;
	this.valueOf = valueOf;
}