import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageurl, newsurl, author, date, source } = this.props;
        return (
            <div>
                <div className="card my-3" style={{/*width: "20rem"*/}}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }}>
                    <span className='badge rounded-pill bg-danger' style={{left: '90%', zIndex: '1'}}>{source}</span>
                    </div>
                    <img src={imageurl} className="card-img-top" alt="..."/>
                        <div className="card-body px-2" >
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className='card-text'><small className='text-muted'> By {author ? author:"Unknown " } On {new Date(date).toGMTString()}</small></p>
                            <a href={newsurl} rel="noreferrer" target='_blank' className="btn btn-dark">Read More...</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem