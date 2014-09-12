// Refer to UI elements
var button = document.getElementById('searchButton');
var txtInput = document.getElementById('searchKey');
var appKey = '366d1be14cdf1adad70777be472d5a86';
var serchResult = document.getElementById('serchResult');
var resultBox = document.getElementById('team');
var pageNo = '1';

var recipeApp = {
    QueryRecipie: function (txtInput, pageNo) {
        var request = new XMLHttpRequest({ mozSystem: true });
        request.open("GET", "http://food2fork.com/api/search?key="+appKey+"&q="+txtInput.value+"&page="+pageNo, true);
        // when the Ajax request resolves, load content into a <script> tag
        request.onreadystatechange = function() {
            if (request.readyState == 4) {
                obj = JSON.parse(request.responseText);
                result = '<a href="#" data-rel="back">Back</a>';
                for (var prop in obj.recipes) {
                    if (obj.recipes.hasOwnProperty(prop)) {
                      // or if (Object.prototype.hasOwnProperty.call(obj,prop)) for safety...
                        //console.log("prop: " + prop + " value: " + obj.recipes[prop].recipe_id)
                        result += "<div class='span2' id='recipes"+obj.recipes[prop].recipe_id+"'>";
                        result += "<div class='teamalign'><img class='team-thumb img-circle' src="+obj.recipes[prop].image_url+"> </div>";
                        result += "<h3>"+obj.recipes[prop].title+"</h3>";
                        result += "<div class='job-position'>#12334556</div>";
                        result += "<a href='http://food2fork.com/api/get?key="+appKey+"&rId="+obj.recipes[prop].recipe_id+"' title='More Info' class='link-more-info' onclick='alert(\"hii\")'>More Info...</a>";
                        result += "</div>";
                    }
                }
                if (obj.recipes.length) {
                    document.getElementById('serchResult').innerHTML = result;
                } else{
                    document.getElementById('serchResult').innerHTML = "No result Found";
                }
                // If this device supports the vibrate API...
                if('vibrate' in navigator) {
                    // ... vibrate for a second
                    navigator.vibrate(1000);
                }
            }
        }
        request.send();
    },
    QueryRecipieDetails: function (rId) {
        var request = new XMLHttpRequest({ mozSystem: true });
        request.open("GET", "http://food2fork.com/api/get?key="+appKey+"&rId="+rId);
        // when the Ajax request resolves, load content into a <script> tag
        request.onreadystatechange = function() {
            if (request.readyState == 4) {
                obj = JSON.parse(request.responseText);
                result = "<div>";
                for (var prop in obj.recipes) {
                    if (obj.recipes.hasOwnProperty(prop)) {
                      // or if (Object.prototype.hasOwnProperty.call(obj,prop)) for safety...
                        //console.log("prop: " + prop + " value: " + obj.recipes[prop].recipe_id)
                        result += "<li>";
                        result += "<button id='recipes"+obj.recipes[prop]+"'"+obj.recipes[prop].recipe_id+"</button>";
                        result += "Recipe Name: " + obj.recipes[prop].title;
                        result += "Recipe Image Url " + obj.recipes[prop].image_url;
                        result += "</li>";
                    }
                }
                result += "</div>";
                if (obj.recipes.length) {
                    serchResult.innerHTML = result;
                } else{
                    serchResult.innerHTML = "No result Found";
                }
            }
        }
        request.send();
    }
};
// Bind click event of the button with an event listener
button.addEventListener('click', function(){
    recipeApp.QueryRecipie(txtInput, 1);
    serchResult.scrollIntoView(true);
});