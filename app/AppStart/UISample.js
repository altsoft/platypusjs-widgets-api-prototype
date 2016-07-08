/**
 * 
 * @author jskonst
 */
define('UISample', ['orm', 'forms', 'ui','FancyWidget', '../CustomWidgets/Button', '../CustomWidgets/Dropdown'], function (Orm, Forms, Ui,FancyWidget, Button, Dropdown, ModuleName) {
    function module_constructor() {
        var self = this
                , model = Orm.loadModel(ModuleName)
                , form = Forms.loadForm(ModuleName, model);
        
        
        self.show = function () {
            form.show();
        };
        
        var fancyWidget = new FancyWidget();        
        fancyWidget.showOn(form.pnlPlaceholder1);
        
        var btn = new Button(form.pnlPlaceholder3);
        btn.height=30;
        btn.width=160;
        btn.text = "Another text";
        btn.onActionPerformed = function(){
            console.log("hello world");
        }
        
        //dropdown
        var dropdown = new Dropdown(form.pnlPlaceholder4);
        dropdown.height=30;
        dropdown.width=350;
        dropdown.text="Hello";
//        btn.text = "Another text";
       
        
        
        model.requery(function () {
            // TODO : place your code here
        });
        
    }
    return module_constructor;
});
