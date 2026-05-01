#!/usr/bin/env bash
#
# @license Apache-2.0
#
# Copyright (c) 2026 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Script to open draft e-mails in which each file in a directory have the following format:
#
# line 1: E-mail: ...
# line 2: Subject: ...
# line 3: blank line
# line 4+: body

set -euo pipefail

if [ "$#" -ne 1 ]; then
	echo "Usage: ./<path_to_this_file> <dir>" >&2
	exit 1
fi

dir="$1"

find "$dir" -type f -name '*.txt' | sort | while IFS= read -r file; do
	email="$(sed -n '1s/^E-mail:[[:space:]]*//p' "${file}")"
	subject="$(sed -n '2s/^Subject:[[:space:]]*//p' "${file}")"

	if [ -z "${email}" ] || [ -z "${subject}" ]; then
		echo "Skipping malformed file: ${file}" >&2
		continue
	fi
	body="$(tail -n +4 ${file})"

	osascript - "${email}" "${subject}" "${body}" <<'APPLESCRIPT'
on run argv
	set recipientAddress to item 1 of argv
	set messageSubject to item 2 of argv
	set messageBody to item 3 of argv

	tell application "Mail"
		activate

		set newMessage to make new outgoing message with properties {visible:true, subject:messageSubject}

		tell newMessage
			make new to recipient at end of to recipients with properties {address:recipientAddress}
		end tell
	end tell

	delay 0.3

	set the clipboard to messageBody

	tell application "System Events"
		tell process "Mail"
			keystroke tab
			keystroke tab
			keystroke tab
			keystroke tab
			keystroke "v" using command down
		end tell
	end tell
end run
APPLESCRIPT

	echo "Created draft for: ${email}"
	sleep 0.5
done
