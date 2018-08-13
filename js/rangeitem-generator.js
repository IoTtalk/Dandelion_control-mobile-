$(function() {
    var feature_level_data = {
        //'feature_name' : ['min', 'max', 'step']
        'size':         [1, 10, 1],
        'angle':        [0-360, 360, 72],
        'color_r':      [0, 255, 25],
        'color_g':      [0, 255, 25],
        'color_b':      [0, 255, 25],
        'bg_color_r':   [0, 255, 25],
        'bg_color_g':   [0, 255, 25],
        'bg_color_b':   [0, 255, 25],
        's0':           [0, 960, 96],
        's1':           [3, 38, 3],
        's2':           [0, 123, 12],
        's3':           [0, 376, 37],
        'a1':           [0, 359, 35],
        'easingRate' :  [0.01, 1, 0.1]
    }

    var min, max, step, default_val;
    var rangeitem_str = "";
    for(var feature in feature_level_data) {
        min = feature_level_data[feature][0];
        max = feature_level_data[feature][1];
        step = feature_level_data[feature][2];
        default_val = min + step * 5;
        rangeitem_str = 
            "<tr>\
              <td width='20%'>\
                <span class='name'>" + feature + "</span>\
              </td>\
              <td width='10%'>\
                <span id='" + feature + "_val' class='val'>" + default_val + "</span>\
              </td>\
              <td width='70%'>\
                <form action='#'>\
                  <p class='range-field'>\
                    <input type='range' id='" + feature + "-slider' min='" + min + "' max='" + max + "' step='" + step + "' />\
                  </p>\
                </form>\
              </td>\
            </tr>";
        $('#range_items').append(rangeitem_str);

    }
    
});
