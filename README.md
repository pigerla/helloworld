# helloworld #

### [**helloworld**](http://pigerla-helloworld.jit.su/ "Click and find out") is a Node Application hosted in [Nodejitsu](https://www.nodejitsu.com/ "www.nodejitsu.com") and based on MVC architecture. 

![Codeship Status](https://www.codeship.io/projects/8cc41340-b511-0131-9708-46b4e31e8267/status "Codeship Status")

**Suggestion:** If you are interseted in Node and wanna create your own Node Application , suggest you forking the repository and following my steps.What is more , I'm sure you can find some your own stuff in **Architecture Changed Notes** chapter.

#### Get any issue ? click here [helloworld issue](https://github.com/pigerla/helloworld/issues) and tell me ,thx at all. ####

## Architecture Changed Notes ##

#### 2014/05/03 ####

- added "package.json"
	- completed certain configurations , especially 'dependencies'.
	- run command line "npm install" , for installing...
		- [express](https://github.com/visionmedia/express)
		- [jade](https://github.com/visionmedia/jade)
		- [mongoose](https://github.com/LearnBoost/mongoose)
- added "views" folder
	- as the "View" level of MVC.
	- use **jade** html template.
- added "public" folder
	- for static files , such as icon / images / stylesheets / javascripts.
	- name for the plugin that will be used and version.
- configured **Codeship**
	- Push codes into Github then deploy in Nodejitsu. 
	- video:[How to deploy a node.js app from GitHub to Nodejitsu on Vimeo](http://vimeo.com/76988907 "Click and see the video").

#### 2014/06/14 ####

- updated "package.json"
	- added `"mongoose": "3.4.0"` into `"dependencies"`
- added "models" folder
	- as the "Model" level of MVC
	- added "users.js" file for testing
		- click [http://pigerla-helloworld.jit.su/users](http://pigerla-helloworld.jit.su/)
- updated "app.js"
	- require "mongoose" module and used
	- add `routes` for users