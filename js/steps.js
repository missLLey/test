(function() {
    steps = {
        init: function (steps, defaultStep, navName, navImgsrc) {
            var htmlStr = "<div class='step-header'><img src='";
            htmlStr += navImgsrc + "'/><br/>" + navName + "</div><div class='step-body'>";
            for (var i in steps) {
                htmlStr += "<div>" + steps[i] + "</div>";
            }
            htmlStr += "</div>";
            $('.step-container').html(htmlStr);
            $('.step-body').css("line-height",(520/(steps.length*2-1))+"px");
            this.step(defaultStep);
        },
        step: function (index) {
            if (isNaN(index))
                throw 'please set index with int';
            $('.step-body').children().each(function () {
                $(this).removeClass('active');
            });
            $('.step-body').children().eq(index).addClass('active');
        }
    };
})();