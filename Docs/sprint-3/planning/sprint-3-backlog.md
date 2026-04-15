## Sprint 3 Backlog

### Story 1 – Refactor API Structure (6 pts)
- Separate routes, controllers, and services
- Add centralized error handling middleware
- Improve maintainability and scalability
- Test all endpoints after refactor

### Story 2 – Align Player Data Model (5 pts)
- Add numeric `skill` attribute
- Add `attitude` attribute
- Expand player dataset
- Verify compatibility logic works with updated data

### Story 3 – Add GET /players/:id Endpoint (4 pts)
- Implement service function to retrieve player by ID
- Create controller logic
- Add route `/players/:id`
- Return 404 for missing players
- Test endpoint using curl and integration tests

### Story 4 – Improve Match Validation (3 pts)
- Validate `playerA` and `playerB` existence
- Validate numeric `skill`
- Validate string `attitude`
- Return proper 400 errors for invalid input
- Test multiple invalid scenarios

### Story 5 – Expand Automated Testing (6 pts)
- Add at least 10 new unit tests
- Add integration tests for `/players` and `/match`
- Add 1 BDD-style test
- Ensure total test count reaches 30+
- Verify all tests pass using Jest

### Story 6 – CI/CD and Deployment Verification (4 pts)
- Verify GitHub Actions CI pipeline runs on push
- Ensure tests execute automatically in CI
- Verify Render deployment is working
- Test all live API endpoints
- Document CI/CD evidence in repository

---

Total: 28 story points