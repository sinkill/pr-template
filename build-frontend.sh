#!/usr/bin/env bash

IS_EXIT=0

env=$1

mkdir -p backups
mv public backups/public_`date +%d-%m-%Y_%H%M%S`
mv public-temp public