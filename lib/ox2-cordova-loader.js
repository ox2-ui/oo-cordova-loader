//
//      ox2CordovaLoader
//

injectScript = function(url) {
  const script = document.createElement('script');
  script.src = url;
  document.head.appendChild(script);
};

ox2CordovaLoader = function() {
  const s1 = location.search.substring(1, location.search.length).split('&');
  const r = {};
  let s2;
  let i;
  for (i = 0; i < s1.length; i += 1) {
    s2 = s1[i].split('=');
    if (s2.length > 1) {
      r[decodeURIComponent(s2[0]).toLowerCase()] = decodeURIComponent(s2[1]).replace(/\/$/, '');
    }
  }
  const cordovaPresent = JSON.parse(localStorage.getItem('CordovaVersion'));

  if (r.platform && r.cordova) {
    injectScript('cordova/' + r.cordova + '/' + r.platform + '/cordova.js');
    injectScript('cordova/' + r.cordova + '/' + r.platform + '/control.js');
    localStorage.setItem('CordovaVersion', JSON.stringify(r));
  } else if (!!cordovaPresent) {
    injectScript('cordova/' + cordovaPresent.cordova + '/' + cordovaPresent.platform + '/cordova.js');
    injectScript('cordova/' + cordovaPresent.cordova + '/' + cordovaPresent.platform + '/control.js');
  }
};

ox2CordovaLoader()


