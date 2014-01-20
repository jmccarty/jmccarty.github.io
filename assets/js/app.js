$(document).ready(function() {
    var pathname = window.location.pathname;

    // Parse the collection name (if applicable)
    if (pathname.toLowerCase().indexOf("collection") != -1){
    	var collection = pathname.split("/")[pathname.split("/").length-2];
    	$("li#" + collection).addClass("active");
    }
    // Otherwise figure out which navbar button it is
    else{
	    $("ul.navbar-nav li").each(function() {
	    	// Select the list element's link and extract it
	    	var a = $(this).children("a")[0];
	    		href = $(a).attr("href");

	    	// Check if the end of the path matches the link
	    	if (pathname == "/" && href == "/") $(this).addClass("active");
	    	else if (pathname.toLowerCase().indexOf("about") != -1 && href == "/about"){
	    		$(this).addClass("active");
	    	}
	    });
    }


    if ($("li.active").length == 0)
        $("li#index").addClass("active");
});
