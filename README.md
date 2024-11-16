# Project Title: Color Challenge
## Overview
This project is a Color Swatch Generator that allows users to generate random colors using different color strategies (RGB and HSL). Users can also add their own custom color strategies through a user-friendly frontend interface. The backend is built with Node.js, and the frontend uses React.

## Technologies Used
Frontend: React, Typescript
Backend: Node.js, File System (for managing strategies)
Database: Not at the moment but plan to use PostgreSQL
Testing: Jest
Utilities: Axios (for API calls)

## Project Setup
### Prerequisites
Before running the project, ensure you have the following installed:

- Node.js (LTS version recommended)
- npm or Yarn (for managing dependencies)

## Running the Backend
1. Clone the repository:
```
git clone https://github.com/teresa2625/colors-challenge-backend.git
cd colors-challenge-backend
```

2. Install the dependencies:
```
npm install
```

3. Start the backend server:
```
npm start
```
This will start the backend server, and it will be running on http://localhost:5000 by default.

## Running the Frontend
Open a new terminal window and navigate to the frontend directory (if it's in a separate folder):

1. Clone the repository:
```
git clone https://github.com/teresa2625/colors-challenge-frontend.git
cd colors-challenge-frontend
```

2. Install the frontend dependencies:
```
npm install
```

3. Start the frontend development server:
```
npm start
```
This will run the frontend server, and it will be available at http://localhost:3000 by default.

Now, you can access the application by navigating to http://localhost:3000 in your browser. The frontend will interact with the backend to generate and display color swatches.

## Adding New Color Strategies
Users can add new custom color strategies via the frontend interface. Here's how:

1. Open the app at http://localhost:3000.
2. Navigate to the Add Strategy section.
3. Enter a Strategy Name (e.g., CMYK, HSV) and select a Color Space (RGB or HSL). **Note: At the moment, only RGB and HSL color spaces are allowed.**
4. Enter the Min/Max values for Red, Green, Blue (or equivalent values for other strategies you may add).
5. Click the Add Strategy button.
6. The new strategy will be saved to the backend as a new file in the strategy folder. **Note: This new strategy won't be usable immediately until additional logic is implemented in the backend.**

Once added, the new strategy will be saved to the system, but it will not be available to generate colors until the backend logic is updated and unit tests are written manually.

## TODO
Here are the next steps for improving the functionality:

- Backend Logic: The newly added strategies are stored as files, but the backend logic needs to be updated to load and use these strategies dynamically.
- Unit Tests: Unit tests need to be added for the new strategies, ensuring that they function correctly.
- Color Space Extension: Currently, only RGB and HSL color spaces are supported. Future updates should allow users to choose additional color spaces (e.g., CMYK, HSV) once the backend logic supports it.
- Frontend Updates: The frontend needs to reflect any changes in supported color spaces and provide a user-friendly way to select from available strategies once the backend logic is extended.

## Implemented Features
- Random Color Generation: The system generates random colors based on the RGB and HSL strategies.
- Add Custom Color Strategy: Users can define and add new color strategies through the frontend interface. These strategies are saved to the backend.
- Color Strategies: The project currently supports generating colors in RGB and HSL formats. New strategies can be added by users, but they will not be functional until backend logic is updated.
- Frontend and Backend Integration: The frontend interacts with the backend to fetch color swatches and add new color strategies.
- Error Handling: Proper error handling is in place for invalid inputs or if the user tries to add a duplicate strategy.

## API Endpoints
- GET /api/colors: Returns an array of random color swatches (generated using RGB and HSL strategies).
- POST /api/strategies: Adds a new color strategy. Expects a JSON body with the strategy data (name, color space, and min/max values for color components).

### Example Request to Add Strategy:
```
{
  "name": "BRGB",
  "colorSpace": "RGB",
  "redMin": 0,
  "redMax": 100,
  "greenMin": 0,
  "greenMax": 100,
  "blueMin": 0,
  "blueMax": 100
}
```

## Testing
### Running Tests
To run the tests for the backend/frontend, run the following command:
```
npm test
```

### Coverage
Tests include:
- Unit tests for color generation logic in the backend.
- API tests for the GET and POST endpoints.
- Frontend tests for form validation and strategy submissions.