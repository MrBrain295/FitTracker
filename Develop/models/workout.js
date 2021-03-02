const mongoose = require("mongoose");
const Schema = mongoose.Schema

const exerciseSchema = new Schema(

    {
        day: {
            type: date,
            default: date()
        },

        exercises: [
        
            {           
            type: {
                type: String,
                required: "Enter Exercise Type"
            },

            name:{

                type: String,
                required: "Enter an Exercise Name"
            },

            duration:{

                   type: Number
                
            },
                weight:{
                    type: Number

                },

                reps:{
                    type: Number

                },

                sets:{
                    type: Number

                },

                distance:{
                    type: Number

                }

                

                

            }
        ]

    }
)