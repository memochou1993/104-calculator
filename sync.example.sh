#!/bin/bash

yarn build --mode production
rsync -av --delete-after dist/ root@0.0.0.0:/var/www/104-calculator/public
