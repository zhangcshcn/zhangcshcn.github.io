
(function(window, document) {
    
    window.Polymer = {
      dom: 'shadow',  //current default shady will leak css from above
      lazyRegister: true
    };

    var token = document.currentScript.getAttribute('token') || '';
    var aid = document.currentScript.getAttribute('aid') || '';

    var script = document.createElement('script');
    script.src = 'http://widget.convospots.com/bower_components/webcomponentsjs/webcomponents-lite.js';
    document.getElementsByTagName('head')[0].appendChild(script);

    var elem = document.createElement('link');
    elem.rel = 'import';
    elem.href = 'http://widget.convospots.com/elements/sidebar-shell.html';
    elem.crossorigin = 'anonymous';
    document.getElementsByTagName('head')[0].appendChild(elem);

    // create a container
    var comp = document.createElement('sidebar-shell');
    comp.setAttribute('token', token);
    comp.setAttribute('aid', aid);
    document.getElementsByTagName('body')[0].appendChild(comp);

    // a function for custom button
    window.showConvospot = function() {
            var sidebar = document.querySelectorAll('sidebar-shell')[0];
            if (sidebar) {
                sidebar.setAttribute('show-sidebar', false); //must reset
                sidebar.setAttribute('show-sidebar', true);
                return true;
            }
            return false;
    };

}(window, document))
    