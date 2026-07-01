const BASE_URL = "http://4.224.186.213/evaluation-service";
const HARDCODED_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzExQDEwNjQ3bWFsbGFyZWRkeXVuaXZlcnNpdHkuYWMuaW4iLCJleHAiOjE3ODI4OTI5MDMsImlhdCI6MTc4Mjg5MjAwMywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6Ijk5YWNhMzdmLWU3ZTctNGI1Yi1hY2NlLWU4MzM3NTA2NjY0MiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InRoYXRvanUgc2FudGhvc2ggY2hhcnkiLCJzdWIiOiIyMjFlNmVhNi0yZGY1LTRhZWEtYWM5NS02YzRiY2NjMDJiNDQifSwiZW1haWwiOiIyMzExQDEwNjQ3bWFsbGFyZWRkeXVuaXZlcnNpdHkuYWMuaW4iLCJuYW1lIjoidGhhdG9qdSBzYW50aG9zaCBjaGFyeSIsInJvbGxObyI6IjIzMTFjczEwNjQ3IiwiYWNjZXNzQ29kZSI6InhwUWRkZCIsImNsaWVudElEIjoiMjIxZTZlYTYtMmRmNS00YWVhLWFjOTUtNmM0YmNjYzAyYjQ0IiwiY2xpZW50U2VjcmV0IjoiWmZ0cEJQUkFTZHdhY05ycyJ9.aXFjdZ-iO_P_mWBLSG6AY15NwXvRiiqZQwP42RAYkFg";

async function fetchNotifications() {
    try {
        const response = await fetch(`${BASE_URL}/notifications`, {
            headers: {
                Authorization: `Bearer ${HARDCODED_TOKEN}`,
            },
        });
        const data = await response.json();
        console.log(JSON.stringify(data, null, 2));
    } catch (e) {
        console.error(e.message);
    }
}

fetchNotifications();
