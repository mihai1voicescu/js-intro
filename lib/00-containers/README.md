# Containers tutorial
To be able to run the notebook run the following command in the root.
```
docker run -it --rm -v "$(pwd)":/usr/project -p 8888:8888 -v /var/run/docker.sock:/var/run/docker.sock mihai1voicescu/badass-jupyter
```

You can also view the output directly in [Containers.md](./Containers.md).
