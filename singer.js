function pauseMusic(e) {
    e.preventDefault();
    var iframeElement   = document.querySelector('iframe#musicPlayer');
    var widget1         = SC.Widget(iframeElement);
    widget1.toggle();
}
