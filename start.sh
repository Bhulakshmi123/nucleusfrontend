if [[ $(lsb_release -rs) == "19.2" ]]; then # replace 8.04 by the number of release you want
       echo "OS : Linux Mint 19.2 Detected"
       npm start
elif [[ $(lsb_release -rs) == "19.10" ]]; then # replace 8.04 by the number of release you want
       echo "OS : Ubunut 19.10 Detected"
       npm start
       sudo chmod 777 -R .
elif [[ $(lsb_release -rs) == "16.04" ]]; then # replace 8.04 by the number of release you want
       echo "OS : Ubunut 16.04 Detected"
       yarn start
       sudo chmod 777 -R .
else
       echo "Unable to Detect OS please Run npm start or yarn start based on package manager"
fi
