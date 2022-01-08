import './Card.css';

export default function Card(props) {
  return (
    <a className="box" href={props.path} rel="noreferrer" target="_blank">
      <video className="videoBox" autoPlay loop muted >
        <source src={props.src} type="video/mp4" />
      </video>
      <div className="textBox">
        <div className="text">
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </a>
  );
}