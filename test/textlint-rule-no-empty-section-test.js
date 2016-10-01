// LICENSE : MIT
"use strict";
const TextLintTester = require("textlint-tester");
const tester = new TextLintTester();
// rule
const rule = require("../src/textlint-rule-no-empty-section");
// ruleName, rule, { valid, invalid }
tester.run("textlint-rule-no-empty-section", rule, {
    valid: [
        "text",
        `text

# Header

text`,
        `# Header1

text.

# Header2

text.
`
    ],
    invalid: [
        {
            text: `# Header1`,
            errors: [
                {
                    message: "Found empty section: `# Header1`",
                    line: 1,
                    column: 1
                }
            ]
        },
        // multiple match in multiple lines
        {
            text: `# Header1
text.

## Header2`,
            errors: [
                {
                    message: "Found empty section: `## Header2`",
                    line: 4,
                    column: 1
                }
            ]
        }
    ]
});