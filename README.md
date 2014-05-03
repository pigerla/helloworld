# helloworld #

### [**helloworld**](http://pigerla-helloworld.jit.su/ "Click and find out") is a Node Application hosted in [Nodejitsu](https://www.nodejitsu.com/ "www.nodejitsu.com") is based on MVC architecture. 

![Codeship Status](https://www.codeship.io/projects/8cc41340-b511-0131-9708-46b4e31e8267/status)

## Architecture Changed Notes ##

#### 2014/05/03 ####

- added "package.json"
	- completed certain configurations , especially 'dependencies'
	- run command line "npm install" , for installing
		- [express](https://github.com/visionmedia/express)
		- [jade](https://github.com/visionmedia/jade)
		- [mongoose](https://github.com/LearnBoost/mongoose)
- added "views" folder
	- as the "View" level of MVC
	- use **jade** html template
- added "public" folder
	- for static files , such as icon / images / stylesheets / javascripts
	- name for the plugin that will be used and version