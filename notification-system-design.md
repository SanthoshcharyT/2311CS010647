# Notification System Design

# Stage 1

## Priority Inbox Design
To efficiently maintain the top 'n' (e.g., top 10) most important unread notifications as new ones keep arriving, a **Min-Heap** (Priority Queue) data structure of size 'n' is the most optimal approach.

### Approach:
1. **Priority Score Calculation**: Each notification gets a priority score based on its weight and recency.
   - Weights: `Placement = 3`, `Result = 2`, `Event = 1`.
   - Recency: We can compare timestamps directly. If weights are equal, the more recent timestamp has higher priority.
2. **Min-Heap**: We maintain a Min-Heap of size `n` (e.g., 10).
   - The heap compares notifications based on their priority score.
   - The "minimum" element at the root of the heap is the notification with the *lowest* priority among the top 'n'.
3. **Processing New Notifications**:
   - As a new notification arrives, if the heap has less than `n` elements, we simply insert it.
   - If the heap is full (size `n`), we compare the new notification with the root of the Min-Heap.
   - If the new notification has a *higher* priority than the root (the lowest priority in the top 'n'), we extract the root and insert the new notification.
   - If it has a *lower* priority, we ignore it.
4. **Efficiency**: 
   - Inserting or extracting from the heap takes `O(log n)` time.
   - Since `n` is small (e.g., 10, 20), this operation is extremely fast (`O(1)` effectively).
   - Processing `m` notifications takes `O(m log n)` time, which is highly scalable for high-volume streams.

### Code Implementation
The logic to find and maintain the top 10 notifications is implemented in `notification-app-fe/src/utils/PriorityQueue.js`.
