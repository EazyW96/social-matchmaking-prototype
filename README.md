## Sprint 1 Planning

Kanban Board: [Link to our Trello](https://trello.com/b/kbPXcjh0/social-matchmaking-sprint-1)

**Forecast:** 28 Story Points.

**Rationale:** Our team is focusing on the foundational Node.js environment, the core Web Service API connection, and the user behavior data structures. This ensures we have a stable, verifiable prototype by the March 8, 2026 deadline.

---

## 📈 Sprint 1 Burndown Chart

<p align="center">
<img src="artifacts/burndown_sprint1.png" width="700">
</p>

---

## 🛠️ Implementation Progress

### Test-First Development (TDD) Evidence

To satisfy the rubric's requirement for building the product test-first, we established a failing behavioral test case (Red Phase) before writing any implementation logic.

### 🧪 Test-First Evidence

<p align="center">
<img src="Docs/failing_Tdd.png" width="900">
</p>

*Verification of failing behavioral test case before implementation.*

---

## Task Decomposition

We have decomposed our Sprint 1 stories into specific technical tasks to ensure clear accountability.

**External API**

- Research Steam / Riot documentation  
- Register API keys  
- Create HTTP request module  

**User Profiles**

- Design JSON schemas for attitude and play-style  
- Build functions to save and retrieve user behavior data  

---

## 👥 Sprint 1 Meeting Evidence

Our team conducted a Sprint 1 coordination meeting to review progress and confirm the sprint deliverables.

**Meeting Date:** March 7, 2026  
**Platform:** Microsoft Teams  

### Participants

- Elliotte Wideman  
- Gabriel Jean-Louis  
- Steve Seukap Dieuyou  

### Meeting Evidence

<p align="center">
<img src="Docs/Sprint1_meeting.PNG" width="450">
</p>

This meeting demonstrates **team collaboration and coordination** during the sprint.

---

# Daily Scrum Evidence

Daily Scrum discussions addressed three key questions:

### What did you complete in the last 24 hours?

- Elliotte Wideman implemented the Express server and routing.
- Gabriel Jean-Louis researched external API documentation.
- Steve Dieuyou worked on the player profile schema.

### What will you complete in the next 24 hours?

- Implement the `/players` endpoint
- Integrate matchmaking service logic
- Add unit tests

### Impediments

- Initial uncertainty regarding API structure
- Resolved through team discussion and reviewing Express documentation.

---

# Working Software Increment

The Sprint 1 prototype includes a **working Node.js REST API**.

The API provides endpoints that return player data and enable matchmaking logic.

---

# API Prototype Demonstration

## API Home Endpoint

Endpoint:


Example Response:

```json
{
  "message": "Social Matchmaking API",
  "description": "Sprint 1 prototype matchmaking service",
  "endpoints": {
    "getPlayers": "GET /players",
    "createMatch": "POST /match"
  }
}

## GET /players

[
  {
    "id": 1,
    "username": "AcePlayer",
    "age": 22,
    "skillLevel": "Intermediate",
    "behaviorScore": 8,
    "preferredGameModes": ["Ranked","Duo"],
    "availability": "Evenings",
    "region": "NA-East",
    "platform": "PC",
    "bio": "Competitive team player."
  }
]

---

## API Demonstration

### POST /match

This endpoint evaluates the compatibility between two players based on skill level and attitude.

Endpoint:

```
POST http://localhost:3000/match
```

Example Request Body:

```json
{
  "playerA": {
    "name": "AcePlayer",
    "skill": 50,
    "attitude": "Positive"
  },
  "playerB": {
    "name": "ProJacob",
    "skill": 48,
    "attitude": "Positive"
  }
}
```

Example Response:

```json
{
  "compatible": true,
  "skillDifference": 2,
  "attitudeMatch": true,
  "score": 2
}
```

This demonstrates the matchmaking logic implemented in `src/services/matchmaker.js`.
