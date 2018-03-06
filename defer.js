function defer(method) {
    if (window.jQuery) {
        method();
    }
}

defer(function () {
    
    $(document).ready(function () {
        var label                 = 'Price';
            price_element         = get_element_by_label(label);        
            label                 = 'Percent';
            percent_element       = get_element_by_label(label);        
            label                 = 'Result';
            result_element        = get_element_by_label(label);
        price_element.on('input', function(event) {
            calculate_percent('')
        });
        percent_element.on('input', function(event) {
            calculate_percent('')
        });
        result_element.on('input', function(event) {
            calculate_percent('from_result')
        });
    });
    
    function get_element_by_label(label) {
        var label_element = $("label:contains("+label+")");
        var element       = label_element.parent().find('input').first();
        return element;
    }    
    function calculate_percent(_from) {
        var price_value   = price_element.val();
        var percent_value = percent_element.val();
        var result_value  = '';
        if('from_result'==_from){
            result_value  = result_element.val();
            if(result_value && percent_value){
                price_value = result_value*100/percent_value;
                price_element.val(price_value);
            }
        }else{
            if(price_value && percent_value){
                result_value  = price_value/100*percent_value;
            }
            if(!$.isNumeric(result_value)){
                result_value  = '';
            }else{
                result_value  = result_value.toFixed(2);
            }
            $(result_element).val(result_value);
        }
    }
    
});
