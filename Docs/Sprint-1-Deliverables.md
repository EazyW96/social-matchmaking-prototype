# Sprint 1 Deliverables — Social Matchmaking Web Service
**Sprint:** 1  
**Document:** Deliverables / Sprint Report  
**Repository:** `EazyW96/social-matchmaking-prototype`  
**Date:** 2026-03-08

---

## Table of Contents
1. [Abstract](#abstract)
2. [Introduction](#introduction)
3. [Project Resources](#project-resources)
4. [Sprint Planning](#sprint-planning)
   - [Sprint Goal](#sprint-goal)
   - [Sprint Forecast](#sprint-forecast)
5. [Sprint Backlog & Task Decomposition](#sprint-backlog--task-decomposition)
6. [Data Model: PlayerProfile](#data-model-playerprofile)
   - [Attributes](#attributes)
   - [Validation](#validation)
7. [Core Matchmaking Logic](#core-matchmaking-logic)
   - [Criteria](#criteria)
   - [Example Result](#example-result)
8. [API Design & Implementation](#api-design--implementation)
   - [Design Methodology](#design-methodology)
   - [System Components](#system-components)
   - [System Architecture](#system-architecture)
   - [Endpoints](#endpoints)
   - [Assumptions & Constraints](#assumptions--constraints)
9. [Testing Strategy](#testing-strategy)
10. [Agile Artifacts](#agile-artifacts)
    - [Kanban Board](#kanban-board)
    - [Sprint Burndown Chart](#sprint-burndown-chart)
    - [Daily Scrum Evidence](#daily-scrum-evidence)
    - [Pair Programming Evidence](#pair-programming-evidence)
11. [Sprint Review](#sprint-review)
12. [Sprint Retrospective](#sprint-retrospective)
13. [Definition of Done](#definition-of-done)
14. [Expected Product Increment](#expected-product-increment)
15. [Future Work](#future-work)
16. [Conclusion](#conclusion)

---

## Abstract

Online gaming has grown into a major global industry, with millions of players participating in multiplayer environments every day. Most matchmaking systems rely on measurable statistics such as skill ratings, rankings, or player performance to group players together. While this approach helps maintain competitive balance, it often ignores social and behavioral factors that significantly influence the player experience.

In many multiplayer games, players interact only through anonymous usernames and are matched solely based on skill metrics. This can lead to negative communication, toxic behavior, and poor teamwork. As a result, technically balanced matches may still produce a poor social experience for participants.

The **Social Matchmaking Web Service** prototype aims to address this limitation by incorporating both skill-based metrics and behavioral attributes when evaluating player compatibility. By analyzing player characteristics such as skill level and attitude, the system determines whether two players are likely to form a stable and positive match.

Sprint 1 focuses on building the foundational components of this system, including the player profile data model, the matchmaking evaluation logic, and a REST API prototype capable of processing compatibility requests.

---

## Introduction

Multiplayer games rely heavily on matchmaking systems to group players together in competitive or cooperative environments. These systems are typically designed to match players with similar skill levels in order to maintain fairness during gameplay. However, traditional matchmaking approaches often overlook behavioral and social factors that influence how players interact during a match.

Players with similar skill levels may still have very different attitudes, communication styles, or levels of sportsmanship. When these differences are not considered, matches can result in toxic behavior, poor teamwork, and negative player experiences.

The **Social Matchmaking Web Service** explores how matchmaking can be improved by evaluating both gameplay metrics and behavioral indicators. The system analyzes player attributes such as skill level and attitude classification to determine whether two players are compatible.

Sprint 1 focuses on developing a working prototype of this system. The sprint establishes the core components required for the service, including the player profile data model, the matchmaking evaluation algorithm, and a REST API that allows client applications to request compatibility evaluations.

---

## Project Resources

| Resource | Description | Link |
|---|---|---|
| GitHub Repository | Source code and project documentation | https://github.com/EazyW96/social-matchmaking-prototype |
| Trello Board | Sprint task management and backlog tracking | https://trello.com/b/kbPXcjh0/social-matchmaking-ges-sprint-1 |
| Microsoft Teams | Team communication and collaboration | Internal team workspace |

---

## Sprint Planning

### Sprint Goal
Deliver a working prototype of the **Social Matchmaking Web Service** capable of evaluating compatibility between two players based on both skill level and behavioral attributes.

### Sprint Forecast
**Forecast:** 28 Story Points

| Story | Points |
|---|---:|
| Infrastructure Setup | 5 |
| Player Profile Data Model | 8 |
| Matchmaking Logic | 8 |
| API Endpoints | 5 |
| Documentation | 2 |
| **Total** | **28** |

**Rationale**  
The team estimated that **28 story points** could be completed during the sprint based on the scope of foundational work required. The sprint focused on establishing the Node.js development environment, defining the player profile data model, and implementing the core matchmaking API. Completing these tasks ensures that a working prototype of the matchmaking service can be demonstrated by **March 8, 2026**.

---

## Sprint Backlog & Task Decomposition

### Infrastructure Setup
1. Initialize Node.js project  
2. Install Express framework  
3. Install Jest testing framework  
4. Configure project structure  

### Player Profile Model
1. Define PlayerProfile attributes  
2. Implement PlayerProfile validation  

### Matchmaking Logic
1. Skill difference evaluation  
2. Attitude compatibility check  

### API Development
1. Express server setup  
2. API endpoint creation  
3. Matchmaking logic integration  

---

## Data Model: PlayerProfile

The **PlayerProfile** model defines the structure used to store player information in the matchmaking system. Each player profile contains attributes describing the player's identity, skill level, behavior, and gameplay preferences.

### Attributes

| Attribute | Description |
|---|---|
| `id` | Unique identifier for the player |
| `username` | Player display name |
| `age` | Player age |
| `skillLevel` | Player skill classification |
| `behaviorScore` | Numeric score representing player behavior (1–10) |
| `preferredGameModes` | List of preferred game modes |
| `availability` | Player availability schedule |
| `region` | Geographic region |
| `platform` | Gaming platform |
| `bio` | Player description |

### Validation

A validation function verifies that player profiles meet required constraints before being used by the matchmaking system.

**Validation Rules**  
- The player has a valid username  
- The player is at least **13 years old**  
- The behavior score is within the range **1–10**  
- Preferred game modes are provided as an array  

Profiles that fail validation are rejected to ensure the system operates on **consistent and reliable player data**.

---

## Core Matchmaking Logic

The matchmaking system evaluates compatibility using the `evaluateMatchStability` function. This function compares player attributes to determine whether a match is stable.

### Criteria

**1) Skill Difference**  
- The system calculates the difference between player skill levels.  
- Smaller differences indicate more balanced gameplay.

**2) Attitude Compatibility**  
- The system evaluates whether player attitudes conflict.  
- Matches involving volatile behavior are considered unstable.

### Example Result

```json
{
  "isStable": false,
  "reason": "Attitude Conflict"
}
```

---

## API Design & Implementation

### Design Methodology
1. Identify service capabilities  
2. Define API resources and endpoints  
3. Model the data structures used by the API  
4. Implement REST endpoints using Express  
5. Validate system behavior through automated testing  

---

### System Components

The Social Matchmaking Web Service is composed of several core components that work together to evaluate player compatibility.

| Component | Description |
|---|---|
| Player Profile Model | Defines the structure used to store player information |
| Validation Module | Ensures player profiles meet required constraints |
| Matchmaking Logic | Evaluates compatibility between players |
| REST API | Provides endpoints for accessing matchmaking services |
| Test Suite | Verifies system behavior through automated tests |

These components form the core architecture of the prototype developed during Sprint 1.

---

### System Architecture

```text
Client Application
        |
        v
   REST API (Express)
        |
        v
 Matchmaking Logic
        |
        v
 Player Profile Data Model
```

The client application communicates with the REST API, which processes requests and forwards player data to the matchmaking logic module.

---

### Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/players` | GET | Returns sample player profiles |
| `/match` | POST | Evaluates compatibility between two players |

#### Example API Request (POST `/match`)

**Request Body**
```json
{
  "player1": {
    "id": "p1",
    "username": "Pro_Jacob",
    "age": 20,
    "skillLevel": 50,
    "behaviorScore": 9,
    "preferredGameModes": ["Ranked"],
    "availability": ["Weeknights"],
    "region": "NA",
    "platform": "PC",
    "bio": "Team-focused player."
  },
  "player2": {
    "id": "p2",
    "username": "Toxic_User",
    "age": 20,
    "skillLevel": 50,
    "behaviorScore": 2,
    "preferredGameModes": ["Ranked"],
    "availability": ["Weeknights"],
    "region": "NA",
    "platform": "PC",
    "bio": "Plays to win."
  }
}
```

#### Example API Response
```json
{
  "isStable": false,
  "reason": "Attitude Conflict"
}
```

**REST API Prototype Summary**  
The REST API prototype was implemented using the Express framework in Node.js. The server processes HTTP requests, parses JSON data from incoming requests, and forwards player data to the matchmaking logic module. The matchmaking algorithm evaluates compatibility and returns a structured JSON response describing the stability of the match.

---

### Assumptions & Constraints

- **Prototype scope:** Sprint 1 is a working prototype; player profiles may be stored in-memory or provided directly in the request (no persistent database required yet).
- **Behavior metric:** `behaviorScore` is assumed to be a simple numeric input in the range **1–10** (higher = more positive behavior).
- **Skill metric:** `skillLevel` is treated as a numeric value where closer values indicate fairer matches.
- **Security:** Authentication/authorization is not required in Sprint 1 (future sprint enhancement).

---

## Testing Strategy

Automated testing was implemented using the Jest testing framework.

**Test Suite Includes**
- 1 Behavior-Driven Development (BDD) test  
- 10 unit tests validating matchmaking logic and profile validation  

These tests verify that the matchmaking algorithm correctly evaluates compatibility and handles edge cases such as attitude conflicts or skill mismatches.

**Run tests locally:**
```bash
npm test
```

---

## Agile Artifacts

### Kanban Board
Sprint task management was tracked using Trello:  
https://trello.com/b/kbPXcjh0/social-matchmaking-ges-sprint-1

### Sprint Burndown Chart
Include a chart showing story points remaining per day.

<img width="475" height="281" alt="burndown_sprint1" src="https://github.com/user-attachments/assets/f5b19018-7f16-4d54-a775-e907fd7231f0" />

### Daily Scrum Evidence

| Member | Yesterday | Today | Impediments |
|---|---|---|---|
| Elliotte | Player model implementation | Validation logic | None |
| Gabriel | Express server setup | API routes | None |
| Steve | Matchmaking algorithm | Unit tests | None |

### Pair Programming Evidence
The development team collaborated using Microsoft Teams screen-sharing sessions to review and implement code together. Evidence of pair programming is available through screenshots and shared commit history demonstrating collaborative development.

---

## Sprint Review

During the Sprint Review, the team demonstrated the working matchmaking API prototype. The system successfully evaluated compatibility between two player profiles using the `/match` endpoint and returned a structured JSON response describing match stability. The team verified that the REST API, matchmaking logic, and player data model were functioning as expected.

---

## Sprint Retrospective

| Category | Notes |
|---|---|
| What went well | Effective collaboration and clear task division |
| What could improve | Begin testing earlier in the sprint |
| Action items | Improve task breakdown and testing workflow |

---

## Definition of Done

A task is considered complete when:
- Code is committed to GitHub  
- Automated tests pass successfully  
- Functionality has been verified  
- Documentation has been updated  
- The task is marked complete in the Trello board  

---

## Expected Product Increment

Sprint 1 produced the following deliverables:
- Node.js project infrastructure  
- Player profile data model  
- Matchmaking logic module  
- REST API prototype  
- Automated test suite  
- Scrum documentation and artifacts  

---

## Future Work

Future sprints will expand the Social Matchmaking Web Service with additional capabilities such as:

- Advanced matchmaking algorithms using additional player attributes  
- Player preference weighting for more personalized matches  
- Persistent player storage using a database  
- Authentication and user account management  
- Improved matchmaking criteria including region and playstyle compatibility  

These improvements will allow the system to evolve from a prototype into a more robust matchmaking platform.

---

## Conclusion

Sprint 1 successfully established the foundational components of the Social Matchmaking Web Service. The team implemented the Node.js development environment, designed the player profile data model, developed the matchmaking evaluation logic, and created REST API endpoints capable of evaluating player compatibility.

The sprint also demonstrated effective Scrum practices including sprint planning, daily scrums, backlog management, and progress tracking using a burndown chart. These achievements resulted in a functional prototype capable of evaluating compatibility between players based on both skill and behavioral attributes.

This prototype provides a strong technical foundation for future sprints, where additional matchmaking features and system improvements will be implemented.