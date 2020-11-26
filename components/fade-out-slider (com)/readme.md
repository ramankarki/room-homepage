<h3>Animation properties</h3>
<ul>
<li>@keyframes
<p>@keyframes example</p> </li>

<li>animation-name
<p>animation-name: example;</p>
 </li>

<li>animation-delay
<p>The animation-delay property specifies a delay for the start of an animation. <br> animation-delay: 400ms;<br> Negative values are also allowed. If using negative values, the animation will start as if it had already been playing for N seconds.</p>
</li>

<li>animation-direction
<p>The animation-direction property can have the following values: </p>
<ul>
<li> normal - The animation is played as normal (forwards). This is default </li>
<li> reverse - The animation is played in reverse direction (backwards) </li>
<li> alternate - The animation is played forwards first, then backwards </li>
<li> alternate-reverse - The animation is played backwards first, then forwards </li>
</ul> </li>
<li>animation-duration
<p>The animation-duration property defines how long time an animation should take to complete. If the animation-duration property is not specified, no animation will occur, because the default value is 0s (0 seconds). </p></li>

<li>animation-fill-mode

<p> The animation-fill-mode property specifies a style for the target element when the animation is not playing (before it starts, after it ends, or both).<br>

The animation-fill-mode property can have the following values:</p>
<ul>
<li> none - Default value. Animation will not apply any styles to the element before or after it is executing </li>
<li> forwards - The element will retain the style values that is set by the last keyframe (depends on animation-direction and animation-iteration-count) </li>
<li> backwards - The element will get the style values that is set by the first keyframe (depends on animation-direction), and retain this during the animation-delay period </li>
<li> both - The animation will follow the rules for both forwards and backwards, extending the animation properties in both directions </li>
</ul></li>

<li>animation-iteration-count
<p>The animation-iteration-count property specifies the number of times an animation should run <br> animation-iteration-count: 3; <br>
  animation-iteration-count: infinite;

</p> </li>
<li>animation-play-state
<p>running <br> paused</p> </li>

<li>animation-timing-function
<p>The animation-timing-function property can have the following values: </p>
<ul>
<li> ease - Specifies an animation with a slow start, then fast, then end slowly (this is default) </li>
<li> linear - Specifies an animation with the same speed from start to end </li>
<li> ease-in - Specifies an animation with a slow start </li>
<li> ease-out - Specifies an animation with a slow end </li>
<li> ease-in-out - Specifies an animation with a slow start and end </li>
<li> cubic-bezier(n,n,n,n) - Lets you define your own values in a cubic-bezier function </li>
</ul> </li>
<li>animation
<p>animation-name: example; <br>
  animation-duration: 5s; <br>
  animation-timing-function: linear; <br>
  animation-delay: 2s; <br>
  animation-iteration-count: infinite; <br>
  animation-direction: alternate;</p> </li>
</ul>

