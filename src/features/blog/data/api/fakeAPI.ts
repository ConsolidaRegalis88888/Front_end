import SinglePost from "../model/SinglePost";
import Post from "../model/Post";
// @ts-ignore
import * as image1 from "../assets/1.png";
// @ts-ignore
import image2 from "../assets/2.png";
// @ts-ignore
import image3 from "../assets/3.png";
// @ts-ignore
import image4 from "../assets/4.png";
// @ts-ignore
import image5 from "../assets/5.png";
// @ts-ignore
import image11 from "../assets/11.png";
// @ts-ignore
import image12 from "../assets/12.png";
// @ts-ignore
import clock from "../assets/clock.png";

export default class FakeAPI
{
    static getSinglePost = async (idPost: string) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(fakeSinglePost)
            }, 3000)
        })
    }

     static getAllPosts = async (page:number = 1) => {
         return new Promise( resolve=> {
             setTimeout(() => {
                 resolve(fakeAllPosts)
             }, 3000)
         })
    }
}
const fakeAllPosts = [
        new Post("1", "Learning to love your mental health journey", clock,"07.08.2020", ""),
        new Post("2", "Join Us At The Westchester In White Plains, NY", clock,"07.08.2020", ""),
        new Post("3", "Runners X Run For The Ocean", clock,"07.08.2020", ""),
        new Post("4", "Mental and Physical Health Benefits of Yoga: Proven Results", clock,"07.08.2020", ""),
        new Post("5", "Summer Sports - Summer Vibes", clock,"07.08.2020", ""),

        new Post("6", "Why our Training Club",  clock, "07.08.2020",image1),
        new Post("7", "17 Tips for Becoming Sportsmen",  clock,"07.08.2020",image2),
        new Post("8", "For Wherever You Want To Train ",  clock,"07.08.2020",image3),
        new Post("9", "Reach Your Fitness Goals with the our Training Club App (NTC)",  clock,"07.08.2020", ""),
        new Post("10", "Workout From Home Routines: Tips and Best Practices",  clock,"07.08.2020",image4),
        new Post("11", "Train The Way You Want: Energise Your Routine with our Growing Library of Workout", clock, "07.08.2020",image5),
    ]

    const fakeSinglePost = new SinglePost(
        "6",
        "Why our Training club?",
        clock,
        "07.08.2020",
        image1,
        //
        "Reach your fitness goals with the Nike Training Club App (NTC). With access to 200+ free workouts and targeted training programmes, the NTC App will support you every step of the way. From invigorating yoga classes to bodyweight sessions with and without equipment, you'll find the right workout for you. Follow our Nike Master Trainers through varied classes, ranging from 5–50 minutes. \n" +
        "Do them at home, in the gym, or outdoors – whenever and wherever you want. Plus, our free video library is constantly growing, so expect new videos to flow in. \n" +
        "No matter what fitness level you're at, NTC will give you the tools you need to succeed.",

        "Workout From Home Routines",

        "We're taking home workouts to the next level. With NTC, you can move, sweat and get stronger right from your living room. Go all in by working out with NTC Live, exploring our library of free workouts and accessing expert advice. Plus, you'll be joining a whole community of other home athletes.",
        //postText3
        "If the gym is where you like to sweat, you need an app that keeps you feeling challenged. With access to training plans and expert help, you can work on your fitness and strength knowing you're in good hands. NTC features hours of workouts, from cardio to targeted strength training – with the possibility to leverage full gym equipment when it's available to you. It's not just a tracker, it's your new favourite coach.",
        //titleInPost2
        "Flexible Training Programmes Tailored to You",
        //postText4
        "Start training with a personal plan that guides you while adjusting to your progress, schedule and other activities. With NTC, you get access to 4–6-week training plans. Whether you use a full gym or are training from the comfort of your home, there's a routine that'll fit you and your schedule so that you can reach your goals.\n" +
        "Our multi-week programmes don't just guide you through regular workouts, they include advice on wellness and nutrition too.* No matter what kind of athlete you are, you'll get everything you need to improve your fitness and stay on track. Each programme has been designed for specific results, so if you're hoping to build strength, get leaner or gain more power, you'll know what to expect. Work out with NTC at home or use it as a weight training app in the gym to help you make the most of your equipment.",
        image11,
        image12
        )

