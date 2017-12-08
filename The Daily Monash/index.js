function initialize(){
	var form = document.getElementById("WAMForm");
	//Unit Level Identification
	for (var i = 0; i< form.length;)
	{
		if(form.elements[i].value !== "")
		{
			var input = form.elements[i].value;
			var level = input.charAt(3);
			document.getElementById("level" + i).innerHTML = level
			var link="";
			link += "http://www.monash.edu/pubs/2017handbooks/units/"+input+".html"
			var foo = document.getElementById("links");
			foo.href = link;
		}
		i=i+2;
	}

	//Results Calculation
	var WAMresults = [];
	var GPAresults = [];
	for (var i = 1; i < form.length;)
	{
		//Checking to prevent improper values and placing them into WAM array
		if((form.elements[i].value !== "") && (form.elements[i].value >= 0) && (form.elements[i].value <= 100))
		{
		WAMresults.push(Number(form.elements[i].value));		
		}
		//This section is for a dynamically changing grade and also to input GPA array
		if(form.elements[i].value !=="")
		{
			if (form.elements[i].value > 100)
			{
				document.getElementById("grade" + i).innerHTML = "Error";
			}
			else if(form.elements[i].value >= 80)
			{
				document.getElementById("grade" + i).innerHTML = "HD";
				GPAresults.push(4);
			}
			else if(form.elements[i].value >= 70)
			{
				document.getElementById("grade" + i).innerHTML = "D";
				GPAresults.push(3);
			}
			else if(form.elements[i].value >= 60)
			{
				document.getElementById("grade" + i).innerHTML = "C";
				GPAresults.push(2);
			}
			else if(form.elements[i].value >= 50)
			{
				document.getElementById("grade" + i).innerHTML = "P";
				GPAresults.push(1);
			}
			else if(form.elements[i].value >= 0)
			{
				document.getElementById("grade" + i).innerHTML = "N";
				GPAresults.push(0);
			}
			else if(form.elements[i].value < 0)
			{
				document.getElementById("grade" + i).innerHTML = "Error";
			}
		}
		
		//Ensuring that if user deletes entry into results field, the grade will go back to original form
		if(form.elements[i].value == "")
		{
			document.getElementById("grade" + i).innerHTML = "-";
		}
		
		i = i+2;
	}
	
	//Calculation of WAM results, and giving a default name when there is no input
	if (WAMresults.length > 0)
	{
		var WAMoutput = ((WAMresults.reduce(add,0))/WAMresults.length).toFixed(2);
	}
	else
	{
		var WAMoutput = "Need Inputs"
	}
	
	//Printing onto HTML
	document.getElementById("WAMResult").innerHTML = WAMoutput;
	
	//Calculation of GPA results, and giving a default name when there is no input
	if (GPAresults.length > 0)
	{
		var GPAoutput = ((GPAresults.reduce(add,0))/GPAresults.length).toFixed(2);
	}
	else
	{
		var GPAoutput = "Need Inputs"
	}
	
	//Printing onto HTML
	document.getElementById("GPAResult").innerHTML = GPAoutput;
	
	//Addition function to add all elements in array
	function add(a, b) {
        return a + b;	
	}
	
}