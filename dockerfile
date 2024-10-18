# Build Stage
FROM node:22-bullseye-slim as build-stage

# 앱의 package.json과 package-lock.json 복사
COPY package.json .
COPY package-lock.json .

RUN npm cache clean --force
# 의존성 설치 (타입스크립트 포함)
RUN npm ci --omit=dev

# 소스 코드 복사
COPY . .

# 타입스크립트 컴파일 (이전에 tsconfig.json이 있어야 함)
RUN npx tsc

# 앱 빌드
RUN npm run build

#=======================================

# Production Stage
FROM node:22-bullseye-slim

# serve 설치
RUN npm install -g serve

# 빌드 결과물을 복사
COPY --from=build-stage /build .

# 앱 실행
ENTRYPOINT ["serve", "-s", ".","-l","3000"]
CMD []

