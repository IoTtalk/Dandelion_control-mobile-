// Keypad
$(function() {
    var feature_list = ['size', 
                        'angle', 
                        'color_r', 
                        'color_g', 
                        'color_b',
                        'bg_color_r', 
                        'bg_color_g', 
                        'bg_color_b', 
                        's0', 
                        's1', 
                        's2', 
                        's3', 
                        'a1', 
                        'easingRate'];

    for(var index in feature_list) {
        var feature = feature_list[index];
        var name = "#" + feature + "-slider";
        $(document).on('input', name, function() {
            var data = $(this).val();
            var feature_name = $(this).attr('id').split('-')[0];
            var feature_val = "#" + feature_name + "_val";
            $(feature_val).text(data);
            IoTtalk.update(mac, feature_name+"-I", Number(data));
            console.log(feature_name, data);
        });
    }
});
