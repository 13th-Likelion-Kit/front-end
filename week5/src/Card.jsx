import App from "./App";

const Card = ({name}) => {
    return(
        <div class="profile">
            <img src="./profile_img.png" alt="" />
            <div>
            <h2>{name}</h2>
            <p>컴퓨터공학과</p>
            <p>20230809</p>
            </div>
        </div>
    )
}

export default Card;