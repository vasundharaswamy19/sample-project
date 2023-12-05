const Card = ({name,origin,image}) => {

return (

 <div className="col-md-3 mb-4">
    <div className="card">
    <img src={image} alt={name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{origin}</p>
      </div>
    </div>
 </div>
 
);

}

export default Card;