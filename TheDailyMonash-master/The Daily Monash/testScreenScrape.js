$.ajax({
     url: "http://www.monash.edu/pubs/2017handbooks/units/ACC2400.html",
     dataType: 'text',
     success: function(data) {
          var elements = $("<div>").html(data)[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
          for(var i = 0; i < elements.length; i++) {
               var theText = elements[i].firstChild.nodeValue;
               // Do something here
			  console.log(theText)
          }
     }
});