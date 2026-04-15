# Sprint 3 – Social Matchmaking Prototype

## Sprint Goal
Complete the Social Matchmaking Prototype by finalizing features, improving architecture, expanding test coverage, validating CI/CD, and preparing the system as a complete software solution ready for customer review.

---

## Sprint Forecast

Sprint 2 Completed: 28 story points  
Sprint 3 Forecast: 28 story points  

### Rationale
The Sprint 3 forecast is based on the Yesterday’s Weather pattern using Sprint 2 velocity. Since the team completed 28 story points in Sprint 2, the same value was used for Sprint 3 to maintain a realistic and achievable workload.

---

## Sprint Backlog

Stories and tasks were defined and tracked using the Kanban board and aligned with Sprint 3 goals.

---

## Kanban Board

The Kanban board shows all Sprint 3 stories and tasks, including their progress across backlog, in-progress, and completed stages.

![Sprint 3 Kanban Board](./artifacts/sprint3_kanban.png)

---

## Burndown Chart

The burndown chart tracks daily progress from March 30 to April 19.

- X-axis: Dates (daily intervals)  
- Y-axis: Story points remaining  
- Includes both **actual progress** and **ideal burndown line**

![Sprint 3 Burndown Chart](./artifacts/burndown_sprint3.png)

---

## API Testing (Postman)

The deployed API was tested using Postman against the live Render environment to verify endpoint functionality, validation, and error handling.

### Root Endpoint
![Root](./artifacts/postman_render_root_sprint3.png)

### Get All Players
![Players](./artifacts/postman_render_get_players_sprint3.png)

### Get Player by ID
![Player](./artifacts/postman_render_get_player_by_id_sprint3.png)

### Player Not Found (Error Handling)
![Not Found](./artifacts/postman_render_get_player_not_found_sprint3.png)

### Matchmaking (Success)
![Match Success](./artifacts/postman_render_match_success_sprint3.png)

### Matchmaking (Validation Error)
![Match Error](./artifacts/postman_render_match_error_sprint3.png)

---

## Daily Scrums

Daily scrum notes were recorded and include:
- Work completed
- Planned work
- Impediments and resolutions

(See `scrum-notes` folder for detailed logs)

---

## Pairing / Mobbing Evidence

Team collaboration was conducted through pairing and group debugging sessions.

(Evidence located in `meeting-evidence` folder)

---

## TDD / BDD

The system follows a test-first development approach:

- 30+ unit tests implemented  
- Integration tests for endpoints  
- BDD-style test included  
- All tests passing  

![Test Results](./artifacts/tests_passing_sprint3.png)

---

## Continuous Integration

GitHub Actions automatically builds and tests the application on each push to main.

![CI Pipeline](./artifacts/ci_pipeline_sprint3.png)

---

## Continuous Deployment

The application is deployed to a live environment using Render and verified through API testing.

![Live API Deployment](./artifacts/cd_live_api_sprint3.png)

---

## Sprint Review

The Sprint Review demonstrated:
- Completed features
- Working API endpoints
- Test coverage
- Deployment readiness

(Evidence located in `meeting-evidence` folder)

---

## Complete Software Solution

The final system includes:

- Matchmaking API  
- Player profile system  
- Input validation and error handling  
- Automated testing suite  
- CI/CD pipeline  
- Live deployment  

---

## Team Video Presentation

The Sprint 3 presentation covers:
- Sprint overview  
- Architecture improvements  
- Testing strategy  
- CI/CD pipeline  
- Live demo  

📌 YouTube Link: (add your link here)