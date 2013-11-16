function report() { document.getElementsByTagName('output')[0].innerHTML = 'screen.width: '+screen.width+'<br> screen.height: '+screen.height+'<br> window.innerWidth: '+window.innerWidth+'<br> window.innerHeight: '+window.innerHeight+'<br> window.outerWidth: '+window.outerWidth+'<br> window.outerHeight: '+window.outerHeight+'<br> document.documentElement.clientWidth: '+document.documentElement.clientWidth+'<br> document.documentElement.clientHeight: '+document.documentElement.clientHeight+'<br> window.devicePixelRatio: '+window.devicePixelRatio; }
window.addEventListener('load', report, false);
window.addEventListener('resize', report, false);
window.addEventListener('orientationchange', report, false);
window.addEventListener('deviceorientation', report, false);
window.addEventListener('MozOrientation', report, false);