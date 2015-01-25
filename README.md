# React Demo

Simple client-only demonstration of React in action.

### Take the Tour Locally

```bash
git clone git@github.com:pathouse/ArbitraryReactJSDemonstration.git
cd ArbitraryReactJSDemonstration
```
To make React happy you need some HTTP in there so serve up the directory:
```bash
python -m SimpleHTTPServer
```
Then navigate your way to what is probably `localhost:8000`

From `master` 
Step 1 = `HEAD~4`
Step 2 = `HEAD~3`
Step 3 = `HEAD~2`
Step 4 = `HEAD~1`
Step 5 = `you're there!`

### Step 1 Highlights

Set up the HTML page. Load in some JS libs. Only interesting line is 
```html
<script src="/vendor/JSXTransformer.js"></script>
```

JSX is React's combo of XML and Javascript and it's what you're going to be writing 
components in. We need this to turn it in to pure Javascript for execution on the client.

Nothing on the page. NEXT!

### Step 2 Highlights

First checkout `index.html`

Alrighty now we see the mounting process in action. We have our first component on the page, let's take a look at it.

Explain state initialization. Render the items, render the component. On the page! No items, all is as it should be. NEXT!

### Step 3 Highlights

We can add items to the list. Now we're cooking with fire. And look how easy that was. Listen to changes, update the state, and everything just handles itself.

### Step 4 Highlights

Now we see some nested components for the first time as things get more complicated. Also on the scene is a demonstration of React's 1-way data flow paradigm.

### Step 5 Highlights

A couple of things happening here so let's take them one at a time. 

First of all, React is all about reusable components, and as I go to change one of these inputs to a select, I realize I'm duplicating my effort in the rows and in the new form. With some simple refactoring I'm able to get one component that works in both locations. Boom.

Now we've also introduced another read-only component that responds to changes in the data from our parent component. 

In column A we now have any one of a few possible selections, so our new InfoPanel component is going to report how many there are of each selection in the list. 

In column B, our InfoPanel is going to try and coerce our input into numbers and add them all up, reporting that as the current number of OSTRICHES.

In column C, our InfoPanel is merely going to concatenate all of the strings and display them as one long rambling sentence.

Most importantly, all of these info panels respond immediately to updates in the rows, just by hooking it up to the parent component's state.


