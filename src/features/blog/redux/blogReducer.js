import * as Actions from "./blogActions"
import image1 from "../data/assets/1.png";
import image2 from "../data/assets/2.png";
import image3 from "../data/assets/3.png";
import image4 from "../data/assets/4.png";
import image5 from "../data/assets/5.png";
import clock from "../data/assets/Vector.png";

const initialState = {
    loading: false,
    showAll: true,
    data: {
        posts:
            [
                {idPost:1, mainTitle: "Learning to love your mental health journey", imageClock: clock, dateOfPost: "07.08.2020", mainPostImage: "", postText1: "" ,titleInPost1 : "", postText2: "", postText3: '', titleInPost2: "", postText4: "", postImage1: "", postImage2: "" },
                {idPost:2, mainTitle: "Join Us At The Westchester In White Plains, NY", imageClock: clock, dateOfPost: "07.08.2020", mainPostImage: "", postText1: "" ,titleInPost1 : "", postText2: "", postText3: '', titleInPost2: "", postText4: "", postImage1: "", postImage2: "" },
                {idPost:3, mainTitle: "Why our Training Club", imageClock: clock, dateOfPost: "07.08.2020", mainPostImage: "", postText1: "" ,titleInPost1 : "", postText2: "", postText3: '', titleInPost2: "", postText4: "", postImage1: "", postImage2: "" },
                {idPost:4, mainTitle: "Mental and Physical Health Benefits of Yoga: Proven Results", imageClock: clock, dateOfPost: "07.08.2020", mainPostImage: "", postText1: "" ,titleInPost1 : "", postText2: "", postText3: '', titleInPost2: "", postText4: "", postImage1: "", postImage2: "" },
                {idPost:5, mainTitle: "Summer Sports - Summer Vibes", imageClock: clock, dateOfPost: "07.08.2020", mainPostImage: "", postText1: "" ,titleInPost1 : "", postText2: "", postText3: '', titleInPost2: "", postText4: "", postImage1: "", postImage2: "" },

                {idPost:6, mainTitle: "Why our Training Club", imageClock: clock, dateOfPost: "07.08.2020", mainPostImage: image1, postText1: "" ,titleInPost1 : "", postText2: "", postText3: '', titleInPost2: "", postText4: "", postImage1: "", postImage2: "" },
                {idPost:7, mainTitle: "17 Tips for Becoming Sportsmen", imageClock: clock, dateOfPost: "07.08.2020", mainPostImage: image2, postText1: "" ,titleInPost1 : "", postText2: "", postText3: '', titleInPost2: "", postText4: "", postImage1: "", postImage2: "" },
                {idPost:8, mainTitle: "For Wherever You Want To Train ", imageClock: clock, dateOfPost: "07.08.2020", mainPostImage: image3, postText1: "" ,titleInPost1 : "", postText2: "", postText3: '', titleInPost2: "", postText4: "", postImage1: "", postImage2: "" },
                {idPost:9, mainTitle:"Reach Your Fitness Goals with the our Training Club App (NTC)", imageClock: clock, dateOfPost: "07.08.2020", mainPostImage: "", postText1: "" ,titleInPost1 : "", postText2: "", postText3: '', titleInPost2: "", postText4: "", postImage1: "", postImage2: "" },
                {idPost:10, mainTitle: "Workout From Home Routines: Tips and Best Practices", imageClock: clock, dateOfPost: "07.08.2020", mainPostImage: image4, postText1: "" ,titleInPost1 : "", postText2: "", postText3: '', titleInPost2: "", postText4: "", postImage1: "", postImage2: "" },
                {idPost:11, mainTitle:"Train The Way You Want: Energise Your Routine with our Growing Library of Workout", imageClock: clock, dateOfPost: "07.08.2020", mainPostImage: image5, postText1: "" ,titleInPost1 : "", postText2: "", postText3: '', titleInPost2: "", postText4: "", postImage1: "", postImage2: "" },
            ]

    },
    error: ""
}

export function blogReducer(state = initialState, action)
{
    switch (action.type) {
        case Actions.TYPE_BLOG_LOAD: {
            return {...state, showAll: false, loading: true,  data: {}};
        }
        case Actions.TYPE_BLOG_LOADER: {
            return {...state, showAll: true, loading: false, data: action.payload};
        }

        case Actions.TYPE_BLOG_ERROR: {
            return {...state, loading: false, data: {}, error: action.payload};
        }
        default: {
            return state;
        }
    }
}