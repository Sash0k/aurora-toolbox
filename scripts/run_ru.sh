#!/bin/bash

#########################################
## Build meson application with ru locale
##########################################

export LC_ALL=ru_RU.utf-8

SCRIPT=$(realpath "$0")
SCRIPTPATH=$(dirname "$SCRIPT")

bash $SCRIPTPATH/run.sh
