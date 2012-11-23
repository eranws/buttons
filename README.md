<style>
body
{
background-color:#d0e4fe;
}
h1
{
color:blue;
text-align:center;
}
p
{
font-family:"Times New Roman";
font-size:20px;
}
</style>



buttons
=======

levels of intelligent interaction

i want to drill down a bit on the input parameters, starting from the most basic _Primitives_, and their _Relations_:

Primitives:
 
* reset (momentary, bang) //is this void*?
* toggle (boolean state)

more Complex types:

* slider (float state)
* selector (int state)
* combo (enumed state)

<class="code"
<cpp
class Button
{
	set() // turns on
	get() //
	State s;}
template<T]
class TypedButton<T]
{
	T state;
//specializtion on primitives
}
template<T
class State<T
{
	T type;
}
Reset : Button //returns an object like scopedPtr, resets on dtor
Toggle : ButtonState<bool]
{
	set()}
}
>


Relations:

* or
* and

for a system with two buttons R, T, we can define many outcomes
 
if (R && T)

if (R) set(T)



###example of complex behavior:
# ~ My Water Heater ~
####it has **twenty four** hour clock, in a **quarters**

#so it has **nine-ty** six *toggles*

##which means **2^96** possible *states*

##there is a on-off *toggle*, connected

##! @d@  #u# **SERIALY** #m# @b@ !

#to a *tri*-*state* switch.

it has possibly **six** *configurations*, out of them I need three

### Which ARE already in the tri-state switch!
