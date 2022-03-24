import React from 'react'

const Card = ({avatar_url,following,followers,name,public_repos}) => {
  return (
    <div>
      <section>
      <div>
          <img src={avatar_url} alt="" />
      </div>
      <div>
        <h3>Name:{name}</h3>
        <h3>Followers: {followers}</h3>
        <h3>Following: {following} </h3>
        <h3>Public_repo: {public_repos} </h3>
      </div>
      </section>
    </div>
  )
}

export default Card
