/*
    @file 实现基本排序算法
 */


//实用工具类
var util = {
    swap: function(arr, j, i) {
        //数组相邻元素交换
        if (arguments.length === 2) {
            var v = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = v;
        }
        //根据给定下标交换
        else {
            var v = arr[j];
            arr[j] = arr[i];
            arr[i] = v;
        }
    }
}

//冒泡排序
function bubbling(arr) {
    for (var i = 0, len = arr.length; i < len - 1; i++) {
        for (var j = len - 1; j > i; j--) {
            if (arr[j] > arr[j - 1]) {
                util.swap(arr, j);
            }
        }
    }
    return arr;
}

//插入排序 稳定
function insertSort(arr) {
    for (var i = 1, len = arr.length; i < len; i++) {
        var j = i;
        while (true) {
            if (arr[j] < arr[j - 1] && j > 0) {
                util.swap(arr, j);
                j--;
            } else {
                break;
            }
        }
    }
    return arr;
}

//选择排序 非稳定
function minIndex(arr) {
    var min;
    if (arr instanceof Array) {
        min = arr[0];
        for (var i = 1, len = arr.length; i < len; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return arr.indexOf(min);
    }
}

function selectSort(arr) {
    for (var i = 0, len = arr.length; i < len; i++) {
        var selectArr, selectIndex;
        selectArr = arr.slice(i);
        selectIndex = i + minIndex(selectArr);
        if (i !== selectIndex) {
            util.swap(arr, selectIndex, i);
        }
    }
    return arr;
}
//快速排序 非稳定
function quickSort(arr, left, right) {
    var key, lp, rp;
    key = arr[left];
    lp = left;
    rp = right;
    if (left < right) {
        while (lp < rp) {
            while (arr[rp] >= key && lp < rp) {
                rp--;
            }
            if (lp < rp) {
                arr[lp] = arr[rp];
                lp++;
            }
            while (arr[lp] < key && lp < rp) {
                lp++;
            }
            if (lp < rp) {
                arr[rp] = arr[lp];
                rp--;
            }
        }
        arr[lp] = key;
        quickSort(arr, left, lp - 1);
        quickSort(arr, rp + 1, right);  
    }
    return arr;
}

//希尔排序 非稳定
function shellSort(arr) {
    var arrLen = arr.length;
    stepSize = Math.floor(arrLen / 2);
    for (; stepSize > 0; stepSize=Math.floor(stepSize/2)) {
        var agencyArr = [];
        for (var i = 0; i < stepSize; i++) {
            agencyArr[i] = [];
            for (var k = 0; stepSize * k + i < arrLen; k++) {
                agencyArr[i].push(arr[stepSize * k + i]);
            }
        }
        arr = [];
        for (var i = 0; i < agencyArr.length; i++) {
            insertSort(agencyArr[i]);
            arr = arr.concat(agencyArr[i]);
        }
    }
    return arr;
}

//归并排序 稳定
function mergeArr(arr, first, mid, last, temp) {
    var i = first,
        j = mid,
        k = 0;
    while (i < mid && j < last) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }
    while (i < mid) {
        temp[k++] = arr[i++];
    }
    while (j < last) {
        temp[k++] = arr[j++];
    }
    for (var i = 0; i < k; i++) {
        arr[first + i] = temp[i];
    }
}

function mergeSort(arr, first, last, temp) {
    if (first < last - 1) {
        var mid = Math.round((first + last) / 2);
        mergeSort(arr, first, mid, temp);
        mergeSort(arr, mid, last, temp);
        mergeArr(arr, first, mid, last, temp);
    }
}

//二叉排序树
function Node(data,left,right){
    this.data=data;
    this.left=lfet;
    this.right=right;
}
function binaryTree(){

}