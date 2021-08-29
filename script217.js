'use strict';

class PersonInt {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calAge() {
    console.log(`${2021 - this.birthYear} parent class`);
  }
  greet() {
    console.log(`Hello ${this.firstName}`);
  }

  static hey = function () {
    console.log('Hello this is static Function');
    console.log(this);
  };
}
const dev = new PersonInt('Devender Kumar', 1989);

class StudentClass extends PersonInt {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear);
    this.course = course;
  }
  calAge() {
    console.log(`${2021 - this.birthYear} Child Class`);
  }
}
const martha = new StudentClass('Martha Jones', 2012, 'Home science');
console.log(martha);
/* StudentClass { firstName: "Martha Jones",birthYear: 2012, course:"Home science" }
                  birthYear: 2012
                  course: "Home science"
                  firstName: "Martha Jones"
  [[Prototype]]: PersonInt
                  constructor: class StudentClass
  [[Prototype]]: Object
                  calAge: ƒ calAge()
                  constructor: class PersonInt
                  greet: ƒ greet()
  [[Prototype]]: Object     */

martha.calAge(); // 9 Child Class

// above child calAge methods is over ride with PersonInt calAge method

dev.calAge(); // 32 parent class

// PersonInt.hey(); // out is whole const function
// martha.hey();
// js:46 Uncaught TypeError: martha.hey is not a function

/* Let's now go ahead and implement the exact same thing
that we did in the last video,
but this time using ESXi classes instead
of constructor functions.
So here again,
I copied the initial person class
that we built a bit earlier so that now we can
inherit from this class.
All right.
And so down here, let's now create the student class.
So class Student like this.
Now, as we know already,
the class Syntax hides a lot of the details that
are actually happening behind the scenes,
because classes are really just a layer
of obstruction over constructor functions.
But that's no problem because we already learned how
inheritance between classes actually works
behind the scenes.
So that's what we did in the last lecture
and to coding challenge.
And so now that we know how it works,
we are ready to implement the same thing using classes,
even though that hides,
how it actually works behind the scenes.
So to implement inheritance between ESXi classes,
we only need two ingredients.
We need the extent keywords and we need the super function.
So to make this student class inherit from the person class,
all we need to do is to say extends
and then the person class so CL,
and this one, I'm also going to call cl here
just to follow the same name and that's actually it.
So this keyword alone here will then link
to prototypes behind the scenes
without us even having to think about that.
Then of course, we still need a constructor.
And this one will just like before receive
the same arguments as the parent class,
but then some additional ones.
So birth year, and also the course. Remember?
now here, we actually don't even need
to manually call like personcl not call like we did before
in the constructor function. Remember?
so here we don't need to do that.
What we do instead is to call the super function.
And so super is basically the constructor function
of the parent class.
So the idea is still similar to what we did
in the constructor function,
but here it all happens automatically.
We don't need to specify the name of the parent class again,
because that already happened up here.
So here now all we do is to pass in
the arguments for the constructor of the parent class.
And so that's these two, because that's exactly
the parameters that are also specified here
in the parent's constructor.
Now here in this constructor. So off the child class,
this always needs to happens first.
So let me even write that here.
needs to happen first.
And that's because this call to the super function
is responsible for creating
the disc keyword in this subclass.
And so therefore, without doing this,
we wouldn't be able to access the disc keyword to do this.
So always first the call to the super
so to the parents class constructor.
And from there, we will then be able
to access the disc keyword.
Now, of course we could actually
have no other properties here at all.
So this is not necessary. I mean, it's not mandatory.
And so the same goes for this additional parameter.
So in this case,
this new student class would simply have new methods
and share all the properties with the parent class.
So what we're doing here is really just an example,
but the possibilities are endless, right?
And actually, if we didn't want to do this,
then we wouldn't need any constructor function at all.
So in this case,
the super function would automatically be called
with all the arguments
that are passed into this constructor.
So let me just create a new student here.
So that's Martha. So a new studentCL
let's say Martha Jones born in 2012
and also studying computer science now. Right?
But let me duplicate this year very quick,
take this one out and only call this with these two.
And then as I was saying,
we could have no constructor at all,
and this would still work just the same.
So you see that now we would end up
with a student with the full name and the birth year,
just as specified.
Now, remember that this underscore here still comes from
this center function here.
So that's what we specified earlier.
And so of course now the student will inherit all of that
because in the end, these are really just methods too.
And so all the students will now inherit
all of these methods from the parent class.
But anyway, this was just to demonstrate to you
that if you do not need any new properties,
then you don't even need
to bother writing a constructor method in the child class.
But now let's take this back,
this as well, and of course also this,
and now let's see if this worked
and yeah, so now we have all the three properties here.
Okay?
Now let's just quickly add the introduce method.
So let me copy that from earlier.
There's no need to write the same code.
So that's the simple console.log
that we're going to execute here.
So introduce,
and so now we can call that on Martha.introduce
and we get, my name is undefined here,
but that's because here we actually have the full name
and not the first name.
And so now that actually works
and the same should work for the calcAge method
that is in the parent class.
So Martha.calcAge and indeed, that works as well.
And so let's now take a quick look here
at a prototype chain one more time,
just so you can see that a prototype chain
is actually just the same as before
when we created it manually.
So you see that indeed in a prototype of Martha,
we now have to introduce method.
So that's this one right here that we wrote in the class.
All right?
But now in the prototype after prototype,
we have indeed the calcAge method
and also the greet method and the age
and full name setters and getters.
And so this proves us that the prototype chain was
indeed set up automatically by basically by
this extends keyword here.
Now. Finally, just like we did in a previous challenge,
let's override one of the methods of the parent class.
So let's override the calcAge method here.
And so all we have to do is to add a new CalcAge right here,
and then let's simply log to the console I'm.
And then the age.
So 2037 - this.birth year, years old.
But as a student, I feel more like,
and then let's basically add 10 to this date because
when you're in university and you study a lot
then you will feel actually a lot older
than you actually are now, right?
And so now indeed,
this new method overrode the one that was already there
in the prototype chain.
And again, that's because
this new calcAge method here
appears first in the prototype chain.
And so therefore it is essentially overriding
the method coming from the parent class.
And we can also say that
this calcAge method here is shadowing
the one that is in the parent class.
And so that's actually, it,
that's all I have to show you
about implementing inheritance between classes,
using actual ESXi classes.
And just to make sure that you got this 100%,
I invite you one more time to check out the slides
from the previous lecture.
So the lecture where we did the same thing
using constructor functions.
So these slides, so these theory parts of the video,
I believe are really,
really helpful to understanding this.
Now, to finish this part of inheritance between classes.
Let me just say that this mechanism of inheritance
that we explored here can actually be very problematic
and dangerous in the real world
when we are designing software.
However, that's going to be a
topic for another day.
And we're going to talk a little bit about this when we talk
about functional programming, which as I've mentioned,
a couple of times is kind of the alternative
to object oriented programming.
Anyway, next up,
let's do the same thing with object.create.
So that's the third way of implementing object
oriented programming in JavaScript.

 */
