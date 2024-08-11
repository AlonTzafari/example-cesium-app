#!/bin/bash
MSYS_NO_PATHCONV=1 docker run -it --name ctb --rm -v $(pwd)/terrain:/data tumgis/ctb-quantized-mesh