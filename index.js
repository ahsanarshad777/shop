// sub catergory Dropdown

$(document).ready(function(){
  $('.menu-item > a').on('click',function(e){
    e.preventDefault();
    $(this).next('.subcategory-list1').slideToggle("slow");
  });
});
