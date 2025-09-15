import './Main.css';

export default function Main(props) {
    return(
      <>

          <div className='div'>
            <img src={props.image} className='img'
            style={{ width: '350px', borderRadius: '8px', height: '350px', display: 'flex', gap:'20px'}}
            />
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
          </div>

        
      
      </>
    )
}
