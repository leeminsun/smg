function viewport() {


}

$(document).ready(function(){
    viewport();
    $("#pageOpenTimer").TimeCircles({
        "animation": "smooth",
        "bg_width": 0.2,
        "fg_width": 0.03,
        "circle_bg_color": "#90989F",
        "time": {
            "Days": {
                "text": "Days",
                "color": "#40484F",
                "show": true
            },
            "Hours": {
                "text": "Hours",
                "color": "#40484F",
                "show": true
            },
            "Minutes": {
                "text": "Minutes",
                "color": "#40484F",
                "show": true
            },
            "Seconds": {
                "text": "Seconds",
                "color": "#40484F",
                "show": true
            }
        }
    });
    /* $("#pageOpenTimer").TimeCircles().end().each(function(){
        alert("aaaa");
    }); */   
});