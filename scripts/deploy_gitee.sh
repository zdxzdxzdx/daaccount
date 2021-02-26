#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
#git remote add origin git@github.com:zdxzdxzdx/dayaccount-website.git &&
git remote add origin git@gitee.com:zdxzdxzdx/dayaccount.git &&
# "homepage": "https://zdxzdxzdx.gitee.io/dayaccount/",
git branch -M main &&
git push -u origin main -f &&
cd -
