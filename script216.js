'use strict';
/* 216. Coding Challenge #3 */
///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as
 a CHILD "class" of Car.
 Besides a make and current speed, the EV also has the current battery charge
  in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and 
sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20,
 and decrease the charge by 1%. Then log a message like this: 'Tesla going at 
 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 
'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
//➖➖➖➖➖➖
const ElectricCar = function (make, curntSpeed) {
  this.make = make;
  this.curntSpeed = curntSpeed;
};

ElectricCar.prototype.acclerate = function () {
  this.curntSpeed += 20;
  // this.charge -= 1;
  this.charge--;
  console.log(`${this.make} going at ${this.curntSpeed} km/h 
       with a charge of ${this.charge} % -parent`);
};
console.log(ElectricCar.prototype);

//➖➖➖➖➖➖
const Ev = function (make, curntSpeed, charge) {
  ElectricCar.call(this, make, curntSpeed);
  this.charge = charge;
};
Ev.prototype = Object.create(ElectricCar.prototype);

Ev.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

console.log(Ev.prototype);

/* ElectricCar {chargeBattery: ƒ}
chargeBattery: ƒ (chargeTo)
[[Prototype]]: Object
acclerate: ƒ ()
constructor: ƒ (make, curntSpeed)
[[Prototype]]: Object */
//➖➖➖➖➖➖

const tesla = new Ev('Tesla', 120);

tesla.chargeBattery(90);

console.log(tesla);
console.log(tesla.__proto__);

tesla.acclerate(); // Tesla going at 110 km/h with a charge of 89 %
tesla.acclerate(); // Tesla going at 130 km/h with a charge of 88 %
tesla.acclerate(); // Tesla going at 150 km/h with a charge of 87 %

/* Let's now immediately apply what you just learnt,
here in coding challenge number three.
And in this one,
I want you to use a constructor function,
to implement an electric Car class.
So a class that should be called EV
and that will be a CHILD class of the Car class
that we created in the first challenge.
So in the first challenge you used a constructor function
to create the Car
and now here you're gonna use the same technique
to create the sub-class
So basically the child class called EV, okay?
Now the EV, which stands for Electric Vehicle by the way,
also has a make and a current speed of course,
but it also has a current battery charge in percentage.
And so that's here the charge property.
And so here in order to implement this child class,
you will have to do exactly what we did in the last video.
So basically connecting the two prototypes
of these two constructors.
Then on the EV class,
I want you to implement a charge battery method,
which takes into argument called chargeTo.
And then that simply set the charge of the battery
to that received value.
Then also on this class,
I want you to implement an accelerate method
which will increase the Car speed by 20.
And at the same time,
it will also decrease the charge by 1%.
And finally, this method
should also print to the console message like this.
So the Tesla is going at 140 kilometers per hour
with a charge of 22%.
And that's Tesla here
because that's the test data that you're going to use here.
So create an object based on this test data here,
and then just like before experiment,
a little bit with the accelerate and to break,
and also the chargeBattery methods.
And one important thing that I want you to do,
is to notice what happens
when you accelerate.
All right?
So review the definition of polymorphism
that I gave you right in the first video
of the section to make sense of this.
So I hope that this is another fun challenge
and I see you here once you're finished.
Okay.
So let me start by getting the code that we wrote
in the first challenge.
So of course there is no need to write it again.
And so here goes my solution,
which I hope you didn't need,
but of course it's always good to know,
how exactly I implemented it.
So EV is this function,
which has the same parameters
as the Car constructor.
So that's the make and the speed,
but then the additional property of charge.
And so now just like we did previously,
we will not manually define the make and speed properties
on the disc keyword,
but instead we will basically call the parent class.
And so that's Car.call
but with the disc keywords
that we are actually using in the EV.
So we pass, make and speed.
And so again,
this is exactly what we learned
in the previous lecture.
And then of course,
we need to still set the speed.
Now let's actually create the new Car here.
So the new object,
so that's a new EV Tesla going at 120
and a charge should start at 23%.
Okay, let's take a look here.
And the charge is not in there.
Oh yeah.
That's pretty stupid mistake here.
So of course that's got to be the charge.
And so now it's all there.
Okay, so that was the easy part.
Now comes the trickiest part,
which is to again link the prototypes.
So we want the prototype property of EV
to inherit from the prototype property of Car.
And so therefore we say Object.create,
which will create a new object.
So it will set EV.prototype to the new object,
which has as a prototype Car.prototype.
Great.
And so now let's actually add some methods
to the prototype of EV.
So EV.prototype.chargeBattery.
And this one is a function which takes in chargeTo.
And all it does is to set the charge
to the charge that we receive here.
All right.
So let's experiment with this one.
So tesla.charge battery
to 90.
And so now if we take a look at Tesla here,
it indeed now has the charge set to 90.
All right.
Now let's take a quick look actually here
at a prototype chain.
So let's see the prototype here.
And so that of course now includes chargedBattery.
Okay.
And that in turn,
will contain accelerate and brake,
which is the one
coming from the Car.
And so one more time,
this is exactly what we had
in a previous lecture.
So we had to de introduce and a prototype
of the students and then into prototype of the prototype,
we had to decal each method.
And so here that is accelerate and break.
And so of course we can now use that here.
So we can say tesla.brake,
and then through the prototype chain,
the Tesla object will have access to that.
And so indeed now it is going at 115 kilometers per hour.
Okay.
But now let's take Care of number three here,
which is to implement an accelerate method.
So let's do that after the charge battery.
So EV.prototype.accelerate.
And this one will set the speed
to a plus 20.
So it will increase it by 20
and it should decrease the charge by 1%, remember.
So just like this,
and then we should also log a console.
So a string to the console,
similar to this one that we had before.
So it's going at the speed
and then with a charge of,
and then this.charge.
Okay, So let's call that right after the break.accelerate,
and let's see what happens now.
And it worked just fine.
So we increased by 20
and a charge decreased indeed by a one.
So indeed it was this accelerate method here,
that was used.
And that's important to notice
because the Car itself also has an accelerate method, right?
So we can see that here as well.
So in the prototype of the Tesla,
we now have accelerate,
but in a prototype of that itself.
And so that's gonna be the prototype of Car.
We also have accelerate, right?
But JavaScript of course used to first one.
So when there are two methods
or properties with the same name in a prototype chain,
then the first one that appears in the chain
is the one that's gonna be used.
So the same is true also for the scope chain.
And this is the behavior that makes sense.
So with is basically a child class
can overwrite a method
that inherited from the parent class.
So if we didn't create
this accelerate method here,
then this would still work, right?
Because then the Tesla would simply inherit
the accelerate method from the Car.
Right?
Of course, now this wouldn't manipulate a charge.
It would simply increase the speed by 10,
but it would work
because it can still find the accelerate method
in the prototype chain.
But now as we have this,
then this accelerate method will override the one
from the parent class.
And remember that this is exactly the definition
of polymorphism that We talked about at the beginning
of the section.
And it might seem obvious that it works this way,
but it's still good to remind ourselves
that we can actually do this.
Okay.
And, by that we finished yet another coding challenge.
And I hope that now it's really clear,
how we can have one class inherit
from another class using constructor functions.
And also of course the Object.create function,
because without it,
this would be completely impossible.
So great job of doing one more coding challenge.
Next up, we will see how we can implement
the exact same thing using ES6 classes
 */
