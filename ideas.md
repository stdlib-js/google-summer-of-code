# Ideas

> List of potential project ideas.

Before working on your GSoC application, please review our list of ideas to see if you find a project which excites you. The list of existing ideas is provided to serve as inspiration and to indicate which directions may be good for stdlib.

If you do find an existing idea that you'd like to pursue, please be sure to contact us in our [Element](https://gitter.im/stdlib-js/stdlib) channel to discuss it first! **Always be sure to ask about these ideas prior to working on application in order to get the latest information about what is already implemented and what exactly must be done.**

Priority, difficulty, technology, and topic area have no bearing on the chances of an idea being accepted. All ideas are equally good, and your chances of being accepted depend solely on the **quality of your application**.

**Project Length**

GSoC allows three different project lengths: **90** hours, **175** hours, and **350** hours. Each idea must indicate whether the idea is a better fit for 90, 175, or 350 hours.

In some cases, we may be able to extend a 175 hour project to a 350 hour project by extending the ideas of what can be done. Similarly, in some cases, a 350 hour project can be shortened to a 175 hour project by only implementing part of an idea and leaving the rest for a future project. In either case, if you want to adjust the project length, please be sure to contact us in our [Element](https://gitter.im/stdlib-js/stdlib) channel to discuss it first!

## Your Own Idea

If you'd like to submit your own idea, that is also welcome; just be sure to propose your idea to stdlib mentors first! After reaching out, we'll inform you whether the idea has already been implemented, if the idea will entail enough work to last the duration of the GSoC program, if the idea requires too much work to be meaningfully pursued during GSoC, and if the idea is within the scope of stdlib. **Unsolicited, undiscussed ideas are less likely to get accepted.**

The best project for you is the one you are most interested in and knowledgeable about. Excitement and aptitude are two key ingredients of a successful project and help ensure your commitment and ability to see a project through to completion. So if there is something you are especially passionate about and that you believe aligns with the scope and goals of stdlib, we'd be happy to hear your pitch!

After discussing with us in our [Element](https://gitter.im/stdlib-js/stdlib) channel and receiving approval to submit your idea, please open an [issue](https://github.com/stdlib-js/google-summer-of-code/issues/new?assignees=&labels=idea&template=idea.yml&title=%5BIdea%5D%3A+) which describes your idea using the [**idea issue template**](https://github.com/stdlib-js/google-summer-of-code/issues/new?assignees=&labels=idea&template=idea.yml&title=%5BIdea%5D%3A+).

## Mentors

To learn who might mentor one of the projects listed below, consult the list of potential project [mentors](https://github.com/stdlib-js/google-summer-of-code/blob/main/mentors.md). For each mentor, the list includes a mentor's preferred project(s) and/or general interest area.

* * *

## Implement a broader range of statistical distributions

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/2>

### Idea

The goal of this idea is to implement all distributions found in SciPy [stats](https://docs.scipy.org/doc/scipy/reference/stats.html#statsrefmanual). Distribution support will entail implementing APIs for computing PDFs, CDFs, quantiles, and other distribution properties. Additionally, stdlib should support APIs for drawing random variates from any implemented distributions.

### Expected Outcomes

stdlib users will be able to construct, and compute various properties of, every statistical distribution present in SciPy in JavaScript.

### Involved Software

No runtime dependencies should be necessary. SciPy will be necessary in order to provide reference test results.

### Prerequisite Knowledge

JavaScript, Node.js. Familiarity with C/C++/Fortran would help.

### Difficulty

Intermediate. Difficulties may arise for distributions whose properties and moments have complicated formulations. Developing JavaScript implementations will likely require consulting C/C++ and possibly Fortran code.

### Project Length

350 hours.

* * *

## Provide APIs for computing Fast Fourier Transforms

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/3>

### Idea

The goal of this idea is to expose a set of Fast Fourier Transform (FFT) interfaces similar to those available in NumPy and as documented in the [Data APIs Array API specification](https://data-apis.org/array-api/latest/extensions/fourier_transform_functions.html). Similar to stdlib's BLAS interfaces, we may want to allow switching out the FFT backend.

One potential reference implementation which could form the basis of this idea is pocketfft, as done in NumPy:

- https://github.com/mreineck/pocketfft
- https://gitlab.mpcdf.mpg.de/mtr/pocketfft

### Expected Outcomes

stdlib users would be able to evaluate FFT operations on stdlib ndarrays. Ideally, we'd also provide a set of C APIs.

### Involved Software

Will need to consult reference implementations in C/Fortran.

### Prerequisite Knowledge

JavaScript, Node.js, C/C++/Fortran

### Difficulty

Hard. This may be a straightforward port, or it may not be. More R&D is needed.

### Project Length

350 hours.

### Potential Mentors

@kgryte @Planeshifter @rreusser @Pranavchiku @czgdp1807 

* * *

## Developer dashboard for tracking ecosystem build failures

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/4>

### Idea

The [stdlib](https://github.com/stdlib-js/stdlib) project encompasses over 3500 repositories which are orchestrated via a centralized repository. While orchestration largely works as intended, build failures do happen, and quickly detecting and resolving build failures in standalone repositories is critical to prevent downstream breakages and ensure ecosystem integrity.

The goal of this idea is to build a developer dashboard to display in real-time standalone repository build failures. We currently have the backend database which collects build results in real-time; however, we have yet to build a frontend for viewing and analyzing such data.

The expected roadmap is as follows:

- Build a Node.js backend for querying a PostgreSQL database.
- Build a frontend dashboard which interfaces with the backend. As this will be a developer facing application, the choice of technologies is greenfield. Potential options may include ESBuild, tailwind, etc.
- Add support for filtering the dashboard based on build status and other features.
- Allow for quick navigation to repository resources and build artifacts.
- Extend the dashboard to support historical overviews and other drill down metrics.

### Expected Outcomes

stdlib developers will be able to navigate to a webpage and see the build status for all repositories at once.

### Involved Software

This will involve building a frontend application and interfacing with a backend for querying a PostgreSQL database. We may want to try more "cutting edge" technology here, such as ESBuild, tailwind, etc.

### Prerequisite Knowledge

JavaScript, Node.js, CSS, HTML, JSX.

### Difficulty

Intermediate. Requires a fair amount of frontend engineering knowledge and modern frontend application development.

### Project Length

175/350 hours. A skilled contributor may be able to execute on this faster. If so, scope could be expanded to include analytics and historical overviews.

### Potential Mentors

@kgryte @Planeshifter @steff456 

* * *

## Expand support for additional pseudorandom number generators

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/5>

### Idea

The goal of this idea is to implement a variety of PRNGs for use within stdlib to generate pseudorandom numbers. The project currently uses Mersenne Twister as its default PRNG; however, this PRNG, while common, is not ideal given its comparatively large internal state. Would be great to have a collection of PRNGs, such as PCG, Philox, Xorshift, and more.

### Expected Outcomes

stdlib users will have a wide selection of PRNGs from which to choose from based on their individual needs and considerations. Having a large selection of PRNGs will useful when replicating the results of numerical simulations which may use a PRNG which is not one of the currently supported stdlib PRNGs. Additionally, a desired outcome would be if we could replace MT19937 with a new default PRNG.

### Involved Software

No other software should be necessary. We may be a bit constrained based on 32-bit limitations in JS. This would not, however, stop us from implementing in C for use in generating arrays of random numbers.

### Prerequisite Knowledge

JavaScript, Node.js. Familiarity with C/C++/Fortran would help.

### Difficulty

Intermediate/Hard. Depends. Some PRNGs may be straightforward to implement. Others, not so much.

### Project Length

175/350 hours. This idea can be adjusted according to needs and availability.

### Potential Mentors

@kgryte @Planeshifter @Pranavchiku 

* * *

## Add support for visualizing benchmark results

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/6>

### Idea

While we currently support running benchmarks, we have yet to provide a means for easily visualizing and comparing benchmark results. Previously, when wanting to visualize and compare benchmark results, one has needed to manually parse TAP results and then plug into some other software (e.g., vega or Plotly).

The idea for this project would be to 1) implement a TAP parser with support for the latest TAP specification and 2) provide a plot frontend for consuming parsed TAP results. The plot frontend could be as simple as a Unicode bar chart plotter, which would be in line with our existing Unicode plotting facilities.

### Expected Outcomes

Developers will be able to run benchmarks and visually compare benchmark results based on the namespace and parameterization. Ideally, the plot would include small multiple/facet visualizations.

### Involved Software

No other software or dependencies should be necessary. Will need to consult a reference TAP parser implementation (e.g., `node-tap`).

### Prerequisite Knowledge

JavaScript and Node.js.

### Difficulty

Intermediate.

### Project Length

350 hours.

### Potential Mentors

@kgryte @Planeshifter @steff456 

* * *

## Develop a project test runner

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/7>

### Idea

Currently, stdlib uses `tape`. The goal of this idea is to migrate away from `tape` and develop a test runner in-house, similar to `@stdlib/bench/harness`. This has long been on our TODO list and would allow us to have a simple test runner which is oriented toward stdlib conventions (e.g., we don't use most of the assertion methods in `tape`).

Bonus points if we can migrate away from `istanbul` to `nyc` or `c8`; however, this may be tricky if we want to support older Node.js versions.

### Expected Outcomes

All unit tests have migrated to the in-house runner.

### Involved Software

No additional runtime deps. Will need to consult `tape` as a reference implementation, along with our existing `@stdlib/bench/harness` implementation.

### Prerequisite Knowledge

JavaScript, Node.js.

### Difficulty

Intermediate.

### Project Length

175/350 hours. The scope of this idea can be adjusted depending on availability.

### Potential Mentors

@kgryte @Planeshifter @steff456 

* * *

## Reimagine the stdlib plot API and implementation

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/8>

### Idea

Currently, stdlib has a bespoke plot API which is useful for fast static rendering. However, our implementation is quite limited in the types of plots it can produce. The goal of this idea is to refactor our plot API to build atop of `vega` (or its specifications). For this, we'd need to migrate to an async plot generation API, which is probably necessary regardless if we want to support WebGL or some other async rendering engine.

Ideally, we would retain the same plot API and internally generate a vega specification.

### Expected Outcomes

We can generate simple plots using the new plot implementation.

### Involved Software

This will involve using `vega` (or something similar depending on whether `vega` is sufficiently maintained). We will want to transpile to ES5 and vendor in order to ensure that we can support our supported Node.js versions.

### Prerequisite Knowledge

JavaScript, Node.js.

### Difficulty

Intermediate/Hard.

### Project Length

350 hours. This project has the potential to spiral out of control, as there are many unknowns we'd need to answer. Mentor would likely need to be actively involved in order to perform R&D and properly scope.

### Potential Mentors

@kgryte @Planeshifter @rreusser 

* * *

## Achieve feature parity with async.js

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/9>

### Idea

Currently, stdlib has a limited set of dedicated "async" APIs for performing various utility operations. The goal of this idea is to achieve feature parity with [`async.js`](https://caolan.github.io/async/v3/), a popular library providing callback-based async APIs.

Motivation for this idea stems from certain advantages afforded by callback-based asynchronous programming. Notable among them is superior performance and the ability to more readily return and inspect status objects.

### Expected Outcomes

stdlib will have more or less 1:1 feature parity with `async.js` APIs.

### Involved Software

`async.js` will serve as a reference implementation for API design. Will want to modify to match stdlib conventions.

### Prerequisite Knowledge

JavaScript.

### Difficulty

Beginner. Would benefit from someone with JavaScript experience.

### Project Length

175/350 hours. Can be scoped accordingly.

### Potential Mentors

@kgryte @Planeshifter @steff456 

* * *

## Achieve feature parity with builtin Node.js `fs` module

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/10>

### Idea

Achieve feature parity with Node.js `fs` package. We currently only support a limited selection of `fs` methods. Would be useful to support more.

Part of this work involves providing an abstraction layer of Node.js built-ins in order to support newer functionality (e.g., options and/or behavior) not present in older Node.js versions. This is similar in concept to the userland `readable-stream` package.

### Expected Outcomes

stdlib will have complete feature parity with Node.js built-ins.

### Involved Software

No other software is necessary.

### Prerequisite Knowledge

JavaScript, Node.js.

### Difficulty

Intermediate. Could require some creative solutions to ensure that abstractions work for older Node.js versions.

### Project Length

175/350 hours. Can be scoped accordingly.

### Potential Mentors

@kgryte @Planeshifter @steff456 

* * *

## Add support for the multivariate normal distribution

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/11>

### Idea

The goal of this idea is to implement the multivariate normal distribution. This distribution is fundamental in a wide variety of statistical applications and will help unblock stdlib in offering additional statistics APIs.

As a starting point, SciPy's multivariate normal distribution API and implementation could provide a suitable point of reference:

- https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.multivariate_normal.html

### Expected Outcomes

Users will be able to evaluate the PDF, CDF, logPDF, and logCDF and be able to draw random variates from a specified distribution.

### Involved Software

No other software is necessary. Will require reading reference implementations written in Python, R, and Julia.

### Prerequisite Knowledge

JavaScript, Node.js.

### Difficulty

Intermediate.

### Project Length

175/350 hours. Can be scoped accordingly. A skilled contributor should be able to complete in 175 hours with the potential of using their implementation to implement higher order statistics APIs.

### Potential Mentors

@kgryte @Planeshifter @Pranavchiku 

* * *

## Develop a Google Sheets extension which exposes stdlib functionality

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/13>

### Idea

The goal of this idea is to allow users to call stdlib APIs from within Google Sheets. This will allow users to perform linear algebra and various machine learning operations directly on spreadsheet data and all within the browser.

In order to execute on this idea, we'll want to support

- two-dimensional array broadcasting semantics
- performant element-wise iteration APIs
- input argument validation tailored to the Sheets context
- Fused operations to avoid unnecessary network calls
- documentation and tutorials demonstrating API usage
- good generation and automation for creating extension builds
- testing and performance measurement to guard against regressions

### Expected Outcomes

Google Sheets users will be able to install an extension which exposes stdlib functionality, run statistical tests, evaluate mathematical functions, and perform linear algebra operations using stdlib.

### Involved Software

No other software is necessary.

### Prerequisite Knowledge

JavaScript, Node.js.

### Difficulty

Beginner/Intermediate. 

### Project Length

175/350 hours. Can be scoped accordingly. A skilled contributor can work on a strategy for performant fused operations.

### Potential Mentors

@kgryte @Planeshifter @steff456 

* * *

## Stdlib API dependency explorer

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/14>

### Idea

stdlib is a large (and growing!) project, which can make project navigation challenging. The goal of this idea is to provide a visual representation of an API's dependency graph directly in the stdlib API documentation. Initial thinking is that would be an interactive network diagram in which nodes present package dependencies and allow for navigation; however, other visual representations may be possible.

By providing such a means for navigating the project, users could more readily deepen their understanding of the `stdlib` code base, identify potential issues, and better understand how underlying APIs are used.

### Expected Outcomes

A user will be able to navigate to a package's documentation page, click to display a network graph, and then click on nodes within that graph to explore the documentation of package dependencies.

### Involved Software

No other software is necessary.

### Prerequisite Knowledge

JavaScript, Node.js, HTML/CSS, JSX.

### Difficulty

Beginner/Intermediate. 

### Project Length

175 hours.

### Potential Mentors

@kgryte @Planeshifter @steff456 

* * *

## Add support for bootstrap and jackknife resampling

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/15>

### Idea

Manually constructing confidence intervals and other statistical properties can be useful when no analytic solution exists. The goal of this idea to implement APIs for bootstrap and jackknife resampling.

### Expected Outcomes

Users will be to resample provided datasets.

### Involved Software

No other software is necessary.

### Prerequisite Knowledge

JavaScript, Node.js.

### Difficulty

Beginner/Intermediate. 

### Project Length

175/350 hours. Can be scoped accordingly. Scope can be expanded to implement different bootstrap algorithms.

* * *

## Develop a Jupyter backend for interfacing with the stdlib REPL

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/16>

### Idea

Jupyter is a dominate force in scientific computing. While some effort has been done to expose JavaScript kernels to Jupyter/JupyterLab, most of these kernels are under-developed or lack numerical functionality.

The goal of this idea would be to develop a Jupyter backend based on stdlib.

### Expected Outcomes

A JupyterLab user will be able to connect to a stdlib kernel and invoke stdlib operations.

### Involved Software

This goal will require interfacing with the Jupyter technology stack, including ZeroMQ and implementing messaging protocols.

### Prerequisite Knowledge

JavaScript, Node.js. Experience with Python would be very helpful.

### Difficulty

Hard.

### Project Length

350 hours. This idea has many unknowns and will be hard to scope.

### Potential Mentors

@kgryte @Planeshifter 

* * *

## Implement additional statistical tests

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/17>

### Idea

Implement various statistical tests which are not currently implemented in stdlib, but are implemented in other envs such as R, Python (SciPy, statsmodels), Julia, and MATLAB.

### Expected Outcomes

stdlib will have a broader array of statistical tests which can operate on ndarrays.

### Involved Software

No other software should be necessary. However, we will need to do a needs analysis to determine which prerequisite packages/functionality is necessary in order to allow these tests to be implemented (e.g., BLAS, ndarray slicing, etc).

### Prerequisite Knowledge

JavaScript, Node.js. Familiarity with R, Python, C/C++ would be very useful, as will need to consult reference implementations.

### Difficulty

Hard. Depends on the reference implementation requirements and algorithmic difficulty.

### Project Length

350 hours.

### Potential Mentors

@kgryte @Planeshifter @Pranavchiku 

* * *

## Generate web documentation from JSDoc comments

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/19>

### Idea

stdlib relies heavily on JSDoc comments to document its source code. Currently, the project has only rudimentary support for generating HTML docs from those comments. The goal of this idea would be to

1. Write an in-house JSDoc parser.
2. Generate HTML documentation from the parsed comments which is capable of supporting project conventions and its embrace of radical modularity.

JSDoc comments are oriented toward JavaScript source files; however, stdlib also uses similar documentation practices for documenting C source files and `make` files. A possible extension to the in-house JSDoc parser would be to support these other source file types. As those file types may require separate AST parsers, supporting other file types is likely to require writing separate comment parsers for each source type.

### Expected Outcomes

In addition to the current API documentation, a user will be able to navigate to a package's JSDoc documentation to gain more insight into supported input and output dtypes and implemented algorithms. This would be especially useful for rendering the extended JSDoc comment of elementary mathematical functions.

### Involved Software

No other software is necessary.

### Prerequisite Knowledge

JavaScript, Node.js, HTML/CSS.

### Difficulty

Intermediate.

### Project Length

350 hours. The length can likely be scaled down; however, there are several unknowns, and it may not be straightforward to develop an in-house parser which caters to the unique structure and setup of stdlib. For advanced contributors, possibility to explore support for source file types other than JavaScript (e.g., C and `make`).

### Potential Mentors

@kgryte @Planeshifter @steff456 

* * *

## Refactor generated TypeScript interface documentation

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/20>

### Idea

Currently, stdlib publishes TypeScript interface documentation in its web-based API documentation. The generated documentation monkey-patches `tsdoc` to handle generating documentation across the entire mono-repo. The goal of this project is to refactor/rethink this approach and provide a solution capable of addressing the unique constraints of the stdlib project.

### Expected Outcomes

At a base level, it would be great if we had a working documentation render which did not require monkey-patching. A more difficult, but potentially more desirable, outcome would be if TypeScript documentation was not rendered as a separate website, but rather was integrated within the docs as simply another page/fragment.

### Involved Software

No other software is necessary.

### Prerequisite Knowledge

JavaScript, Node.js, HTML/CSS, TypeScript, JSX/React.

### Difficulty

Intermediate.

### Project Length

175/350 hours. Length will depend on the nature of the proposed solution (e.g., needing to write a custom TypeScript parser vs modifying the existing tsdoc library).

### Potential Mentors

@kgryte @Planeshifter @steff456 

* * *

## Use ES6 modules for running unit tests and benchmarks in web browsers

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/21>

### Idea

Currently, when generating stdlib API documentation, we generate UMD bundles for unit tests and benchmarks. When a user navigates to our package documentation, they can load unit tests and benchmarks and have those run without needing to setup a local environment. The pain point here is that creating separate bundles for each package is time consuming and adds significant heft to the `www` repo.

The goal of this idea is to refactor the way we support unit tests and benchmarks to use ES6 modules and potentially skip bundling altogether. This has the downside of not supporting older browsers which don't support the `<module>` tag, but is probably fine considering that running package unit tests and benchmarks is likely a forward looking concern.

### Expected Outcomes

Users will be able to run unit tests and benchmarks directly in their web browsers by navigating to project API documentation and what is loaded are ES6 modules, not UMD bundles.

### Involved Software

No other software is necessary.

### Prerequisite Knowledge

JavaScript, Node.js, HTML/CSS, JSX/React.

### Difficulty

Intermediate.

### Project Length

350 hours.

### Potential Mentors

@kgryte @Planeshifter @steff456 

* * *

## Migrate web API documentation to use matomo and instrument for better understanding user navigation behavior

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/22>

### Idea

Currently, the stdlib web-based API docs use GA for analytics and have only minimal integration. E.g., the API docs application is a SPA which uses React and the app does not record changes in page views; we only record first hits.

The goal of this idea is to migrate to using matomo and take advantage of its privacy features. The work will involve instrumenting the API documentation application and integrating with matomo. A potential stretch goal would be to setup dashboards for reporting so that we can better understand user behavior and continue to improve project documentation.

### Expected Outcomes

All user interaction data is logged to matomo and stored in a hosted database.

### Involved Software

No other software is necessary.

### Prerequisite Knowledge

JavaScript, Node.js, HTML/CSS, JSX/React.

### Difficulty

Intermediate.

### Project Length

350 hours. Can be adjusted depending on skill and ability.

### Potential Mentors

@kgryte @Planeshifter @steff456 

* * *

## Improve the REPL presentation framework

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/23>

### Idea

stdlib currently offers a REPL presentation framework for authoring presentations for use directly in the REPL. This is particularly useful for creating interactive tutorials illustrating how to use stdlib functionality for data analysis and visualization from the terminal. Some functionality is missing which would be quite useful. E.g.,

- ASCII plotting
- ASCII animations
- syntax highlighting
- pretty printing tables
- speaker notes
- multiplexing
- theming

### Expected Outcomes

The REPL presentation framework will have additional features similar to those in WYSIWYG presentation applications.

### Involved Software

No other software is necessary.

### Prerequisite Knowledge

JavaScript, Node.js.

### Difficulty

Intermediate.

### Project Length

175/350 hours. Can be scoped according to project length.

### Potential Mentors

@kgryte @Planeshifter @steff456 

* * *

## Functions for numerical integration and differentiation

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/24>

### Idea

The goal of this idea is to add functions for numerical integration or differentiation to stdlib as building blocks for downstream algorithms. The functions could be ported from permissively licensed open-source libraries in other languages such as C or Fortran or alternatively be implemented from scratch by consulting the literature and reference implementations from various languages.

Some work along these lines has been started in the scijs ecosystem, which can be used for initial inspiration (e.g., https://github.com/scijs/ode45-cash-karp), and more generally in SciPy (e.g., https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.ode.html).

### Expected Outcomes

stdlib will have a range of robust functions for performing numerical integration or differentiation

### Involved Software

No other software is necessary.

### Prerequisite Knowledge

JavaScript, Node.js.

### Difficulty

Intermediate.

### Project Length

350 hours.

### Potential Mentors

@kgryte @Planeshifter @rreusser @Pranavchiku @czgdp1807 

* * *

## Symbolic Math

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/25>

### Idea

The goal of this idea is to add basic support for symbolic math operations in stdlib.

### Expected Outcome

Users have the ability to perform basic symbolic math operations in JavaScript, such as solving equations, simplifying expressions, and using mathematical functions.

### Involved Software

No other software should be necessary.

### Prerequisite Knowledge

JavaScript, Node.js, and an understanding of mathematics and calculus.

### Difficulty

Intermediate

### Project Length

350 hours.

### Potential Mentors

@kgryte @Planeshifter @rreusser 

* * *

## Make code blocks on website documentation interactive

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/26>

### Idea

Currently, all code blocks in the documentation at https://stdlib.io/docs/api/latest are static. To make example code more useful and engaging, it would be nice to have interactive code shells on the website that could be edited and would provide real-time return annotations.

Some initial brainstorming has been done to inform how this would work, but, at minimum, we'd need to

- convert READMEs to structured data to allow for more straightforward transformation
- support dynamic loading of relevant stdlib packages used in example code blocks
- lazily integrate a code editor into documentation pages
- implement security measures to prevent malicious usage

### Expected Outcomes

Improved user experience on the website, as the code examples would become editable and interactive. Return annotations would have to update in real-time, and additional contextual help could be provided via overlays etc. Another outcome would be to make it easy to switch between ES5 and ES6 for code blocks.

### Involved Software

No other software is necessary.

### Prerequisite Knowledge

JavaScript, HTML/CSS, React + JSX

### Difficulty

Hard.

### Project Length

350 hours.

### Potential Mentors

@kgryte @Planeshifter @steff456 

* * *

## Optimization Algorithms

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/27>

### Idea

We currently do not have optimization algorithms in stdlib. Having support for Linear Programming, Convex Optimization, Quadratic Programming, and/or Non-Linear Optimization algorithms would be a great addition.

### Expected Outcomes

stdlib will have a broad array of optimization algorithms for solving problems.

### Involved Software

No other software should be necessary. However, we will need to do a needs analysis to determine which prerequisite packages/functionality is necessary in order to allow these algorithms to be implemented (e.g., BLAS).

### Prerequisite Knowledge

JavaScript, Node.js. Familiarity with R, Python, C/C++ would be very useful, as will need to consult reference implementations.

### Difficulty

Hard. Depends on the reference implementation requirements and algorithmic difficulty.

### Project Length

350 hours.

### Potential Mentors

@kgryte @Planeshifter @rreusser @Pranavchiku @czgdp1807 

* * *

## Linear Algebra Functionality

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/28>

### Idea

Currently, support for linear algebra operations in stdlib is limited. The goal of this idea would be to implement algorithms for linear algebra operations such as matrix multiplication, calculating the matrix inverse, eigenvalue calculation, singular value decomposition, Cholesky & LU Decomposition, and the like. This overlaps with the goal of increasing the amount of BLAS and LAPACK that is available in stdlib.

### Expected Outcomes

stdlib will have extended support for linear algebra operations which can be used to solve problems involving matrices and vectors.

### Involved Software

No other software should be necessary. However, we will need to do a needs analysis to determine which prerequisite packages/functionality is necessary in order to allow these operations to be implemented (e.g., BLAS, ndarray slicing, etc).

### Prerequisite Knowledge

JavaScript, Node.js. C, Fortran. Familiarity with linear algebra would be very useful, as will need to consult and understand reference implementations.

### Difficulty

Hard. Depends on the reference implementation requirements and algorithmic difficulty.

### Project Length

350 hours.

### Potential Mentors

@kgryte @Planeshifter @Pranavchiku @czgdp1807 @rreusser 

* * *

## Achieve ndarray API parity with built-in JavaScript arrays

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/33>

### Idea

Built-in JavaScript [arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) (and typed arrays) have a number of methods for creating, transforming, and manipulating array contents (e.g., `forEach`, `map`, `reverse`, `slice`, `filter`, etc). These APIs provide base level functionality forming a default vocabulary for working with array data.

The goal of this idea is to create functional analogs of array methods for working with [ndarrays](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/ctor), which are efficient data structures for operating on multi-dimensional data. The main difficulty in implementing analogs is in ensuring efficient iteration of non-contiguous data. The main patterns for such iteration have been established in stdlib, but work remains to apply such patterns for top-level array-equivalent APIs.

### Expected Outcomes

Users will be able to use functional APIs (exposed as part of individual packages) for operating on ndarrays in a manner similar to how users can use prototype methods available on built-in arrays and typed arrays.

### Involved Software

No other software is necessary.

### Prerequisite Knowledge

JavaScript, Node.js.

For APIs not accepting callbacks, certain kernels can be implemented in C, as time and scope allow.

### Difficulty

Intermediate. Writing the loop kernels can be involved, but, once understood, are straightforward to apply.

### Project Length

90/175/350 hours. Can be scoped accordingly. Scope can be expanded to implement additional ndarray kernels outside of Array method equivalents.

### Potential Mentors

@kgryte @Planeshifter @steff456 @rreusser 

* * *

## Develop C implementations for base special mathematical functions

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/34>

### Idea

This idea builds on the work outlined in https://github.com/stdlib-js/stdlib/issues/649. Namely, implementing base special mathematical functions in C. Currently, all special mathematical functions have JavaScript implementations, which are often ports from other languages.

The goal of this idea is to port all JavaScript implementations to C. Having such implementations will allow stdlib to provide Node.js native add-ons for higher performance ndarray computation and is more generally necessary for achieving NumPy/SciPy parity.

### Expected Outcomes

Users will be able to leverage C implementations for use in Node.js native add-ons, and stdlib will be able to expose element-wise APIs for evaluating base special math functions over ndarrays.

### Involved Software

No other software is necessary.

### Prerequisite Knowledge

C, JavaScript, Node.js.

### Difficulty

Intermediate. Familiarity with C is beneficial. This idea mainly involves porting existing implementations (many of which are written in C/C++) and doing so in a manner which conforms with stdlib conventions.

### Project Length

90/175/350 hours. Can be scoped accordingly. Scope can be expanded to implement new special mathematical functions.

### Potential Mentors

@kgryte @Planeshifter @steff456 @rreusser @Pranavchiku @czgdp1807 

* * *

## Develop an Excel add-on which exposes stdlib functionality

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/35>

### Idea

The goal of this idea is to allow users to call stdlib APIs from within Excel. This will allow users to perform linear algebra and various machine learning operations directly on spreadsheet data and all within the browser.

In order to execute on this idea, we'll want to support

- two-dimensional array broadcasting semantics
- performant element-wise iteration APIs
- input argument validation tailored to the Sheets context
- Fused operations to avoid unnecessary network calls
- documentation and tutorials demonstrating API usage
- good generation and automation for creating extension builds
- testing and performance measurement to guard against regressions

This idea is the Excel version of https://github.com/stdlib-js/google-summer-of-code/issues/13.

### Expected Outcomes

Excel users will be able to install an extension which exposes stdlib functionality, run statistical tests, evaluate mathematical functions, and perform linear algebra operations using stdlib.

### Involved Software

No other software is necessary; however, access to a local copy of Excel will be beneficial. While Microsoft 360 can be used, debugging is more difficult and less stable.

### Prerequisite Knowledge

JavaScript, Node.js.

### Difficulty

Beginner/Intermediate. 

### Project Length

175/350 hours. Can be scoped accordingly. A skilled contributor can work on a strategy for performant fused operations.

### Potential Mentors

@kgryte @Planeshifter @steff456 

* * *

## Add BLAS bindings and implementations for linear algebra

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/36>

### Idea

[BLAS](https://netlib.org/blas/) routines are standard building blocks for performing basic vector and matrix operations. These building blocks are leveraged by most modern numerical programming languages and libraries, including NumPy, SciPy, Julia, MATLAB, R, and others.

The goal of this idea is to 

- reimplement reference BLAS routines in free-form Fortran 95
- port reference BLAS routines to C
- port reference BLAS routines to JavaScript
- write Node.js bindings to allow calling BLAS routines in compiled C/ Fortran from JavaScript

### Expected Outcomes

Users will be able to call BLAS routines from JavaScript. In web browsers, BLAS routines will be in JavaScript. In Node.js, provided native bindings have been compiled, BLAS routines will either be ported reference implementations or hardware optimized system libraries.

### Involved Software

No other software is necessary apart from standard compilers (GCC, gfortran).

### Prerequisite Knowledge

C, Fortran, JavaScript, Node.js.

### Difficulty

Intermediate. Familiarity with C and Fortran will be beneficial. This idea mainly involves porting existing implementations and doing so in a manner which conforms with stdlib conventions.

### Project Length

90/175/350 hours. Can be scoped accordingly.

### Potential Mentors

@kgryte @Planeshifter @steff456 @rreusser @Pranavchiku @czgdp1807 

* * *

## Implement incremental (online) machine learning algorithms

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/37>

### Idea

The goal of this idea is to implement incremental machine learning algorithms to allow for real-time regression and classification. Such online algorithms would allow for point-by-point data processing and avoid the sometimes costly overhead of batch processing. Online algorithms are particularly useful in data streaming contexts (e.g., user clicks, photon collection, etc).

While stdlib includes some incremental algorithms ([binary classification](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ml/incr/binary-classification), [k-means](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ml/incr/kmeans), and [stochastic gradient descent regression](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ml/incr/sgd-regression)), the project would benefit from additional algorithms.

Individuals interested in pursuing this idea should be prepared to research possible algorithms and propose specific APIs.

### Expected Outcomes

stdlib will expose one or more additional APIs for incremental machine learning.

### Involved Software

No other software is necessary.

### Prerequisite Knowledge

JavaScript, Node.js.

### Difficulty

Intermediate. In order to implement ML algorithms, individuals will likely need to consult reference implementations written in other languages. Porting from these implementations may not be straightforward depending on the features involved.

### Project Length

90/175/350 hours. Can be scoped accordingly.

### Potential Mentors

@kgryte @Planeshifter

* * *

## Add support for string arrays in stdlib

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/44>

### Idea

Similar to what's described in https://github.com/stdlib-js/google-summer-of-code/issues/43, a need exists to expand array data type support beyond numeric data types. One such data type is a `string` data type. The rationale for having a dedicated string data type is for better interoperation between JavaScript and C, and this is particularly paramount for supporting ndarrays having a string data type, as much of ndarray iteration machinery is written in C.

Accordingly, the goal of this project is to add a dedicated string typed array called a `StringArray`, which will support variable-length strings. This new array type should follow a similar path to that of [@stdlib/array/complex64](https://github.com/stdlib-js/stdlib/tree/5dbb01dba2b1b305c6a11b66652ee2e4ccac15e2/lib/node_modules/%40stdlib/array/complex64), which provides a typed array dedicated to single-precision complex floating-point numbers; namely, `StringArray` should support standard typed array methods, as well as provide accessors for getting and setting array elements.

Note, however, that a `StringArray` should be a typed array. A `StringArray` should not wrap a "generic" array. Instead, the array should be backed by fixed length memory, similar to how [@stdlib/array/complex64](https://github.com/stdlib-js/stdlib/tree/5dbb01dba2b1b305c6a11b66652ee2e4ccac15e2/lib/node_modules/%40stdlib/array/complex64) is backed by a `Float32Array`. One possibility is backing `StringArray` instances with Node.js `Buffer` objects, which are, in turn, `Uint8Array`s.

There are, however, some design considerations; namely, how to handle setting of array elements. In particular, what happens when a user attempts to update a `StringArray` element with a larger string? Does that lead to a new memory allocation and data copy? Or should elements have a fixed allocation to allow for elements to grow until some maximum size?

As part of this project, not only will a new `StringArray` be added to the project, but it will be integrated throughout stdlib. This will entail adding support for `StringArray`s wherever arrays are accepted/used, following the same precedent established by [@stdlib/array/complex64](https://github.com/stdlib-js/stdlib/tree/5dbb01dba2b1b305c6a11b66652ee2e4ccac15e2/lib/node_modules/%40stdlib/array/complex64) and other custom array types in stdlib. This includes adding support for string arrays in ndarray APIs.

**Prior Art**

- Recent work in NumPy adding UTF-8 variable length string support: https://numpy.org/neps/nep-0055-string_dtype.html

### Expected outcomes

The expected outcomes of this idea should be (1) creation of a new `@stdlib/array/string` package exposing a new typed array constructor, (2) support for `StringArray` instances throughout `@stdlib/array/*`, (3) support for `StringArray` instances as backing arrays for ndarrays (which may involve working with various C APIs), and (4) any other integration opportunities.

### Status

While no work has been done to create a new `@stdlib/array/string` package, there exists prior art for adding custom typed arrays to stdlib; namely, `Complex64Array` and `Complex128Array`.

### Involved software

No special software for initial work. Once work has progressed to ndarray support, will need access to a C compiler, as documented in the project development guide.

### Technology

JavaScript, C, nodejs, native addons

### Other technology

n/a

### Difficulty

Intermediate/Advanced

### Difficulty justification

This project is ambitious, as there are many design considerations which need to be addressed  in order to ensure performance and allow for efficient JS/C interoperation.

Additionally, there will be difficulty beyond the creation of a new `StringArray` class in finding all the various bits of code throughout the project which need to be updated in order to more universally support `StringArray` instances throughout stdlib on equal footing with other array data types.

### Prerequisite knowledge

Familiarity and comfort with JavaScript would be highly recommended, given that this project will require considerable programming in JavaScript. Some familiarity with C would also be good, especially for string array integration with ndarrays.

### Project length

350hrs, as will likely involve a decent amount of R&D.

### Potential mentors

@kgryte @Planeshifter 

* * *

## ESLint 9 Migration for JSON and YAML Linting

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/90>

### Idea

We will migrate stdlib-js to ESLint 9 to take advantage of new features, performance improvements, and enhanced file type support (including JSON and YAML). Additionally, this idea posits that we will create new ESLint rules that enforce project-specific coding standards for stdlib. This dual approach ensures both modern linting capabilities and adherence to stdlib’s code expectations and style guidelines.

### Expected outcomes

-   ESLint 9 Integration: A full migration of the linting infrastructure to ESLint 9.
-   Extended File Support: Ability to lint not just JavaScript but also JSON and YAML files with the help of ESLint.
-   New Custom Rules: New rules to enforce more of stdlib’s conventions.
-   Enhanced Code Quality: Improved consistency and code quality by enforcing additional project-specific standards across the codebase.
-   Updated Configurations: Comprehensive configuration updates that incorporate both ESLint 9 changes and the new custom rules.

### Status

stdlib currently uses ESLint 8. The stdlib project already has an [extensive collection of custom lint rules](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/_tools/eslint/rules).

### Involved software

No additional external dependencies aside from ESLint.




### Technology

nodejs, JavaScript

### Other technology

n/a


### Difficulty

3

### Difficulty justification

Migrating to ESLint 9 requires a detailed review of current linting configurations and potential refactoring of custom rules. The project will involve understanding new semantics and breaking changes introduced in ESLint 9, addressing compatibility issues, and integrating support for additional file types such as JSON and YAML and bespoke rules for these new file types. Additionally, thorough testing across various scenarios is necessary to ensure stability, making this a task that is intermediate in complexity.



### Prerequisite knowledge

A thorough understanding of ESLint, including its configuration system and plugin architecture, is essential. Familiarity with JavaScript and Node.js is required, along with experience in developing custom linting rules. Additionally, knowledge of continuous integration and automated testing practices is recommended to ensure that any new linting rules integrate smoothly into stdlib’s development workflow.



### Project length

175

### Checklist

- [x] I have read and understood the [Code of Conduct](https://github.com/stdlib-js/stdlib/blob/develop/CODE_OF_CONDUCT.md).
- [x] I have read and understood the application materials found in this repository.
- [x] The issue name begins with `[Idea]:` and succinctly describes your idea.
- [x] I understand that, in order to apply to be a GSoC contributor, I must submit my final application to <https://summerofcode.withgoogle.com/> **before** the submission deadline.

* * *

## Improve `stdlib` Publishing Pipeline

Linked issue: <https://github.com/stdlib-js/google-summer-of-code/issues/92>

### Idea

stdlib is composed of thousands of individual packages. Managing this complexity requires an intricate publishing pipeline that handles automatic updates to repositories, generation of various bundle types, publishing packages to the npm registry, changelog generation, and more. 

The project aims to refactor the current workflows by breaking down the monolithic, feature-rich scripts ([example](https://github.com/stdlib-js/stdlib/blob/develop/lib/node_modules/%40stdlib/_tools/scripts/publish_packages.js)) into discrete, standalone tooling packages in the [_tools](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/_tools) namespac, which can be independently tested and maintained. 

In addition, while we still will lean on GitHub Actions for the publishing flow, this project will ensure that our publishing pipeline will not be tightly coupled with it anymore. 

Goals of the refactoring will also include to improve logging and observability, enable rigorous testing and checkpointing, and the ability to trigger all steps locally via a CLI tool.


### Expected outcomes

-   Having the publishing pipeline fully composed into modular packages.
-   Each module having its own suite of unit tests.
-   Integration tests and end-to-end tests for the entire workflow.
-   Enhanced observability and diagnostic tools integrated into the publishing process.
-   A reduction in the complexity of the existing scripts by making GitHub Actions interactions explicit and manageable.
-   Better error recovery, collection of statistics, and a more maintainable architecture.

### Status

No effort has been undertaken to start modularizing the publishing pipeline architecture, but there is agreement among the TSC that this is a desirable goal.

### Involved software

 GitHub Actions, Bash.

### Technology

JavaScript, nodejs

### Other technology

None.

### Difficulty

3

### Difficulty justification

The project involves a large refactor of an existing, complex system.

-    Decoupling the interwoven dependencies of the current monolithic script requires careful planning and modular design.
-    Handling platform variability between local development and GitHub Actions orchestration, including differences between Linux and MacOS, adds complexity.
-  Introducing enhanced testing and observability requires integrating new tools and extending the current functionality.


### Prerequisite knowledge

-   Proficiency in JavaScript and Node.js development as well as Bash scripting.
-   Familiarity with GitHub Actions and CI/CD pipeline design.
-   Understanding of modular design principles and software refactoring techniques.


### Project length

350

### Checklist

- [x] I have read and understood the [Code of Conduct](https://github.com/stdlib-js/stdlib/blob/develop/CODE_OF_CONDUCT.md).
- [x] I have read and understood the application materials found in this repository.
- [x] The issue name begins with `[Idea]:` and succinctly describes your idea.
- [x] I understand that, in order to apply to be a GSoC contributor, I must submit my final application to <https://summerofcode.withgoogle.com/> **before** the submission deadline.