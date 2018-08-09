(function() {
    // Register to IoTtalk
    var feature_list = ['size-I', 
                        'angle-I', 
                        'color_r-I', 
                        'color_g-I', 
                        'color_b-I',
                        'bg_color_r-I', 
                        'bg_color_g-I', 
                        'bg_color_b-I', 
                        's0-I', 
                        's1-I', 
                        's2-I', 
                        's3-I', 
                        'a1-I', 
                        'easingRate-I'];

    IoTtalk.register(mac, {
        'dm_name': 'Dandelion_control',
        'is_sim': false,
        'df_list': feature_list,
        'd_name': 'Dandelion_control'
    }, function(ret) {
        console.log(ret)
    });

})();
