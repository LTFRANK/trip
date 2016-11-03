// $(function($) {
    function placeholderPic(){
        var w = document.documentElement.offsetWidth||document.body.offsetWidth;

        if(w>480)
        {
        	w=480;
        }
        document.documentElement.style.fontSize=(w/750)*100+'px';
    }
    placeholderPic();
    window.onresize=function(){
        placeholderPic();
    }
// });
