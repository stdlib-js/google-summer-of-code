#!/usr/bin/env node

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

var resolve = require( 'path' ).resolve;
var mustache = require( 'mustache' );
var mkdirp = require( 'mkdirp' ).sync;
var readFile = require( '@stdlib/fs-read-file' ).sync;
var writeFile = require( '@stdlib/fs-write-file' ).sync;
var ENV = require( '@stdlib/process-env' );
var parseCSV = require( './parse_csv.js' );


// VARIABLES //

var SENDER = ENV[ 'SENDER' ];
var NUM_APPS = parseInt( ENV[ 'NUM_APPS' ], 10 );
var CODING_START = ENV[ 'CODING_START' ];

var FOPTS = {
	'encoding': 'utf8'
};

var tpath = resolve( __dirname, '..', 'templates', 'announcement.md' );
var TMPL = readFile( tpath, FOPTS );

var dpath = resolve( __dirname, 'tmp', 'accepted.csv' );
var DATA = parseCSV( readFile( dpath, FOPTS ) );


// FUNCTIONS //

/**
* Returns an object containing template parameters.
*
* @private
* @returns {Object} template parameter object
*/
function params() {
	return {
		'number_of_accepted_applications': NUM_APPS,
		'coding_start_date': CODING_START,
		'sender_name': SENDER,
		'projects': []
	};
}


// MAIN //

/**
* Main execution sequence.
*
* @private
* @throws {Error} unexpected error
*/
function main() {
	var opath;
	var opts;
	var dir;
	var err;
	var v;
	var o;
	var t;
	var i;

	dir = resolve( __dirname, 'tmp', 'announcement' );
	mkdirp( dir );

	opts = params();
	for ( i = 0; i < DATA.length; i++ ) {
		v = DATA[ i ];
		o = {};
		o.first_name = v.first_name;
		o.last_name = v.last_name;
		o.project_title = v.project_title;
		o.mentors = v.mentor_1 + ', ' + v.mentor_2;
		opts.projects.push( o );
	}
	t = mustache.render( TMPL, opts );

	opath = resolve( dir, 'announcement.txt' );
	err = writeFile( opath, t, FOPTS );
	if ( err ) {
		throw err;
	}
}

main();
