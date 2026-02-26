# VibeStack Frontend-Backend Bridge Documentation

This document serves as a guide for backend developers to implement the necessary APIs and data structures required by the VibeStack frontend. It outlines the expected data models, API endpoints, and request/response formats.

## 1. Data Models

### `UpdateItem`
The core data structure representing a single news/update item in the dashboard.

```typescript
interface UpdateItem {
  id: string;                 // Unique identifier (UUID preferred)
  title: string;              // Headline of the update
  url: string;                // External link to the source
  short_description: string;  // Brief summary of the update
  source_name: string;        // Name of the publisher (e.g., "OpenAI", "Anthropic")
  source_type: string;        // Category of the source (e.g., "Model Provider", "Framework")
  tags: string[];             // Array of relevant tags (e.g., ["LLM", "Vision"])
  published_at: string;       // ISO 8601 date string (e.g., "2026-02-26T12:00:00Z")
  internal_score: number;     // Curation score for sorting (0-100)
}
```

## 2. Required API Endpoints

### 2.1. Fetch Updates (Dashboard)
Retrieves a paginated list of updates based on user filters.

* **Endpoint:** `GET /api/updates`
* **Query Parameters:**
  * `page` (integer, default: 1): The current page number.
  * `limit` (integer, default: 10): Number of items per page.
  * `query` (string, optional): Search term for title/description matching.
  * `source_type` (string, optional): Filter by source type (e.g., "Model Provider"). If "All", omit or ignore.
  * `source_name` (string, optional): Filter by source name (e.g., "OpenAI"). If "All", omit or ignore.
  * `tag` (string, optional): Filter by a specific tag. If "All", omit or ignore.
  * `sort` (string, default: "newest"): Sorting criteria. Expected values: `"newest"` (sort by `published_at` desc) or `"top_score"` (sort by `internal_score` desc).

* **Expected Response (200 OK):**
```json
{
  "data": [
    {
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "title": "GPT-4o mini: Cost-efficient intelligence",
      "url": "https://openai.com/...",
      "short_description": "Our most cost-efficient small model...",
      "source_name": "OpenAI",
      "source_type": "Model Provider",
      "tags": ["LLM", "Cost"],
      "published_at": "2026-02-26T10:00:00Z",
      "internal_score": 95
    }
  ],
  "meta": {
    "current_page": 1,
    "total_pages": 5,
    "total_items": 48
  }
}
```

### 2.2. Fetch Filter Metadata
Retrieves the dynamic lists of available filters to populate the dropdowns in the UI.

* **Endpoint:** `GET /api/filters`
* **Expected Response (200 OK):**
```json
{
  "source_types": ["Model Provider", "Framework", "Tooling", "Research"],
  "source_names": ["OpenAI", "Anthropic", "LangChain", "Vercel"],
  "tags": ["LLM", "Vision", "Agents", "Open Source", "RAG"]
}
```

### 2.3. Newsletter Subscription (Home/About Page)
Handles user email submissions for the weekly newsletter.

* **Endpoint:** `POST /api/subscribe`
* **Request Body:**
```json
{
  "email": "developer@company.com"
}
```
* **Expected Response (200 OK or 201 Created):**
```json
{
  "status": "success",
  "message": "Successfully subscribed to the newsletter."
}
```
* **Expected Error Response (400 Bad Request - e.g., invalid email or already subscribed):**
```json
{
  "status": "error",
  "message": "This email is already subscribed."
}
```

## 3. Frontend Integration Notes

Once the backend is ready, the frontend will need the following updates:
1. Replace the static `mockData.ts` imports with actual `fetch` or `axios` calls to the endpoints above.
2. Add a `VITE_API_BASE_URL` environment variable to `.env` to point to the backend server (e.g., `http://localhost:3000` or the production URL).
3. Update the `Dashboard.tsx` `useEffect` hooks to fetch data on mount and whenever filter states change.
4. Update the `About.tsx` form submission handler to POST the email to the `/api/subscribe` endpoint and show a success/error toast notification.
