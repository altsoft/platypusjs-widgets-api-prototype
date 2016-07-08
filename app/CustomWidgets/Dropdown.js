/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['forms/box-pane'],function (BoxPane) {
    function Dropdown(placeholder) {
        var self = this;    
        
        //Button or any other widget could be created by own hands here  
        //div dropdown
        var dropdown = new BoxPane();
        dropdown.element.className+="dropdown";
        
        
         //Button
        var dBtn = new BoxPane();
        dBtn.element.className+="btn btn-default dropdown-toggle";
        dBtn.element.type+="button";
        dBtn.element.id+="dropdownMenu1";
        dBtn.element.setAttribute("data-toggle", "dropdown");
        dBtn.element.setAttribute("aria-haspopup","true");
        dBtn.element.setAttribute("aria-expanded", "true");
        dropdown.add(dBtn);
       
        
        // List
        var list = new BoxPane();
        list.element.innerHTML = '<div class="dropdown">\
  <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">\
    Dropdown\
    <span class="caret"></span>\
  </button>\
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">\
    <li><a href="#">Action</a></li>\
    <li><a href="#">Another action</a></li>\
    <li><a href="#">Something else here</a></li>\
    <li role="separator" class="divider"></li>\
    <li><a href="#">Separated link</a></li>\
  </ul>\
</div>';
        dropdown.add(list);
//        var UlDropdown = document.createElement('ul');
//        UlDropdown.element.className+="dropdown-menu";
//        UlDropdown.element.setAttribute("aria-labelledby", "dropdownMenu1");
//        dropdown.add(UlDropdown);
//        
//        var LiDropdown = document.createElement('li');
//        UlDropdown.add(LiDropdown);
//        
//        var LinkDropdown = document.createElement('a');
//        LiDropdown.add(LinkDropdown);
        
        //and 
        var pnlPlaceholder = placeholder;
        pnlPlaceholder.add(dropdown);
        
        //Text
        //greatBtn.element.innerHTML = 'Some text';
                
         //Sizes
                
        Object.defineProperty(this,'width', {
            set:function(val){pnlPlaceholder.width=val;}
        });
        
        Object.defineProperty(this,'height', {
            set:function(val){dropdown.height=val;}
        });
         
        Object.defineProperty(this,'text', {
            set:function(val){dBtn.element.innerHTML = val + " "+ "<span class='caret'></span>";}
        });
        
        
          
         
    }
    return Dropdown;
});