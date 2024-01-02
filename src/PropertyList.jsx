import Property from "./Property";
export default function PropertyList({ properties }) {
    const styles = {
        propertyContainer: {
          color:'green',
          display:'flex',
          flexDirection:'row',
          gap:'50px',
        },
      };
  return(
  <div style={styles.propertyContainer}>
    {properties.map((property)=> (
        <Property   
        key={property.id}
        id={property.id}
        name={property.name}
        rating={property.rating}
        price={property.price} />
    ))}


  </div>
  )
}
