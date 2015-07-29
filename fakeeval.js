(function() {

    var v = '1.7.1';

    if (window.jQuery === undefined || window.jQuery.fn.query < v) {
        var script = document.createElement('script');
        script.src = '//ajax.googleapis.com/ajax/libs/jquery/' + v + '/jquery.min.js';
        script.onload = function() {
            initFakeEval();
        }
        document.getElementsByTagName('head')[0].appendChild(script);
    } else {
        initFakeEval();
    }

    function initFakeEval() {
    
        (window.fakeEval = function() {
        
            $('.requirement-details').each(function() { 

                var id = $(this).find('.score-val').attr('id');

                $(this).find('.score-val').val('8');
                $(this).find('.scoreSlider').removeClass('scoreNA').addClass('score8');

                $(this).find('.req-do-well').find('textarea').focus().val(id).blur();
                $(this).find('.req-needs-improvement').find('textarea').focus().val(id).blur();
            });
            
            var level = $('.leadership-adv').find('li.la-plus1');
            
            $('#leadership-radio').find('li').removeClass('la-selected');
            $(level).addClass('la-selected');
            $('.leadership-adv').find('input').val($(level).data('leadership-classification'));
            
            $('#summary-input').find('textarea').val('Brandon is the most awesome guy you could ever ask for.');                
        })();
    }
    
})();
