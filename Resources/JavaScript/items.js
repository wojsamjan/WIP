//Picture change on mouse hover
function pictureChange(city){
    var citystring= city;
    var fullpath = "Resources/images/".concat(citystring).concat(".jpg");
    document.getElementById('city_image').src=fullpath;
};
//Get items
function getItems(city){
    var chosenCity= city;
    var request_url= 'http://127.0.0.1:5000/'+ city +'/items'
    $.ajax({
        type: 'GET',
        contentType: "application/json",
        url: request_url,
        success: function(data){
            $.each(data, function(index, item){
                HTMLGeneratorForItemList(item, index);  
            })


        }
    })
}

function getAvailableCars(city){
    var $list_of_cars= $('#list_of_cars');
    var chosenCity= city;
    console.log(chosenCity);
    console.log('http://127.0.0.1:5000/'+ city +'/cars');
    var request_url= 'http://127.0.0.1:5000/'+ city +'/cars'
    $.ajax({
        type: 'GET',
        contentType: "application/json",
        url: request_url,
        success: function(data){
            $.each(data, function(index, cars){
                $.each(cars, function(index, car){
                    HTMLGeneratorForCarList(cars, index);  
                })

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