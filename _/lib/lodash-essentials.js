hljs.configure({
    tabReplace: '    '
});
hljs.initHighlightingOnLoad();

$(function() {
    $(window).on('hashchange', function(e) {
        var hash = location.hash,
            $link = $('a[href="' + hash + '"');

		if (!$link.length) {
			$link = $('#navigation a:first');
			hash = $link.attr('href');
		}

        var $code = $(hash).show(),
            $result = $('#result code')
                .text(JSON.stringify(_.result(window, hash.slice(1)), undefined, 4));
        $code.siblings('pre').not('#result').hide();
        $('#navigation a').not($link.addClass('active')).removeClass('active');
        hljs.highlightBlock($result[0]);
    }).trigger('hashchange');
});
