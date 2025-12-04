<!--

@license CC-BY-SA-4.0

-->

# Google Summer of Code

> Resources for the [Google Summer of Code][gsoc] program.

Hello! And welcome to stdlib's [Google Summer of Code][gsoc] (GSoC) resource repository.

GSoC is a global program that offers new contributors (who are **18** years or older) an opportunity to be paid for contributing to an open source project over a three month period. Contributors are paid by Google to work under the guidance of mentors from an open source community. GSoC is a great opportunity to learn, develop new skills, build connections, acquire experience working with a larger and often distributed team, and be financially compensated for your efforts. 

In this repository, you'll find information on how to apply for GSoC and a list of potential ideas which could serve as the basis for a GSoC project.

## Time Commitment

GSoC contributors are [expected][gsoc-faq-time-commitment] to work either **350** hours (full-time equivalent), **175** hours (part-time equivalent), or **90** hours (short-time equivalent) over the course of the program. The default schedule runs over 3 months (12 weeks) and can potentially be spread out over a longer period.

The program start date is [**non-negotiable**][gsoc-faq-schedule-start]. All GSoC contributors **must** begin the program at the same time.

## Application Process

In order to apply to GSoC with [stdlib][stdlib], you must:

1. Read the GSoC [contributor guide][gsoc-contributor-guide].
1. Read the resources in **this** repository in full.
1. Visit the main [stdlib project repository][stdlib] and familiarize yourself with the source code, project organization, and general conventions.
1. Read and understand the [Code of Conduct][stdlib-code-of-conduct].
1. Consult the project [issue tracker][stdlib-issues] to find ongoing [stdlib][stdlib-issues] discussions.
1. Read through the project [contributing guide][stdlib-contributing] to learn how to start developing [stdlib][stdlib].
1. Create a [GitHub account][github-create-account], if you do not already have one.
1. Submit **at least** one patch to [stdlib][stdlib]. All applications which are not accompanied by at least one patch to stdlib will be **rejected**. Instructions as to how to fulfill the [patch requirement](#patch-requirement) are described below.
1. Create **at least** one demo, tutorial, how-to guide, and/or showcase using [stdlib][stdlib]. All applications which are not accompanied by at least one example usage will be **rejected**. Instructions on how to fulfill the [showcase requirement](#showcase-requirement) are described below.
1. Review our [list of ideas][stdlib-gsoc-ideas] to see if you find a project which excites you. If you'd like to submit your own idea, that is fine; just be sure to propose your idea to stdlib mentors first! **Unsolicited, undiscussed ideas are less likely to get accepted.**
1. Develop your application, making sure to follow the [application template][stdlib-gsoc-application-template]. We strongly suggest opening an [issue][stdlib-gsoc-application-template] which describes your project using the [application issue template][stdlib-gsoc-application-template]. Doing so allows individuals who are not on the [GSoC website][gsoc] to review your application and provide feedback.
1. **The application deadline is March 31, 18:00 UTC.** You are **strongly** advised to submit your application well in advance of the deadline. Google will **not** accept late applications for any reason. You will be able to edit your application up until the deadline, so, if you have a draft, submit it early and continue to update it as time allows.

Please remember that all applications **must** go through Google's application system and you **MUST SUBMIT YOUR APPLICATION ON GOOGLE'S WEBSITE**. If you do not submit your application on the [GSoC website][gsoc], we **cannot** accept your application.

### Tips

The intent of GSoC is to provide a way for new contributors to join and participate in the world of open source. The contributors most likely to be selected and ultimately succeed are those who are engaged in the community and hoping to continue their involvement beyond the duration of the GSoC program. In general, for most projects, **being a good community member is more important than being a good coder**.

**Communicate.** Communication is probably the most important part of the application process. Talk to mentors and other stdlib developers, **listen** when they offer advice, and demonstrate that you've understood their suggestions by incorporating their feedback into what you are proposing. Failure to incorporate feedback **significantly** lowers your chance of success.

**Read the instructions.** Always read (and re-read) all instructions when submitting proposals. Do not simply submit a resume, scientific paper, presentation, or other file which does not contain any information about the project you'd like to pursue. Failure to follow instructions is guaranteed to lead to proposal rejection.

**Be professional.** Show respect and demonstrate that you will take the mentoring relationship seriously. That means actively listening when you receive feedback and always valuing the time of each member in the [stdlib][stdlib] community. Poor communication and a failure to read and follow instructions convey a lack of respect and a lack of consideration for mentor time, and no mentor wants to work with a contributor who doesn't exhibit the professionalism necessary to ensure both the success of their project and their personal growth as a [stdlib][stdlib] community member.

### Questions

If you have questions, first check whether the questions have already been answered in the GSoC [FAQ][gsoc-faq]. If you still have a question after consulting the GSoC [FAQ][gsoc-faq], you can reach out on the stdlib [Element][stdlib-gitter] channel.

You can use [Element][stdlib-gitter] to solicit feedback on initial project ideas and to get help as you start working with the [stdlib][stdlib] codebase. Keep in mind that the more specific and clear your questions on stdlib forums, the more likely you are to get a good answer. An open-ended or vague question is unlikely to get a useful response.

For example, a good question could be something along the lines of

> I'm interested in project X, and I've done a bit of research and found that issues Y and Z seem related. Based on my findings, a, b, and c are already implemented, so I'd like to know whether it would be reasonable to propose a project that would achieve d, e, and f.

In contrast, the following question is too open-ended and too vague to solicit a meaningful response

> I'm interested in project X. Please help me to work on this.

When reaching out over [Element][stdlib-gitter], be sure to introduce yourself so that we can get to know you. Some useful pieces of information to include

- Level of familiarity with JavaScript (including years of programming and previous projects).
- Education level (high school / college / PhD).
- Any particular expertise (e.g., statistics, numerical algorithms).
- Any particular interests (e.g., machine learning, natural language processing, asynchronous JavaScript, user interface design, etc).
- Familiarity with [stdlib][stdlib] (e.g., have you used [stdlib][stdlib]?).
- Other possibly relevant information (e.g., geographical location, native language, etc).

### Project Ideas

Before working on your GSoC application, please review our [list of ideas][stdlib-gsoc-ideas] to see if you find a project which excites you. The list of existing ideas is provided to serve as inspiration and to indicate which directions may be good for [stdlib][stdlib].

If you do find an existing idea that you'd like to pursue, please be sure to contact us in our [Element][stdlib-gitter] channel to discuss it first! **Always be sure to ask about these ideas prior to working on application in order to get the latest information about what is already implemented and what exactly must be done.**

The [list of ideas][stdlib-gsoc-ideas] is organized by labels according to the following conventions:

**Priority**

- `high`: ideas that are considered important in our roadmap.
- `normal`: ideas that are not urgent but would be nice to have sooner rather than later.
- `low`: ideas that are novel or interesting, but are low on our priority list.

**Difficulty**

- `1`: an idea suitable for someone with little to no JavaScript experience.
- `2`: an idea suitable for someone with a working knowledge of JavaScript.
- `3`: an idea that is likely to be challenging but manageable.
- `4`: an idea that is likely to be challenging and has ambitious goals.
- `5`: an idea that is likely to be difficult to implement with several unknowns.

**Technology**

- `javascript`: an idea that involves programming in JavaScript. At least some JavaScript is likely to be required for all ideas.
- `nodejs`: an idea that requires developing with Node.js. Working with Node.js is likely to be required for most, if not all, ideas, as Node.js is the default environment for testing, benchmarking, and local development.
- `c`: an idea that involves programming in C. This is required for Node.js native add-ons.
- `fortran`: an idea that involves programming in Fortran. This is required for working on BLAS/LAPACK bindings.
- `html/css`: an idea that involves using HTML and CSS (e.g., if building a frontend application).
- `jsx/react`: an idea that involves programming with React JSX (e.g., if working on the stdlib website).
- `native addons`: an idea that involves developing Node.js native add-ons.
- `typescript`: an idea that involves programming in TypeScript.

Priority, difficulty, technology, and topic area have no bearing on the chances of an idea being accepted. All ideas are equally good, and your chances of being accepted depend solely on the **quality of your application**.

**Project Length**

GSoC allows three different project lengths: **90** hours, **175** hours and **350** hours. Each idea must indicate whether the idea is a better fit for 90, 175, or 350 hours.

In some cases, we may be able to extend a 175 hour project to a 350 hour project by extending the ideas of what can be done. Similarly, in some cases, a 350 hour project can be shortened to a 175 hour project by only implementing part of an idea and leaving the rest for a future project. In either case, if you want to adjust the project length, please be sure to contact us in our [Element][stdlib-gitter] channel to discuss it first!

#### Your Own Idea

If you'd like to submit your own idea, that is also welcome; just be sure to propose your idea to stdlib mentors first! After reaching out, we'll inform you whether the idea has already been implemented, if the idea will entail enough work to last the duration of the GSoC program, if the idea requires too much work to be meaningfully pursued during GSoC, and if the idea is within the scope of stdlib. **Unsolicited, undiscussed ideas are less likely to get accepted.**

The best project for you is the one you are most interested in and knowledgeable about. Excitement and aptitude are two key ingredients of a successful project and help ensure your commitment and ability to see a project through to completion. So if there is something you are especially passionate about and that you believe aligns with the scope and goals of [stdlib][stdlib], we'd be happy to hear your pitch!

After discussing with us in our [Element][stdlib-gitter] channel and receiving approval to submit your idea, please open an [issue][stdlib-gsoc-idea-template] which describes your idea using the [**idea issue template**][stdlib-gsoc-idea-template].

### Patch Requirement

In addition to the written proposal, we **require** every [GSoC][gsoc] applicant to write a patch and have it merged into the main [stdlib repository][stdlib].

> [!IMPORTANT]
> We take your patches to [stdlib][stdlib] into **strong** consideration when reviewing your proposal. Submitting one or more patches is your best opportunity to demonstrate that you are capable of doing what is included in your proposal.

To submit a patch,

1.  Fork the [stdlib repository][stdlib].

1.  Setup your platform to develop [stdlib][stdlib] (e.g., install Git, clone your forked repository, set it up to track the remote upstream [stdlib repository][stdlib], install dependencies, and initialize your local development environment). Our [contributing guide][stdlib-contributing] walks you through setting up Git and details our preferred way of development.

    Please do **not** submit patches through the GitHub web editor. You will need to learn how to use Git and develop [stdlib][stdlib] locally if your project is accepted. Taking the time now to use Git and develop [stdlib][stdlib] locally increases your chance of success and helps you decide whether [stdlib][stdlib] is a good fit for you.

1.  Find something in [stdlib][stdlib] that doesn't work, needs improvement, or would be a useful addition. If you need inspiration, feel free to fix any issue in the [list of issues][stdlib-issues-good-first] which are good for first time contributors.

    In addition to the issues, search for `FIXME` or `TODO` in the codebase. You can use `grep` from the command-line with `git grep "TODO"`.

    You can also play around in the [stdlib][stdlib] REPL and find something that needs fixing or could be implemented.

1.  Once you've found something, if an issue doesn't already exist, open an issue on the [stdlib issue tracker][stdlib-issues] describing the problem and your proposed solution.

    If your project will use a language other than JavaScript (e.g., C or Fortran), you should submit patches that use that language, as well, in order to demonstrate that you are proficient in that language.

    Note that your patch **must** be code-related, not documentation. While documentation fixes are always welcome, they do **not** fulfill the patch requirement.

    And further note that your patch does **not** need to be related to your proposed project in order to satisfy the patch requirement. In order to familiarize yourself with the code on which you'd be working, you may wish to try to fix a relevant bug in the same or similar code, but this is **not** part of the patch requirement.

1.  Publish your patch for peer review by creating a pull request on GitHub. You must submit your pull request through GitHub (as opposed to, for example, pasting a patched file on an issue) as this is the easiest way for us to review your code and provide feedback and is what we expect from a contributor working on a [GSoC][gsoc] project.

    You must submit a patch that is successfully reviewed and merged to satisfy the patch requirement. We do **not** consider applications without successfully merged patches.

    A successful patch demonstrates your technical proficiency and your ability to interact with the [stdlib][stdlib] community.

1.  Once you've created a pull request on GitHub, [stdlib][stdlib] reviewers will review your code and potentially request changes. You **should** address these changes.

    Throughout the development and feedback process, you should **always** run unit tests locally to verify expected behavior.

    During review, please be patient with reviewers. Due to [GSoC][gsoc], there may be a number of pull requests to review, and we may be slow to review all pull requests, especially if they are submitted close to the application deadline. You are **strongly** encouraged to submit your pull request(s) early on in the application process to give yourself the best chance for having a merged patch before the **application** deadline.

    While having a patch merged before the application deadline is preferred, if your patch is still under review, that is fine. What is critical is that your patch be merged before the **acceptance** deadline.

    It is up to you to respond to our feedback in a timely enough manner in order for your patch to be merged before the **acceptance** deadline.

1.  **In your application, please provide a brief summary of your contributions to [stdlib][stdlib] thus far, including work which has not yet been merged. This should be a list of pull requests and an indication as to whether each pull request is merged, closed, or still open.** If you made significant contributions outside of your pull requests (e.g., reviewing someone else's pull request), you may list that as well.

### Showcase Requirement

In addition to the written proposal, we **require** every [GSoC][gsoc] applicant to create a tutorial, how-to guide, and/or showcase demonstrating [stdlib][stdlib] usage.

> [!TIP]
> The showcase requirement is your opportunity to demonstrate your excitement about stdlib and set yourself apart from other GSoC applicants. And you never know, if you do something really innovative, we might just showcase your showcase and make it a part of the official stdlib documentation!

To create a showcase,

1.  Create a new repository on GitHub and give it an appropriate name.

1.  Setup a local repository on your machine which tracks the remote repository that you created on GitHub.

    ```bash
    git remote add origin https://github.com/<username>/<repository_name>.git
    ```

    where `<username>` is your GitHub user name and `<repository_name>` is the name of the repository you just created on GitHub.

1.  In your local repository, create a minimal `.gitignore` file with the following contents:

    ```text
    /node_modules/
    ```

    Alternatively, feel free to copy the `.gitignore` found in [this repository][stdlib-gsoc-gitignore].

1.  In your local repository, create a minimal `package.json` file with the following contents:

    ```javascript
    {
        "private": true,
        "dependencies": []
    }
    ```

1.  Provided you've already locally installed Node.js and have access to a JavaScript package manager (e.g., `npm`, which, by default, is installed as part of most Node.js distributions), run

    ```bash
    npm install @stdlib/stdlib --save
    ```

    where `npm install` may be replaced by the equivalent command if you prefer other package managers, such as `yarn` or `jspm`.

    After running this command, the package manager should install [stdlib][stdlib] inside a `node_modules` folder at the top-level of the local repository folder, and the package manager should update the `package.json` you created above to include `@stdlib/stdlib` as a dependency.

1.  Assuming you've locally installed Git, go ahead and create an initial commit with the added files.

    ```bash
    git add -A && git commit
    ```

    You can use the following commit message:

    ```text
    chore: add initial files
    ```

1.  Provided you've setup your local repository to track the corresponding remote repository on GitHub, push your recent commit to GitHub.

    ```bash
    git push origin main
    ```

    where we assume that `main` is the default branch name. If you use a different default, you should modify the previous command accordingly.

1.  Once you've completed the above, you are now ready to create your [stdlib][stdlib] showcase! Feel free to create a tutorial, how-to guide, and/or demo application showcasing how one can use stdlib. The showcase should be written in JavaScript, C, and/or TypeScript. **Please do not simply copy an existing example from the [stdlib][stdlib] repository. And please do NOT simply copy-and-paste output from an LLM.** We are interested in seeing your creativity and your willingness to familiarize yourself with the stdlib codebase.

1.  Once you've implemented your showcase, commit the corresponding source files to your local repository and push to your remote using the Git commands we used above.

1.  **In your application, please provide a brief summary of your [stdlib][stdlib] showcase. This should be a list of one or more repositories hosted on GitHub demonstrating stdlib usage.**

> [!CAUTION]
> Please do not (a) simply copy/fork another showcase repository and claim it as your own and (b) ask an LLM to write the entirety of your showcase for you. LLMs are not particularly good at generating stdlib code (at least not yet!), making it fairly easy to detect when someone has simply copy-pasted LLM output. We understand that some may find our requirements burdensome, but we've found that the more a GSoC contributor dives into the stdlib codebase and familiarizes themselves with our conventions and feature set, the more likely that the GSoC contributor will be a great fit for the stdlib community and ultimately succeed in completing their GSoC project.

### Plagiarism

Please note that we will **not** tolerate plagiarism in any form. When developing your application, **do so by writing in your own words**.

While other applicants may publicly discuss and submit proposals for the same idea, you should not lift content from their proposals. You should write and propose what **you** think is the best course of action for ensuring a successful project according to a timeline which **you** believe is appropriate.

**If we detect that your application contains plagiarized content, we will reject your application without review.**

Additionally, while we recognize that, for many contributors, English may not be your first language, please avoid using LLMs (e.g., ChatGPT, etc). We can typically tell when individuals rely on LLMs to auto-generate application content (and code contributions!), and what this signals to us is that you cannot be bothered to take the time to write a thoughtful application and that you likely will not be capable of earning our trust.

The best candidates are those who are thoughtful, who pay close attention to detail, and who are eager and willing to learn.

* * *

## Attribution

This document borrows heavily from

-   [Python Software Foundation GSoC guidelines][psf-gsoc]
-   [SymPy GSoC guidelines][sympy-gsoc]

## License

This document may be reused under a [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0) license][cc-by-sa-4.0].

<!-- links -->

[gsoc]: https://summerofcode.withgoogle.com/

[gsoc-contributor-guide]: https://google.github.io/gsocguides/student/

[gsoc-faq]: https://developers.google.com/open-source/gsoc/faq

[gsoc-faq-time-commitment]: https://developers.google.com/open-source/gsoc/faq#how_much_time_does_gsoc_participation_take

[gsoc-faq-schedule-start]: https://developers.google.com/open-source/gsoc/faq#can_the_schedule_be_adjusted_if_my_school_ends_latestarts_early

[gsoc-timeline]: https://developers.google.com/open-source/gsoc/timeline

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-issues]: https://github.com/stdlib-js/stdlib/issues

[stdlib-issues-good-first]: https://github.com/stdlib-js/stdlib/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22

[stdlib-contributing]: https://github.com/stdlib-js/stdlib/blob/develop/CONTRIBUTING.md

[stdlib-code-of-conduct]: https://github.com/stdlib-js/stdlib/blob/develop/CODE_OF_CONDUCT.md

[stdlib-gsoc-application-template]: https://github.com/stdlib-js/google-summer-of-code/issues/new?assignees=&labels=rfc%2C2023&template=application.yml&title=%5BRFC%5D%3A+

[stdlib-gsoc-idea-template]: https://github.com/stdlib-js/google-summer-of-code/issues/new?assignees=&labels=idea&template=idea.yml&title=%5BIdea%5D%3A+

[stdlib-gsoc-ideas]: https://github.com/stdlib-js/google-summer-of-code/labels/idea

[stdlib-gsoc-gitignore]: https://github.com/stdlib-js/google-summer-of-code/blob/main/.gitignore

[stdlib-gitter]: https://gitter.im/stdlib-js/stdlib

[github-create-account]: https://github.com/signup

[psf-gsoc]: https://python-gsoc.org/contributors.html

[sympy-gsoc]: https://github.com/sympy/sympy/wiki/GSoC-Student-Instructions

[cc-by-sa-4.0]: https://creativecommons.org/licenses/by-sa/4.0/

<!-- /.links -->
