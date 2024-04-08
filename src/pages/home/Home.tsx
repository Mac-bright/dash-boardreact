import Chartbox from '../../components/chatBox/Chartbox'
import Topbox from '../../components/topbox/Topbox'
import './home.scss'

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <Topbox/>
      </div>
      <div className="box box2"><Chartbox/></div>
      <div className="box box3"><Chartbox/></div>
      <div className="box box4"><Chartbox/></div>
      <div className="box box5"><Chartbox/></div>
      <div className="box box6">box6</div>
      <div className="box box7">box7</div>
      <div className="box box8">box8</div>
      <div className="box box9">box9</div>
    </div>
  )
}

export default Home