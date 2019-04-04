# Starter application with Ext JS 6.5 Classic Toolkit and Spring Boot for Management UI


**Run the application on your local machine**

Prerequisite
* Install Sencha CMD: https://www.sencha.com/products/extjs/cmd-download/
* Download Ext JS 6.5 and unzip it into any folder (that's the folder you specify in step 3)
* Make sure that the Ext JS version in ```eds-starter6-simple-jpa/workspace.json``` matches the downloaded Ext JS version

1. Clone the repository
2. ```cd eds-starter6-simple-jpa/client```
3. ```sencha app upgrade ../path/to/framework```
4. ```sencha app watch```
5. In another shell ```cd eds-starter6-simple-jpa```
6. ```./mvnw spring-boot:run -Dspring.profiles.active="development"```
7. Open url http://localhost:8080 in a browser


**Build the application for production**
1. ```./mvnw clean package```
2. The file ```target/eds-starter6-simple-jpa.jar``` contains the whole application. Deploy it to a server.
3. Start the application with ```java -jar <any_folder>/eds-starter6-simple-jpa.jar```
4. The application listens by default on port 80

