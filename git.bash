gitCommit = $1
git status
git add -A
git commit -m "$(date +"%D %T") by $(whoami) $gitCommit"
# This part is Still Under Development
# git pull origin master
