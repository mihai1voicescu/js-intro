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


First lets kill all containers, just to be sure we are not running anything


```bash
# docker kill $(docker ps -q)
# docker system prune -f > /dev/null
```


```bash
docker run -p 127.0.0.1:3306:3306  --rm --name mariadb -e MARIADB_ROOT_PASSWORD=pass -d mariadb:latest
```

    0f56e11bad05bef8763636eb4e7fdb0ec609832ac30d88ac6dbe6eb5e1f9bbf0



```bash
# To connect from a locally instaled mysql/mariadb cli
# mariadb -uroot -ppass -h127.0.0.1
# mysql -uroot -ppass -h127.0.0.1
```


```bash
# What if we don't have one? Docker to the rescue:
docker run -it --rm mariadb mysql -hmariadb -uroot -ppass
echo "died"
```

    ERROR 2005 (HY000): Unknown MySQL server host 'mariadb' (-2)
    (B[0;7m(B[mdied


As you can see, it's not working. Why is that?

Containers by default are isolated so you need to tell docker to connect them with a network.

Lets kill the container and make it again with a network (note that we can add it to a network even when running)


```bash
docker kill mariadb
```

    mariadb


Lets check if there are any running containers


```bash
docker container ls
```

    CONTAINER ID   IMAGE                           COMMAND                  CREATED              STATUS          PORTS                                       NAMES
    fd156cd247ac   mihai1voicescu/badass-jupyter   "docker-entrypoint.s…"   About a minute ago   Up 58 seconds   0.0.0.0:8888->8888/tcp, :::8888->8888/tcp   great_taussig


Now lets create a network and add them to our network


```bash
docker network create awsome-network
```

    f15a9179390ea49edb90fcdcbb0d53d62d1b79dc72e9a38518e50a4c21dd803a



```bash
docker run -p 127.0.0.1:3306:3306 --network awsome-network  --rm --name mariadb -e MARIADB_ROOT_PASSWORD=pass -d mariadb:latest
```

    9f662bbfff1cd0ab2d1a13deaa1efb73632e3424d875c7037147814436e6a01e


Now we can run this in a terminal (because it's interactive)


```bash
# docker run -it --network awsome-network --rm mariadb mysql -hmariadb -uroot -ppass
```

Now let's kill the mariadb instance


```bash
docker kill mariadb
docker system prune -f > /dev/null
```

    mariadb



```bash

```
