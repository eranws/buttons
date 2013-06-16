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
* combo box (enumed state)

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
 
`if (R && T)`

`if (R) set(T)`

<qq
T.set()
set(T)
>


###example of complex behavior:
# ~ My Water Heater ~

it has **twenty four** hour clock, in a **quarters** so it has **nine-ty** six *toggles*, which means **2^96** possible *states*. there is a on-off *toggle*, connected serially to a *tri*-*state* switch.

it has possibly **six** *configurations*, out of them I need three - Which *are already in* the tri-state switch!

# derivatives:
## a state with a non-linear response 

a type <with a state> can change its a state in a non linear manner, e.g: double its value on each press, 

responsive to events: down, up, long press, hover in/out

#Project
extend [jQuery UI](http://jqueryui.com/), using more sophisticated buttons