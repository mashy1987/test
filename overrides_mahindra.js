
$('text[id^="Module-"]').each(function(){
		var character_len = $(this).children().text().length;
		if(character_len <= 9){
			$(this).attr('font-size','20');
		}else{
			$(this).attr('font-size','14');
		}
    	$(this).css('property','value');
	});


$("#identity").prepend('<li style="margin-right:12px;font-weight:bold"><a title="The Jigsaw" id="jigsaw" target="_blank" href="https://mahindraslp.aktivlearn.com/courses/19/assignments/225">The Jigsaw</a></li>');

if(document.domain=='axismoves.aktivlearn.com'){ $('html').css('background', 'url(https://culture-accenture.s3.amazonaws.com/knolskape/canvas-lms/axis-lms/axis_bg.gif)'); 
	$("<link/>", {
   		rel: "stylesheet",
   		type: "text/css",
   		href: "https://culture-accenture.s3.amazonaws.com/knolskape/canvas-lms/axis-lms/override_axis.css"
	}).appendTo("head");
}

function reset_notifications(){
qr=new XMLHttpRequest();
qr.open('get','https://mahindraslp.aktivlearn.com/recent_activity');
qr.send();
qr.onreadystatechange=function(){
var recentActivityHtml = this.responseText;
var lines = recentActivityHtml.split("\n");
//alert(lines.length);
if(lines.length>100){
for (var i = 0; i<=lines.length; i++){
	var search_pos = lines[i].search("https://mahindraslp.aktivlearn.com/dashboard/ignore_stream_item/");
	if(search_pos>0){
		//alert(search_pos);
		var stream_item_id_pos = search_pos+68;
		var stream_link = lines[i].substring(search_pos,stream_item_id_pos);
		$.ajax({
    		url: stream_link,
    		type: 'DELETE',
    		success: function(result) {}
    	});		
}
}
}
}
};

$( ".circle-container" ).click(function() {
  reset_notifications();
});
