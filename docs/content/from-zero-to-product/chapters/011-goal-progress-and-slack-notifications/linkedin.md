A quiet Slack channel leaves several possibilities open: the AI task is progressing, waiting for a decision, unable to post, or no longer running.

Define the events before the run, then keep them separate from send attempts.

In a fictional audit, four confirmed messages cover only three of five expected events. A progress update is missing. An action-needed send timed out. The resumed message arrived late, and completion was posted twice.

Counting messages would hide the problem.

Keep an event time and deadline, the exact sanitized body, each attempt, and the actual posting receipt. After an ambiguous send, read back the intended route before retrying. Preserve missing, late and duplicate results even if the work finishes.

A Slack posting receipt also does not prove a phone displayed an alert. Notification settings and recipient observation are separate checks.

For a short task, a small event table may be enough. Longer work benefits from a maximum active-silence interval and a final comparison with actual work history. Neither a written procedure nor an offline checker can notify you from a stopped executor.

The guide includes reusable messages and a synthetic audit you can review without sending anything.

---
IMAGES-TO-ATTACH:
- images/event-audit.png
  ALT: A fictional timeline shows missing, unknown, late and duplicate notifications beside a confirmed start
- images/hero.png
  ALT: A brass bell sits beside a glass-covered clockwork machine, with a loose cord between them
LINK-TO-PASTE: [LINK-TO-BLOG]
