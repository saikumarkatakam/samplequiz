(function(){

angular.module("ui")
.factory("dataService",dataservice);

function dataservice(){

  var dataObj={
    uidata:uidata,
    quizdata:quizdata,
	correctAnswers:correctAnswers
  };
  return dataObj;
}

var correctAnswers = [1,0,0,2,1,0,0,2];


var quizdata=[
{
  type:"text",
  text:"What is the correct HTML for making a checkbox?",
  possibilities:[
 {answer:"<input type='check'>"},
    {answer:"<input type='checkbox'>"},
    {answer:"<checkbox>"},
    {answer:"<check>"}
  ],
  selected: null,
  correct:null
},
{
   type:"image",
  text:"Which is the correct CSS syntax?",
  possibilities:[
   {answer:"images/2a.png"},
    {answer:"images/2b.png"},
    {answer:"images/2c.png"},
    {answer:"images/2d.png"}
  ],
  selected: null,
  correct:null
},
{
  type:"text",
  text:"Inside which HTML element do we put the JavaScript?",
  possibilities:[
  {answer:"<script>"},
    {answer:"<javascript>"},
    {answer:"<js>"},
    {answer:"<scripting>"}
  ],
  selected: null,
  correct:null
},
{
  type:"text",
  text:"The Bootstrap grid system is based on how many columns?",
  possibilities:[
   {answer:"6"},
    {answer:"13"},
    {answer:"12"},
    {answer:"9"}
  ],
  selected: null,
  correct:null
},
{
  type:"text",
  text:"What is the correct jQuery code to set the background color of all p elements to red?",
  possibilities:[
   {answer:"$('p').css('background-color','red');"},
    {answer:"$('p').style('background-color','red');"},
    {answer:"$('p').layout('background-color','red');"},
    {answer:"$('p').manipulate('background-color','red');"}
  ],
  selected: null,
  correct:null
},
{
  type:"text",
  text:"AngularJS expressions are written using?",
  possibilities:[
   {answer:"{{expression}}"},
    {answer:"{expression}"},
    {answer:"(expression)"},
    {answer:"[expression]"}
  ],
  selected: null,
  correct:null
},
{
  type:"text",
  text:"Which of following command starts a REPL session?",
  possibilities:[
   {answer:"$node"},
    {answer:"$ node start"},
    {answer:"$ node repl"},
    {answer:"$ node console"}
  ],
  selected: null,
  correct:null
},
{
  type:"text",
  text:"Which of the following is true about writable stream?",
  possibilities:[
   {answer:"writable stream is used for write operation."},
    {answer:"Output of readable stream can be input to a writable stream."},
    {answer:"Both of the above"},
    {answer:"None"}
  ],
  selected: null,
  correct:null
}
]
var uidata= [
  {
    name:"HTML",
    initialrelease:"1993",
    image:"images/htmlkum.jpg",
    developer:"W3C & WHATWG",
    version:"HTML5",
    description:"Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages. HTML5 is the latest evolution of the standard that defines HTML. HTML5 is a new version of the language HTML, with new elements, attributes, and behaviors; and a larger set of technologies that allows more diverse and powerful Web sites and applications. "
  },
  {
    name:"CSS",
    initialrelease:"Dec 1996",
    image:"images/csskum.png",
    developer:"World Wide Web Consortium",
    version:"CSS3",
    description:"CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers."
  },
  {
    name:"Javascript",
    initialrelease:"Mar 1996",
    image:"images/javascriptkum.png",
    developer:"Mozilla Foundation",
    version:"ES6",
    description:"JavaScript is a programming language used to make web pages interactive. It is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented, imperative, and functional programming styles. JavaScript runs on the client side of the web, which can be used to design / program how the web pages behave on the occurrence of an event."
  },
  {
    name:"jQuery",
    initialrelease:"Aug 2006",
    image:"images/jquerykum.png",
    developer:"jQuery Team",
    version:"jQuery 3.1",
    description:"jQuery is a cross-platform JS library designed to simplify the client-side scripting. jQuery is a fast, small, and feature-rich JS library. It makes things like event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.  "
  },
  {
    name:"AngularJS",
    initialrelease:"Oct 2010",
    image:"images/angularkum.png",
    developer:"Google",
    version:"Angular 2.0",
    description:"AngularJS (commonly referred to as Angular or Angular.js) is a complete JS-based open-source front-end web application framework. AngularJS is a structural framework for dynamic web apps. AngularJS's data binding and dependency injection eliminate much of the code you would otherwise have to write. "
  },
  {
    name:"Bootstrap",
    initialrelease:"Aug 2011",
    image:"images/boot.png",
    developer:"Bootstrap Core Team",
    version:"Bootstrap 4",
    description:"Bootstrap is a free front-end framework for faster and easier web development. Bootstrap is a free and open-source front-end web framework for designing websites and web applications. Bootstrap includes design templates for typography, forms, buttons, tables, navigation, modals, image  "
  },
  {
    name:"Node.js",
    initialrelease:"May 2009",
    image:"images/nodejskum.png",
    developer:"Node.js developers",
    version:"Node V6.0.0",
    description:"Node.js is a platform built on Chrome's JS runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices. "
  },
  {
    name:"ReactJS",
    initialrelease:"Mar 2013",
    image:"images/reactjskum.png",
    developer:"Facebook",
    version:"React v15.0",
    description:"React.js is a JS library for building user interfaces, built by top engineers at Facebook. ... React is a JS library, but is often mistakenly referred to as a framework. Like many popular frameworks, React is all about reusable components."
  }
]

})();
