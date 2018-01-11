//$('document').ready(function() {
//$.ajax({
//        type: 'GET',
//        contentType: "application/json",
//        url: 'http://127.0.0.1:5000/branches',
//        success: function(data){
//            var branchesArray = data;
//            $.each(branchesArray, function(index, branch){
//                HTMLGeneratorForBranches(branch, index)
//            })
//        }
//    })
////Handlebars template engine for list display on website
//function HTMLGeneratorForBranches(data, id){
//    var rawTemplate = document.getElementById("city_buttons_template").innerHTML;
//    var compiledTemplate = Handlebars.compile(rawTemplate);
//    var generatedHTML = compiledTemplate(data);
//    var container = document.getElementById("city_buttons");
//    container.innerHTML= generatedHTML;
//}
//
//});