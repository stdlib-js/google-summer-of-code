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
var currentYear = require( '@stdlib/time-current-year' );
var format = require( '@stdlib/string-format' );
var ENV = require( '@stdlib/process-env' );
var parseCSV = require( './parse_csv.js' );


// VARIABLES //

var SENDER = ENV[ 'SENDER' ];
var NUM_APPS = parseInt( ENV[ 'NUM_APPS' ], 10 );
var BONDING_START = ENV[ 'BONDING_START' ];
var BONDING_STOP = ENV[ 'BONDING_STOP' ];
var ORG_ADMIN = ENV[ 'ORG_ADMIN' ];
var ORG_ADMIN_EMAIL = ENV[ 'ORG_ADMIN_EMAIL' ];

var FOPTS = {
	'encoding': 'utf8'
};

var tpath = resolve( __dirname, '..', 'templates', 'acceptance.md' );
var TMPL = readFile( tpath, FOPTS );

var dpath = resolve( __dirname, 'tmp', 'accepted.csv' );
var DATA = parseCSV( readFile( dpath, FOPTS ) );

var SUBJECT = format( '[GSoC %d] Congratulations! Your stdlib proposal was accepted!', currentYear() );


// FUNCTIONS //

/**
* Returns an object containing template parameters.
*
* @private
* @returns {Object} template parameter object
*/
function params() {
	return {
		'first_name': '',
		'number_of_applications': NUM_APPS,
		'bonding_start_date': BONDING_START,
		'bonding_stop_date': BONDING_STOP,
		'org_admin': ORG_ADMIN,
		'org_admin_email': ORG_ADMIN_EMAIL,
		'sender_name': SENDER,
		'mentors': ''
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
	var txt;
	var v;
	var t;
	var i;

	dir = resolve( __dirname, 'tmp', 'accepted' );
	mkdirp( dir );

	for ( i = 0; i < DATA.length; i++ ) {
		v = DATA[ i ];

		opts = params();
		opts.first_name = v.first_name;
		opts.mentors = v.mentor_1 + ' and ' + v.mentor_2;

		t = mustache.render( TMPL, opts );

		txt = [
			'E-mail: ' + v.e_mail,
			'Subject: ' + SUBJECT,
			'',
			t
		];
		opath = resolve( dir, v.first_name + '_' + v.last_name + '.txt' );
		err = writeFile( opath, txt.join( '\n' ), FOPTS );
		if ( err ) {
			throw err;
		}
	}
}

main();
