const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 1,
        comment_text: "Danify looks great, I'm going to use for my next project"
    },
    {
        user_id: 2,
        post_id: 2,
        comment_text: "I'm hoping to lose a few pounds this summer, reading this makes me want to try run buddy"
    },
    {
        user_id: 3,
        post_id: 3,
        comment_text: "I really want to try one of these bootcamps soon!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "I think building around testing is silly - this is what QAs are for"
    },
    {
        user_id: 5,
        post_id: 5,
        comment_text: "This is bogus, Angular is a much better platform than React"
    },
    {
        user_id: 2,
        post_id: 3,
        comment_text: "I'm almost finished with my cohort, the instructors are great but the class is really challenging"
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;