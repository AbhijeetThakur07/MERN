const express=require('express');
const reviewsController=require('../controllers/reviewController');
const reviewRouter=express.Router();



reviewRouter.route('/:id')
.post(reviewsController.addReview)


module.exports=reviewRouter;