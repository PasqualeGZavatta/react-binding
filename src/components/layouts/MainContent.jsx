import ButtonChangeLanguage from "../ui/ButtonChangeLanguage";
import ButtonChangeStyle from "../ui/ButtonChangeStyle";
import Counter from "../ui/Counter";
import Lista from "../ui/Lista";
import TextAlign from "../ui/TextAlign";

export default function MainContent() {
    return (
        <>
            <Counter />
            <hr />
            <ButtonChangeStyle />
            <hr />
            <TextAlign />
            <hr />
            <ButtonChangeLanguage />
            <hr />
            <Lista />
        </>
    )
}