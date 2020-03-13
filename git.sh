FILE1=$1
echo $FILE1
git status
git add -A
git commit -m "$(date +"%D %T") by $(whoami) -m $FILE1"
git pull origin master
