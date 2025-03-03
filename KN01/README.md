## KN01 Connections and Managing MandoDB

### Installation A

i used this command in cmd to connect to the instance: "ssh -i elizaveta-1.pem ubuntu@18.211.87.89"

#### Abgabe Aufgabe A
- Cloud-init File: [cloudinit](./cloudinit-mongodb.yaml)

- Compass Screenshot:
![KN01CompassConnection](./KN01AStringConnection.png)

- "authSource=admin" in the Connection String defines that we're trying to connect to the authentication database with the authSource parameter in the Url. MongoDB uses "admin" database as default.

- the first sed statement in the cloud-init file replaces the commented out security with authentication. That means that without the authentication, i will not be able to connect to the database. With the second sed statement, it modifies from localhost ip to 0.0.0.0

Screenshot of the two sed commands in mongodb config file:
![screenshot](./mongodb-config-sed-command-output.png)
