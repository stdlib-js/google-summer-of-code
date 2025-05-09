<!--

Copyright (c) 2025 The Stdlib Authors.

-->

# Slot Announcement Checklist

> A checklist of tasks which should be performed once Google informs organizations their slot allocations.

## Pre-public announcement

Once Google privately notifies organizations of their slot allocation in advance of the public announcement, we need to do the following:

-   [ ] Ensure Google sheets databases containing the list of rejected and accepted applicants are up-to-date. You'll want to ensure that names are cleaned up (e.g., free of extraneous spaces) and that recorded contributions are current.

-   [ ] Save the rejected and accepted sheets as CSV files (`rejected.csv` and `accepted.csv`) in a `organization/scripts/tmp` folder.

-   [ ] Review the templates for the public announcement and rejection and acceptance e-mails.

-   [ ] Run the scripts for generating e-mail and announcement content. E.g.,

    ```bash
    $ SENDER=Athan NUM_APPS=99 NUM_ACCEPTED=5 node ./organization/scripts/rejection_emails.js

    $ SENDER=Athan NUM_APPS=99 BONDING_START="May 8" BONDING_STOP="June 1" ORG_ADMIN="Philipp Burckhardt" ORG_ADMIN_EMAIL="philipp.burckhardttc@gmail.com" node ./organization/scripts/acceptance_emails.js

    $ SENDER=Athan NUM_APPS=5 CODING_START="June 2" node ./organization/scripts/announcement.js
    ```

-   [ ] Draft a [blog post](https://github.com/stdlib-js/blog-drafts) announcing stdlib's GSoC participation, along with the selected projects.

-   [ ] Create a new team on the stdlib GitHub organization named `gsoc-YYYY`.

-   [ ] Create private `gsoc-YYYY` and `gsoc-mentors-YYYY` Slack channels.

## Post-public announcement

After Google has publicly announced slot allocations, we need to do the following:

> [!NOTE]
> Currently, sending out acceptance e-mails is done manually. We should investigate doing this directly from Google Sheets by creating a [mail merge](https://developers.google.com/apps-script/samples/automations/mail-merge).

-   [ ] Post the drafted announcement to Gitter.
-   [ ] Sent acceptance e-mails to all accepted GSoC contributors.
-   [ ] Send rejection e-mails to all rejected GSoC contributors.
-   [ ] Invite accepted GSoC contributors to the stdlib Slack.
-   [ ] Invite accepted GSoC contributors to the stdlib GitHub organization and add them to the `gsoc-YYYY` team.
-   [ ] Add accepted GSoC mentors and contributors to the stdlib `gsoc-YYYY` Slack channel.
-   [ ] Add GSoC mentors to the stdlib `gsoc-mentors-YYYY` Slack channel.
-   [ ] Add GSoC mentors to the `gsoc-YYYY` team on GitHub.
-   [ ] Add accepted GSoC mentors and contributors to the stdlib GSoC calendar and have them post their planned vacations and school/obligation dates.
-   [ ] Arrange a kickoff call to occur within 10 days of the public announcement.
-   [ ] Establish a cadence for a weekly GSoC standup which should commence the first week of the coding period and should last for the entire duration of the GSoC program.
-   [ ] Have mentors establish weekly recurring 1:1s with GSoC contributors.
-   [ ] Publish the draft blog post the stdlib blog.
-   [ ] Cross-post blog post to other distribution channels (e.g., dev.to, Hashnode, LinkedIn).
-   [ ] Close all [proposals](https://github.com/stdlib-js/google-summer-of-code/issues?q=sort%3Aupdated-desc%20is%3Aissue%20is%3Aopen%20label%3Arfc) on the stdlib Google Summer of Code repository.

* * *

## License

Reuse and redistribution of the materials in this directory (and its descendant directories) is **not** permitted without the express written consent of The Stdlib Authors.
