import Input from "../UI/Input/Input.tsx";
import Button from "../UI/Button/Button.tsx";

const UpdateForm = () => {
    return (
        <form className={"form"}>
            <Input placeholder={"Title"}/>
            <Input placeholder={"Img"}/>
            <Input placeholder={"Link"}/>
            <Input placeholder="Category"/>
            <div className={"form-btn"}>
                <Button>Delete</Button>
                <Button>Update</Button>
            </div>
        </form>
    );
};

export default UpdateForm;