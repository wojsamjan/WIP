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
    console.log(chosenCity);
console.log('http://127.0.0.1:5000/'+ city +'/cars'
);
    var request_url= 'http://127.0.0.1:5000/'+ city +'/cars'
    $.ajax({
        type: 'GET',
        contentType: "application/json",
        url: request_url,
        success: function(data){
//            var branchesArray = data;
//            console.log(branchesArray);
//            var chosenCityId = 999;
            $.each(data, function(index, cars){
//                var carsArray = cars;
//                console.log(carsArray);
                    $.each(cars, function(index, car){
                        HTMLGeneratorForCarList(cars, index);  
                    })
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
