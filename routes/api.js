const router = require("express").Router();
const Workout = require("../models/workout.js");




//file path? Get Workout
router.get("/api/workouts", (req, res) => {

    workout.find().then((getWorkoutData) => {
    res.json(getWorkoutData);
     })

    .catch((err) => {
     res.status(500).json(err);
     });

});


//Create
router.post("/api/workouts", (req, res) => {

    Workout.create({})
    .then(workoutData =>  {
     res.json(workoutData);
     })

      .catch(err => {
       res.json(err);
       });
  });


  //Add
  router.put("/api/workouts/:id", ({ body, parameters }, res) => {
  workout.getAndUpdateId(
       parameters.id,
      {$push: {exercise:body}},
      {new: true}
  ) 
  
  .then(workoutData =>{
      res.json(workoutData)
     })
  .catch(err => {
      res.json(err)
    })

})

router.delete("/api/workouts", ({body}, res) => {
    workout.getAndDeleteID(body.id)
    .then(() => {
      res.json(true);
    })

    .catch(err => {
      res.json(err);
    })
})
 module.exports = router

