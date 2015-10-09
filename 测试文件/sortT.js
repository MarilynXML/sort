var test=[124,1,2,55,12,3,21,22,54,1000];
temp=[];
document.getElementById('shell').onclick=function() {
    mergeSort(test,0,test.length,temp);
    // mergeArr(test,0,Math.round(test.length/2),test.length,temp);
    alert(test);
};

//归并排序 稳定
function mergeArr(arr,first,mid,last,temp){
    var i=first,
        j=mid,
        k=0;
    while(i<mid&&j<last){
        if(arr[i]<=arr[j]){
            temp[k++] = arr[i++];
        }else{
            temp[k++] =arr[j++];
        }
    }
    while(i<mid){
        temp[k++] = arr[i++];
    }
    while(j<last){
        temp[k++] =arr[j++];
    }
    for (var i = 0; i < k; i++) {
        arr[first+i]=temp[i];
    }
}

function mergeSort(arr,first,last,temp){
    if(first<last-1){
        var mid=Math.round((first+last)/2);
        mergeSort(arr,first,mid,temp);
        mergeSort(arr,mid,last,temp);
        mergeArr(arr,first,mid,last,temp);
    }
}
// $(window).load(function() {
//     $('.loading').fadeOut();
//     console.log('test');
// });
document.onreadystatechange=func;
function func(){
    $('.loading').fadeOut(function(){
        $('.container').removeClass('hide');
    });

    console.log(document.readyState);
}
$(function(){

    'use strict';
    // testSize();
    function testSize(){
        console.log('width:'+$('#shell').width());
        console.log('height'+$('#shell').height());
        console.log('innerWidth'+$('#shell').innerWidth());
        console.log('innerHeight'+$('#shell').innerHeight());
        console.log('outerWidth'+$('#shell').outerWidth());
        console.log('outerHeight'+$('#shell').outerHeight());
        console.log($('#shell').position());
        console.log($('#shell').offset());
    }

    function testDefer(){
        console.log($('#shell').position());
        function wait(){
            var defferd=$.Deferred();
            setTimeout(function(){
                console.log('test');
                defferd.resolveWith(this,['arguments']);
            },1000);
            return defferd.promise();
        }
        $.when(wait()).then(done, fail).always(function(){console.log(this)});
        function done(arg){console.log(arg);}
        function fail(arg){console.log(arg);};
    }

    function testCallbacks(){
        var callbacks=$.Callbacks(),
            obj={
                bar:function(options){
                    options=options||'selfIntroduction';
                    console.log(options);
                },
                foo:function(options){
                    options=options||'null options';
                    console.log(options);
                }
            };
        $.each(obj, function(index, val) {
            console.log(index);
            if (val instanceof Function) {
                callbacks.add(val);
            }
        });
        console.log(callbacks.has(obj.bar));
        // callbacks.disable();
        // console.log(callbacks.disabled());
        // callbacks.lock();
        // console.log(callbacks.locked());
        callbacks.fire('options');
    }

    function personalInfo(){
        // var avatarUrl='avatar.jpg',
            // avatarCss='padding:80px;line-height:200px;border-radius:50%;background:url(avatar.jpg) no-repeat;';
            console.log('%c','padding:80px;border-radius:50%;background:#333 url(http://itec-lds.github.io/user/assets/images/user.jpg) no-repeat center;line-height:300px;');
            // console.log('%c','padding:80px;line-height:200px;border-radius:50%;background:url(avatar.jpg) no-repeat;');    
    }
    // personalInfo();

    function getLocation(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition,showError);
        }else{
            console.log('geolocation of navigator no use');            
        }
        function showPosition(position){
            console.log(position.coords);
        }
        function showError(err){
            alert(err);
            console.log(err);
        }
    }

    //file 显示
    function showFiles(files){
        var output=[],
            appendHtml='';
        for (var i = 0,f; f = files[i]; i++) {
            output[i]=[];
            output[i].push(escape(f.name),f.type,f.size,f.lastModifiedDate.toLocaleDateString());
        };
        for (var i = 0; i < output.length; i++) {
            var itemHtml='';
            itemHtml+='<strong>'+ output[i].join('</strong> <strong>')+'</strong>';
            appendHtml+='<li>'+itemHtml+'</li>';
        };
        $('#list>ul').append(appendHtml);
    }

    //读取文件内容
    function readFile(files){
        for (var i = 0,f; f=files[i]; i++) {
            if(!f.type.match('image.*')){
                continue;
            }
        
            var reader = new FileReader();
            reader.onload=(function(file){
                console.log(file);
                return function(e){
                    console.log(e.target.result);
                    var $span=$('<span class="img-container"></span>');
                    var img = '<img src='+e.target.result+'>';
                    $span.append(img);
                    $span.insertBefore('.position');
                }
            })(f);
            reader.readAsDataURL(f);
        }
    }
    // file测试 点击输入框
    function handleFileSelect(evt){
        // console.log(evt);
        var files = evt.target.files;
        showFiles(files);
        readFile(files);
    }
    $('#files').change(handleFileSelect);
    // file测试 拖放
    function handleDragSelect(evt){
        evt.stopPropagation();
        evt.preventDefault();
        var files=evt.dataTransfer.files;
        showFiles(files);
        readFile(files);
    }
    function handleDragOver(evt){
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect='copy';
    }
    function initDrag(){
        $('.drop-zone')[0].addEventListener('dragover',handleDragOver,false);
        $('.drop-zone')[0].addEventListener('drop',handleDragSelect,false);
    }
    initDrag();
});