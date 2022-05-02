import { useParams } from "react-router-dom"

export default function Profile() {

    const { name } = useParams();

    return(
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "90vh "}}>
            <h1>{name} Profile</h1>
        </div>
    )
};
