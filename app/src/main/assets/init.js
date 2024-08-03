$('a').css('pointer-events', 'none');
$('*').css('-webkit-tap-highlight-color', 'rgba(0,0,0,.1)');

$('head').append(`<style>
    header,
    nav[class^="md"],
    h2#translation-modes-heading + div > div:first-child,
    div[data-testid="translator"] span:nth-child(3),
    footer,
    div[data-testid="chrome-extension-toast"],
    div[data-testid="firefox-extension-toast"],
    div[id="cookieBanner"],
    aside {
        display: none !important;
        visibility: hidden;
        height: 0;
        width: 0;
        overflow: hidden;
    }
</style>`);