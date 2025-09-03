// Component ย่อยๆ
const Avatar = () => (
    <img 
        src="https://images.trvl-media.com/lodging/60000000/59360000/59353600/59353580/8fb1247b.jpg?impolicy=resizecrop&rw=1200&ra=fit" 
        alt="User Avatar"
        style={{
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            border: '2px solid #667eea'
        }}
    />
);

const UserName = () => (
    <h3 style={{ color: '#e294ecff', margin: '10px 0' }}>
        Napasorn Phetsiri
    </h3>
);

const UserBio = () => (
    <p style={{ color: '#666', fontSize: '14px' }}>
        นักพัฒนา React มือใหม่ที่กำลังเรียนรู้
    </p>
);

// Component หลักที่ประกอบจาก components ย่อย
const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            maxWidth: '300px',
            margin: '20px auto'
        }}>
            <Avatar />
            <UserName />
            <UserBio />
        </div>
    );
};

export default UserCard;