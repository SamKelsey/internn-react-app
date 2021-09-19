#!/bin/bash
# This script is for formatting (resizing) images before going to s3.

cd images

# Image widths in px.
SMALL=600;
MEDIUM=1000;
LARGE=1500;

for FILE in *; do 
    if [[ $FILE == *.JPG ]] || [[ $FILE == *.jpg ]]; then
        echo "Resizing ${FILE}";
        WIDTH=$(identify -format '%w' $FILE);
        FILENAME="${FILE%.*}"

        if 
        [[ ${FILENAME: -2} ==  "or" ]] || 
        [[ ${FILENAME: -2} ==  "sm" ]] || 
        [[ ${FILENAME: -2} ==  "md" ]] || 
        [[ ${FILENAME: -2} ==  "lg" ]]; then
            continue;
        fi

        if [[ $WIDTH -gt $LARGE ]]; then
            convert $FILE -resize $LARGE "${FILENAME}-lg.jpg";
        fi

        if [[ $WIDTH -gt $MEDIUM ]]; then
            convert $FILE -resize $MEDIUM "${FILENAME}-md.jpg";
        fi

        if [[ $WIDTH -gt $SMALL ]]; then
            convert $FILE -resize $SMALL "${FILENAME}-sm.jpg";
        fi

        mv $FILE "${FILENAME}-or.jpg";
    fi
done