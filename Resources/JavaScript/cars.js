//Picture change on mouse hover
function pictureChange(city){
    var citystring= city;
    var fullpath = "Resources/images/".concat(citystring).concat(".jpg");
    document.getElementById('city_image').src=fullpath;
};
//Function to get cars from the server
function getAvailableCars(city){
    var $list_of_cars= $('#list_of_cars');
    var chosenCity= city;

    $.ajax({
        type: 'GET',
        contentType: "application/json",
        url: 'http://127.0.0.1:5000/branches',
        success: function(data){
            var branchesArray = data.branches;
            var chosenCityId = 999;

            $.each(branchesArray, function(index, branch){
                var carsArray = branch.cars;
                if (branch.city === chosenCity){
                    chosenCityId = branch.id;
                    $.each(carsArray, function(index, car){
                        HTMLGeneratorForCarList(carsArray, index);  
                    })
                }
            })
        }
    })
}

//Handlebars template engine for list display on website
function HTMLGeneratorForCarList(data, id){
    var rawTemplate = document.getElementById("cars_template").innerHTML;
    console.log(rawTemplate);
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var generatedHTML = compiledTemplate(data);
    var cars_container = document.getElementById("cars_container");
    cars_container.innerHTML= generatedHTML;
}
