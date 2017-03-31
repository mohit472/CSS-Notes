 			    Introduction to CSS
 A CSS (cascading style sheet) file allows you to separate your web sites HTML content from it's style. As always you use your HTML file to arrange the content, but all of the presentation (fonts, colors, background, borders, text formatting, link effects & so on...) are accomplished within a CSS. At this point you have some choices of how to use the CSS, either internally or externally.
3 Methods to add CSS.
These are :
Internal Stylesheet: 
<head>
<title><title>
<style type="text/css">
//CSS Content Goes Here
</style>
</head>
<body>
		//body text
</body>
				  External Stylesheet

<head>
<link rel="stylesheet" type="text/css" href="Path To
stylesheet.css" />
</head>
					OR

<style type="text/css">@import url(Path To
stylesheet.css)</style>

NOTE:
//The css path should be saved  as another file filename.css and should be included in the head section by singular tag link. 
Example:

<head>
<title><title>
<link rel="stylesheet" type="text/css"href="style.css" />
</head>
<body>
or

<head>
<title><title>
<style type="text/css"> @import url(Path To stylesheet.css)
</style>
</head>
<body>


				Inline Styles

<p style="color: #ff0000;">Some red text</p>

NOTE: All css properties should be add by style attribute.


				CSS SYNTAX

Syntax :    selector { property: value }

EXAMPLE:
body {
background: #eeeeee;
font-family: "Trebuchet MS", Verdana, Arial, serif;
}
NOTE: If u provide many font family members according to the browser it will automatically accepted.
			     COMMENT TAGS

This is how we add comments to the line. 

/* This is a comment */

		Or

//this is a comment line.
(only work for single line)

			COMBINING SELECTORS

h1, h2, h3, h4, h5, h6
 { color: #009900; font-family: Georgia, sans-serif; }

NOTE: We can add as many as tags to apply the same property.
