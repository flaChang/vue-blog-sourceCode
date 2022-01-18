#!/usr/bin/env bash

yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@github.com:flaChang/vue-blog-website.git &&
git branch -M main &&
git push -u origin main -f
cd -