// Create web server
const app = express();
app.use(express.json());

// Create a GET handler
app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// Create a GET handler with parameters
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id)); // req.params.id is a string
    if (!course) {
        return res.status(404).send(`The course with the given ID ${req.params.id} was not found`);
    }
    res.send(course);
});

// Create a POST handler
app.post('/api/courses', (req, res) => {
    // Validate input
    const { error } = validateCourse(req.body); // result.error
    if (error) {
        // 400 Bad Request
        return res.status(400).send(error.details[0].message);
    }

    // Add course to the list
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);

    // Return the added course
    res.send(course);
});

// Create a PUT handler