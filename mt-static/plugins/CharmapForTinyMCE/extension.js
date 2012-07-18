(function($) {
    var config   = MT.Editor.TinyMCE.config;
    var buttons  =
        (config.plugin_mt_wysiwyg_buttons1 || '') + ',charmap,';

    $.extend(config, {
        plugin_mt_wysiwyg_buttons1: buttons
    });
})(jQuery);
