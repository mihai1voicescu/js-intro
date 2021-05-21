# Containers n stuff

Oh how lucky you are!

Back in my day you actually had to set up the environment
with installations and scripts.

Swapping OS was a nightmare.

Fortunately containers solve this problem.

## Container engines
Container engines allow users to run a prebuilt enviroment in a sandbox.
The same environment on any machine, making deployment A LOT easier.

### Docker
Docker was the first container technology to actually take off.
Unfortunately it has a major security flaw, you have to run a daemon
as root. It's also not OCI compliant as far as I know.

### Podman
Podman aims to solve these problems while also adopting as much of 
a common API with Docker as possible. It even has a shim for the docker command.

Unfortunately it runs only under linux.

## Installation
Because it is simple to install and run on non-server enviroments we will be using Docker.

* Windows https://docs.docker.com/docker-for-windows/install/
* MacOS https://docs.docker.com/docker-for-mac/install/
* Linux https://docs.docker.com/engine/install/ubuntu/

Probably `sudo apt-get install docker-ce docker-ce-cli containerd.io`

## Images
Images allow us to create a snapshot of a system that can be run anywhere with a container engine.

Each image can be ran as a container, in an isolated enviroment.

But ussually you do not want a 100% isolation, rather to export a port and maybe some disk.

## Let's play
Let's make a mariadb database
```
docker run -p 127.0.0.1:3306:3306  --rm --name mariadb -e MARIADB_ROOT_PASSWORD=pass -d mariadb:latest
```

To connect from a locally instaled mysql/mariadb cli
```
mariadb -uroot -ppass -h127.0.0.1
mysql -uroot -ppass -h127.0.0.1
```

What if we don't have one? Docker to the rescue:
```
docker run -it --rm mariadb mysql -h127.0.0.1 -uroot -ppass
```

```js
console.log(3)
```


```
docker run -it --network some-network --rm mariadb mysql -hsome-mariadb -uexample-user -p
```
