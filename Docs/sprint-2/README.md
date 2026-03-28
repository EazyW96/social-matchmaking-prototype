# Sprint 2 – Social Matchmaking Prototype

## 📌 Sprint Goal
Enhance the Social Matchmaking API by:
- Implementing CI/CD pipeline
- Deploying to a production-like environment (Render)
- Expanding test coverage (TDD + BDD)
- Improving matchmaking logic and API usability

---

## 📊 Sprint Forecast (Yesterday’s Weather)

- **Sprint Duration:** Mar 9 – Mar 28  
- **Previous Velocity (Sprint 1):** 28 story points  
- **Sprint 2 Forecast:** 28 story points  

### Rationale
We used the *Yesterday’s Weather* technique by basing our Sprint 2 forecast on the total story points completed in Sprint 1. Since the team successfully completed ~28 points previously, we committed to a similar workload for Sprint 2.

---

## 🗂️ Sprint Backlog (Stories → Tasks)

### Story 1: Improve Matchmaking Logic (8 pts)
- Implement `evaluateMatchStability`
- Add skill comparison logic
- Add attitude compatibility logic
- Write unit tests

### Story 2: Build REST API (6 pts)
- GET `/players`
- POST `/match`
- Input validation
- JSON responses

### Story 3: Test Coverage Expansion (6 pts)
- Add 10+ unit tests
- Add BDD-style test cases
- Validate edge cases

### Story 4: CI Pipeline Setup (4 pts)
- GitHub Actions workflow
- Run tests automatically on push

### Story 5: CD Deployment (4 pts)
- Deploy to Render
- Verify production endpoints

---

## 📌 Kanban Board

Trello Board:
👉 https://trello.com/b/kbPXcjh0/social-matchmaking-sprint-1

(Sprint backlog, tasks, and progress tracked here)

---

## 📉 Sprint Burndown Chart

![Sprint 2 Burndown](./artifacts/burndown_sprint2.png)

### Description
- X-axis: Dates (Mar 9 – Mar 28)
- Y-axis: Story Points Remaining
- Blue line: Ideal progress
- Red line: Actual progress

The team followed a steady trajectory and completed all planned work by the end of the sprint.

---

## 🧪 Test-Driven Development (TDD)

We followed a test-first approach:

- Wrote failing test cases before implementation
- Implemented logic to pass tests
- Refactored code after passing

### Evidence

Example failing test:

![TDD Evidence](./artifacts/ci-pipeline-sprint2.png)

---

## 🧪 Test Coverage

- ✅ 20+ unit tests  
- ✅ BDD-style tests included  
- ✅ All production tests pass  

Example:
```js
expect(result.compatible).toBe(true);