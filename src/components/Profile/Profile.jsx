import { useSelector } from "react-redux";
import './Profile.styles.scss'
import { Card, Space } from "antd";

const {Meta} = Card

const Profile = () => {
    const { user } = useSelector((state) => state.auth);
    return (
    <>
   
    <div className="profile__container">
    <h1>Profile</h1>
      <div className="profile__container-card">
      <Card
    style={{ width: 300 }}
    className="profile__card"
    cover={
      <img
        alt="photo"
        src={user.image}
        className="releases__img"
        style={{height: 300}}
        />}
      >
        <Meta
        title={user.name}
        description={user.email}
        />
    </Card>
    </div>
    </div>
    </>
    );

};

export default Profile;