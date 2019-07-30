## Creating Pull Requests

* Fork the [Project].(https://github.com/anushagotumukkalla/milkyway)
* Clone your forked copy to your local.
* In your local project folder create new remote to original repo.

  `git remote add upstream https://github.com/anushagotumukkalla/milkyway.git`
  
* sync our local copy with the upstream project.

  `git checkout dev` 
  > since dev is the origin
 
  `git pull upstream dev && git push origin dev`
  
* Run the code.
   
   `npm start`
   
* create a branch for feat or fix.
  
  eg: `git checkout -b feat/test`
  
* push the branch to your github repo.

  `git push -u origin feat/test`
  
* create a pull request with orignal repo, base branch (dev).
