# Social Matchmaking Prototype

College of Computing and Software Engineering  
SWE 6813 – Web Service Engineering  
Spring Semester 2026  
Group 2  

## Sprint Documentation

Access all sprint artifacts and deliverables:

- Sprint 1: [View Documentation](Docs/sprint-1/README.md)  
- Sprint 2: [View Documentation](Docs/sprint-2/README.md)  
- Sprint 3: [View Documentation](Docs/sprint-3/README.md)  

⭐ **Latest Sprint (Sprint 3 – Final Submission):**  
https://github.com/EazyW96/social-matchmaking-prototype/blob/main/Docs/sprint-3/README.md

Team Members:
- Elliotte Wideman  
- Gabriel Jean-louis  
- Steve Seukap Dieuyou  

---

## Project Description

Online gaming is an enormous industry that continues to grow each year. However, matchmaking systems have not evolved at the same pace. Most current systems match players based solely on skill metrics, which often leads to poor team dynamics, toxic interactions, and a lack of meaningful player connection.

This project aims to address these limitations by introducing a more human-centered matchmaking approach. Instead of relying only on skill, the system considers additional factors such as player behavior, playstyle preferences, and attitude. By incorporating these elements, the system seeks to improve team compatibility and enhance the overall gaming experience.

---

## Overview

The Social Matchmaking Prototype is an Agile software engineering project focused on improving online multiplayer matchmaking. Traditional systems rely heavily on statistics and rankings, but this prototype explores how incorporating human-centered attributes can lead to better team formation and communication.

The system is developed incrementally using an Agile Scrum approach across multiple sprints. The team follows core Agile practices including sprint planning, Kanban tracking, burndown charts, daily scrum meetings, test-driven development (TDD), continuous integration (CI), and continuous deployment (CD).

Technically, the system is implemented as a backend REST API using JavaScript, Node.js, and Express. Testing is handled with Jest, CI is managed with GitHub Actions, and deployment is handled through Render.

---

## Project Goal

The goal of this project is to design and implement a web-based matchmaking system that:

- Matches players based on both skill and behavior  
- Reduces toxic interactions in multiplayer environments  
- Supports better team compatibility  
- Enables players to connect with like-minded teammates  

---

## System Functionality

The current prototype provides a REST API that supports:

- Retrieving player profile data  
- Evaluating compatibility between players  
- Returning structured matchmaking results  

### API Endpoints

- GET / → API overview  
- GET /players → retrieve player profiles  
- POST /match → evaluate compatibility between two players  

---

## Technology Stack

- JavaScript  
- Node.js  
- Express  
- Jest (Testing)  
- GitHub Actions (Continuous Integration)  
- Render (Continuous Deployment)  

---

## Agile Development Approach

This project follows the Scrum framework and includes:

- Sprint-based development (Sprint 1 and Sprint 2)  
- Yesterday’s Weather forecasting  
- Task decomposition into backlog items  
- Kanban board tracking using Trello  
- Burndown chart tracking progress over time  
- Daily scrum meetings for team coordination  
- Continuous testing and integration  

---

## Repository Structure

Docs/
  sprint-1/
  sprint-2/

src/
  data/
  models/
  services/
  utils/

tests/

---

## Sprint Deliverables

All sprint documentation and artifacts are located in the Docs directory:

- Sprint 1 Deliverables → ./Docs/sprint-1/README.md  
- Sprint 2 Deliverables → ./Docs/sprint-2/README.md  

Each sprint includes:

- planning documents  
- Kanban board evidence  
- burndown charts  
- scrum notes  
- testing artifacts  
- CI/CD evidence  

---

## Live Deployment

The application is deployed in a production-like environment:

https://social-matchmaking-api.onrender.com  

---

## Testing

Automated testing is implemented using Jest.

To run tests locally:

npm test

Tests cover:

- player validation  
- matchmaking logic  
- compatibility scoring  

---

## Assumptions & Constraints

- Players are interested in more personalized matchmaking  
- A third-party system can integrate across multiple games  
- Player data can be processed efficiently  
- Some game APIs may limit accessible data  

---

## Summary

This project demonstrates how a software engineering team can design, build, test, and deploy a real-world system using Agile practices and modern development tools. The Social Matchmaking Prototype evolves across multiple sprints to improve matchmaking quality and create a more positive multiplayer gaming experience.