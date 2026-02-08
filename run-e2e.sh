#!/bin/bash
# Start backend and frontend in background, run Cypress, then kill servers


# Start backend in test mode
export TEST_MODE=1
npm run start:backend &
BACKEND_PID=$!

# Start frontend
cd frontend && npm run dev &
FRONTEND_PID=$!

# Wait for servers to be ready
sleep 5

# Run Cypress tests
cd frontend && npx cypress run
TEST_RESULT=$?
cd ..

# Kill servers
kill $BACKEND_PID
kill $FRONTEND_PID

exit $TEST_RESULT
