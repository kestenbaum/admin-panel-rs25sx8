import Input from "../UI/Input/Input.tsx";
import Button from "../UI/Button/Button.tsx";

const CreateForm = () => {
    return (
        <form className={"form"}>
            <Input placeholder={"Title"}/>
            <Input placeholder={"Img"}/>
            <Input placeholder={"Link"}/>
            <Input placeholder="Category"/>
            <div className={"form-btn"}>
                <Button>Create</Button>
            </div>
        </form>
    );
};

export default CreateForm;