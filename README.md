Download VSCode plugin  
Markdown Preview Enhanced to view .md files on VSCode

## Table of content
---
- [Setup Node Environment](#setup-node-environment)
- [Environment PATH setup](#environment-path-setup)
- [Run React](#run-react)
- [Jest Testing](#jest-testing)
- [ESLint](#eslint)

**Setup Node Environment**
===

**React Personal Web Page**
---

**MacOS**  
React requirement installation
```
Brew install node, watchman
```

**Windows**  
Download and install  
https://nodejs.org/en/download/


**Setup your simulator and device**
===
Run below code depends on which OS you are trying to build

```
cd /dcr
```
(change directory into your project folder ~/dcr) then type

```
npm install
```
(this will install the node_modules dependency for you)  

**Environment PATH setup**
===
On **Windows** 
---
you need to setup environment path from  
Control Panel - System - Advanced System settings - Environment Variables  
In user variable  
click "Path" and  
click edit  
click new type in needed path

On **MacOS** 
---
you need to setup environment path from your username folder.  
Find .bash_profile if you don' have the file do the following
1. Start up Terminal
2. Type `cd ~/"` to go to your home folder
3. Type `touch .bash_profile` to create your new file.
4. Edit .bash_profile with your favorite editor   
(or you can just type `open -e .bash_profile` to open it in TextEdit.
5. Type `. .bash_profile` to reload .bash_profile and update any functions you add.

Insert path below in .bash_profile (Is hidden by default)  
(`Command + Shift + .` can show hidden in Finder if you are using it)


**Run React**
===
```
npm start
```

**Jest Testing**
===

We can type: 
```
npm run test
```
To run jest:
```
npm run test:coverage
```
To run jest with code coverage report:
```
npm run test:watch
```
To run jest in watch mode for faster retest
runInband speed up testing by grouping
and watchAll speed up testing by keep test suite running 

For listing all custom npm command type:
```
npm run
```

**ESLint**
===
You can run this command to check if there is coding errors
```
npm run lint
```