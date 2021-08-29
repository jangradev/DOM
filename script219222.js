'use strict';
// 219. Another Class Example

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening an account ,${owner}`);
  }
  deposite(val) {
    this.movements.push(val);
  }
  withdraw(val) {
    this.deposite(-val);
  }
  approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposite(val);
      console.log(`Loan approved`);
    }
  }
}
const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);
/* Account {owner: "Jonas", currency: "EUR", pin: 1111, 
            movements: Array(0), locale: "en-US"}
currency: "EUR"
locale: "en-US"
movements: []
owner: "Jonas"
pin: 1111
[[Prototype]]: Object
constructor: class Account
[[Prototype]]: Object */

//acc1.movements.push(250);
//acc1.movements.push(-140);

acc1.deposite(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.approveLoan(1000);
console.log(acc1);

/* Account {owner: "Jonas", currency: "EUR", pin: 1111, 
            movements: Array(2), locale: "en-US"}
            currency: "EUR"
            locale: "en-US"
            movements: (2) [250, -140]
            owner: "Jonas"
            pin: 1111
[[Prototype]]: Object
            constructor: class Account
            deposite: ƒ deposite(val)
            withdraw: ƒ withdraw(val)
[[Prototype]]: Object 
            constructor: ƒ Object()
            hasOwnProperty: ƒ hasOwnProperty()
            isPrototypeOf: ƒ isPrototypeOf()
            propertyIsEnumerable: ƒ propertyIsEnumerable()
            toLocaleString: ƒ toLocaleString()
            toString: ƒ toString()
            valueOf: ƒ valueOf()
            __defineGetter__: ƒ __defineGetter__()
            __defineSetter__: ƒ __defineSetter__()
            __lookupGetter__: ƒ __lookupGetter__()
            __lookupSetter__: ƒ __lookupSetter__()
            get __proto__: ƒ __proto__()
            set __proto__: ƒ __proto__()*/

/* There are a few more things that we need
to learn about classes.
And so, let's actually create a new class now.
And as an example,
we are gonna use the bank account
that we implemented before, in the Bankist app.
Remember that?
So, let's say class Account, and then as always,
we need the constructor method.
And here each account should have the owner name.
It should have a defined currency,
and also, we want to pass in a pin.
And so, let's say this.owner is owner
and the same for currency and the pin.
So, we already know how to do all of this, right?
And so now let's create a new account here.
Let's say acc1, and so new account,
and let's say that I am the owner.
So, Jonas, then the currency is in Euro and the pin,
let's say, is this one?
All right.
So, indeed we have the three values that we passed
into the constructor, now inside of the object.
But now what about the movements array,
and maybe also the local.
So, we want to start always with an empty array
as the movements and the local,
we want to get from the navigator.language.
So, how should we do that?
Should we add a new parameter, like this?
So, movement, and then always pass in an empty array
in all the accounts that we create.
Well, that would work.
So, let's actually see that.
So, movement, actually movements should be equal
to movements, here as well.
And so now, as you see,
the movement is now this empty array,
however, it doesn't make much sense
to pass in this empty array,
into all the new accounts that we want to create, right?
So, we don't need this, and instead we can simply do this.
And so, this is something that we didn't do before,
but of course we can create even more properties
on any instance and properties
that are not based on any inputs.
And the same we can now do for the local
and set it to navigator.language, right?
And so now, all of that appears here as well.
And in fact, we can even execute any code
here in this constructor that we want.
So, let's say, "Thanks for opening an account,"
and then owner.
And so, when Jonas opens a new account,
then he's basically greeted with this message here,
coming right from the constructor.
All right, but now what about the deposits and withdrawals?
So, basically what about our movements?
Well, we could simply now go ahead and do this.
So we can take acc1.movements,
and then if we wanted to do a deposit,
we could push a value into this.
Let's say 250, and then when we want to withdraw something,
we would simply push a negative value.
And so, if we then take a look at our account here,
then of course we would see these movements right here
in our array.
However, it's not a good idea at all to do this.
So, instead of interacting with a property like this,
it's a lot better to create methods
that interact with these properties.
And that is especially true for important properties,
such as these movements here.
So, this will for sure avoid bugs
in the future, as your application grows.
So, let's now actually create a deposit
and a withdrawal method here.
So, deposit and inherit the value that we want to deposit.
And then this.movements.push,
the value that we pass into.
And now the same for withdrawal.
So, also a value.
And so here, we can now actually call this method
because it's actually gonna work basically the same way.
So this.deposit.
And so, as you can see here,
we can actually call other methods
inside of a certain method.
So, in withdraw, we are calling this.deposit,
but of course we still need to use the this keyword
to be able to access this other method.
And then here, we pass in minus the value
that we received in this function.
So let's try this now.
So instead of doing this,
we now can do it in a much nicer way.
So acc1.deposit 250, and then acc1.withdraw 140.
And so indeed,
our movements array looks just the same as before,
but now we are actually using this public interface
that we built here, right?
So, basically these methods here,
are the interface to our objects,
and we also call this API, remember?
So, we talked about this,
right at the beginning of the section.
So again, let's actually write this here.
So this is the public interface of our objects.
And so, yeah, this is a lot better
than having to manually manipulate
these properties outside of the object, as we did here.
Also this withdraw method here actually abstracts the fact
that a withdrawal is basically a negative movement.
So here as we did it manually,
we needed to pass in minus 140.
But now, as we do a withdrawal, it's of course,
a lot more natural to write
that simply 140 are gonna be withdrawn.
So, what I'm trying to say is that this minus here,
is something that the user of this object,
shouldn't be caring about.
And so now, we actually abstracted that away,
right into this object,
and in particular into this withdrawal method.
So, just a very small obstruction here in this case,
but it's still worth to notice.
All right, now, of course,
still there is nothing stopping someone on our team
from interacting with the movements array directly
and potentially making mistakes and introducing bugs.
So, simply the fact that we have these methods,
doesn't make it impossible to still do this.
And the same goes, for example, for the pin.
So, of course, we can access the pin
from outside of the account.
So, you see, but probably it shouldn't be accessible
from outside of the class, but yeah,
of course, right now it is accessible.
And this is actually a very real and very important concern.
So, it's not just something theoretical
that I'm telling you here.
And the same, of course, goes for methods.
So, let's say we have a requestLoan method here,
for some value.
And remember that this was also a functionality
of the Bankist application.
So, we could make the approval of the loan based
on some condition, and that condition could come
from some other method, let's say,
approveLoan, let's pass in a value here as well,
and this one will simply always return true.
So, I don't want to implement any complex logic here now,
but anyway, here we can now call this.approveLoan
with the value.
And so if the loan is approved,
then this.deposit of the value,
and we can lock something to the console.
So, "Loan approved" or something like that, okay?
Now, in the public interface,
we basically only want this method here.
So, we want to be able to do this here basically,
acc1.requestLoan, let's say of 1000.
And so, we see that the loan was approved
and it was pushed into our array.
But, of course, we are also able to do this.
So approveLoan.
And so this, of course, doesn't do anything,
but in the real world,
we should not even be allowed to access this kind of method.
So this is kind of an internal method
that only the requestLoan method should be able to use.
And so the reason why I'm telling you all this,
is basically just to justify
that we really need data encapsulation and data privacy.
And we talked about these topics in the introductory lecture
of the section, and so as always,
you can go ahead and review that,
but anyway, in the next video,
we will finally start implementing data privacy
and data encapsulation.
So let's move on there right now

 */

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
/* 220. Encapsulation: Protected Properties and Methods */

class Account2 {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    //Protected property
    this._movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening an account ,${owner}`);
  }
  getMovements() {
    return this._movements;
  }
  deposite(val) {
    this._movements.push(val);
  }
  withdraw(val) {
    this.deposite(-val);
  }
  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposite(val);
      console.log(`Loan approved`);
    }
  }
}
const acc2 = new Account2('Jonas', 'EUR', 1111);
acc2._movements.push(501);
acc2._movements.push(1001);
acc2.deposite(1250);
acc2.withdraw(400);
acc2.requestLoan(5000);
console.log(acc2._movements); //(5) [501, 1001, 1250, -400, 5000]
console.log(acc2.movements); //undefined
console.log(acc2.getMovements()); //(5) [501, 1001, 1250, -400, 5000]

console.log(acc2);

/* In the last lecture we implemented a new class
which showed us the need for encapsulation and data privacy.
So let's now tackle this very important principle
of object oriented programming.
Now first, remember that encapsulation basically means
to keep some properties and methods private inside the class
so that they are not accessible from outside of the class.
Then the rest of the methods are basically exposed
as a public interface, which we can also call API.
So this is essential to do in anything
more than a toy application.
Now, there are two big reasons why we need encapsulation
and data privacy.
So first it is to prevent code
from outside of a class to accidentally manipulate
or data inside the class.
And that's exactly what we did
by the end of the last lecture here.
So this is also the reason why
we implement a public interface.
So we are not supposed to manually mess with this property
and therefore we should encapsulate it.
Now, the second reason is
that when we expose only a small interface
so a small API consisting only of a few public methods
then we can change all the other internal methods
with more confidence.
Because in this case, we can be sure
that external code does not rely on these private methods.
And so therefore our code will not break
when we do internal changes.
So that's what encapsulation
and data privacy are and the reasons for it.
And so let's now actually implement it.
However JavaScript classes actually
do not yet support real data privacy and encapsulation.
Now there is a proposal to add truly private class fields
and methods to the language,
but it's not completely ready yet.
I will still show it to you in the next lecture
because it's really cool
but even when this feature ships in the browser
it will take some time until you can use it with confidence.
And so in this lecture, we will basically fake encapsulation
by simply using a convention.
So the first candidate to protect here is again,
this movements array that we have been talking about.
So the movements are mission critical data
and so here we will protect this data
so that no one can accidentally manipulate it.
And for now, all we will do is to add this underscore
in front of the property name and that's it.
Now we need to then go ahead and change it everywhere.
So that's here and yeah, that's actually it.
So again this does not actually make
the property truly private
because this is just a convention.
So it's something that developers agree to use
and then everyone does it this way.
But since it is not truly private we call this protected,
so protected property.
And so now if we wanted to get the movements outside here
we could, of course still do this.
So that's what I was just saying
which is that the data here is of course still accessible
if we use this underscore outside here as well
but at least now everyone on your team
and that includes yourself will know that this property
is not supposed to be touched outside of the class.
So you can still do it
but at least you will know that it is wrong, okay?
Now, if we still wanted to give access
to the movements array from the outside
then we would have to implement a public method for that.
So let's do that actually right here.
So let's say get movements.
And of course we could also create a getter here
instead of this method, but let's just keep it simple.
So it's very common to actually have a method
that is called get or set instead of using a real getter
or a real setter.
And so all that this will do
is to return this.movements.
And so now this would be
the correct way to get the movements, so get movements.
And so this one everyone
can still at least access the movements
but they cannot override them.
So they cannot set the movements
unless of course they use the underscore with the convention
but then at least they will know
that it's wrong to access the property.
Next, we could also protect here the pin.
So this is also something that doesn't make much sense
to be accessible from the outside.
And in fact, we could make everything protected here
but I think that like this, we are good to go.
So this is just a small example anyway.
And so for now, let's leave it like this.
To finish, let's just also protect
then the approved loan method.
So this one I also mentioned by the end
of the previous lecture.
So this is a method that is only
supposed to be internally by the bank.
Let's say basically just to check
if a loan should be approved.
So essentially this method here should not be part
of the public API, but all the others should be.
So right now we are protecting this method.
And so our public API right now consists
of these other four remaining methods, all right?
So this is how we protect fields from unwanted access.
Now, as I said, of course, developers need to know
about this convention and need to follow it
because otherwise everything will still be public.
But now in the next lecture, we're actually gonna talk
about truly private fields and methods.
And so with that, we will then fix this problem for good.
In the last lecture we implemented a new class
which showed us the need for encapsulation and data privacy.
So let's now tackle this very important principle
of object oriented programming.
Now first, remember that encapsulation basically means
to keep some properties and methods private inside the class
so that they are not accessible from outside of the class.
Then the rest of the methods are basically exposed
as a public interface, which we can also call API.
So this is essential to do in anything
more than a toy application.
Now, there are two big reasons why we need encapsulation
and data privacy.
So first it is to prevent code
from outside of a class to accidentally manipulate
or data inside the class.
And that's exactly what we did
by the end of the last lecture here.
So this is also the reason why
we implement a public interface.
So we are not supposed to manually mess with this property
and therefore we should encapsulate it.
Now, the second reason is
that when we expose only a small interface
so a small API consisting only of a few public methods
then we can change all the other internal methods
with more confidence.
Because in this case, we can be sure
that external code does not rely on these private methods.
And so therefore our code will not break
when we do internal changes.
So that's what encapsulation
and data privacy are and the reasons for it.
And so let's now actually implement it.
However JavaScript classes actually
do not yet support real data privacy and encapsulation.
Now there is a proposal to add truly private class fields
and methods to the language,
but it's not completely ready yet.
I will still show it to you in the next lecture
because it's really cool
but even when this feature ships in the browser
it will take some time until you can use it with confidence.
And so in this lecture, we will basically fake encapsulation
by simply using a convention.
So the first candidate to protect here is again,
this movements array that we have been talking about.
So the movements are mission critical data
and so here we will protect this data
so that no one can accidentally manipulate it.
And for now, all we will do is to add this underscore
in front of the property name and that's it.
Now we need to then go ahead and change it everywhere.
So that's here and yeah, that's actually it.
So again this does not actually make
the property truly private
because this is just a convention.
So it's something that developers agree to use
and then everyone does it this way.
But since it is not truly private we call this protected,
so protected property.
And so now if we wanted to get the movements outside here
we could, of course still do this.
So that's what I was just saying
which is that the data here is of course still accessible
if we use this underscore outside here as well
but at least now everyone on your team
and that includes yourself will know that this property
is not supposed to be touched outside of the class.
So you can still do it
but at least you will know that it is wrong, okay?
Now, if we still wanted to give access
to the movements array from the outside
then we would have to implement a public method for that.
So let's do that actually right here.
So let's say get movements.
And of course we could also create a getter here
instead of this method, but let's just keep it simple.
So it's very common to actually have a method
that is called get or set instead of using a real getter
or a real setter.
And so all that this will do
is to return this.movements.
And so now this would be
the correct way to get the movements, so get movements.
And so this one everyone
can still at least access the movements
but they cannot override them.
So they cannot set the movements
unless of course they use the underscore with the convention
but then at least they will know
that it's wrong to access the property.
Next, we could also protect here the pin.
So this is also something that doesn't make much sense
to be accessible from the outside.
And in fact, we could make everything protected here
but I think that like this, we are good to go.
So this is just a small example anyway.
And so for now, let's leave it like this.
To finish, let's just also protect
then the approved loan method.
So this one I also mentioned by the end
of the previous lecture.
So this is a method that is only
supposed to be internally by the bank.
Let's say basically just to check
if a loan should be approved.
So essentially this method here should not be part
of the public API, but all the others should be.
So right now we are protecting this method.
And so our public API right now consists
of these other four remaining methods, all right?
So this is how we protect fields from unwanted access.
Now, as I said, of course, developers need to know
about this convention and need to follow it
because otherwise everything will still be public.
But now in the next lecture, we're actually gonna talk
about truly private fields and methods.
And so with that, we will then fix this problem for good.

 */

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
/* 221. Encapsulation: Private Class Fields and Methods */

// Public fields (instances)
// Private fields
// Public methods
// Private methods
// (there is also the static method )

class Account3 {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    //Protected property
    console.log(`Thanks for opening an account ,${owner}`);
  }

  //3) Public methods
  getMovements() {
    return this.#movements;
  }
  deposite(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposite(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposite(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('HELP🙏');
    console.log(this);
  }
  //4) Private Methods

  // #approveLoan(val) {
  // Not available in google chorme ,gives error
  _approveLoan(val) {
    return true;
  }
}
const acc3 = new Account3('Jonas', 'EUR', 1111);

acc3.deposite(1250);
acc3.withdraw(400);
acc3.requestLoan(5000);

// console.log(acc3.#movements); //(5) [501, 1001, 1250, -400, 5000]
// Uncaught SyntaxError: Private field '#movements'
// must be declared in an enclosing class

console.log(acc3.getMovements()); //(3) [1250, -400, 5000]
// only access by method only
console.log(acc3);

Account3.helper();
/* class Account3 {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
… */

/* Alright, so let's now implement
truly private class fields and methods.
So private class fields and methods
are actually part of a bigger proposal
for improving and changing JavaScript classes
which is simply called Class fields.
Now this Class fields proposal is currently at stage three.
And so right now it's actually not yet part
of the JavaScript language.
However, being at stage three
means that it's very likely that at some point,
it will move forward to stage number four.
And then it will actually become a part
of the JavaScript language.
And that's probably gonna happen
some point soon in the future.
And that's why I decided to already include
class fields in this course.
And in fact, some parts of this proposal
actually already work in Google Chrome,
but other parts don't.
At least not at the time of recording this video.
Now for starters, why is this proposal
actually called Class fields?
Well, in traditional OOP languages like Java and C++,
properties are usually called fields.
So what this means is that with this new proposal,
JavaScript is moving away from the idea that classes
are just syntactic sugar over constructor functions.
Because with this new class features classes
actually start to have abilities
that we didn't previously have with constructor functions.
Now to many developers consider this to be a big problem
but personally, I'm not sure if it is such a big deal
for the average JavaScript developer.
So as long as you still understand
how prototypal inheritance and function constructors work
then I believe that you will be fine.
But anyway, no matter if you end up using
these new class features, let's now start exploring them.
So in this proposal, there are actually four different kinds
of fields and methods, and actually it's even eight.
But in this video, I'm just gonna focus on these four.
And that's public fields, that is private fields.
And then we have public methods
and we have private methods.
So essentially there is a public
and a private version of both fields and methods.
And let's now start with public fields.
So we can think of a field as a property
that will be on all instances.
So that's why we can also call this a public instance field.
So basically in our example here,
the two fields could be the movements and the locale.
Because these are basically two properties
that are gonna be on all the objects
that we create with this class.
Because we do not pass any of the values here in,
so into the constructor.
And so this array and this language
they will always be set for all the instances right?
And so let's now add them as public fields.
So that works simply like this.
We can say locale equal and then navigator.language.
And then here, we actually need to write a semi colon
which is kind of weird because between these methods
we do not need commas or semi-colons.
What's also weird is that this kind of
looks like a variable here right?
But we don't have to declare it using like const or let,
so this is how we simply define a public field.
So let's write that here.
So public fields.
And the other one is gonna be this movements
and I will still for now call it _movements.
And so I'm setting it to this empty array now.
And so when we reload this, now you will see
the attendee account here worked exactly the same.
So we still have the locale here and also the movements
but now they are actually public fields,
but in our final object here,
that doesn't make any difference.
Because again, these public fields here
are gonna be present on all the instances
that we are creating through the class.
So they are not on the prototype.
So this is important to understand.
So all these methods that we add here
they will always be added to the prototype, right?
But again the fields here, they are on the instances.
Let me write that here as well.
And so again having this here,
is essentially exactly the same as this.
And therefore these public fields
they're also referenceable by the this keyboard
and they are also referenceable via the this keyword.
Great, so that's public fields.
Next up, let's talk about private fields.
So this is number two.
This is number one.
Let's add that here as well.
So just to keep a nice overview of all the things
that we are learning here in this lecture.
Alright.
So private fields is the one
that we have actually been waiting for.
So with private fields we can now make it
so that properties are really truly
not accessible from the outside.
So just like in the last lecture, let's start
by now finally making the movements array private.
So let's move it here.
And now I will remove the underscore
and then I will use the # symbol.
And so this is the syntax that makes a field private
in this new class proposal.
So let's try and reload to see what happens now.
And indeed we get some error.
And the reason for that is that the property
is now really called #movements.
So we need to change that everywhere.
So both here and here.
Now, that's it.
Give it a safe and now it all works.
So let's see here we now actually have
the movements in this array,
which is called #movements now basically.
And so now, we are finally gonna be able to see
that this property is indeed protected.
So if we try to read account1.movements
then we get a syntax error.
So private field movements must be declared
in an enclosing class.
So basically JavaScript things that I'm trying to implement
this private class field out here.
And that's the reason for this error.
But what matters is that, in fact,
we cannot access this variable outside here.
And of course the movement property
from before, does not, no longer exist.
So we get undefined error.
Now the error message here might look different for you
by the time that you're watching this video.
Because as I said, this proposal at the time of recording
is not really finished yet.
And so some implementation details might still change.
And so that might also affect the error message here.
And speaking of implementation, I believe
that right now only Google Chrome actually supports
these private class fields.
And so make sure to also test your code in Google Chrome.
But anyway, the movements are now truly private
and no longer accessible outside here.
At least not by their property.
We do still have of course,
this method here in our public API.
And so this one we can still use to get the movement.
So that's right here.
And that was indeed the whole point of creating this method
in the first place, in the last lecture.
Now the next candidate to make private is this pin.
So in the last lecture we protected it
but now just like the movements, we want to convert it
to a truly private field.
However, this time the situation is a bit different.
Because now we are actually setting the pin
based on this input value to the constructor.
However, we can not define a field in the constructor.
So the fields, they really have to be out here
outside of any method.
So what we have to do is to create the field out here.
So the private field again with hash,
and then don't set it to anything.
And so this is essentially just
like creating an empty variable.
So in the beginning, this will be set to undefined
and then here we can redefine that value basically.
And so one more time we can see
that these class fields are really just
like any other property.
That's why later down here
we can then access it on the this keyword
and set it to the value that we received.
So let's try that.
And indeed the pin here is now also a protected field
or actually a private field.
And so when we try to access it,
we will no longer be able to do that.
Alright.
So that is truly private class fields.
And again these are gonna be available
on the instances themselves.
So not on the prototype.
And so, yeah, of course that's why we have them
right here in the instance.
Now, some people don't like the way
that the Syntax looks here with the # symbol
and there has been a lot of discussion going on.
Now, I don't mind it at all.
I just like to focus on the benefits
that this new syntax gives us.
There is a slight change that it might still change
before the proposal reaches stage four,
but in this case, I will simply go ahead
and update it as video.
But anyway, next up we have public methods.
And actually that is nothing new at this point.
So all these methods here that we have been using
are indeed public methods.
So in this case, there is not a lot to talk about.
And in fact, we had already written something similar here.
So saying that all of these methods together
are basically the public interface of our class.
And so therefore let's move on to our final point here,
which is private methods.
So let's do that down here.
And private methods, as we already mentioned earlier
are very useful to hide the implementation details
from the outside.
And that's why in the previous lecture,
we already made this method
and protect it with this underscore.
And so let's no grab this and put it down here
and now to make a private method,
the syntax is exactly the same as private fields.
So just like with the hash.
Now, the big problem here, is that right now
no browser actually supports this.
So I can just show you how it works in the code
but unfortunately I cannot show you how it works.
So if I save this now I'll probably get some error.
And so, yeah, the first one is
that this function now no longer exists.
So let's change that here as well.
And well, we don't get any error actually.
So that's surprising to me, let's see what we have here.
So indeed here we have the approve loan now.
So I guess that right now Google Chrome
simply made this method like a private field.
So that's why it no longer appears in the prototype, right?
So it's not here, but now it's, instead on the instance.
So that's not really what we want.
Let's just test if we can access it out here.
So console.logacc1.approvedLoan with some value.
And then we get the same error as before.
So private fields approve loan.
And so, yeah, it's just as I said,
so Google Chrome right now basically sees this
as a private class field and not as a method.
And so that's why I was saying
that the methods are not really yet implemented
in Google Chrome.
So private methods are not available.
And so let me just leave it here as a comment,
but I will go back to simply protect it
with the underscore convention.
Alright.
So at some point in the future, this will work
but for now, let's leave it just as it was before.
Okay, so we talked about these four features here.
So public fields, private fields,
public methods, and private methods.
Now, besides these four
there's also the static version of the same form.
And that's why I said in the beginning
that actually we have eight new features.
So there's also the private version.
And actually, and that's not private.
That is static, alright.
And actually we already used the
static public method before.
And so that worked by simply adding
the static keyword in front of it.
Remember, so just static and then some method name.
And so usually we use this for helper functions.
Because these static methods will not be available
on all the instances, but only on the class itself.
Remember,
so the static one here
only works like this.
So account.helper.
And so, as I said, there is also a static version
for all the other three ones.
But I'm not gonna show them to you now in this video
because they are really less important,
and if you want you can,
of course easily test them out by yourself.
Now, okay.
And that's actually it.
So this is how we implement encapsulation
and data privacy using the new class fields proposal
that hopefully at some point will really become part
of the JavaScript language.
Alright, so let's now implement
truly private class fields and methods.
So private class fields and methods
are actually part of a bigger proposal
for improving and changing JavaScript classes
which is simply called Class fields.
Now this Class fields proposal is currently at stage three.
And so right now it's actually not yet part
of the JavaScript language.
However, being at stage three
means that it's very likely that at some point,
it will move forward to stage number four.
And then it will actually become a part
of the JavaScript language.
And that's probably gonna happen
some point soon in the future.
And that's why I decided to already include
class fields in this course.
And in fact, some parts of this proposal
actually already work in Google Chrome,
but other parts don't.
At least not at the time of recording this video.
Now for starters, why is this proposal
actually called Class fields?
Well, in traditional OOP languages like Java and C++,
properties are usually called fields.
So what this means is that with this new proposal,
JavaScript is moving away from the idea that classes
are just syntactic sugar over constructor functions.
Because with this new class features classes
actually start to have abilities
that we didn't previously have with constructor functions.
Now to many developers consider this to be a big problem
but personally, I'm not sure if it is such a big deal
for the average JavaScript developer.
So as long as you still understand
how prototypal inheritance and function constructors work
then I believe that you will be fine.
But anyway, no matter if you end up using
these new class features, let's now start exploring them.
So in this proposal, there are actually four different kinds
of fields and methods, and actually it's even eight.
But in this video, I'm just gonna focus on these four.
And that's public fields, that is private fields.
And then we have public methods
and we have private methods.
So essentially there is a public
and a private version of both fields and methods.
And let's now start with public fields.
So we can think of a field as a property
that will be on all instances.
So that's why we can also call this a public instance field.
So basically in our example here,
the two fields could be the movements and the locale.
Because these are basically two properties
that are gonna be on all the objects
that we create with this class.
Because we do not pass any of the values here in,
so into the constructor.
And so this array and this language
they will always be set for all the instances right?
And so let's now add them as public fields.
So that works simply like this.
We can say locale equal and then navigator.language.
And then here, we actually need to write a semi colon
which is kind of weird because between these methods
we do not need commas or semi-colons.
What's also weird is that this kind of
looks like a variable here right?
But we don't have to declare it using like const or let,
so this is how we simply define a public field.
So let's write that here.
So public fields.
And the other one is gonna be this movements
and I will still for now call it _movements.
And so I'm setting it to this empty array now.
And so when we reload this, now you will see
the attendee account here worked exactly the same.
So we still have the locale here and also the movements
but now they are actually public fields,
but in our final object here,
that doesn't make any difference.
Because again, these public fields here
are gonna be present on all the instances
that we are creating through the class.
So they are not on the prototype.
So this is important to understand.
So all these methods that we add here
they will always be added to the prototype, right?
But again the fields here, they are on the instances.
Let me write that here as well.
And so again having this here,
is essentially exactly the same as this.
And therefore these public fields
they're also referenceable by the this keyboard
and they are also referenceable via the this keyword.
Great, so that's public fields.
Next up, let's talk about private fields.
So this is number two.
This is number one.
Let's add that here as well.
So just to keep a nice overview of all the things
that we are learning here in this lecture.
Alright.
So private fields is the one
that we have actually been waiting for.
So with private fields we can now make it
so that properties are really truly
not accessible from the outside.
So just like in the last lecture, let's start
by now finally making the movements array private.
So let's move it here.
And now I will remove the underscore
and then I will use the # symbol.
And so this is the syntax that makes a field private
in this new class proposal.
So let's try and reload to see what happens now.
And indeed we get some error.
And the reason for that is that the property
is now really called #movements.
So we need to change that everywhere.
So both here and here.
Now, that's it.
Give it a safe and now it all works.
So let's see here we now actually have
the movements in this array,
which is called #movements now basically.
And so now, we are finally gonna be able to see
that this property is indeed protected.
So if we try to read account1.movements
then we get a syntax error.
So private field movements must be declared
in an enclosing class.
So basically JavaScript things that I'm trying to implement
this private class field out here.
And that's the reason for this error.
But what matters is that, in fact,
we cannot access this variable outside here.
And of course the movement property
from before, does not, no longer exist.
So we get undefined error.
Now the error message here might look different for you
by the time that you're watching this video.
Because as I said, this proposal at the time of recording
is not really finished yet.
And so some implementation details might still change.
And so that might also affect the error message here.
And speaking of implementation, I believe
that right now only Google Chrome actually supports
these private class fields.
And so make sure to also test your code in Google Chrome.
But anyway, the movements are now truly private
and no longer accessible outside here.
At least not by their property.
We do still have of course,
this method here in our public API.
And so this one we can still use to get the movement.
So that's right here.
And that was indeed the whole point of creating this method
in the first place, in the last lecture.
Now the next candidate to make private is this pin.
So in the last lecture we protected it
but now just like the movements, we want to convert it
to a truly private field.
However, this time the situation is a bit different.
Because now we are actually setting the pin
based on this input value to the constructor.
However, we can not define a field in the constructor.
So the fields, they really have to be out here
outside of any method.
So what we have to do is to create the field out here.
So the private field again with hash,
and then don't set it to anything.
And so this is essentially just
like creating an empty variable.
So in the beginning, this will be set to undefined
and then here we can redefine that value basically.
And so one more time we can see
that these class fields are really just
like any other property.
That's why later down here
we can then access it on the this keyword
and set it to the value that we received.
So let's try that.
And indeed the pin here is now also a protected field
or actually a private field.
And so when we try to access it,
we will no longer be able to do that.
Alright.
So that is truly private class fields.
And again these are gonna be available
on the instances themselves.
So not on the prototype.
And so, yeah, of course that's why we have them
right here in the instance.
Now, some people don't like the way
that the Syntax looks here with the # symbol
and there has been a lot of discussion going on.
Now, I don't mind it at all.
I just like to focus on the benefits
that this new syntax gives us.
There is a slight change that it might still change
before the proposal reaches stage four,
but in this case, I will simply go ahead
and update it as video.
But anyway, next up we have public methods.
And actually that is nothing new at this point.
So all these methods here that we have been using
are indeed public methods.
So in this case, there is not a lot to talk about.
And in fact, we had already written something similar here.
So saying that all of these methods together
are basically the public interface of our class.
And so therefore let's move on to our final point here,
which is private methods.
So let's do that down here.
And private methods, as we already mentioned earlier
are very useful to hide the implementation details
from the outside.
And that's why in the previous lecture,
we already made this method
and protect it with this underscore.
And so let's no grab this and put it down here
and now to make a private method,
the syntax is exactly the same as private fields.
So just like with the hash.
Now, the big problem here, is that right now
no browser actually supports this.
So I can just show you how it works in the code
but unfortunately I cannot show you how it works.
So if I save this now I'll probably get some error.
And so, yeah, the first one is
that this function now no longer exists.
So let's change that here as well.
And well, we don't get any error actually.
So that's surprising to me, let's see what we have here.
So indeed here we have the approve loan now.
So I guess that right now Google Chrome
simply made this method like a private field.
So that's why it no longer appears in the prototype, right?
So it's not here, but now it's, instead on the instance.
So that's not really what we want.
Let's just test if we can access it out here.
So console.logacc1.approvedLoan with some value.
And then we get the same error as before.
So private fields approve loan.
And so, yeah, it's just as I said,
so Google Chrome right now basically sees this
as a private class field and not as a method.
And so that's why I was saying
that the methods are not really yet implemented
in Google Chrome.
So private methods are not available.
And so let me just leave it here as a comment,
but I will go back to simply protect it
with the underscore convention.
Alright.
So at some point in the future, this will work
but for now, let's leave it just as it was before.
Okay, so we talked about these four features here.
So public fields, private fields,
public methods, and private methods.
Now, besides these four
there's also the static version of the same form.
And that's why I said in the beginning
that actually we have eight new features.
So there's also the private version.
And actually, and that's not private.
That is static, alright.
And actually we already used the
static public method before.
And so that worked by simply adding
the static keyword in front of it.
Remember, so just static and then some method name.
And so usually we use this for helper functions.
Because these static methods will not be available
on all the instances, but only on the class itself.
Remember,
so the static one here
only works like this.
So account.helper.
And so, as I said, there is also a static version
for all the other three ones.
But I'm not gonna show them to you now in this video
because they are really less important,
and if you want you can,
of course easily test them out by yourself.
Now, okay.
And that's actually it.
So this is how we implement encapsulation
and data privacy using the new class fields proposal
that hopefully at some point will really become part
of the JavaScript language.

 */

//➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
/* 222. Chaining Methods */

// acc3
//   .deposite(300)
//   .deposite(200)
//   .withdraw(1000)
//   .requestLoan(5000)
//   .withdraw(2000);
/* Uncaught TypeError: 
   Cannot read property 'deposite' of undefined */
// As deposite ,withdraw,returnLoad do not return anything
// code changed to put return Account3 .

acc3
  .deposite(300)
  .deposite(200)
  .withdraw(1000)
  .requestLoan(5000)
  .withdraw(2000);

/* Loan approved */

console.log(acc3.getMovements());

/* (8) [1250, -400, 5000, 300, 200, -1000, 5000, -2000] */
/* Do you remember how we chained array methods
one after another, for example filter map and reduce?
So by chaining these methods,
we could first filter an array,
then map the result.
And finally reduce the results of the map,
all in one line of code.
And we can actually implement the same ability
of chaining methods in the methods of our class.
And so let's go do that now.
And actually, this is extremely easy to do.
So all we have to do is to return the object itself
at the end of a method that we want to be chainable.
So let's say that we wanted to do this.
So let me take that away from here.
So chaining.
So let's say we wanted to do account,
and then deposit,
let's say, 300.
And then right afterwards, we wanted
to deposit again on the same account.
So we would like to call deposit again, right away,
let's say 500 this time.
And then immediately after that,
let's say we want to withdraw 35.
Maybe we also want to request a loan in the middle of this.
So request loan, let's say 25,000.
And then finally, we want to withdraw some more,
let's say 4000.
So right now, this is not gonna work.
So let's see the error.
And so the problem here is that...
this one here will work.
But this will then return nothing.
Because let's see,
the deposit method does return undefined
because we're not returning anything explicitly here.
And so then undefined gets returned.
And so then here, in this next one
we are trying to call the deposit method on undefined
which is the result of all this.
And therefore we get exactly that error here.
So what we need to do is to call deposit
actually on an account.
And so what we want is for the result of this year
to be again the account,
right?
And so let's do that.
So all we have to do is return...
this.
Because this is of course, the current object.
And now we do the same on all of them.
Okay.
And here the same.
And that's it.
So returning this
will essentially make the method chainable.
And this makes most sense, in methods
that actually set some property.
And so all of the three, that we just did this,
actually do that.
So this one sets the movements here.
This one, actually two,
and this one also changes the movement array.
And so all of these, basically set some property.
And so these are then very useful to make chainable.
So let's see now.
And...
Well, we get no error,
and we get loan approved.
So that means that probably everything worked here.
So let's take a look at our account here.
Actually, let's call account getMovements.
So that's why we have this method in the public API.
And so indeed, all the deposits and withdrawals
that we just did, are now in this Movements array.
Great.
So with this, you have yet another tool in your toolbox now.
So experiment a little bit with this on your own.
And maybe also when you start writing your own classes.
All right.
So with this one
I actually showed you all there is
to show about Object Oriented Programming in JavaScript.
So what a long section here, but also a beautiful one,
if you ask me.
Now, just to really wrap up this section.
Next up, I have a nice overview of the entire class syntax
and then one final coding challenge.

 */
