const { Post } = require('../models');

const postData = [
    {
        title: "Danify is now top CMS for ecommerce",
        post_content: "Danify, the groundbreaking ecommerce platform has now surpassed WooComerce and Shopify as the #1 CMS for online stores",
        user_id: 3
    },
    {
        title: "Run Buddy - Transforming Fitness",
        post_content: "The exercise training platform Run Buddy has been named best new workout by Men's Health for 2022 ",
        user_id: 2
    },
    {
        title: "MSU Coding Bootcamp is Fastest Way to Learn",
        post_content: "A recent poll found that the MSU Coding Bootcamp is the #1 bootcamp for learning full stack development",
        user_id: 1
    },
    {
        title: "Test Driven Development and YOU",
        post_content: "Learn more about why you need to put testing first with TDD",
        user_id: 4
    },
    {
        title: "MERN Stack Applications",
        post_content: "MySql, Express, React, and Node create the perfect combo for Full Stack Developers",
        user_id: 5
    },

]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
