#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@github.com:zdxzdxzdx/dayaccount-website.git &&
#  "homepage": "https://zdxzdxzdx.github.io/dayaccount-website/",
#git remote add origin git@gitee.com:zdxzdxzdx/dayaccount.git &&
git branch -M main &&
git push -u origin main -f &&
cd -
