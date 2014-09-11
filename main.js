// Refer to UI elements
var button = document.getElementById('searchButton');
var txtInput = document.getElementById('searchKey');
var appKey = '366d1be14cdf1adad70777be472d5a86';

// Bind click event of the button with an event listener
button.addEventListener('click', function(){
    var request = new XMLHttpRequest({ mozSystem: true });
    request.open("GET", "http://food2fork.com/api/search?key="+appKey+"&q="+txtInput.value);
    // when the Ajax request resolves, load content into a <script> tag
        request.onreadystatechange = function() {
            if (request.readyState == 4) {
                obj = JSON.parse(request.responseText);
                	result = "<ul>";
                    for (var prop in obj.recipes) {
                      if (obj.recipes.hasOwnProperty(prop)) {
                      // or if (Object.prototype.hasOwnProperty.call(obj,prop)) for safety...
                        //console.log("prop: " + prop + " value: " + obj.recipes[prop].recipe_id)
                        result += "<li>";
                        result += "Recipe ID :" + obj.recipes[prop].recipe_id;
                		result += "Recipe Name: " + obj.recipes[prop].title;
                		result += "Recipe Image Url " + obj.recipes[prop].image_url;
                		result += "</li>";
                      }
                    }
                    result += "</ul>";
                    //console.log(obj.recipes.length);
                    //document.getElementById('serchResult').innerHTML = result;
                    if (obj.recipes.length) {
                    	document.getElementById('serchResult').innerHTML = result;
                    } else{
                    	document.getElementById('serchResult').innerHTML = "No result Found";
                    }
                // result = "<li>Post Office: " + obj.PostOffice + "</li>";
                // result += "<li>District: " + obj.District + "</li>";
                // result += "<li>State: " + obj.State + "</li>";
                //console.log(result);
                //console.log(obj.recipes[0].recipe_id);
                //alert(obj);
                // $("#searchResults").html(result);
                // $('#searchResults').listview('refresh');
            }
        }
        request.send();

    });
