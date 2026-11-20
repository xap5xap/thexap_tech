# CI coverage and environment worksheet

Use this worksheet to predict which checks a change needs and record the evidence you find. Bring one diff, the workflow or test list, and the candidate identifier if you already have one. Record credential names or references in a private copy. Keep credential values and real endpoints out of the worksheet.

## 1. Map the change to a check

Write one row per affected behavior. Name the job or test you expect to see and the prerequisite it depends on. After the run, record the observed disposition and next action. Add a separate row when a shared dependency changes the checks for more than one area.

| Change and affected behavior | Expected check and prerequisite | Evidence, disposition and next action |
| --- | --- | --- |
| Change 1 | | |
| Change 2 | | |
| Shared or unknown paths | | |

Use these dispositions in the last column.

- **Passed.** Record the check result and revision or artifact it covered.
- **Skipped.** Record the job condition and why the check can be omitted. If it still applies, rerun the required check.
- **Filtered.** Record the workflow trigger or path rule. Find the intended alternate check or hold the decision.
- **Missing.** Investigate the expected check, trigger and candidate. Hold if required evidence is missing.
- **Failed or canceled.** Record the failing prerequisite, failed assertion or cancellation. List downstream checks that still need evidence.

For one small service, start with three change rows and a short note about the biggest environment difference. Skip the extra inventory rows if they would repeat the same verified inputs and assumptions. Add them when configuration or hosted behavior affects a decision.

## 2. Inventory environments

For every environment that matters to the change, record the settings needed to reproduce the check and the limits of what it can observe. Leave an unused environment out and record why.

| Environment | Runtime, install and candidate ID | Data, configuration and credential reference | What to observe and what remains outside the check |
| --- | --- | --- | --- |
| Local | | | |
| Preview | | | |
| Release | | | |

## 3. Practice with a fictional request tracker

These are proposed checks and hypothetical outcomes for practice. The tracker and runs are illustrative. No application or hosted environment was exercised to fill in this example.

| Change and affected behavior | Expected check and prerequisite | Illustrative disposition and next action |
| --- | --- | --- |
| Help copy changes, with no runtime inputs changed | Render the help page and check the edited link. Use the docs build and a fixture link target. | App workflow filtered by a documented rule. Keep the docs result with the revision. |
| API status save changes | Save through the API and read back the record. Use a disposable database and seeded request. | Missing. Formatting passed but the required service result is absent. Check the trigger and run the service test before deciding. |
| Filter controls change | Open the route, pick a filter and reload. Use a browser and fixtures with open and closed requests. | The browser step was skipped after preview setup failed. Fix setup and repeat the browser check against the same candidate. |

For the API change, the local environment uses a pinned runtime and disposable data. Record the observed API response and stored status. Preview uses its own test configuration and hosted route. Record whether the browser receives the updated value there. At release, identify the deployed artifact and run the authorized smoke check using a designated test record. Record any integration or provider your inputs left out.

## Completion check

Pick one required row. A second person should be able to find the result, identify the candidate, and explain what a skipped or missing check means for the decision. If they cannot, add the evidence reference or record the decision as held.
