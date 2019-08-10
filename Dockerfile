FROM node:10

# Create app directory
WORKDIR /usr/src/app/

# Expose port for service
EXPOSE 5000

# Copy source code to image
COPY . .

# Install and configure `serve`.
RUN npm install -g serve

# Install and save jquery
RUN npm install jquery --save

# Install and save react-ga
RUN npm install react-ga --save

# Install dependencies
RUN npm install

RUN ["chmod", "+x", "/usr/src/app/run"]

# Build app and start server from script
CMD ["/usr/src/app/run"]
