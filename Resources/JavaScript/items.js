//Picture change on mouse hover
function pictureChange(city){
    var citystring= city;
    var fullpath = "Resources/images/".concat(citystring).concat(".jpg");
    document.getElementById('city_image').src=fullpath;
};
//Get items
function getItems(city){
    var chosenCity= city;
    $.ajax({
        type: 'GET',
        contentType: "application/json",
        url: 'http://127.0.0.1:5000/branches',
        success: function(data){
            var branchesArray = data.branches;
            var chosenCityId = 999;

            $.each(branchesArray, function(index, branch){
                var itemsArray = branch.items;
                if (branch.city === chosenCity){
                    chosenCityId = branch.id;

                    $.each(itemsArray, function(index, item){
                        HTMLGeneratorForItemList(itemsArray, index);  
                    })
                }
            })
        }
    })
}
//Handlebars engine for html template
function HTMLGeneratorForItemList(data, id){
    var rawTemplate = document.getElementById("items_template").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var generatedHTML = compiledTemplate(data);
    var cars_container = document.getElementById("items_container");
    cars_container.innerHTML= generatedHTML;
}