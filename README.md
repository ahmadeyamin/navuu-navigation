# NAVUU-Navigation

**navuu-navigation** is a Ultimate Navigation for any kind of website

![Demo Image](https://raw.githubusercontent.com/ahmadeyamin/navuu-navigation/master/demo/navuu.gif)


> Customizable, accessible, easy-to-use multi-level stack navigation menu.


### How to use it

To start using it, include the css and js files.

Just add a link to the css file in your `<head>`:
````html
<link rel="stylesheet" href="./dist/css/bootstrap.css">
<link rel="stylesheet" href="./dist/css/navigation.css">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css">
<link rel="stylesheet" href="./dist/css/style.css">
````

> ### bootstrap in not required but if you remove this you need to add some custom style to fix the look

```html
<link rel="stylesheet" href="./dist/css/bootstrap.css">
```


Then, before your closing `<body>` tag add:

````html
<script src="./dist/js/jquery.js"></script>
<script src="./dist/js/encrypted.js"></script>
````
### encrypted.js means this is not human readable format

>or 

````html
  <script src="./dist/js/main.js"></script>
````



Where you want to show the menu, you must include the following code:
````html
<div class="nav-wrapper">
  <nav id="navigation" class="navigation navigation-justified sticky-top">
    ...
  </nav>
</div>
````
## Tips
I highly recommend you to dont change the formate of html just copy and paste from the example page



## installation

> To make it work just add this in the bootom of body tag

```js
<script>
  $('#navigation').navigation()
</script>
```


### Here we have some useful example to make you customization easy

- 1  [Basic Example With All possible menu type](https://ahmadeyamin.github.io/navuu-navigation/demo/example.html)
&nbsp;

- 2  [E-Commerce Website menu](https://ahmadeyamin.github.io/navuu-navigation/demo/bissness.html)
&nbsp;

 
- 3  [Logo Center](https://ahmadeyamin.github.io/navuu-navigation/demo/nav-center.html)
&nbsp;

- 4  [Background Transparent Menu](https://ahmadeyamin.github.io/navuu-navigation/demo/transparent.htm)
&nbsp;




&nbsp;
#### Contributing
PLEASE review CONTRIBUTING.md prior to requesting a feature, filing a pull request or filing an issue.

&nbsp;
#### Translations
Honestly, I do not speak English very well. If you are interested in helping me improve this documentation you are welcome. And if you want to translate the documentation into other languages even better. ** navuu-navigation ** is open source and we do it together. ;)


# [What I'm Doing](http://about.me/ahmadeyamin)
