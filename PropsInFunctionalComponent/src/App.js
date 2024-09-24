import "./styles.css";

export const Card = ({name, about }) => (
  <div className="card">
    <h3>Name: {name}</h3>
    <span>About: {about}</span>
    {/* {img && <img src={img} alt={name} />} */}
  </div>
);

export default function App() {
  return <Card 
  name="Pranav"
  about="Hi, My name is Pranav Yeole"
  // img="https://res.cloudinary.com/dl26pbek4/image/upload/v1672730644/cn-questions/Capture_vccm5v.png"
  />;
}
