FROM node:20
WORKDIR /app
RUN npm config set registry https://registry.npmjs.org/
EXPOSE 5886
ENV NITRO_PORT=5886
COPY ./.output /app/.output