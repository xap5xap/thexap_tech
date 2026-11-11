# X thread

## Post 1

```text
1/7 The connection drops after someone presses Save. Keep their draft visible and say "Couldn't confirm the save." Give them a way to check the same operation when the API supports it.
```

## Post 2

```text
2/7 Track the draft, submitted operation and latest verified read separately. People can keep editing a draft while the result of an earlier submission is still being checked.
```

## Post 3

```text
3/7 In a fictional tracker, the editor confirms a saved title at version 8 while the board still shows 7. The board can label its last verified read and update independently.
```

Media: images/save-states.png
ALT: Illustrative editor shows a pending title, an unconfirmed save with a status check, and a confirmed title while the board is still at version 7

## Post 4

```text
4/7 Check the scope and version before applying a response. If version 7 arrives after version 8 for the same record, keep 8. A matching save receipt can still settle its operation without replacing newer data.
```

## Post 5

```text
5/7 Show "No requests yet" after a valid empty read. If the read fails, show "Couldn't load requests" or label the usable snapshot with its last verified time. Each state needs its own next action.
```

## Post 6

```text
6/7 Keep status text beside the form and expose meaningful changes to assistive technology. Test the recovery action with the keyboard, check visible focus, and make sure the copy wraps on a narrow screen.
```

## Post 7

```text
7/7 Test one edit with a lost response and an older read arriving last. Check the draft, the saved version and what each view can confirm.

https://www.thexap.com/blog/frontend-state-and-accessibility
```
