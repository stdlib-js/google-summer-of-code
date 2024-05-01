/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var RE_EOL = require( '@stdlib/regexp-eol' ).REGEXP;
var snakecase = require( '@stdlib/string-base-snakecase' );


// VARIABLES //

var SEP = ',';


// MAIN //

/**
* Parses basic CSV to a JSON array.
*
* @private
* @param {string} str - CSV string
* @returns {Array<JSON>} output array
*/
function parse( str ) {
	var header;
	var lines;
	var line;
	var out;
	var o;
	var v;
	var i;
	var j;
	var k;

	lines = str.split( RE_EOL );

	header = lines[ 0 ].split( SEP );
	for ( i = 0; i < header.length; i++ ) {
		header[ i ] = snakecase( header[ i ] );
	}
	out = [];
	for ( i = 1; i < lines.length; i++ ) {
		line = lines[ i ].split( SEP );
		o = {};
		for ( j = 0; j < line.length; j++ ) {
			k = header[ j ];
			v = line[ j ];
			if ( v === 'TRUE' ) {
				v = true;
			} else if ( v === 'FALSE' ) {
				v = false;
			}
			o[ k ] = v;
		}
		out.push( o );
	}
	return out;
}


// EXPORTS //

module.exports = parse;
