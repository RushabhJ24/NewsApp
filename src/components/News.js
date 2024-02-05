import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

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
            loading: false,
            page: 1
        }
    }
    async update() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fa5dd1fa8acf49b2a73e67b073545043&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })

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

    handlePrevClick = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fa5dd1fa8acf49b2a73e67b073545043&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({
        //     articles: parsedData.articles,
        //     page: this.state.page - 1,
        //     loading: false
        // });
        this.setState({page: this.state.page - 1 });
        this.update();
    }

    handleNextClick = async () => {
        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fa5dd1fa8acf49b2a73e67b073545043&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        //     this.setState({ loading: true });
        //     let data = await fetch(url);
        //     let parsedData = await data.json();
        //     this.setState({
        //         articles: parsedData.articles,
        //         page: this.state.page + 1,
        //         loading: false
        //     });
        this.setState({ page: this.state.page + 1 });
        this.update();
    }


render(){
    return (
        <>
            <div className='container my-3'>
                <h2 className='text-center'>NewzApp - Top Headlines</h2>
                {this.state.loading && <Spinner />}
                <div className='row my-4'>
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4 col-lg-3" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""}
                                imageurl={element.urlToImage ? element.urlToImage : "https://images.moneycontrol.com/static-mcnews/2023/12/marketup_sensexup-Niftyup-770x433.jpg"} newsurl={element.url}
                                author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
            </div >

            <div className="container d-flex justify-content-between my-3">
                <button disabled={this.state.page <= 1} type="button" className="btn btn-dark px-3" onClick={this.handlePrevClick}>&larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark px-3" onClick={this.handleNextClick}>Next &rarr;</button>
            </div>
        </>
    );
};
}


export default News;
