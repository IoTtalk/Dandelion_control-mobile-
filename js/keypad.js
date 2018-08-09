// Keypad
$(function() {
    //---------------------------------------------------
    //dandelion height width
    var dandelion_height = 960;
    var dandelion_width = 540;

    //for special arguments
    var s0_small, s0_mid, s0_big;
    s0_small = 0;
    s0_big = dandelion_height;
    s0_mid = Math.floor(dandelion_height / 2);
    
    var s1_small, s1_mid, s1_big;
    if(dandelion_height <= dandelion_width)
        s1_big = Math.floor(0.95 * dandelion_height / 20);
    else
        s1_big = Math.floor(0.80 * dandelion_height / 20);
    s1_small = Math.floor(s1_big / 10);
    s1_mid = Math.floor((s1_small + s1_big) / 2);

    var s2_small, s2_mid, s2_big;
    s2_small = 0;
    s2_big = Math.floor(s1_mid / 1.618 * 10);
    s2_mid = Math.floor(s2_big / 2);

    var s3_small, s3_mid, s3_big;
    s3_small = 0;
    s3_big = Math.floor(s2_mid * 0.618 * 10);
    s3_mid = Math.floor(s3_big / 2);

    //---------------------------------------------------

    var feature_level_data = {
        'size': [1, 5, 10],
        'angle': [0-360, 0, 360],
        'color_r': [0, 127, 255],
        'color_g': [0, 127, 255],
        'color_b': [0, 127, 255],
        'bg_color_r': [0, 127, 255],
        'bg_color_g': [0, 127, 255],
        'bg_color_b': [0, 127, 255],
        's0': [s0_small, s0_mid, s0_big],
        's1': [s1_small, s1_mid, s1_big],
        's2': [s2_small, s2_mid, s2_big],
        's3': [s3_small, s3_mid, s3_big],
        'a1': [0, 180, 359],
        'easingRate' : [0.01, 0.1, 1]
    }

    for (var feature in feature_level_data) {
        var feature_section_btn_str = "#" + feature + "_section .keypad button";
        $( feature_section_btn_str ).on( "click", function() {
            //Good! --yu-hsuan
            var feature_name = $(this).parent().parent().parent().children("span").text()
            var data;
            var level = $(this).text();
            if(level == "small")        data = feature_level_data[feature_name][0];
            else if(level == "medium")  data = feature_level_data[feature_name][1];
            else                        data = feature_level_data[feature_name][2];
            IoTtalk.update(mac, feature_name+"-I", Number(data));
            console.log(feature_name, level, data);
        });
    }

});
