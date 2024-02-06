/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

// VARIABLES //

var QUERY = `query GetIdeaIssues( $owner: String!, $repo: String!, $label: String! ) {
	repo: repository( owner: $owner, name: $repo ) {
		issues( labels: [ $label ], first: 100, states: [ OPEN ] ) {
			nodes {
				number
				url
				title
				body
				labels( first: 100 ) {
					nodes {
						name
					}
				}
			}
		}
	}
}`;

var HEADING = [
	'# Ideas',
	'',
	'> List of potential project ideas.',
	'',
	'Before working on your GSoC application, please review our list of ideas to see if you find a project which excites you. The list of existing ideas is provided to serve as inspiration and to indicate which directions may be good for stdlib.',
	'',
	'If you do find an existing idea that you\'d like to pursue, please be sure to contact us in our [Element](https://gitter.im/stdlib-js/stdlib) channel to discuss it first! **Always be sure to ask about these ideas prior to working on application in order to get the latest information about what is already implemented and what exactly must be done.**',
	'',
	'Priority, difficulty, technology, and topic area have no bearing on the chances of an idea being accepted. All ideas are equally good, and your chances of being accepted depend solely on the **quality of your application**.',
	'',
	'**Project Length**',
	'',
	'GSoC allows three different project lengths: **90** hours, **175** hours, and **350** hours. Each idea must indicate whether the idea is a better fit for 90, 175, or 350 hours.',
	'',
	'In some cases, we may be able to extend a 175 hour project to a 350 hour project by extending the ideas of what can be done. Similarly, in some cases, a 350 hour project can be shortened to a 175 hour project by only implementing part of an idea and leaving the rest for a future project. In either case, if you want to adjust the project length, please be sure to contact us in our [Element](https://gitter.im/stdlib-js/stdlib) channel to discuss it first!',
	'',
	'## Your Own Idea',
	'',
	'If you\'d like to submit your own idea, that is also welcome; just be sure to propose your idea to stdlib mentors first! After reaching out, we\'ll inform you whether the idea has already been implemented, if the idea will entail enough work to last the duration of the GSoC program, if the idea requires too much work to be meaningfully pursued during GSoC, and if the idea is within the scope of stdlib. **Unsolicited, undiscussed ideas are less likely to get accepted.**',
	'',
	'The best project for you is the one you are most interested in and knowledgeable about. Excitement and aptitude are two key ingredients of a successful project and help ensure your commitment and ability to see a project through to completion. So if there is something you are especially passionate about and that you believe aligns with the scope and goals of stdlib, we\'d be happy to hear your pitch!',
	'',
	'After discussing with us in our [Element](https://gitter.im/stdlib-js/stdlib) channel and receiving approval to submit your idea, please open an [issue](https://github.com/stdlib-js/google-summer-of-code/issues/new?assignees=&labels=idea&template=idea.yml&title=%5BIdea%5D%3A+) which describes your idea using the [**idea issue template**](https://github.com/stdlib-js/google-summer-of-code/issues/new?assignees=&labels=idea&template=idea.yml&title=%5BIdea%5D%3A+).',
	'',
	'## Mentors',
	'',
	'To learn who might mentor one of the projects listed below, consult the list of potential project [mentors](https://github.com/stdlib-js/google-summer-of-code/blob/main/mentors.md). For each mentor, the list includes a mentor\'s preferred project(s) and/or general interest area.',
	'',
	'* * *',
	'',
	''
].join( '\n' );

var OUT_FILENAME = 'ideas.md';

var FOPTS = {
	'encoding': 'utf8'
};


// MAIN //

/**
* Updates the list of project ideas.
*
* @private
* @param {Object} github - pre-authenticated octokit rest client
* @param {Object} context - workflow run context
* @param {Object} core - core action functions
* @param {Object} fs - filesystem APIs
* @param {Object} path - utilities for manipulating filesystem paths
* @param {string} dir - path to the root directory of the repository
* @returns {Promise} promise which returns query results upon resolving
*/
async function main( github, context, core, fs, path, dir ) {
	var variables;
	var results;
	var content;
	var issues;
	var fpath;
	var str;
	var t;
	var i;

	// Retrieve the list of "idea" issues:
	variables = {
		'owner': context.repo.owner,
		'repo': context.repo.repo,
		'label': 'idea'
	};
	results = await github.graphql( QUERY, variables );

	// Generate content for the ideas file...
	issues = results.repo.issues.nodes;
	content = [];
	for ( i = 0; i < issues.length; i++ ) {
		t = issues[ i ].title;
		t = t.replace( '[Idea]: ', '' );
		t = t[ 0 ].toUpperCase() + t.substring( 1 );
		str = [
			'## ' + t,
			'',
			'Linked issue: <' + issues[ i ].url + '>',
			'',
			issues[ i ].body
		].join( '\n' );
		content.push( str );
	}
	content = content.join( '\n\n* * *\n\n' );

	// Resolve the output file path:
	fpath = path.join( dir, OUT_FILENAME );

	// Create/overwrite the output file:
	fs.writeFileSync( fpath, HEADING+content, FOPTS );
}


// EXPORTS //

module.exports = main;
