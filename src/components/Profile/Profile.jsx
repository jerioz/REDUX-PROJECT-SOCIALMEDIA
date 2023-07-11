import { useSelector } from "react-redux";
import './Profile.styles.scss'
import { Card, Space } from "antd";

const Profile = () => {
    const { user } = useSelector((state) => state.auth);
    return (
    <>
    <div className="profile__container">
      <h1>Profile</h1>
      <Space direction="vertical" size={16}>
        <Card className="profile__card"
        cover={
            <img
              alt="photo"
              src={user.image}

              style={{height: 300}}
              />}
        title={user.name}
        style={{
        width: 300,
        }}
        
      >
        <p>{user.email}</p>
            <p>{user.age}</p>
        </Card>
      </Space>
    </div>
    </>
    );

};

export default Profile;