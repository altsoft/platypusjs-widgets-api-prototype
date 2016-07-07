/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define(['forms/box-pane'],function (BoxPane) {
    function GreatButton(placeholder) {
        var self = this;    
        
        //Button or any other widget could be created by own hands here  
        //div
        var greatBtn = new BoxPane();
        
        greatBtn.element.className+="btn btn-primary";
        
        //and 
        var pnlPlaceholder = placeholder;
        pnlPlaceholder.add(greatBtn);
        
        //Text
        //greatBtn.element.innerHTML = 'Some text';
                
         //Sizes
        Object.defineProperty(this,'height', {
            set:function(val){greatBtn.height=val;}
        });
        
        Object.defineProperty(this,'width', {
            set:function(val){pnlPlaceholder.width=val;}
        });
        
                
        Object.defineProperty(this,'onActionPerformed', {
            set:function(aAction){ greatBtn.element.addEventListener("click",aAction);}
        });
        
        Object.defineProperty(this,'text', {
            set:function(val){greatBtn.element.innerHTML = val;}
        });
        
         
    }
    return GreatButton;
});