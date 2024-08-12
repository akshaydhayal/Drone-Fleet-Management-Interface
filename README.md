# Enhanced Drone Fleet Management Interface

## Overview

The **Enhanced Drone Fleet Management Interface** is a web application that allows users to view and manage the status and details of a drone fleet. The application includes features such as user authentication, drone overview, detailed stats for each drone, maintenance management, and Dockerization for easy setup and deployment.

## Installation and Setup

### Prerequisites

- Ensure you have Docker installed on your machine.
- Clone the repository to your local machine.

### Running the Application

#### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/drone-fleet-management.git
cd drone-fleet-management
```
#### 2. Build and Run the Docker Container

```bash
docker-compose up --build
```
This will:
- Build the Docker image from the provided Dockerfile.
- Start the application on port 5173.

#### 3. Access the Application
  - Open your browser and navigate to http://localhost:5173.
  - Use the following credentials to log in:
    - Username: admin
    - Password: password123

### Project Structure

- `/src`: Contains the React components, pages, and Redux store.
  - `/src/components`:
    - `Navbar.tsx`: The navigation bar component, which shows the login/logout option based on the user's authentication status.
    - `Login.tsx`: The login component where users can enter their credentials to access the drone management interface.
  - `/src`:
    - `HomePage.tsx`: The homepage with a welcome message and a login form.
    - `DroneListPage.tsx`: The page that lists all drones with their status and basic info.
    - `DronePage.tsx`: The detailed view of a selected drone, showing its stats and maintenance logs.
  - `/src/store`:
    - `store.ts`: The Redux store setup, including global state management for logged-in users.
    - `loggedUserStore.ts`: Redux slice for managing the logged-in user state.
    - `sampleData.ts`: Contains sample user and drone data used in the application.


### Key Dependencies

- **React**: Frontend library for building the user interface.
- **Redux**: State management library for managing global states, such as user authentication.
- **Tailwind CSS**: Utility-first CSS framework used for styling the application.
- **React Icons**: Icon library used for adding icons to the UI components.

### Usage

- After logging in, users can view the list of drones and click on any drone to see detailed information.
- Maintenance logs are available for each drone, providing insights into the upkeep of the fleet.
- Users can log out using the logout button in the navigation bar.

### Future Improvements

- Implement user role management for different levels of access.
- Add the ability to update or add new drones and maintenance logs.
- Enhance the UI with more interactive features and responsive design.
