// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route
app.get('/comments', (req, res) => {
  res.send('This is a new comment');
});

// Listen to port 3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Path: index.js
// Import the comments.js file
const comments = require('./comments');

// Path: comments.js
// Export the comments.js file
module.exports = comments;

// Path: index.js
// Import the comments.js file
const comments = require('./comments');

// Use the comments.js file
console.log(comments); // This is a new comment

// Path: comments.js
// Export the comments.js file
module.exports = 'This is a new comment';

// Path: index.js
// Import the comments.js file
const comments = require('./comments');

// Use the comments.js file
console.log(comments); // This is a new comment

// Path: comments.js
// Export the comments.js file
module.exports = {
  comment: 'This is a new comment'
};

// Path: index.js
// Import the comments.js file
const comments = require('./comments');

// Use the comments.js file
console.log(comments.comment); // This is a new comment

// Path: comments.js
// Export the comments.js file
module.exports = {
  comment: 'This is a new comment',
  commentCount: 1
};

// Path: index.js
// Import the comments.js file
const comments = require('./comments');

// Use the comments.js file
console.log(comments.comment); // This is a new comment
console.log(comments.commentCount); // 1

// Path: comments.js
// Export the comments.js file
module.exports = {
  comment: 'This is a new comment',
  commentCount: 1,
  commentAuthor: 'John Doe'
};

// Path: index.js
// Import the comments.js file
const comments = require('./comments');

// Use the comments.js file
console.log(comments.comment); // This is a new comment
console.log(comments.commentCount); // 1
console.log(comments.commentAuthor); // John Doe

// Path: comments.js
// Export the comments.js file
module.exports = {
  comment: 'This is a