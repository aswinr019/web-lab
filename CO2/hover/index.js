const titleElmnt = document.getElementById("title");
const imageElmnt = document.getElementById("img");
const paraElmnt = document.getElementById("para");

python = `<p>Python is an interpreted, interactive, object-oriented programming language.
 It incorporates modules, exceptions, dynamic typing, very high level dynamic data types,
and classes. It supports multiple programming paradigms beyond object-oriented programming,
such as procedural and functional programming. Python combines remarkable power with 
very clear syntax. It has interfaces to many system calls and libraries, as well as to
various window systems, and is extensible in C or C++. It is also usable as an extension
 language for applications that need a programmable interface. Finally, Python is portable:
 it runs on many Unix variants including Linux and macOS, and on Windows.</p>
 <p>Python was created by Guido van Rossum, and first released on February 20, 1991.
While you may know the python as a large snake, the name of the Python programming language
comes from an old BBC television comedy sketch series called Monty Python’s Flying Circus.</p>
`;
js = `<p>
JavaScript (JS) is a lightweight, interpreted, or just-in-time
compiled programming language with first-class functions. While it is
most well-known as the scripting language for Web pages, many
non-browser environments also use it, such as Node.js, Apache CouchDB
and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm,
single-threaded, dynamic language, supporting object-oriented,
imperative, and declarative (e.g. functional programming) styles.
</p>
<p>
JavaScript's dynamic capabilities include runtime object construction,
variable parameter lists, function variables, dynamic script creation
(via eval), object introspection (via for...in and Object utilities),
and source-code recovery (JavaScript functions store their source text
and can be retrieved through toString()).
</p>
<p>
This section is dedicated to the JavaScript language itself, and not
the parts that are specific to Web pages or other host environments.
For information about APIs that are specific to Web pages, please see
Web APIs and DOM.
</p>`;

imageElmnt.addEventListener("mouseenter", function () {
  titleElmnt.textContent = `Python`;
  imageElmnt.setAttribute("src", "python.png");
  paraElmnt.innerHTML = python;
});

imageElmnt.addEventListener("mouseleave", function () {
  titleElmnt.textContent = `JavaScript`;
  imageElmnt.setAttribute("src", "js.png");
  paraElmnt.innerHTML = js;
});
