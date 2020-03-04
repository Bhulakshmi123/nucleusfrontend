currentDate= date
echo $currentDate
git status
git add -A
git commit -m "$(date +"%D %T") by "
git pull origin master
