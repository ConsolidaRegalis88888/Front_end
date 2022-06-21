import SinglePost from "../model/Post";
import Post from "../model/Post";
import image1 from "../images/1.png";
import image2 from "../images/2.png";
import image3 from "../images/3.png";
import image4 from "../images/3.png";
import image5 from "../images/3.png";

export default class FakeAPI {

    static getSinglePost = async (idPost) => {
        // fetch
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(fakeSinglePost)
            }, 3000)
        })
    }

    static getAllPosts = async (page= 1) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(fakeAllPosts)
            }, 3000)
        })
    }
}
    const fakeAllPosts = [
        new Post(1, "Learning to love your mental health journey", "07.08.2020"),
        new Post(2, "Join Us At The Westchester In White Plains, NY", "07.08.2020"),
        new Post(3, "Runners X Run For The Ocean", "07.08.2020"),
        new Post(4, "Mental and Physical Health Benefits of Yoga: Proven Results", "07.08.2020"),
        new Post(5, "Summer Sports - Summer Vibes", "07.08.2020"),

        new Post(6, "Why our Training Club",  "07.08.2020",image1),
        new Post(7, "17 Tips for Becoming Sportsmen",  "07.08.2020",image2),
        new Post(8, "For Wherever You Want To Train ",  "07.08.2020",image3),
        new Post(9, "Reach Your Fitness Goals with the our Training Club App (NTC)",  "07.08.2020"),
        new Post(10, "Workout From Home Routines: Tips and Best Practices",  "07.08.2020",image4),
        new Post(11, "Train The Way You Want: Energise Your Routine with our Growing Library of Workout",  "07.08.2020",image5),
    ]

    const fakeSinglePost = new SinglePost(6,
        "Why our Training club?", "07.08.2020", )

