var gMatrix=2; 
function clickme(){
    //$(".container").toggleClass("boxsel");
    //alert(init(2));
    var x = $('#iMax').val();
    if ((x < 2) || (x > 9) ) 
        alert("pls input a 范围内的数字");
    else {
        gMatrix = x;
        init(gMatrix);
    }
}
function clickme2(){	
    var cacheBlack=""; bFind=false;
    for (i = 1 ; i <= gMatrix; i++ ) {
        for (j = 1 ; j <= gMatrix; j++ ) {
            var v_id="b" + i + j;
            if ($("#"+v_id).hasClass("boxsel"))
                cacheBlack = cacheBlack + " " + v_id;
            else
                bFind = true;
            if (bFind) break;
        }
        if (bFind) break;
    }
    console.log(cacheBlack);
    if (!bFind) alert("you win!");
}

function init(aRow) {
    var content = "";
    for (i = 1 ; i <= aRow; i++ ) {
        content =  content + ' <div class="row"> ';            
        for (j = 1 ; j <= aRow; j++ ) {
            content = content + ' <span class="box" id="b' + i + j + '"></span> ' ;            
        }            
        content = content + ' </div> '        
    } 
    $(".container").html(content);
    
    $(".box").click(
        function (e) { 
            var v_id = $(e.target).attr('id');                               
            var x = v_id.substring(1);
            var sep = x.length / 2 ;
            var i = parseInt(x.substring(0, sep));
            var j = parseInt(x.substring(sep, x.length));
            $("#"+v_id).toggleClass("boxsel");  // 自身。
            if (i > 1) $("#b"+(i-1)+j).toggleClass("boxsel");  // 大于第1列，填左面的。
            if (i < gMatrix) $("#b"+(i+1)+j).toggleClass("boxsel");  // 小于最后1列，填右面的。
            if (j > 1) $("#b"+i+(j-1)).toggleClass("boxsel");  // 大于第1行，填上面的。
            if (j < gMatrix) $("#b"+i+(j+1)).toggleClass("boxsel");  // 小于最后1行，填下面的。                                
            // alert(v_id);            
            clickme2();
        } );
    
    return content;
    
}
