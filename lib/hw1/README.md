# Homework 1

## Dev environment

To run the homework use
```bash
docker pull mihai1voicescu/badass-jupyter # this will ensure you have the latest version
docker run -it --rm -v "$(pwd)":/usr/project -p 8888:8888 -v /var/run/docker.sock:/var/run/docker.sock mihai1voicescu/badass-jupyter
```

Then open the homework in jupyter.

## Warning
Open the root of the folder so jupyter can see all folders.
