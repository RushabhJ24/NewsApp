import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

//api key : fa5dd1fa8acf49b2a73e67b073545043
export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
    }
    async update() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fa5dd1fa8acf49b2a73e67b073545043&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json()
        this.props.setProgress(70);
        this.setState({ articles: parsedData.articles, 
            totalResults: parsedData.totalResults, 
            loading: false })
        this.props.setProgress(100);    
    }
    async componentDidMount() {
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fa5dd1fa8acf49b2a73e67b073545043&page=1&pageSize=${this.props.pageSize}`;
        //     this.setState({ loading: true });
        //     let data = await fetch(url);
        //     let parsedData = await data.json()
        //     this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
        // 
        this.update();
    }

    // handlePrevClick = async () => {
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fa5dd1fa8acf49b2a73e67b073545043&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //     // this.setState({ loading: true });
    //     // let data = await fetch(url);
    //     // let parsedData = await data.json();
    //     // this.setState({
    //     //     articles: parsedData.articles,
    //     //     page: this.state.page - 1,
    //     //     loading: false
    //     // });
    //     this.setState({ page: this.state.page - 1 });
    //     this.update();
    // }

    // handleNextClick = async () => {
    //     // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
    //     //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fa5dd1fa8acf49b2a73e67b073545043&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //     //     this.setState({ loading: true });
    //     //     let data = await fetch(url);
    //     //     let parsedData = await data.json();
    //     //     this.setState({
    //     //         articles: parsedData.articles,
    //     //         page: this.state.page + 1,
    //     //         loading: false
    //     //     });
    //     this.setState({ page: this.state.page + 1 });
    //     this.update();
    // }

    fetchMoreData = async () => {
        this.setState({page: this.state.page+1})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fa5dd1fa8acf49b2a73e67b073545043&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData =await data.json()
        this.setState({ articles: this.state.articles.concat(parsedData.articles), 
            totalResults: parsedData.totalResults, loading:false })

      };


    render() {
        return (
            <>
                
                    <h2 className='text-center'>NewzApp - Top Headlines</h2>
                    {this.state.loading && <Spinner />}
                    {/* <div className='row my-4'>
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4 col-lg-3" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""}
                                imageurl={element.urlToImage ? element.urlToImage : "https://images.moneycontrol.com/static-mcnews/2023/12/marketup_sensexup-Niftyup-770x433.jpg"} newsurl={element.url}
                                author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div> */}

                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults }
                        loader={this.state.loading ? <Spinner /> : null}>
                    <div className='container my-3'>
                    <div className='row my-4'>
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4 col-lg-3" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""}
                                    imageurl={element.urlToImage ? element.urlToImage : "https://images.moneycontrol.com/static-mcnews/2023/12/marketup_sensexup-Niftyup-770x433.jpg"} newsurl={element.url}
                                    author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>

                        })}
                    </div>
                    </div>
                    </InfiniteScroll>
                

                {/* <div className="container d-flex justify-content-between my-3">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark px-3" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark px-3" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
            </>
        );
    };
}


export default News;
