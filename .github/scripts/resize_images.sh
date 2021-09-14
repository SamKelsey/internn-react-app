#!/bin/bash
# This script is for creating images of the correct size and name.
cd images
for FILE in *; do 
    if [[ $FILE == *.JPG ]] || [[ $FILE == *.jpg ]]; then
        width=$(identify -format '%w' $FILE);
        filename="${FILE%.*}"

        if [[ ${filename: -4} ==  "orig" ]] || [[ ${filename: -2} ==  "sm" ]] || [[ ${filename: -2} ==  "md" ]] || [[ ${filename: -2} ==  "lg" ]]; then
            continue;
        elif [[ $width -gt 2000 ]]; then
            echo "medium image here";
            convert $FILE -resize 2000 "${filename}-md.jpg";
        elif [[ $width -gt 800 ]]; then
            echo "small image: ${filename}";
            convert $FILE -resize 800 "${filename}-sm.jpg";
        fi

        mv $FILE "${filename}-orig.jpg";
    fi
done