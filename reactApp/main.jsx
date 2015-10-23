var HelloWorld = React.createClass({
	getDefaultProps:function(){
		console.log('getDefaultProps:',arguments);
		return {text:'default props text'};
	},
	getInitialState:function(){
		return {status:'start'};
	},
	componentWillReceiveProps:function(){
		console.log('receiveProps:',arguments);
	},
	componentWillUpdate:function(){
		console.log('update:',arguments);
	},
	// shouldComponentUpdate:function(){
			// 	console.log('shouldUpdate:',arguments);
			// 	return true;
	// },
	componentDidMount:function(){
		console.log('componentDidMount',arguments);
	},
	onHandleClick:function(data,evt){
		console.log(temp=this);
		console.log('data:',data);
	},
	render:function(){
		return (<p onClick={this.onHandleClick.bind(this,{name:'lds'})} className="lead">{this.props.text}</p>);
	}
});
React.render(
	<HelloWorld text = "输入评论：" />,
	document.querySelector('.hello-world')
);

var ListItem = React.createClass({
	getInitialState:function(){
		return {times:0};
	},
	getDefaultProps:function(){
		return {text:''};
	},
	onHandleClick:function(evt){
		switch(evt.target.className){
			case 'like':
				this.setState({times:++this.state.times});
				break;
			case 'unlike':
				this.setState({times:--this.state.times>0 ? this.state.times:0});
				break;
			default:
				break;
		}
		console.log(window.listItem = this);
	},
	render:function(){
		return (
				<li key={this.props.key} className="comment-item clearfix">
					<div className="vote" onClick={this.onHandleClick}>
						<span className="like"><span className="sr-only">支持一下</span></span>
						<span className="text-overflow">{this.state.times}</span>
						<span className="unlike"><span className="sr-only">答案有问题,否决</span></span>
					</div>
					<div className="text-comment">{this.props.text}</div>
				</li>
				);
	}
});

var CommentList = React.createClass({
	componentWillUpdate:function(){
		console.log(window.list=this);
		console.log(arguments);
	},
	componentUnMount:function(){
		console.log('unMount:',arguments);
	},
	render:function(){
		var lists = this.props.list.map(function(val,index){
						return (<ListItem key={'key-'+index} text={val} />);
				});
		return (
				<ul className="list-unstyled" onClick={this.onHandleClick}>
					{lists}
				</ul>
			);
	}
});
		
var mixins = {
	test:function(){
		alert('mixins test');
	}
};

var Comments = React.createClass({
	mixins:[mixins],
	handleSubmit:function(evt){
		evt.preventDefault();
		var value = this.refs.listItem.getDOMNode().value;
		if(!value.trim())return;
		this.refs.listItem.getDOMNode().value = '';
		this.props.list.push(value);
		// this.forceUpdate();
		this.setProps({list:this.props.list});
		console.log(window.temp = this);
		console.log(evt);
	},
	render:function(){
		return (
				<div>
					<form action="" method="post" encType="application/x-www-form-urlencoded" className="form-horizontal clearfix" onSubmit={this.handleSubmit}>
						<textarea className="form-control" type="text" name="listItem" placeholder="input your comment here" ref="listItem"></textarea>
						<input type="submit" name="submit" value ="提交" className="btn btn-primary pull-right" />
					</form>
					<CommentList list = {this.props.list} />
				</div>
			);
	}
});
var commentInfoArr = ['需要控制LikeText的那个state除了通过自身state控制外再加上props控制，LikeButton通过改变LikeText的props来控制，需要用到componentWillReceiveProps，代码参考如下：'];
React.render(
		<Comments list={commentInfoArr} />,
		document.querySelector('.comment-container')
	);
	// var container = document.querySelector(selector);
	// React.unmountComponentAtNode(container);