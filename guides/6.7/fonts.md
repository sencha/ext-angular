<style>
@font-face {
    font-family: 'ExtJS';
    src:url('./resources/ExtJS.eot');
    src:url('./resources/ExtJS.eot') format('embedded-opentype'),
    url('./resources/ExtJS.woff') format('woff'),
    url('./resources/ExtJS.ttf') format('truetype'),
    url('./resources/ExtJS.svg') format('svg');
    font-weight: normal;
    font-style: normal;
}

.extjs-font {
  font-family: 'ExtJS';
  font-size:2em;
}

@font-face {
    font-family: 'Pictos';
    src: url('./resources/pictos-web.eot');
    src: url('./resources/pictos-web.eot?#iefix') format('embedded-opentype'),
    url('./resources/pictos-web.woff') format('woff'),
    url('./resources/pictos-web.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

.pictos {
    font-family: Pictos;
    font-size:2em;
}
</style>

#Sencha Font Packages
ExtJS comes shipped with three web font packages for use with your application. These web fonts 
can be used to specify icons for use with components that provide either the `iconCls` or 
`glyph` props.

##Available Font Packages
The three font packages and information about them are included in the following table :
<table>
<tr><td><b>Font Package</b></td><td><b>Package Name</b></td><td><b>fontCls</b></td><td><b>iconPrefix</b></td><td><b>fontFamily</b></td></tr>
<tr><td>ExtJs</td><td>font-ext</td><td>ext</td><td>ext</td><td>ExtJS</tr>
<tr><td>Font Awesome</td><td>font-awesome</td><td>x-fa</td><td>fa</td><td>FontAwesome</td></tr>
<tr><td>Pictos</td><td>font-pictos</td><td>pictos</td><td>pictos</td><td>Pictos</td></tr>
</table>

**Note:** Ext JS 6+ supports Font Awesome version 4.4.0.  For a list of all available Font Awesome icons, 
please check out the [Font Awesome Cheatsheet](http://fontawesome.io/cheatsheet/).

Font packages are included by specifying the font package name (above) in the `requires` array 
of your app.json file (for applications) or package.json file (for theme/code packages) :

  // Require the Pictos font package
  "requires": [
      "font-pictos"
  ]

Once required by your application, you may display the font icons using either the `iconCls` or
`glyph` props.

###iconCls Usage
The `iconCls` prop allows you to take advantage of predefined css styles in the
packages that map to web font characters with meaningful names (eg home, help, info)

Referencing an icon using the `iconCls` prop is pretty straightforward and 
is done by specifying an iconCls in the following format:

  iconCls='{fontCls} {iconPrefix}-{iconName}'

The {fontCls} and {iconPrefix} values for each font package are shown in the above 
table. The {iconName} for each icon is found in the detailed font package tables at the
end of this guide.

For example, to specify the Pictos `home` icon, you would specify your `iconCls` prop as:

  iconCls='pictos pictos-home'

Similarly, to specify the Font Awesome `home` icon, you would specify your `iconCls` prop as:

  iconCls='x-fa fa-home'

##Font Icon Tables
Below are reference tables which provide you with a list of the available icons found in each of the
Font packages. The tables show the icon itself, its character or hex code for use with the `glyph` 
prop and the CSS class name to use for the `iconCls` prop (see above).

###ExtJS Font Package
<table>
     <tr>
          <td>Icon</td> 
          <td>Glyph Value</td> 
          <td>iconName</td> 
          <td></td>
          <td>Icon</td> 
          <td>Glyph Value</td> 
          <td>iconName</td> 
     </tr>
     <tr>
          <td class='extjs-font'>&#xe612;</td>
          <td>xe612</td>
          <td>equals-vertical</td>
          <td></td>
          <td class='extjs-font'>&#xe600;</td>
          <td>xe600</td>
          <td>collapse</td>
     </tr> 
     <tr>
          <td class='extjs-font'>&#xe601;</td>
          <td>xe601</td>
          <td>columns</td>
          <td></td>
          <td class='extjs-font'>&#xe602;</td>
          <td>xe602</td>
          <td>dirty-rtl</td>
     </tr>  
     <tr>
          <td class='extjs-font'>&#xe603;</td>
          <td>xe603</td>
          <td>dirty</td>
          <td></td>
          <td class='extjs-font'>&#xe604;</td>
          <td>xe604</td>
          <td>edit-html</td>
     </tr>  
     <tr>
          <td class='extjs-font'>&#xe605;</td>
          <td>xe605</td>
          <td>equals</td>
          <td></td>
          <td class='extjs-font'>&#xe606;</td>
          <td>xe606</td>
          <td>expand</td>
     </tr>
     <tr>
          <td class='extjs-font'>&#xe607;</td>
          <td>xe607</td>
          <td>group-by</td>
          <td></td>
          <td class='extjs-font'>&#xe609;</td>
          <td>xe609</td>
          <td>ne-handle</td>
     </tr>
     <tr>
          <td class='extjs-font'>&#xe60a;</td>
          <td>xe60a</td>
          <td>nw-handle</td>
          <td></td>
          <td class='extjs-font'>&#xe60b;</td>
          <td>xe60b</td>
          <td>se-handle</td>
     </tr>       
     <tr>
          <td class='extjs-font'>&#xe60c;</td>
          <td>xe60c</td>
          <td>sw-handle</td>
          <td></td>
          <td class='extjs-font'>&#xe60d;</td>
          <td>xe60d</td>
          <td>text-background-color</td>
     </tr>
     <tr>
          <td class='extjs-font'>&#xe60e;</td>
          <td>xe60e</td>
          <td>text-color</td>
          <td></td>
          <td class='extjs-font'>&#xe60f;</td>
          <td>xe60e</td>
          <td>text-decrease</td>
     </tr>
     <tr>
          <td class='extjs-font'>&#xe610;</td>
          <td>xe60e</td>
          <td>text-increase</td>
          <td></td>
          <td class='extjs-font'>&#xe611;</td>
          <td>xe60e</td>
          <td>unpin</td>
     </tr>
</table>

###Pictos Font Package
<table>
     <tr>
          <td>Icon</td>
          <td>Glyph Value</td>
          <td>iconName</td>
          <td></td>
          <td>Icon</td>
          <td>Glyph Value</td>
          <td>iconName</td>
     </tr>
     <tr>
          <td class='pictos'>a</td>
          <td>a</td>
          <td>anchor</td>
          <td></td>
          <td class='pictos'>A</td>
          <td>A</td>
          <td>attachment2</td>
     </tr>
     <tr>
          <td class='pictos'>b</td>
          <td>b</td>
          <td>box</td>
          <td></td>
          <td class='pictos'>B</td>
          <td>B</td>
          <td>bird</td>
     </tr>
     <tr>
          <td class='pictos'>c</td>
          <td>c</td>
          <td>upload</td>
          <td></td>
          <td class='pictos'>C</td>
          <td>C</td>
          <td>cloud</td>
     </tr>
     <tr>
          <td class='pictos'>d</td>
          <td>d</td>
          <td>forbidden</td>
          <td></td>
          <td class='pictos'>D</td>
          <td>D</td>
          <td>delete_black1</td>
     </tr>
     <tr>
          <td class='pictos'>e</td>
          <td>e</td>
          <td>lightning</td>
          <td></td>
          <td class='pictos'>E</td>
          <td>E</td>
          <td>eye</td>
     </tr>
     <tr>
          <td class='pictos'>f</td>
          <td>f</td>
          <td>rss</td>
          <td></td>
          <td class='pictos'>F</td>
          <td>F</td>
          <td>file</td>
     </tr>
     <tr>
          <td class='pictos'>g</td>
          <td>g</td>
          <td>team</td>
          <td></td>
          <td class='pictos'>G</td>
          <td>G</td>
          <td>browser</td>
     </tr>
     <tr>
          <td class='pictos'>h</td>
          <td>h</td>
          <td>help</td>
          <td></td>
          <td class='pictos'>H</td>
          <td>H</td>
          <td>home</td>
     </tr>
     <tr>
          <td class='pictos'>i</td>
          <td>i</td>
          <td>info</td>
          <td></td>
          <td class='pictos'>I</td>
          <td>I</td>
          <td>inbox</td>
     </tr>
     <tr>
          <td class='pictos'>j</td>
          <td>j</td>
          <td>attachment</td>
          <td></td>
          <td class='pictos'>J</td>
          <td>J</td>
          <td>network</td>
     </tr>
     <tr>
          <td class='pictos'>k</td>
          <td>k</td>
          <td>heart</td>
          <td></td>
          <td class='pictos'>K</td>
          <td>K</td>
          <td>key</td>
     </tr>
     <tr>
          <td class='pictos'>l</td>
          <td>l</td>
          <td>list</td>
          <td></td>
          <td class='pictos'>L</td>
          <td>L</td>
          <td>radio</td>
     </tr>
     <tr>
          <td class='pictos'>m</td>
          <td>m</td>
          <td>music</td>
          <td></td>
          <td class='pictos'>M</td>
          <td>M</td>
          <td>mail</td>
     </tr>
     <tr>
          <td class='pictos'>n</td>
          <td>n</td>
          <td>table</td>
          <td></td>
          <td class='pictos'>N</td>
          <td>N</td>
          <td>news</td>
     </tr>
     <tr>
          <td class='pictos'>o</td>
          <td>o</td>
          <td>folder</td>
          <td></td>
          <td class='pictos'>O</td>
          <td>O</td>
          <td>case</td>
     </tr>
     <tr>
          <td class='pictos'>p</td>
          <td>p</td>
          <td>pencil</td>
          <td></td>
          <td class='pictos'>P</td>
          <td>P</td>
          <td>photos</td>
     </tr>
     <tr>
          <td class='pictos'>q</td>
          <td>q</td>
          <td>chat2</td>
          <td></td>
          <td class='pictos'>Q</td>
          <td>Q</td>
          <td>power</td>
     </tr>
     <tr>
          <td class='pictos'>r</td>
          <td>r</td>
          <td>retweet</td>
          <td></td>
          <td class='pictos'>R</td>
          <td>R</td>
          <td>action</td>
     </tr>
     <tr>
          <td class='pictos'>s</td>
          <td>s</td>
          <td>search</td>
          <td></td>
          <td class='pictos'>S</td>
          <td>S</td>
          <td>favorites</td>
     </tr>
     <tr>
          <td class='pictos'>t</td>
          <td>t</td>
          <td>time</td>
          <td></td>
          <td class='pictos'>T</td>
          <td>T</td>
          <td>plane</td>
     </tr>
     <tr>
          <td class='pictos'>u</td>
          <td>u</td>
          <td>switch</td>
          <td></td>
          <td class='pictos'>U</td>
          <td>U</td>
          <td>user</td>
     </tr>
     <tr>
          <td class='pictos'>v</td>
          <td>v</td>
          <td>camera</td>
          <td></td>
          <td class='pictos'>V</td>
          <td>V</td>
          <td>video</td>
     </tr>
     <tr>
          <td class='pictos'>w</td>
          <td>w</td>
          <td>chat</td>
          <td></td>
          <td class='pictos'>W</td>
          <td>W</td>
          <td>compose</td>
     </tr>
     <tr>
          <td class='pictos'>x</td>
          <td>x</td>
          <td>settings2</td>
          <td></td>
          <td class='pictos'>X</td>
          <td>X</td>
          <td>truck</td>
     </tr>
     <tr>
          <td class='pictos'>y</td>
          <td>y</td>
          <td>settings</td>
          <td></td>
          <td class='pictos'>Y</td>
          <td>Y</td>
          <td>chart2</td>
     </tr>
     <tr>
          <td class='pictos'>z</td>
          <td>z</td>
          <td>tags</td>
          <td></td>
          <td class='pictos'>Z</td>
          <td>Z</td>
          <td>chart</td>
     </tr> 
     <tr>
          <td class='pictos'>\`</td>
          <td>\`</td>
          <td>expand</td>
          <td></td>
          <td class='pictos'>~</td>
          <td>~</td>
          <td>download</td>
     </tr>
     <tr>
          <td class='pictos'>1</td>
          <td>1</td>
          <td>refresh</td>
          <td></td>
          <td class='pictos'>!</td>
          <td>@</td>
          <td>warning_black</td>
     </tr>
     <tr>
          <td class='pictos'>2</td>
          <td>2</td>
          <td>check</td>
          <td></td>
          <td class='pictos'>@</td>
          <td>@</td>
          <td>locate</td>
     </tr>
     <tr>
          <td class='pictos'>3</td>
          <td>3</td>
          <td>check2</td>
          <td></td>
          <td class='pictos'>#</td>
          <td>#</td>
          <td>trash</td>
     </tr>
     <tr>
          <td class='pictos'>4</td>
          <td>4</td>
          <td>play</td>
          <td></td>
          <td class='pictos'>$</td>
          <td>$</td>
          <td>cart</td>
     </tr>
     <tr>
          <td class='pictos'>5</td>
          <td>5</td>
          <td>pause</td>
          <td></td>
          <td class='pictos'>%</td>
          <td>%</td>
          <td>bank</td>
     </tr>
     <tr>
          <td class='pictos'>6</td>
          <td>6</td>
          <td>stop</td>
          <td></td>
          <td class='pictos'>^</td>
          <td>^</td>
          <td>flag</td>
     </tr>
     <tr>
          <td class='pictos'>7</td>
          <td>7</td>
          <td>forward</td>
          <td></td>
          <td class='pictos'>&</td>
          <td>&</td>
          <td>add</td>
     </tr>
     <tr>
          <td class='pictos'>8</td>
          <td>8</td>
          <td>rewind</td>
          <td></td>
          <td class='pictos'>*</td>
          <td>*</td>
          <td>delete</td>
     </tr>
     <tr>
          <td class='pictos'>9</td>
          <td>9</td>
          <td>play2</td>
          <td></td>
          <td class='pictos'>(</td>
          <td>(</td>
          <td>lock</td>
     </tr>
     <tr>
          <td class='pictos'>0</td>
          <td>0</td>
          <td>refresh2</td>
          <td></td>
          <td class='pictos'>)</td>
          <td>!</td>
          <td>unlock</td>
     </tr>     
     <tr>
          <td class='pictos'>-</td>
          <td>-</td>
          <td>minus</td>
          <td></td>
          <td class='pictos'>_</td>
          <td>_</td>
          <td>minus2</td>
     </tr>
     <tr>
          <td class='pictos'>=</td>
          <td>=</td>
          <td>battery</td>
          <td></td>
          <td class='pictos'>+</td>
          <td>+</td>
          <td>add2</td>
     </tr>
     <tr>
          <td class='pictos'>[</td>
          <td>[</td>
          <td>left</td>
          <td></td>
          <td class='pictos'>{</td>
          <td>{</td>
          <td>up</td>
     </tr>          
     <tr>
          <td class='pictos'>]</td>
          <td>]</td>
          <td>right</td>
          <td></td>
          <td class='pictos'>}</td>
          <td>}</td>
          <td>down</td>
     </tr>
     <tr>
          <td class='pictos'>\</td>
          <td>\</td>
          <td>calendar</td>
          <td></td>
          <td class='pictos'>|</td>
          <td>|</td>
          <td>screens</td>
     </tr>     
     <tr>
          <td class='pictos'>;</td>
          <td>;</td>
          <td>shuffle</td>
          <td></td>
          <td class='pictos'>:</td>
          <td>:</td>
          <td>bell</td>
     </tr>     
     <tr>
          <td class='pictos'>'</td>
          <td>'</td>
          <td>wireless</td>
          <td></td>
          <td class='pictos'>"</td>
          <td>"</td>
          <td>quote</td>
     </tr>     
     <tr>
          <td class='pictos'>,</td>
          <td>,</td>
          <td>speedometer</td>
          <td></td>
          <td class='pictos'><</td>
          <td><</td>
          <td>volume_mute</td>
     </tr>     
     <tr>
          <td class='pictos'>.</td>
          <td>.</td>
          <td>more</td>
          <td></td>
          <td class='pictos'>></td>
          <td>></td>
          <td>volume</td>
     </tr>
     <tr>
          <td class='pictos'>/</td>
          <td>/</td>
          <td>print</td>
          <td></td>
          <td class='pictos'>?</td>
          <td>?</td>
          <td>question</td>
     </tr>          
</table>
