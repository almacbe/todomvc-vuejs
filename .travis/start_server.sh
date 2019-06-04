#!/usr/bin/env bash

# die on error
set -e

yarn build
yarn start &
