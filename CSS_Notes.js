                                                    ___________________
                                                    Introduction to CSS
                                                    ___________________
 > A CSS (cascading style sheet) file allows you to separate your web sites HTML content from its style. As always you use your HTML file to      arrange the content, but all of the presentation (fonts, colors, background, borders, text formatting, link effects & so on...) are  accomplished within a CSS. At this point you have some choices of how to use the CSS, either internally or externally.
        
            3 Methods to add CSS.
                These are :
    ___________________
1.  Internal Stylesheet: 
    ___________________
<head>
<title><title>
<style type="text/css">
//CSS Content Goes Here
</style>
</head>
<body>
		//body text
</body>

    ___________________ 
2.  External Stylesheet
    ___________________
    
<head>
<link rel="stylesheet" type="text/css" href="Path To
stylesheet.css" />
</head>
					OR

<style type="text/css">@import url(Path To
stylesheet.css)</style>

#NOTE:
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


    _____________   
3.	Inline Styles
    _____________

<p style="color: #ff0000;">Some red text</p>

#NOTE: All css properties should be add by style attribute.


                __________
				CSS SYNTAX
                __________
                
Syntax :    selector { property: value }

EXAMPLE:
body {
background: #eeeeee;
font-family: "Trebuchet MS", Verdana, Arial, serif;
}
#NOTE: If u provide many font family members according to the browser it will automatically accepted.
            
                ______________  
			     COMMENT TAGS
                 ____________
                 
This is how we add comments to the line. 

/* This is a comment */

		Or

//this is a comment line.
(only work for single line)


            ____________________
			COMBINING SELECTORS
            ___________________

h1, h2, h3, h4, h5, h6
 { color: #009900; font-family: Georgia, sans-serif; }

NOTE: We can add as many as tags to apply the same property.


            ____________
            CSS CLASSES
            ____________

.greenboldtext{
font-size: small;
color: #008080;
font-weight: bold;
}
  
  
  #NOTE: It is created with a dot( . ) sign in external css file.Also it is included in the main file by class attribute.
  
  
<p>
To put it more simply, this
  <span class="greenboldtext">sentence</span> you are reading is styled
in my CSS file by the following.
</p>
  
  #Note: Can be included in any tag.
  
  
                ______
                CSS ID
                ______
                
    #container{
width: 80%;
margin: auto;
padding: 20px;
padding: 20px;
border: 1px solid #666;
background: #ffffff;
}

#NOTE: It is created with a dot( # ) sign in external css file.Also it is included in the main file by id attribute.

<div id="container">
Everything within my document is inside this division.
</div>

#Note: Can be included in any tag.


                        _______________
                        CSS DIVISIONS
                        ______________
                        
<div>
Site contents go here
</div>

                    OR
                    
<div id="container">
Site contents go here
</div>

CSS file contain:

#container{
width: 70%;
margin: auto;
padding: 20px;
border: 1px solid #666;
background: #ffffff;
}


                        ________
                        CSS SPAN
                        ________
                
<span class="italic">This text is italic</span>

CSS file should contain

.italic{
font-style: italic;
}
            
                        ___________
                        CSS MARGINS
                        ___________
                
margin-top: length percentage or auto;
margin-left: length percentage or auto;
margin-right: length percentage or auto;
margin-bottom: length percentage or auto;

margin: 10px 10px 10px 10px;
If you declare all 4 values as I have above, the order is as follows:
1. top
2. right
3. bottom
4. left

If only one value is declared, it sets the margin on all sides. (see below)
margin: 10px;



If you only declare two or three values, the undeclared values are taken
from the opposing side. (see below)
margin: 10px 10px; /* 2 values */
margin: 10px 10px 10px; /* 3 values */



body{
margin: 20px;
background: #eeeeee;
font-size: small;
font-family: Tahoma, Arial, "Trebuchet MS", Helvetica, sansserif;
text-align: left;
}


                            ___________
                            CSS PADDING
                            ___________
                            
                            
                            
padding-top: length percentage;
padding-left: length percentage;
padding-right: length percentage;
padding-bottom: length percentage;


#NOTE:will also work same as margins.

