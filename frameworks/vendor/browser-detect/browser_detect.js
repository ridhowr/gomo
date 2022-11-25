var BrowserDetect =
{
	strObjID : "The browser / OS detection class",

	init: function ()
	{
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";

		this.strCssClass = this.setCssClass(this.dataBrowser);

		//alert("navigator.userAgent: " + navigator.userAgent)
		//alert("navigator.platform: " + navigator.platform)
		//alert("this.strCssClass: " + this.strCssClass + "\nthis.version: " + "browserVersion_" + this.version + "_C" + "\nthis.OS: " + this.OS);

		OUTPUT_MODE_CHECKER.setVersionClasses(this.OS, this.strCssClass, "browserVersion_" + this.version + "_C");
	},

	searchString: function (data)
	{
		for (var i=0;i<data.length;i++)	{
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

	searchVersion: function (dataString)
	{
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},

	setCssClass : function(data)
	{
		var _strCssClass = "";

		for(var i = 0; i < data.length; i++)
		{
			var _objCurrBrowser = data[i];

			if(_objCurrBrowser.identity == this.browser)
			{
				_strCssClass = _objCurrBrowser.cssClass;
				_strCssClass = _strCssClass.replace("XX_VERSION_XX",this.version);

				return _strCssClass;
			}
		}

		return "";
	},

	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome",
			cssClass : "chromeC"
		},
		{
			string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb",
			cssClass : "omniWebC"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version",
			cssClass : "safariC"
		},
		{
			prop: window.opera,
			identity: "Opera",
			versionSearch: "Version",
			cssClass : "operaC"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab",
			cssClass : "iCabC"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror",
			cssClass : "KonquerorC"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox",
			cssClass : "fireFoxC"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino",
			cssClass : "caminoC"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape",
			cssClass : "netscapeC"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE",
			cssClass : "ieXX_VERSION_XXC"
		},
		{
			string: navigator.userAgent,
			subString: "Safari/",
			identity: "Safari",
			versionSearch: "Safari",
			cssClass : "safariC"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv",
			cssClass : "mozillaC"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla",
			cssClass : "netscapeC"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "windowsC"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "macC"
		},
		{
		   string: navigator.userAgent,
		   subString: "iPhone",
		   identity: "iPhoneC"
	  },
		{
		   string: navigator.userAgent,
		   subString: "iPad",
		   identity: "iPadC"
	  },
		{
		   string: navigator.userAgent,
		   subString: "Android",
		   identity: "androidC"
	  },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "linuxC"
		},
		{
			string: navigator.platform,
			subString: "BlackBerry",
			identity: "blackberryC"
		}
	]

};