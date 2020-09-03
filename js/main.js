var r = $("#groups-show");
$("#groups").on("click", funk);

function funk(){    
	if(r.css ("display") == "none"){
        r.fadeIn(100);
        $("#fix-img").css("marginTop","-240px");
        }
        else{
            r.fadeOut(100); 
            $("#fix-img").css("marginTop","0px");           
        }    
    } 


