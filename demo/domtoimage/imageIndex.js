var node = document.querySelector('#share');
var size = (document.querySelector('#size').value || '100x100').split('x');
document.querySelector('#save').addEventListener('click',function(){
    domtoimage.toPng(node,{
        width:size[0],
        height:size[1]
    }).then(function(dataUrl){
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);

        var link = document.createElement('a');
        link.download = 'share.jpeg';
        link.href = dataUrl;
        link.click();
    }).catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
});
