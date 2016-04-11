// ==UserScript==
// @name        DiSzyngaGeD Node Buster
// @namespace   com.crypticware.diszyngaged
// @description Built for finding vulnerabilities in the Drupal environment of Zynga domains
// @include     http://www.zynga.com/*
// @include     https://www.zynga.com/*
// @include     http://www.zynga.com/node/*
// @include     https://www.zynga.com/node/*
// @version     0.0.1
// @grant       none
// ==/UserScript==


// Part of the unRealArcade Project

// esc0rtd3w 2016



/*
setTimeout(
	function() {
		var w = window.location;
		alert(w);
	}, 1000
);
*/

var nodePathNonSecure = "http://www.zynga.com/node/";
var nodePathSecure = "https://www.zynga.com/node/";
//var node = 1676;

function increaseNode() {
	
	var node = window.location.href.substring(27);
	node = Math.floor(node);
	
	node++;
	//alert(node);
	//nodePathSecure = nodePathSecure + node;
	//window.location = nodePathSecure + node;
}

	increaseNode();


