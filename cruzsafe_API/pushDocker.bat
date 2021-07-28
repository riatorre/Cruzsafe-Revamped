start /b /wait "Compiling API Server" CMD /c gradlew build -x test
docker build --build-arg JAR_FILE=build/libs/API-0.0.1-SNAPSHOT.jar -t cruzsafe/api .
docker rm -f CruzSafe_API
docker run --network="CruzSafe" -p 8080:8080 --name CruzSafe_API -t "cruzsafe/api"