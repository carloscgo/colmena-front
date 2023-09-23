FROM node:lts-alpine AS runner

# Set working directory
WORKDIR /app

# Add user account for running the app securely
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

RUN apk --no-cache add nodejs npm --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community

RUN apk add npm

# Expose the listening port
EXPOSE 3000
ENV PORT 3000

# Run container as non-root (unprivileged) user
# The "nextjs" user is provided in the Node.js Alpine base image
USER nextjs
