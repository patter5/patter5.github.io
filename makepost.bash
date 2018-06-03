#!bin/bash

tab='    '
space='  '
title="$1"
echo $1
today=$(date +%m-%d-%Y)
post_dir="./content/posts/""$post_dir$today-"$title
echo $post_dir

function insertLine
{
    printf "%s " $@ >> $post_dir/index.md
    printf "\n" >> $post_dir/index.md
}

function insertTabbedLine
{
    printf "    - %s" $@ >> $post_dir/index.md
    printf "\n" >> $post_dir/index.md
}

mkdir $post_dir && touch $post_dir/index.md

# front_matter='---\n
# title: '$title'\n
# cover: "/covers/wtc.jpg"\n
# date: "05/30/2018"\n
# category: "Intro"\n
# tags:\n'"${tab}"'- welcome\n
# ---\n'

insertLine '---'
insertLine "title: $title"
insertLine 'cover: "/covers/wtc.jpg"'
insertLine "date: $today"
insertLine "category: null"
insertLine "tags:"
insertTabbedLine 'default'
insertLine '---'
insertLine ''
insertLine '# Headline'