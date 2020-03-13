FILE1=$1
echo $FILE1
# wc $FILE1
git status
git add -A
git commit -m "$(date +"%D %T") by $(whoami) $FILE1"
# This part is Still Under Development
# git pull origin master
