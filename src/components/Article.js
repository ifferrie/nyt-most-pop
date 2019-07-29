import React from 'react'

const Article = ({ data }) => {
  const media = data['media'][0]['media-metadata'][1]
  return (
    <div className="col-2 card-block">
      <div className="card" style={{width: '18rem'}}>
        <img src={media.url} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.abstract}</p>
          <a href={data.url} className="btn btn-light">Read more</a>
        </div>
      </div>
    </div>
  )
}

export default Article
