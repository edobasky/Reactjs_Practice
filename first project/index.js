/* Surprise! You probably thought you could just forget
the line of code you just learned! Nope, not on my watch!

Try to write that 1-liner of React code again! This time,
see if you can figure out how to render an <ul> with 2+ <li>s inside*/



const navbar = (
    <nav>
        <img src="react.png"></img>
 
        <h1>Fun facts about React</h1>
 
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originallyu created by Jordan Walke</li>
            <li>Has well over 100k stars on GitHub</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </nav>
 )
 
 ReactDOM.render(navbar,document.getElementById("root"));