# Sprint 1 Deliverables

## Abstract 

  Online gaming has become a large global industry, with millions of players participating in multiplayer games every day. Most matchmaking systems group players using measurable statistics such as skill ratings, rankings, or game performance. While this helps balance competition, these systems often ignore social and behavioral factors that affect the overall player experience.

  In many games, players are matched only by skill and interact as anonymous usernames. This can lead to negative communication, toxic behavior, and a lower quality experience. As a result, technically balanced matches may still create poor social interactions between players.

  The Social Matchmaking Web Service prototype addresses this issue by considering both skill and behavioral attributes when evaluating player compatibility. By analyzing factors such as skill level and player attitude, the system determines whether two players are likely to form a stable and positive match. Sprint 1 focuses on building the core components of this system, including the player data model, the matchmaking evaluation logic, and a REST API prototype that processes compatibility requests.

## Introduction

  Multiplayer games rely on matchmaking systems to group players together in competitive or cooperative environments. These systems usually focus on matching players with similar skill levels to maintain fair gameplay. However, traditional matchmaking systems often ignore behavioral and social factors that influence how players interact during a match.

  Players with similar skill levels may still have different attitudes, communication styles, or levels of sportsmanship. When these factors are not considered, matches may result in toxic behavior, poor teamwork, and negative player experiences.

  The Social Matchmaking Web Service explores how matchmaking can be improved by evaluating both gameplay metrics and behavioral indicators. The system analyzes player attributes such as skill level and attitude classification to determine whether two players are compatible.

  Sprint 1 focuses on developing a working prototype of this system. The sprint establishes the core components required for the service, including the player profile data model, the matchmaking evaluation algorithm, and a REST API that allows client applications to request compatibility evaluations.

## Project Resources

| Resource | Description | Link |
|---|---|---|
| GitHub Repository | Source code and project documentation | https://github.com/EazyW96/social-matchmaking-prototype |
| Trello Board | Sprint task management and backlog tracking | https://trello.com/b/kbPXcjh0/social-matchmaking-ges-sprint-1 |
| Microsoft Teams | Team communication and collaboration | Internal team workspace |

## Sprint Planning
### Sprint Goal
Deliver a working prototype of the Social Matchmaking Web Service capable of evaluating compatibility between two players based on skill level and behavioral attributes.

### Sprint Forecast
**Forecast:** 28 Story Points

| Story                     | Points |
| ------------------------- | ------ |
| Infrastructure Setup      | 5      |
| Player Profile Data Model | 8      |
| Matchmaking Logic         | 8      |
| API Endpoints             | 5      |
| Documentation             | 2      |
| **Total**                 | **28** |

**Rationale:** The team estimated that **28 story points** could be completed during the sprint based on the scope of foundational work required. The sprint focused on setting up the Node.js infrastructure, defining the player profile data model, and implementing the core matchmaking API. Completing these tasks ensures that a working prototype of the matchmaking service can be demonstrated by the March 8, 2026 deadline.

### Sprint Backlog and Task Decomposition

#### Infrastructure Setup
1. Initialize Node.js project
2. Install Express
3. Install Jest
4. Configure project structure

#### Player Profile Model
1. Player Profile Attribution
2. Player Profile Validation

#### Matchmaking Logic
1. Skill Difference Evaluation
2. Attitutude Compability Check

#### API Development
1. Express Server Setup
2. API Endpoint Creation
3. Matchmaking Logic Integration

## API Design Methodology
1. Identify service capabilities
2. Define API resources and endpoints
3. Model the data structures used by the API
4. Implement REST endpoints using Express
5. Validate system behavior through automated testing

#### Node.js Infrastructure
Setting up the development environment:
- Initialize Node.js project
- Install Express
- Install Jest
- Configure project structure

#### Player Profile Model
The **PlayerProfile Model** defines the structure used to store player information in the matchmaking system. Each player profile contains attributes describing the player's identity, skill level, behavioral characteristics, and gameplay preferences. These attributes are used by the matchmaking algorithm to evaluate compatibility between players.

#### Player Profile Attributes
| Attribute          | Description                                                 |
| ------------------ | ----------------------------------------------------------- |
| id                 | Unique identifier for the player                            |
| username           | Player’s display name                                       |
| age                | Player’s age                                                |
| skillLevel         | Player’s skill classification                               |
| behaviorScore      | Numeric score representing player behavior or sportsmanship |
| preferredGameModes | List of game modes the player prefers                       |
| availability       | Time periods when the player is available to play           |
| region             | Geographic region of the player                             |
| platform           | Gaming platform used by the player                          |
| bio                | Short description of the player                             |
                                                                                                                            
This allows the system to evaluate player compatibility.

#### Player Profile Validation
The system includes a validation function that verifies whether player data meets the required constraints before it is used by the matchmaking system.

##### Validation Rules
The validation logic checks that:
- The player has a valid username
- The player is at least 13 years old
- The behavior score falls within an acceptable range (1-10)
- Preferred game modes are provided as an array

If any of these conditions are not met, the player profile is considered invalid and cannot be processed by the matchmaking system. 

This validation step ensures that the matchmaking service operates on **consistent and reliable player data.**

#### Matchmaking Logic
The matchmaking system evaluates compatibility between two players using the **evaluateMatchStability** function. This function compares player attributes and determines whether the match is likely to be stable.

#### Matchmaking Criteria

The algorithm evaluates two main factors:
**1. Skill Difference**
- The system calculates the difference between player skill levels.
- Smaller differences indicate more balanced gameplay.
**2. Attitude Compatibility**
- The system checks whether player attitudes conflict.
- Matches involving volatile behavior are considered unstable.
  
```
{
  "isStable": false,
  "reason": "Attitude Conflict"
}
```

## Sprint Backlog and Task Decomposition
### Infrastructure Setup
- Initialize Node.js project
- Install Express
- Install Jest
- Configure folder structure

### Player Data Model
- Define attributes
- Create sample dataset
- Implement validation

### Matchmaking API
Implementing the REST service that processes matchmaking requests.

| Endpoint   | Method | Purpose                 |
| ---------- | ------ | ----------------------- |
| `/players` | GET    | Returns player profiles |
| `/match`   | POST   | Evaluates compatibility |


## API Development
- Implement Express server
- Create endpoints
- Connect matchmaking logic

### System Architecture

```
Client Application
        │
        ▼
   REST API (Express)
        │
        ▼
 Matchmaking Logic
        │
        ▼
 Player Profile Data Model
 ```

## Core Matchmaking Logic

Rules:
- Compare skill difference
- Detect attitude conflicts
- Determine stable match

```
  {
  "isStable": false,
  "reason": "Attitude Conflict"
  }
```

## API Endpoints

| Endpoint | Method | Description                    |
| -------- | ------ | ------------------------------ |
| /players | GET    | Returns sample player profiles |
| /match   | POST   | Evaluates compatibility        |

## REST API Prototype
  The REST API prototype was implemented using the Express framework in Node.js. The server processes incoming HTTP requests, parses JSON data from the request body, and forwards player data to the matchmaking logic module. The matchmaking logic evaluates compatibility and returns a structured JSON response describing the stability of the match.

## Testing Strategy
Automated testing was implemented using the Jest testing framework. Unit tests were written to validate the matchmaking logic and player profile validation functions. The test suite includes one behavior-driven test verifying that matches fail when a player has a volatile attitude, as well as multiple unit tests that evaluate different skill differences and player attribute combinations. All tests are executed locally using the npm test command.

## Automated Testing
  
# Kanban Board
Trello Board:
https://trello.com/b/kbPXcjh0/social-matchmaking-ges-sprint-1

# Sprint Burndown Chart
Include a chart showing story points remaining per day.

<img width="475" height="281" alt="burndown_sprint1" src="https://github.com/user-attachments/assets/f5b19018-7f16-4d54-a775-e907fd7231f0" />

# Daily Scrum Evidence

| Member   | Yesterday         | Today      | Impediments |
| -------- | ----------------- | ---------- | ----------- |
| Elliotte | Player model      | Validation | None        |
| Gabriel  | Express setup     | API routes | None        |
| Steve    | Matchmaking logic | Unit tests | None        |

# Pair Programming Evidence
The development team collaborated using Microsoft Teams screen sharing sessions to review and implement code together. Evidence of pair programming is included in the repository through screenshots and shared commit history demonstrating collaborative development.

# Sprint Review
During the Sprint Review, the team demonstrated the working matchmaking API prototype. The system successfully evaluated compatibility between two player profiles using the /match endpoint and returned a structured JSON response describing the match stability. The team confirmed that the REST API, matchmaking logic, and player data model were functioning as intended.

# Sprint Retrospective

| Category           | Notes                  |
| ------------------ | ---------------------- |
| What went well     | Good collaboration     |
| What could improve | Earlier testing        |
| Action items       | Improve task breakdown |

# Definition of Done
A task is complete when:
- code committed to GitHub
- automated tests pass
- functionality verified
- documentation updated
- task marked done in Trello
  
# Expected Product Increment
Deliverables:
- Node.js project infrastructure
- Player profile data model
- Matchmaking logic module
- REST API prototype
- Automated tests
- Scrum documentation

# Conclusion
Sprint 1 successfully established the foundational components of the Social Matchmaking Web Service. The team implemented the Node.js development environment, designed the player profile data model, developed the matchmaking evaluation logic, and created REST API endpoints to evaluate player compatibility.

The sprint also demonstrated the use of Scrum practices including sprint planning, daily scrums, backlog management, and progress tracking through a burndown chart. These achievements resulted in a working prototype capable of evaluating compatibility between players based on skill and behavioral attributes.

This prototype provides a strong technical foundation for future sprints, where additional matchmaking features and system improvements will be implemented.


