FROM openjdk:17-jdk-slim
WORKDIR /app
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src
RUN ./mvnw package -DskipTests
EXPOSE 8080
CMD ["java", "-jar", "target/cheko-0.0.1-SNAPSHOT.jar"]