import React, { Component } from 'react';
import NewsItem from './NewsItem';

//api key : fa5dd1fa8acf49b2a73e67b073545043
export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "michael.hicks@futurenet.com (Michael L Hicks)",
            "title": "Quest v62 update courts would-be Vision Pro buyers with gestures, spatial video",
            "description": "Meta wants to be the \"Android of VR,\" and apparently that starts by offering a lot of Apple's software tricks in a much more affordable headset.",
            "url": "https://www.androidcentral.com/gaming/virtual-reality/meta-quest-62-update-spatial-video-gesture-controls",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/ZiCQ93yUNxSuoFKyQP7qLm-1200-80.jpeg",
            "publishedAt": "2024-02-02T00:01:46Z",
            "content": "<ul><li>Meta announced the Quest v62 update on February 1, which will roll out gradually to Quest 2, Quest 3, and Quest Pro owners. </li><li>iPhone 15 Pro owners can upload spatial videos to the head… [+3609 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "bradypsnyder@gmail.com (Brady Snyder)",
            "title": "Using Google's Circle to Search is easier thanks to these hidden features",
            "description": "One of the biggest features to come to Android in a while is Circle to Search, and using it is easier thanks to these newfound tricks.",
            "url": "https://www.androidcentral.com/apps-software/circle-to-search-hidden-features",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/PfB9qUcfGh5PLqbjwr98mU-1200-80.jpg",
            "publishedAt": "2024-02-02T06:29:46Z",
            "content": "<ul><li>Circle to Search is Google's flagship new feature for Pixel 8 and Samsung Galaxy S24 series phones, and it can be used easily with a few tricks.</li><li>You can move the search bar around wit… [+2541 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Joe Rossignol",
            "title": "Apple Vision Pro Launches: 'The Era of Spatial Computing Has Arrived'",
            "description": "Apple Vision Pro launches in the U.S. today, with in-store pickups and deliveries to customers now underway.\n\n\n\n\n\nApple's first-ever mixed reality headset offers a combination of augmented and virtual reality features, and it is controlled with a combination …",
            "url": "https://www.macrumors.com/2024/02/02/apple-vision-pro-launch-day/",
            "urlToImage": "https://images.macrumors.com/t/FeS4YOErTvcpwBbP9Qu7HaevaDA=/2880x/article-new/2024/02/Apple-Vision-Pro-Demo.jpeg",
            "publishedAt": "2024-02-02T13:00:51Z",
            "content": "Apple Vision Pro launches in the U.S. today, with in-store pickups, customer demos, and deliveries to customers now underway.\r\nApple's first-ever mixed reality headset offers a combination of augment… [+563 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Tim Hardwick",
            "title": "Juno App Brings YouTube to Apple Vision Pro Because Google Won't",
            "description": "Developer Christian Selig of \"Apollo for Reddit\" fame has created what Google wouldn't – a YouTube app for Apple Vision Pro.\n\n\n\n \n\nCalled Juno for YouTube, the app lets Vision Pro owners browse the YouTube platform in a cleanly refined visionOS interface with…",
            "url": "https://www.macrumors.com/2024/02/02/juno-app-youtube-apple-vision-pro/",
            "urlToImage": "https://images.macrumors.com/t/N9-yPqEmv1X0a708vsQEy4itkAM=/2732x/article-new/2024/02/juno-youtube.jpeg",
            "publishedAt": "2024-02-02T13:02:28Z",
            "content": "Developer Christian Selig of \"Apollo for Reddit\" fame has created what Google wouldn't  a YouTube app for Apple Vision Pro.\r\nCalled Juno for YouTube, the app lets Vision Pro owners browse the YouTube… [+1753 chars]"
        }
    ]

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h2>NewsApp - Top Headlines</h2>
                <div className='row my-5'>
                    {this.state.articles.map((element)=>{
                        return <div className="col md-3" key={element.url}>
                        <NewsItem  title={element.title} description={element.description} 
                        imageurl={element.urlToImage} newsurl={element.url}/>
                    </div>
                    })}

                    
                    {/* <div className="col md-3">
                        <NewsItem title="Title 3" description="Description 3" />
                    </div>
                    <div className="col md-3">
                        <NewsItem title="Title 4" description="Description 4" />
                    </div> */}
                </div>
                <div className='row'>
                    <div className="col md-3">
                        <NewsItem title="Title 5" description="Description 5" />
                    </div>
                    <div className="col md-3">
                        <NewsItem title="Title 6" description="Description 6" />
                    </div>
                    <div className="col md-3">
                        <NewsItem title="Title 7" description="Description 7" />
                    </div>
                    <div className="col md-3">
                        <NewsItem title="Title 8" description="Description 8" />
                    </div>
                </div>
            </div>
            //   </div >
        );
    }
}

export default News;
