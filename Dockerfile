# Use an official lightweight Node.js image
FROM node:18-alpine

# Set production environment
ENV NODE_ENV=production

# Create app directory and set ownership to node user
WORKDIR /app
RUN chown node:node /app

# Copy package files first (for better caching)
COPY --chown=node:node package*.json ./

# Install dependencies (only production if needed)
RUN npm ci --only=production && npm cache clean --force

# Copy the rest of the application source code
COPY --chown=node:node . .

# Switch to non‑root user
USER node

# Expose the port (change to your app's port)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]