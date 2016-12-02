#!/bin/bash
#
# provision.sh
#
# This file is specified in Vagrantfile and is loaded by Vagrant as the primary
# provisioning script whenever the commands `vagrant up`, `vagrant provision`,
# or `vagrant reload` are used. It provides all of the default packages .

# Variables
# ---------
NODE_VERSION="v6.7.0"

echo '### Updating system ...'
sudo apt-get update -y
sudo apt-get -y install git-core python g++ make checkinstall zlib1g-dev zip curl

# NodeJS
# ------
echo '### Install nodejs ...'
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs

source ~/.nvm/nvm.sh
echo "source ~/.nvm/nvm.sh" >> ~/.bashrc
echo "nvm use $NODE_VERSION" >> ~/.bashrc

nvm install $NODE_VERSION && nvm alias default $NODE_VERSION

# Update npm
echo "### Install NPM"
sudo npm install npm@latest -g

