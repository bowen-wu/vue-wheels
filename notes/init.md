## 从 0 到 1

1. mkdir vue-wheels
2. cd vue-wheels
3. touch README.md
4. vi README.md
5. mkdir notes
6. mkdir codes
7. git init
8. git add .
9. git commit -m 'init'
10. 在 GitHub 上创建一个空仓库，之后执行 ` …or push an existing repository from the command line ` 下的两行代码
11. git remote add origin git@github.com:bowen-wu/vue-wheels.git
12. git push -u origin master
13. git checkout -b dev
14. git push origin dev:dev
15. git add .
16. git commit -m 'created dev branch'
17. git branch --set-upstream-to=origin/dev dev
18. git pull
19. git push
20. 声明 lICENCE (注意： 此次操作是在 GitHub 上进行的操作，另外需要在 master 分支上进行操作)
![软件许可.png](https://upload-images.jianshu.io/upload_images/9617841-1221cc136a24bf7f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    - GitHub 上 Create new file
    - name -> LICENCE
    - 右侧 Choose a licence templete
    - 左侧 select MIT Licence
    - 右侧 Review and submit
    - 底部 Propose new file
    - Create pull request
    - Merge pull request
    - Confirm merge
    - Delete branch
21. cd codes
22. npm init
![package.jpg](https://upload-images.jianshu.io/upload_images/9617841-ba9c9522f51fa910.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
23. git add . (注意： 此时的目录应该在最外层，即有 .git 文件的目录下)
24. git commit -m 'npm init'
25. git pull
26. git push
27. cd codes
28. npm i --save vue === npm i vue (npm version 6+)
29. cd ..
30. touch .gitignore
31. vi .gitignore -> codes/node_modules/
32. git add .
33. git commit -m 'npm install vue'
34. git pull
35. git push
36. cd codes
37. touch index.html
38. ending -> write code