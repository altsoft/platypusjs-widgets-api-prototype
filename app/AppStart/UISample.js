/**
 * 
 * @author jskonst
 */
define('UISample', ['orm', 'forms', 'ui','FancyWidget', '../CustomWidgets/Button'], function (Orm, Forms, Ui,FancyWidget, Button, ModuleName) {
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
        
       
        
        
        model.requery(function () {
            // TODO : place your code here
        });
        
    }
    return module_constructor;
});
