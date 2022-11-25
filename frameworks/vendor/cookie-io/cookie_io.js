// Copyright (c) 2010 Johnathan Castle (castle.johnathan@googlemail.com)
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var COOKIE_IO =
{
	objID : "Cookie save/load",
	_intCookieLimit : 4096,
	_chaValuePairSeperator : "=",
	_chaDataSeperator : ";",

	canCookieFitData : function (_strWhatKey, _strWhatDataString)
	{
		var _intNewDataSize = _strWhatKey.length + _strWhatDataString.length + 2;
		var _intNewLength = document.cookie.length + _intNewDataSize;
		if (_intNewLength > this._intCookieLimit)
		{
			return false;
		}
		return true;
	},

	saveToCookie : function (_strWhatKey, _strWhatDataString)
	{
		if ((!this._badInput(_strWhatKey)) && (!this._badInput(_strWhatDataString)))
		{
			var _strCurrCookie = "";
			_strCurrCookie += _strWhatKey + this._chaValuePairSeperator + _strWhatDataString + this._chaDataSeperator;
			_strCurrCookie += this._getCookiePrimer(true);
			if (_strCurrCookie.length <= this._intCookieLimit)
			{
				//alert("1" + document.cookie)
				document.cookie = _strCurrCookie;
				//alert("2" + document.cookie)
			}
			else
			{
				var _intOver = _strCurrCookie.length - this._intCookieLimit;
				alert("COOKIE_IO: Sorry, that would exceed the data storage limit of cookies by " + _intOver + ". That would be one big cookie.");
			}
		}
	},

	_badInput : function (_strWhatInput)
	{
		if ((_strWhatInput.indexOf(this._chaValuePairSeperator) != -1) || (_strWhatInput.indexOf(this._chaDataSeperator) != -1))
		{
			alert("COOKIE_IO: Illegal Cookie character found in '" + _strWhatInput + "'.");
			return true;
		}
		return false;
	},

	_getCookiePrimer : function (_booUseFutureDate)
	{
		var _strPrimer = "";
		var _datFutureDate = new Date();
		if (_booUseFutureDate)
		{
			_datFutureDate.setFullYear(_datFutureDate.getFullYear() + 10);
		}
		else
		{
			_datFutureDate.setFullYear(_datFutureDate.getFullYear() - 10);
		}
		_strPrimer += "expires" + this._chaValuePairSeperator + _datFutureDate.toGMTString() + this._chaDataSeperator;
		_strPrimer += "path" + this._chaValuePairSeperator + "/"
		return _strPrimer;
	},

	loadFromCookie : function (_strItemKey)
	{
		var _objCookieData = {};
		//alert("3" + document.cookie)
		var _arrCookieSplit = document.cookie.split(this._chaDataSeperator);
		//alert("document.cookie: " + document.cookie)
		var count = 0;
		while (count < _arrCookieSplit.length)
		{
			var _strCurrCookieSplit = _arrCookieSplit[count];
			//alert("_strCurrCookieSplit: " + _strCurrCookieSplit);
			var _arrCurrDataItem = _strCurrCookieSplit.split(this._chaValuePairSeperator);
			if ((_arrCurrDataItem[0] != "expires") && (_arrCurrDataItem[0]) && (_arrCurrDataItem[0] !== ""))
			{
				_objCookieData[_arrCurrDataItem[0]] = _arrCurrDataItem[1];
			}
			count++;
		}
		//alert("_objCookieData['" + _strItemKey + "'] : " + _objCookieData[_strItemKey]);
		if (_objCookieData[_strItemKey])
		{
			return _objCookieData[_strItemKey];
		}
		return "";
	},

	eatCookie : function (_strWhatName)
	{
		document.cookie = _strWhatName + this._chaValuePairSeperator + "null" + this._chaDataSeperator + this._getCookiePrimer(false);
	}
}