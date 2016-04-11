'use strict';

// Variables
var $document = $(document),
    $window = $(window),
    $body = $(document.body),
    BrowserDetect = {
        init: function () {
            this.browser = this.searchString(this.dataBrowser) || 'An unknown browser';
            this.version = this.searchVersion(navigator.userAgent)
                || this.searchVersion(navigator.appVersion)
                || 'an unknown version';
            this.OS = this.searchString(this.dataOS) || 'an unknown OS';
            this.platform = this.searchPlatform(navigator.userAgent);
        },
        searchString: function (data) {
            for (var i = 0; i < data.length; i++) {
                var dataString = data[i].string;
                var dataProp = data[i].prop;
                this.versionSearchString = data[i].versionSearch || data[i].identity;
                if (dataString) {
                    if (dataString.indexOf(data[i].subString) != -1)
                        return data[i].identity;
                }
                else if (dataProp)
                    return data[i].identity;
            }
        },
        searchVersion: function (dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index == -1) return;
            return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
        },
        searchPlatform: function (dataString) {
            var mobilePlatforms = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i,
                desktopPlatforms = /Win|Mac|Linux/i,
                identityPlatform;
            identityPlatform = (mobilePlatforms.test(dataString) == true) ? 'mobile' :
                (desktopPlatforms.test(dataString) == true) ? 'desktop' :
                    'unknown platform';
            return identityPlatform;
        },
        dataBrowser: [
            {
                string: navigator.userAgent,
                subString: 'Chrome',
                identity: 'Chrome'
            },
            {
                string: navigator.userAgent,
                subString: 'OmniWeb',
                versionSearch: 'OmniWeb/',
                identity: 'OmniWeb'
            },
            {
                string: navigator.vendor,
                subString: 'Apple',
                identity: 'Safari',
                versionSearch: 'Version'
            },
            {
                prop: window.opera,
                identity: 'Opera'
            },
            {
                string: navigator.vendor,
                subString: 'iCab',
                identity: 'iCab'
            },
            {
                string: navigator.vendor,
                subString: 'KDE',
                identity: 'Konqueror'
            },
            {
                string: navigator.userAgent,
                subString: 'Firefox',
                identity: 'Firefox'
            },
            {
                string: navigator.vendor,
                subString: 'Camino',
                identity: 'Camino'
            },
            {		// for newer Netscapes (6+)
                string: navigator.userAgent,
                subString: 'Netscape',
                identity: 'Netscape'
            },
            {
                string: navigator.userAgent,
                subString: 'MSIE',
                identity: 'Explorer',
                versionSearch: 'MSIE'
            },
            {
                string: navigator.userAgent,
                subString: 'Gecko',
                identity: 'Mozilla',
                versionSearch: 'rv'
            },
            { 		// for older Netscapes (4-)
                string: navigator.userAgent,
                subString: 'Mozilla',
                identity: 'Netscape',
                versionSearch: 'Mozilla'
            }
        ],
        dataOS: [
            {
                string: navigator.platform,
                subString: 'Win',
                identity: 'Windows'
            },
            {
                string: navigator.platform,
                subString: 'Mac',
                identity: 'Mac'
            },
            {
                string: navigator.userAgent,
                subString: 'iPhone',
                identity: 'iPhone/iPod'
            },
            {
                string: navigator.platform,
                subString: 'Linux',
                identity: 'Linux'
            }
        ]
    };


BrowserDetect.init();

//console.log(BrowserDetect.browser);
//console.log(BrowserDetect.version);
//console.log(BrowserDetect.OS);
//console.log(BrowserDetect.platform);