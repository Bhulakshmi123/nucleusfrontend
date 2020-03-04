currentDate= date
echo $currentDate
git status
git add -A
git commit -m "$(date +"%D %T")"
# git pull origin master
