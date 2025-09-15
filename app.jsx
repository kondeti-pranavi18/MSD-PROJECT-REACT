import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import './components/Main.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '50px',
          alignItems:'center',
          justifyContent:'center'
        }}
      >

      <div className='main'>

      <Main image="https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg" name="Taj Mahal" desc="Home to the majestic Taj Mahal."/>
      <Main image="https://www.worldtribune.org/wp-content/uploads/sites/2/2024/01/GettyImages-1191232894.jpg" name="Jaipur" desc="The Pink City of royal heritage."/>
      <Main image="https://imgcld.yatra.com/ytimages/image/upload/v1517481987/AdvNation/ANN_DES67/ann_top_Goa_loQGrP.jpg" name="Goa" desc="Famous for beaches and nightlife."/>


      <Main image="https://storage.googleapis.com/stateless-www-justwravel-com/2024/11/b062cce8-top-10.jpg" name="Kerala" desc="Backwaters and lush green landscapes."/>
      <Main image="https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2024/01/15134114/kashmir-deepanshu-nayak-1600x900.jpeg" name="Kashmir" desc="Paradise on Earth with snow peaks."/>
      <Main image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg/1200px-Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg" name="Varanasi" desc="The spiritual capital of India."/>
      
      <Main image="https://i.ytimg.com/vi/5VvjxmbWeKk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBibMI18pG7EyKV0F_MbNk_0_T3cg" name="Manali" desc="Perfect hill station for adventure."/>
      <Main image="https://grandholidayparkvacation.com/uploads/62208357b184e_1646297943.jpg" name="Ladakh" desc="High-altitude desert with monasteries."/>
      <Main image="https://www.stayvista.com/blog/wp-content/uploads/2024/09/Hampi_karnataka.jpg" name="Hampi" desc="Ancient ruins and temples await."/>

      <Main image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Buddha_statue_at_Buddha_Park_of_Ravangla%2C_Sikkim%2C_India_%281%29.jpg/1200px-Buddha_statue_at_Buddha_Park_of_Ravangla%2C_Sikkim%2C_India_%281%29.jpg" name="Sikkim" desc="Himalayan beauty and Buddhist culture."/>
      <Main image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F7xZ48abwAAgNst.jpg/960px-F7xZ48abwAAgNst.jpg" name="Mumbai" desc="The city that never sleeps."/>
      <Main image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Trayambakeshwar_Temple_VK.jpg/1200px-Trayambakeshwar_Temple_VK.jpg" name="Rishikesh" desc="Yoga, river rafting, and peace."/>
      </div>
      </div>
    </>
  )
}

export default App
