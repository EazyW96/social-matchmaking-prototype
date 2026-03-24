# API Specification

## Standards & Protocols
* **Architectural Style:** REST (Representational State Transfer).
* **Data Format:** JSON (JavaScript Object Notation).
* **Transport:** HTTPS.

## Endpoints
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/api/v1/auth/discord` | Initiates OAuth2 identity verification. |
| **GET** | `/api/v1/profile/:id` | Returns player rank, KDA, and reputation tags. |
| **POST** | `/api/v1/reputation/endorse` | Allows a verified teammate to submit a behavior tag. |

## Example JSON Response Model
```json
{
  "player_id": "82910",
  "discord_verified": true,
  "riot_rank": "Platinum II",
  "reputation_score": 85,
  "community_tags": [
    {"tag": "Great Shotcaller", "count": 12},
    {"tag": "Positive Mental Attitude", "count": 8}
  ]
}
