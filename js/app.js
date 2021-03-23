'use strict';
function Horns(obj)
{

    for(let key in obj){
      this[key] = obj[key];
    }
  
}
Horns.prototype.render = function ()
{
  let hornOption = $('<option></option>').text(this.keyword);
  $('select').append(hornOption);
  let dataClone=$('#imgtemp').clone();
  dataClone.find('h2').text(this.title);
  dataClone.find('img').attr('src', this.image_url);
  dataClone.find('p').text(this.description);
  dataClone.attr('class', this.keyword);
  $('main').append(dataClone);

}
const ajaxSettings = {
  method: 'get',
  dataType: 'json'
};


$.ajax('data/page-1.json', ajaxSettings).then((data) => {
  data.forEach(element => {
    let newAn= new Horns(element);
    newAn.render();
  });
});

$(document).ready(function(){
  $('select').on('change',function(){
    let seletecItem =this.value;
    $('section').hide();
    $(`.${seletecItem}`).show();
  });
});