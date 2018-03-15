import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <p>Welcome to dadd.io, the world's premier dad joke app. What is a dad joke? Usually a joke that is so lame that it actually hurts, and that's what makes it funny. On the home page, you will find a new randomly generated dad joke, along with your favorite saved jokes. If you laugh, well, you're probably a dad. Impress/torment your loved ones by upvoting the randomly generated joke, which will then save it to your saved jokes, where you can memorize them for later! If a joke is simply too dadly, downvote the joke and a new one will appear to receive your better judgement.

Not only can you be a user/abuser of dad jokes, you an also become a user of this app! On the home page you will see a list of registered users where you can add your profile. At it's current produciton, being a user does not mean much, but I hope to implement more features in the future to allow users to create their own comments tied to their accounts!

You can click on any saved jokes and create comments (not tied to any account) to critique the artistry of painfully cringey jokes. We won't *judge!

*judging may occur in non-verbal silence</p>



            <h1>+ </h1> <p>Will save the joke and fetch another</p>
            <h1>- </h1> <p>Will dispose of the joke and fetch another</p>

            </div>
        );
    }
}

export default About;