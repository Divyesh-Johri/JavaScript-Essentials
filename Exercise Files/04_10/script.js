var course = new Object();

var course = {
    title: "JavaScript Essential Training",
    instructor: "Morten Rand-Hendriksen",
    level: 1,
    published: true,
    views: 0,
    updateViews: function() {
        return ++course.views;
    }
}

console.log(course);

// We will turn these values into a template object (constructor)

function Course(title, instructor, level, published, views){
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function(){
        return ++this.views;
    };    
}

var course1 = new Course("Javvaa", "Me", 1, "true", 0)
var course2 = new Course("Boop", "Bop", 1, false, 10)


var courses = [
    new Course("Javvaa", "Me", 1, "true", 0),
    new Course("Boop", "Bop", 1, false, 10)
]

console.log(course1);
console.log(courses);

