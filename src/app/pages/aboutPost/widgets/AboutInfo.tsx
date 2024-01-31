import { useSelector } from "react-redux";
import './About.scss'
import { Link } from "react-router-dom";

interface SelectedPost {
  [x: string]: any;
  id: number;
  title: string;
  body: string;
}


const AboutInfo = () => {
  const selected = useSelector((state: SelectedPost) => state.selectedPost.value);
  console.log(selected)
  return (
    <div>

      <div className='infoPost'>
        <div className="IdAndBtn">
          <div className="infoId">Пост № {selected.id}</div>
          <Link to="/"><button className="back">Назад</button></Link>
        </div>

        <div className='infoTitle'>Title: {selected.title}</div>
        <div className='infoBody'>
          {selected.body}
        </div>
      </div>
    </div>
  )
}

export default AboutInfo
