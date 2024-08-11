#!/bin/bash
MSYS_NO_PATHCONV=1 docker run --rm -v "$(pwd)/terrain:/home" -it ghcr.io/osgeo/gdal:alpine-small-latest sh -c "chmod 777 /home; gdalbuildvrt tiles.vrt /home/*.tif"