import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { retrieveCats } from './catSlice';
import './Cat.css'

const Cat = () => {
  const cats = useSelector(state => state.cat.cats);
  const loading = useSelector(state => state.cat.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveCats())
  }, [])

  console.log(cats)

  const catImages = cats.map(cat => 
    <div style={{
      display: 'flex',
      backgroundColor: '#dedede',
      borderRadius: '10px',
      padding: '20px',
      width: '60%',
      marginBottom: '10px'
    }}>
      <img
        style={{
          height: '150px',
          width: '150px',
          objectFit: 'cover',
          marginRight: '20px'
        }}
        src={cat.image.url}
      />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
      }}>
        <b>Breed: {cat.name}</b>
        <b>Temperament: {cat.temperament}</b>
        <span>Description: {cat.description}</span>
      </div>
    </div>
  )

  return (
    loading ? 
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div class="loader">Loading...</div>
    </div>
    :
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {catImages}
    </div>
  )
}

export default Cat