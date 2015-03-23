//插入排序 稳定
function insertSort(arr){
	for(var i=1,len=arr.length;i<len;i++){
		var j=i;
		while(true){
			if(arr[j]<arr[j-1]&&j>0){
				var v=arr[j];
				arr[j]=arr[j-1];
				arr[j-1]=v;
				j--;
			}else
			{
				break;
			}
		}
	}
	return arr;
}

//选择排序 非稳定
function minIndex(arr){
	var min;
	if (arr instanceof Array) {
		min=arr[0];
		for (var i = 1,len=arr.length; i < len; i++) {
			if(arr[i]<min){
				min=arr[i];
			}
		}
		return arr.indexOf(min);
	}
}

function selectSort(arr){
	for(var i=0,len=arr.length;i<len;i++){
		var selectArr,selectIndex;
		selectArr=arr.slice(i);
		selectIndex=i+minIndex(selectArr);
		if(i!==selectIndex){
			var swop=arr[selectIndex];
			arr[selectIndex]=arr[i];
			arr[i]=swop;
		}
	}
	return arr;
}

//快速排序
function quickSort(){
	
}