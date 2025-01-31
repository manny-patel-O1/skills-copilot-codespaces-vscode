// Create web server
// 1. Import express
const express = require('express');
const app = express();
// 2. Import body-parser
const bodyParser = require('body-parser');
// 3. Import lowdb
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
// 4. Set up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// 5. Set up lowdb
db.defaults({ comments: [] }).write();
// 6. Set up views
app.set('view engine', 'pug');
app.set('views', './views');
// 7. Create route
app.get('/comments', (req, res) => {
    res.render('comments/index', {
        comments: db.get('comments').value()
    });
});
app.get('/comments/new', (req, res) => {
    res.render('comments/new');
});
app.post('/comments', (req, res) => {
    db.get('comments').push(req.body).write();
    res.redirect('/comments');
});
// 8. Listen to port
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
// 9. Create view
// 10. Create form
// 11. Create data
// 12. Display data
// 13. Create new data
// 14. Save data
// 15. Redirect
// 16. Create edit data
// 17. Save edit data
// 18. Delete data
// 19. Search data
// 20. Pagination
// 21. Sort data
// 22. Filter data
// 23. Create API
// 24. Consume API
// 25. Create authentication
// 26. Create authorization
// 27. Create middleware
// 28. Error handling
// 29. Upload file
// 30. Send email
// 31. Create test
// 32. Deployment
// 33. Monitoring
// 34. Logging
// 35. Performance
// 36. Security
// 37. Scalability
// 38. Reliability
// 39. Maintainability
// 40. Cost
// 41. Documentation
// 42.