import React from 'react'
import './Body.css'



export default function Body() {

  const [memeImage, setMemeImage] = React.useState({
    topText: '',
    bottonText: '',
    randomImage: ''
  })

  const [allMemes, setAllMemes] = React.useState([])

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes))
  }, [])

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMemeImage((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }))
  }


  const [formData, setFormData] = React.useState({
    topText:"",
    bottomText:""
  })

  function handleChange(event)
  {
    setFormData(preValue =>
    ({
       ...preValue,
       [event.target.name]:event.target.value
    }))
  }

  function onSubmit(event)
  {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="form--input">
        <div className="display">
          <input
            type="text"
            placeholder="Top text"
            className="one"
            name="topText"
            value={formData.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Bottom text"
            className="two"
            name="bottomText"
            value={formData.bottomText}
            onChange={handleChange}
          />
        </div>
        <div className="form--button">
          <button className="button" onClick={getMemeImage}>
            Get a new meme image 🖼
          </button>
        </div>
      </form>
      <div className="meme">
        <img
          src={memeImage.randomImage}
          alt=""
          className="img"
        />
        <h2 className="meme--text top">{formData.topText}</h2>
        <h2 className="meme--text bottom">{formData.bottomText}</h2>
      </div>
    </div>
  )
}
