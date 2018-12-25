/*
v.for with an Object

You can also use v-for to iterate
through the properties of an 
object.
*/
var example2 = new Vue({
	el: '#v-for-object',
	data: {
		object: {
			firstName: 'John',
			lastName: 'Doe',
			age: 30,
			height: 150
		}
	}
})

