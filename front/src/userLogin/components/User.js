import '../css/User.css'

function User(props) {
    const { item } = props
    return (
        <div className='user'>
            <div className='numeUtilizator'>{item.numeUtilizator}</div>
            <div className='emailUtilizator'>{item.emailUtilizator}</div>
            <br></br>
        </div>
    )
}
export default User