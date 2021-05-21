# start from a base image
FROM node:latest

# run various command, ussualy installs
RUN apt-get update
RUN apt-get install -y python3 python3-notebook jupyter jupyter-core

RUN pip3 install pyzmq bash_kernel
RUN npm i -g ijavascript
RUN ijsinstall
RUN python3 -m bash_kernel.install

# final comand to run
CMD jupyter notebook /usr/project --ip=0.0.0.0 --allow-root --NotebookApp.token='' --NotebookApp.password=''


