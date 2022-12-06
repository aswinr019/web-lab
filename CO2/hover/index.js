// console.log("hello");

const content = document.getElementById("content");
const image = document.getElementById("img");
const para = document.getElementById("para");

content.addEventListener("mouseover", function () {
  console.log("mouse over");

  if (image.getAttribute("src") == "js.png") {
    image.setAttribute("src", "php.png");
    para.textContent = `PHP is a general-purpose scripting language geared toward web development.
   It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995.
     The PHP reference implementation is now produced by The PHP Group. PHP originally 
    stood for Personal Home Page,but it now stands for the recursive initialism PHP: Hypertext Preprocessor.
    PHP code is usually processed on a web server by a PHP interpreter implemented as a module, a daemon or as 
    a Common Gateway Interface (CGI) executable. On a web server, the result of the interpreted and executed PHP 
    code – which may be any type of data, such as generated HTML or binary image data – would form the whole or
     part of an HTTP response. Various web template systems, web content management systems, and web frameworks 
     exist which can be employed to orchestrate or facilitate the generation of that response. Additionally, 
     PHP can be used for many programming tasks outside the web context, such as standalone graphical applications
      and robotic drone control.
     PHP code can also be directly executed from the command line.`;
  } else {
    image.setAttribute("src", "js.png");

    para.textContent = `JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled
    programming language with first-class functions. While it is most
    well-known as the scripting language for Web pages, many non-browser
    environments also use it, such as Node.js, Apache CouchDB and Adobe
    Acrobat. JavaScript is a prototype-based, multi-paradigm,
    single-threaded, dynamic language, supporting object-oriented,
    imperative, and declarative (e.g. functional programming) styles.
    JavaScript's dynamic capabilities include runtime object construction,
    variable parameter lists, function variables, dynamic script creation
    (via eval), object introspection (via for...in and Object utilities),
    and source-code recovery (JavaScript functions store their source text
    and can be retrieved through toString()).`;
  }
});
