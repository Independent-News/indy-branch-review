/* globals JSGlobals, Visitor, s_gi */

export default function () {
  const s_account = JSGlobals.adobe.reportSuiteId;
  const s = s_gi(s_account);
  s.trackingServer = JSGlobals.adobe.trackingServer;
  s.trackingServerSecure = JSGlobals.adobe.trackingServerSecure;
  s.server = `www.${JSGlobals.domain}`;

  /** ************************ CONFIG SECTION **************************/
  /* You may add or alter any code config here. */
  s.currencyCode = 'GBP';
  s.charSet = 'UTF-8';
  s.cookieDomainPeriods = (
    location.hostname.match(RegExp('\\.', 'g') || []) || []
  ).length;
  s.trackDownloadLinks = true;
  s.trackExternalLinks = true;
  s.trackInlineStats = true;
  s.linkDownloadFileTypes =
    'exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx,epub';
  // optional: add your internal domain here
  s.linkInternalFilters = [
    'javascript:',
    '.independent.co.uk',
    '.indy100.com',
    '.independentespanol.com',
    '.the-independent.com',
  ].join();
  s.linkTrackVars = 'None';
  s.linkTrackEvents = 'None';
  s.linkLeaveQueryString = true;

  if (typeof Visitor !== 'undefined') {
    s.visitor = Visitor.getInstance('28280C0F53DB09900A490D45@AdobeOrg', {
      trackingServer: s.trackingServer,
      trackingServerSecure: s.trackingServerSecure,
      doesOptInApply: true,
      previousPermissions: {
        ecid: true,
        aa: true,
      },
      isOptInStorageEnabled: true,
    });
  }

  s.usePlugins = true;

  function s_doPlugins(s) {
    const linkTrackVariables = [
      'eVar16',
      'eVar17',
      'eVar36',
      'prop3',
      'prop36',
    ];

    for (let i = 0; i < linkTrackVariables.length; i++) {
      s.linkTrackVars = s.apl(
        s.linkTrackVars,
        linkTrackVariables[i],
        ',',
        ',',
        1,
      );
    }
  }

  s.doPlugins = s_doPlugins;

  /* WARNING: Changing any of the below variables will cause drastic
    changes to how your visitor data is collected.  Changes should only be
    made when instructed to do so by your account manager.*/

  /** ************************ PLUGINS SECTION *************************/

  /* eslint-disable */

  /* Adobe Consulting Plugin: apl (appendToList) v3.2 (Requires inList v2.0 or higher) */
  // prettier-ignore
  s.apl=function(lv,vta,d1,d2,cc){if(!lv||"string"===typeof lv){if("undefined"===typeof this.inList||"string"!==typeof vta||""===vta)return lv;d1=d1||",";d2=d2||d1;1==d2&&(d2=d1,cc||(cc=1));2==d2&&1!=cc&&(d2=d1);vta=vta.split(",");for(var g=vta.length,e=0;e<g;e++)this.inList(lv,vta[e],d1,cc)||(lv=lv?lv+d2+vta[e]:vta[e])}return lv};

  /* Adobe Consulting Plugin: inList v2.1 */
  // prettier-ignore
  s.inList=function(lv,vtc,d,cc){if("string"!==typeof vtc)return!1;if("string"===typeof lv)lv=lv.split(d||",");else if("object"!== typeof lv)return!1;d=0;for(var e=lv.length;d<e;d++)if(1==cc&&vtc===lv[d]||vtc.toLowerCase()===lv[d].toLowerCase())return!0;return!1};

  /* eslint-enable */

  window.s_object = s;
}
