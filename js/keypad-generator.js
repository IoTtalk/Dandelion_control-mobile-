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

    var keypad_str = "<main>";
    $.each( feature_list, function( index, value ){
        keypad_str = keypad_str + 
            "<section id='" + value + "_section' class='flex-center'>\
                <span>" + value + "</span>\
                <div class='keypad'>\
                    <div>\
                        <button>small</button>\
                        <button>medium</button>\
                        <button>large</button>\
                    </div>\
                </div>\
            </section>"
    });
    keypad_str = keypad_str + "</main>";

    var e = $(keypad_str);
    $('#keypads').append(e);

});
