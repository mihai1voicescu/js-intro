# FIXME

# start from a base image
FROM node:latest

# run various command, ussualy installs
RUN apt update
RUN apt install -y python3
RUN apt install -y python3-notebook
RUN apt install -y jupyter
RUN apt install -y jupyter-core

RUN pip3 install pyzmq bash_kernel
RUN npm i -g ijavascript
RUN ijsinstall
RUN python3 -m bash_kernel.install

RUN apt update

RUN apt install -y apt-transport-https ca-certificates 

RUN curl gnupg lsb-release

RUN curl -fsSL https://get.docker.com -o /get-docker.sh

RUN sh /get-docker.sh

# final comand to run
CMD jupyter notebook /usr/project --ip=0.0.0.0 --allow-root --NotebookApp.token='' --NotebookApp.password=''
