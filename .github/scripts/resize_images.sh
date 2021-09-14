#!/bin/bash

cd images
for FILE in *;
do 
if [[ $FILE == *.JPG ]] || [[ $FILE == *.jpg ]]
then
    width=$(identify -format '%w' $FILE);
    filename="${FILE%.*}"
    
    if [[ $width -gt 2000 ]]; then
        echo "large image here";
    elif [[ $width -gt 800 ]]; then
        echo "small image: ${filename}";
        convert $FILE -resize 800 "${filename}-sm.jpg";
    fi
    
    mv $FILE "${filename}-orig.jpg";

fi
done