(function() {

    function register(mac, profile, callback) {
        var ret = null;
        $.ajax({
            type: 'POST',
            url: '/' + mac,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({'profile': profile}),
            success: function(res) {
                console.log(res);
                console.log('register success');
                ret = res;
            },
            error: function(err, st) {
                console.log(err);
                console.log(st);
                console.log('register failed');
            },
            complete: function() {
                if( typeof callback === 'function' )
                    callback(ret);
            },
            dataType: 'text',
        });
    }

    function update(mac, feature, data, callback) {
        $.ajax({
            type: "PUT",
            url: '/' + mac + '/' + feature,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({'data': [data]}),
            error: function(err, st) {
                console.log(err);
                console.log(st);
                console.log('Update failed');
            },
            complete: function() {
                if( typeof callback === 'function' )
                    callback();
            },
            dataType: 'text',
        });
    }

    // Export to browser's global for debug
    window.IoTtalk = {
        register: register,
        update: update,
    };

})();
