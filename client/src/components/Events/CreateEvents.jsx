import React from 'react'

const CreateEvents = () => {
  return (
    <div>
        <div style={{display : 'flex', justifyContent: 'center', marginTop :'5rem' , marginBottom: '5rem'}}>
    <form className="form">
       <p className="form-title">Event Creation</p>
        <div className="input-container">
          <input style={{width:'22rem'}} placeholder="Event Title" type="text" />
      </div>

      <div className="input-container">
          <input style={{width:'22rem'}} placeholder="Venue" type="text" />   
        </div>
        <div className="input-container">
          <input style={{width:'22rem'}} placeholder="Latitude" type="number" />   
        </div>
        <div className="input-container">
          <input style={{width:'22rem'}} placeholder="Longitude" type="number" />   
        </div>
      <div className="input-container">
          <input style={{width:'22rem'}} placeholder="Description" type="text" />   
        </div>

        <div className="input-container">
          <input style={{width:'22rem'}} type="date" />   
        </div>

        <div className="input-container" style={{marginBottom:'10px'}}>
          <input style={{width:'22rem'}} placeholder="Organizer name" type="text" />   
        </div>

        <div className="input-container">
            <label >
                Upload Image
            </label>
            <input style={{width:'22rem'}} type="file"/>   
        </div>

         <button class="submit" type="submit">
        Create Event
      </button>

   </form>
</div>
    </div>
  )
}

export default CreateEvents