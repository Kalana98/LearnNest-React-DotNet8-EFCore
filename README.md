# LearnNest Web Application

![LearnNest Banner](path_to_your_banner_image) <!-- Add a banner image here if you have one -->

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Setup and Installation](#setup-and-installation)
5. [API Endpoints](#api-endpoints)
6. [Frontend Overview](#frontend-overview)
7. [Screenshots](#screenshots)
8. [Contributing](#contributing)
9. [License](#license)
10. [Contact](#contact)

## Project Overview
**LearnNest** is a comprehensive web application for managing courses, branches (nests), and student enrollments. It is built using a combination of **C# .NET 8** for the backend and **React** for the frontend. This application allows users to explore courses, view different branches of the institute, and manage student enrollments efficiently.

## Technologies Used

### Backend
- **C# .NET 8**
- **Entity Framework Core** (Database management)
- **SQL Server** (Database)
- **ASP.NET Core** (Web API)

### Frontend
- **React**
- **Axios** (For API requests)
- **React Router** (For navigation)

## Project Structure

### Backend: `LearnNest_Backend`

LearnNest_Backend/ ├── Controllers/ # API Controllers ├── Data/ # Database context and seeding ├── Migrations/ # EF Core Migrations ├── Models/ # Entity models ├── appsettings.json # Application settings ├── Program.cs # Main application entry point └── ... # Other standard .NET files


### Frontend: `learnnest_frontend`

learnnest_frontend/ ├── src/ │ ├── components/ # Reusable components │ ├── pages/ # Main application pages │ ├── services/ # API service files │ ├── App.js # Main React component │ └── index.js # Entry point for React └── public/ # Public assets (images, icons)


## Setup and Installation

### Prerequisites
- **Node.js** (version 14 or above)
- **.NET 8 SDK**
- **SQL Server** (or any compatible SQL database)

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/learnnest-web-app.git
   cd LearnNest_Backend

2. Configure the appsettings.json with your database connection string:
   {
     "ConnectionStrings": {
    "DefaultConnection": "Your-Database-Connection-String"
  }
}

3. Run database migrations:
   ```bash
   dotnet ef database update

4. Run the backend server:
   ```bash
   dotnet run

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd learnnest_frontend

2. Install the dependencies
   ```bash
   npm install

3. start the React development server
   ```bash
   npm start

### API Endpoints

## API Endpoints

| Endpoint               | Method | Description                        |
|------------------------|--------|------------------------------------|
| `/api/course`           | GET    | Get all courses                    |
| `/api/course/{id}`      | GET    | Get a specific course by ID        |
| `/api/course`           | POST   | Add a new course                   |
| `/api/course/{id}`      | PUT    | Update an existing course          |
| `/api/course/{id}`      | DELETE | Delete a course                    |
| `/api/nest`             | GET    | Get all nests (branches)           |
| `/api/enrollment`       | GET    | Get all enrollments                |
| `/api/enrollment/{id}`  | PUT    | Update an enrollment               |
| `/api/enrollment/{id}`  | DELETE | Delete an enrollment               |

## Frontend Overview
The frontend is designed to provide a user-friendly interface for managing course offerings, branch locations, and student enrollments.

### Key Features:
- **Explore Courses**: View detailed descriptions of available courses.
- **Branch Information**: Explore various branches with locations and facilities.
- **Student Enrollment**: Add, edit, and delete student enrollments.
- **Admin Panel**: Manage courses and branches with a dedicated admin interface.

## Screenshots
### Home Page
![Screenshot 2024-10-27 133738](https://github.com/user-attachments/assets/5cfb9261-486f-4c19-958f-bcdf59130b02)

![Screenshot 2024-10-27 133755](https://github.com/user-attachments/assets/94f0f883-a683-41fa-9d8f-fd57217feac5)

### Courses Page
![Screenshot 2024-10-27 133902](https://github.com/user-attachments/assets/adac74ce-b513-45c2-8d72-741a61f24515)

### Branches (Nests) Page
![Screenshot 2024-10-27 133925](https://github.com/user-attachments/assets/bfe43634-02c9-47b5-b4fd-317ba8e1ce25)

### About Us Page
![Screenshot 2024-10-27 133945](https://github.com/user-attachments/assets/f430e06b-99dc-4c2d-8639-c04409db82c0)

### Contact Us Page
![Screenshot 2024-10-27 134007](https://github.com/user-attachments/assets/ffe2b9bb-7740-40ee-be75-f8a31d85f445)

### Admin Panel Page
![Screenshot 2024-10-27 134033](https://github.com/user-attachments/assets/01a978f2-357c-4681-8c21-fced02e33b92)

### Enrollment Management Page
![Screenshot 2024-10-27 134054](https://github.com/user-attachments/assets/be65a99f-a6a8-40b3-be7e-aa5a981a8ac3)

![Screenshot 2024-10-27 134054](https://github.com/user-attachments/assets/d9f7ffbc-6366-4934-a932-28b8de777ada)

### Course Management Page
![Screenshot 2024-10-27 134132](https://github.com/user-attachments/assets/c85854c4-f315-4f3b-afc1-015cfd8372ef)

### Branches (Nests) Management Page
![Screenshot 2024-10-27 134151](https://github.com/user-attachments/assets/982ae73a-a950-4941-9cbc-825acaa52cbb)


## Contributing
Feel free to contribute to this project by opening issues or submitting pull requests. For major changes, please discuss them first by opening an issue.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For questions or suggestions, you can reach out to:

**Kalana De Silva** - [LinkedIn](https://www.linkedin.com/in/kalana-de-silva-7b99032a3) or [GitHub](https://github.com/Kalana98)

## How to Add Images
1. Save your screenshots in the `public/images` folder in the frontend directory.
2. Update the paths in the README like this: `![Description](public/images/your_image.png)` with the correct file path.

   Replace `public/images/your_image.png` with the actual path to your screenshots in your repository. Feel free to adjust or customize any content to fit your project’s specifics!







