if [[ $(lsb_release -rs) == "19.2" ]]; then
       echo "OS : Linux Mint 19.2 Detected"
       npm start
elif [[ $(lsb_release -rs) == "19.10" ]]; then
       echo "OS : Ubunut 19.10 Detected"
       npm start
       sudo chmod 777 -R .
elif [[ $(lsb_release -rs) == "16.04" ]]; then
       echo "OS : Ubunut 16.04 Detected"
       npm start
       sudo chmod 777 -R .
else
       echo "Unable to Detect OS please Run npm start or yarn start based on your package manager"
fi
