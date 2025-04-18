# Bike Servicing Management API

## Project Summary
This is a backend API for a Bike Servicing Management System, designed to manage customers, bikes, and service records for a bike servicing center. The API supports CRUD operations and includes features for assigning and completing service jobs, as well as retrieving pending or overdue services.

## Live Backend URL
[To be added after deployment]

## Tech Stack
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **TypeScript**: For type-safe JavaScript
- **Prisma ORM**: Database ORM
- **PostgreSQL**: Relational database

## Setup Guide
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Sakhawat71/Bike-Servicing-Server.git
   cd Bike-Servicing-Server
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Set up environment variables**:
   Create a `.env` file in the root directory and add:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/bike_service_db?schema=public"
   PORT=5000
   NODE_ENV=development
   ```
4. **Run Prisma migrations**:
   ```bash
   npx prisma migrate dev
   ```
5. **Generate Prisma client**:
   ```bash
   npx prisma generate
   ```
6. **Start the server**:
   - Development:
     ```bash
     npm run dev
     ```
   - Production:
     ```bash
     npm run build
     npm start
     ```

## Key Features
- **Customer Management**: Create, read, update, and delete customers.
- **Bike Management**: Add and retrieve bikes associated with customers.
- **Service Management**: Create, retrieve, and complete service records.
- **Bonus Feature**: Retrieve pending or overdue services (older than 7 days).
- **Error Handling**: Standardized error responses with status codes and messages.

## API Endpoints
- **Customers**:
  - `POST /api/customers`: Create a new customer
  - `GET /api/customers`: Get all customers
  - `GET /api/customers/:customerId`: Get a specific customer
  - `PUT /api/customers/:customerId`: Update customer details
  - `DELETE /api/customers/:customerId`: Delete a customer
- **Bikes**:
  - `POST /api/bikes`: Add a new bike
  - `GET /api/bikes`: Get all bikes
  - `GET /api/bikes/:bikeId`: Get a specific bike
- **Services**:
  - `POST /api/services`: Create a service record
  - `GET /api/services`: Get all service records
  - `GET /api/services/:serviceId`: Get a specific service record
  - `PUT /api/services/:serviceId/complete`: Mark a service as completed
  - `GET /api/services/status`: Get pending or overdue services


### Setup Instructions
1. **Database**: Ensure PostgreSQL is installed and running. Create a database (e.g., `bike_service_db`).
2. **Environment Variables**: Create a `.env` file with `DATABASE_URL`, `PORT`, and `NODE_ENV`.
3. **Dependencies**: Run `npm install` to install all dependencies.
4. **Prisma**: Run `npx prisma migrate dev` to apply migrations and `npx prisma generate` to generate the Prisma client.
5. **Run**: Use `npm run dev` for development or `npm run build && npm start` for production.
6. **Deployment**: Deploy to a platform like Railway or Render, and update the `README.md` with the live URL.

### Notes
- The API strictly follows the request and response structures specified in the document.
- Error handling is implemented with standardized responses, including stack traces in development mode.
- The bonus feature (`GET /api/services/status`) retrieves services with `status` of "pending" or "in-progress" and `serviceDate` older than 7 days.
- UUIDs are used for all primary keys, as specified.
- The project is written in TypeScript for type safety and uses Prisma for database operations.
