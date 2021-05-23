# start from a base image
FROM node:latest

# run commands
RUN apt-get update

# final comand to run
CMD jupyter notebook /usr/project --ip=0.0.0.0 --allow-root --NotebookApp.token='' --NotebookApp.password=''
