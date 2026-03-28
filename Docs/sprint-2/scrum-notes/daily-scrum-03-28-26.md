## 🗓 Daily Scrum Evidence

The team conducted daily scrum meetings to track progress and identify blockers during Sprint 2.

### Scrum Meeting Example (March 20)

#### 👤 Team

**What I did in the last 24 hours:**
- Fixed Render deployment issue by updating server to use `process.env.PORT`
- Successfully deployed API to production (Render)
- Tested API endpoints using curl (`/`, `/players`, `/match`)
- Added burndown chart and artifacts to repository

**What I will do in the next 24 hours:**
- Finalize README with all rubric artifacts
- Add CI/CD screenshots and verify pipeline stability
- Expand test coverage and validate matchmaking logic

**Impediments:**
- Initial deployment failed due to hardcoded port (3000)

**Impediment Removal Plan:**
- Updated server configuration to use environment variable (`process.env.PORT`)
- Redeployed application successfully

---

#### 👤 Team Collaboration Notes

- Team collaborated via GitHub commits and code reviews
- CI/CD setup required coordination between development and deployment steps
- Tasks were tracked and updated using Trello Kanban board
