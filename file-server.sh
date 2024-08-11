#!/bin/bash
MSYS_NO_PATHCONV=1 docker run -p 8080:80 \
-v $(pwd)/terrain/cesium-tiles:/usr/share/nginx/html \
-v $(pwd)/default.conf:/etc/nginx/conf.d/default.conf \
-d --rm --name nginx nginx:1.27-alpine3.19