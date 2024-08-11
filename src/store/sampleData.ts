export const sampleData={
  "users": [
    {"username": "admin", "password": "password123"}
  ],
  "drones": [
    {
      "id": "Drone1",
      "status": "Available",
      "flight_hours": 120,
      "battery_status": "80%",
      "last_known_location": [40.712776, -74.005974],
      "current_mission": "Survey field A",
      "maintenance_logs": [
        {"date": "2024-01-10", "description": "Battery replacement", "technician": "John Doe"},
        {"date": "2024-02-15", "description": "Rotor inspection", "technician": "Jane Smith"}
      ]
    },
    {
      "id": "Drone2",
      "status": "In-flight",
      "flight_hours": 200,
      "battery_status": "50%",
      "last_known_location": [34.052235, -118.243683],
      "current_mission": "Inspect irrigation system",
      "maintenance_logs": [
        {"date": "2024-03-05", "description": "Firmware update", "technician": "Alice Johnson"},
        {"date": "2024-04-22", "description": "Motor calibration", "technician": "Bob Lee"}
      ]
    },
    {
      "id": "Drone3",
      "status": "Maintenance",
      "flight_hours": 95,
      "battery_status": "60%",
      "last_known_location": [41.878113, -87.629799],
      "current_mission": "N/A",
      "maintenance_logs": [
        {"date": "2024-05-12", "description": "Propeller replacement", "technician": "Charlie Brown"},
        {"date": "2024-06-30", "description": "GPS module repair", "technician": "Diana Prince"}
      ]
    }
  ]
}







// ### Enhanced Drone Fleet Management Interface

// **Title:** Create an Enhanced Drone Fleet Management Interface

// **Objective:** Develop a web interface to display and manage the status and details of a drone fleet, including an overview and detailed stats for each drone, along with user authentication.

// **Requirements:**

// 1. **User Authentication:**
//     - Implement a simple user login system.
//     - Use a preconfigured JSON file to authenticate users (e.g., username and password).
// 2. **Drone Fleet Overview:**
//     - Display a summary list of all drones in the fleet with basic information (e.g., drone ID, status).
//     - Allow users to click on a drone to view detailed information.
// 3. **Drone Details View:**
//     - Show detailed stats for each drone when selected, including:
//         - Total flight hours
//         - Maintenance logs
//         - Battery status
//         - Last known location
//         - Current mission (if any)
// 4. **Maintenance Management:**
//     - Add a section to display maintenance activities, including:
//         - Date of maintenance
//         - Description of maintenance performed
//         - Technician name
// 5. **Styling:**
//     - Apply a clean, professional design using CSS. Use a modern UI framework like Bootstrap or Tailwind CSS, the choice is up to you.
//     - Ensure the interface is well-organized and user-friendly on a PC.
// 6. **Read-Only Data:**
//     - All data should be retrievable from the JSON file and displayed on the dashboard but should not be adjustable through the dashboard.
// 7. **Dockerization:**
//     - Dockerize the application to ensure it can be easily set up and run on any environment.
//     - Include a `Dockerfile` and `docker-compose.yml` if necessary.