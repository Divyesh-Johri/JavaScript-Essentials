var course = new Object()

course.title = "Blah"   // or course['title'] if property name is odd
course.published = true
course.level = 1

// or

var course1 = {
    title: "Blah",
    published: true,
    level: 1,
    views: 0,
    updateViews: function(){
        return ++course1.views
    }
}

console.log(course1.views)
course1.updateViews();
console.log(course1.views)
